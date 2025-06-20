FROM node:22-alpine

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci

# アプリケーションのソースをコピー
COPY . .

# 開発サーバーを起動
EXPOSE 3000
CMD ["npm", "run", "dev"]