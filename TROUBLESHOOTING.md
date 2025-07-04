## トラブルシューティング

### 現象

フロントエンドのコンテナ(`handmade-frontend`)が正常に起動せず、`Module not found: Can't resolve 'lucide-react'`のようなエラーがブラウザのコンソールやコンテナのログに表示される。

### 原因と解決策

この問題の根本的な原因は、`backend/docker-compose.yml`で定義されているDockerの**ボリュームマウント設定**にありました。以下にその詳細と解決策を記します。

#### なぜボリュームの除外指定が機能しなかったのか？

当初、以下のようなボリューム設定がされていました。

```yaml
# 問題のあった設定
volumes:
  - '../frontend:/app'      # ホストのディレクトリ全体をマウント
  - '/app/node_modules'     # node_modulesを除外する意図の記述
```

この設定が期待通りに機能しない理由は、Dockerのビルド時と実行時の処理順序と、バインドマウントの性質にあります。

1.  **ビルド時 (`docker build`)**: `Dockerfile`の`RUN npm ci`により、コンテナの**イメージ内**には`/app/node_modules`が正しく作成されます。
2.  **実行時 (`docker-compose up`)**: 
    - まず、`volumes`の`- '../frontend:/app'`（バインドマウント）が適用されます。これにより、ホスト側（`node_modules`が存在しない）の`frontend`ディレクトリが、コンテナ内の`/app`ディレクトリを完全に上書きします。この時点で、ビルド時に作成された`/app/node_modules`は隠されてしまいます。
    - 次に、`- '/app/node_modules'`の記述が評価されますが、元となるべきイメージ内の`node_modules`が既に隠されているため、結果として空のボリュームがマウントされてしまいます。

**記述順序を入れ替えても解決しない理由:**

たとえ`volumes`の記述順序を`- '/app/node_modules'`を先にしたとしても、その後に続く`- '../frontend:/app'`というバインドマウントが、コンテナの`/app`ディレクトリ全体をホストの`../frontend`の内容で「覆い隠してしまう」ため、結果は同じになります。バインドマウントは、コンテナ内の既存のコンテンツを直接「隠す」または「上書きする」性質を持つため、この問題が発生します。

これが、コンテナ起動後に依存関係が見つからずにクラッシュしていた原因です。

#### 最終的な解決策

この問題を解決するため、ホストのディレクトリ全体をマウントするのをやめ、**開発に必要なディレクトリと設定ファイルだけを個別にマウントする**方式に変更しました。

```yaml
# 現在の正しい設定
volumes:
    - '../frontend/src:/app/src'
    - '../frontend/public:/app/public'
    - '../frontend/package.json:/app/package.json'
    - '../frontend/package-lock.json:/app/package-lock.json'
    - '../frontend/next.config.mjs:/app/next.config.mjs'
    - '../frontend/postcss.config.mjs:/app/postcss.config.mjs'
    - '../frontend/jsconfig.json:/app/jsconfig.json'
    - '../frontend/eslint.config.mjs:/app/eslint.config.mjs'
    - '/app/node_modules' # コンテナ内のnode_modulesを維持するための名前なしボリューム
    - '/app/.next'      # コンテナ内の.nextを維持するための名前なしボリューム
```

この設定により、コンテナの`/app`ディレクトリ自体はイメージビルド時の状態が維持されるため、`node_modules`が消えることはありません。その上で、`src`などの開発に必要なディレクトリだけがホストと同期されるため、ホットリロードも問題なく機能します。
