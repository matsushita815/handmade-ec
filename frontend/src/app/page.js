import Link from 'next/link';
import { ArrowRight, Heart, Star, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              心を込めて作られた
              <br />
              <span className="text-yellow-300">ハンドメイド作品</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              一つ一つ丁寧に作られた、世界に一つだけの作品をお届けします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                作品を見る
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                私たちについて
              </Link>
            </div>
          </div>
        </div>
        
        {/* 装飾的な波 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white fill-current">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              なぜ選ばれるのか
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私たちのハンドメイド作品が多くの方に愛される理由をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                心を込めた手作り
              </h3>
              <p className="text-gray-600">
                一つ一つ丁寧に手作りされた、温かみのある作品をお届けします。機械では作れない、手作りならではの味わいを感じてください。
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                高品質な素材
              </h3>
              <p className="text-gray-600">
                厳選した高品質な素材のみを使用。長く愛用していただける耐久性と美しさを兼ね備えた作品作りにこだわっています。
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                作り手との繋がり
              </h3>
              <p className="text-gray-600">
                作り手の想いやストーリーも一緒にお届け。単なる商品ではなく、作り手との温かい繋がりを感じていただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリー紹介 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              人気のカテゴリー
            </h2>
            <p className="text-xl text-gray-600">
              様々なジャンルのハンドメイド作品をご用意しています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'ファッション',
                description: 'マフラー、バッグ、アクセサリーなど',
                image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop',
                count: '48点'
              },
              {
                name: '食器・キッチン',
                description: '陶器、木製食器、キッチン雑貨',
                image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=300&fit=crop',
                count: '32点'
              },
              {
                name: 'インテリア',
                description: '家具、雑貨、装飾品など',
                image: 'https://images.unsplash.com/photo-1506629905107-675bda777c0e?w=400&h=300&fit=crop',
                count: '25点'
              },
              {
                name: '文房具',
                description: 'ノート、ペンケース、しおりなど',
                image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
                count: '19点'
              },
              {
                name: 'ベビー・キッズ',
                description: 'おもちゃ、衣類、知育グッズ',
                image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop',
                count: '37点'
              },
              {
                name: 'アート',
                description: '絵画、写真、手工芸品など',
                image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
                count: '28点'
              }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.description}</p>
                    <p className="text-xs text-yellow-300 mt-1">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/categories"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              すべてのカテゴリーを見る
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              お客様の声
            </h2>
            <p className="text-xl text-gray-600">
              実際にご購入いただいたお客様からの嬉しいお声をご紹介します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '田中 美咲様',
                product: '手編みのマフラー',
                rating: 5,
                comment: '温かくて肌触りがとても良いです。手作りの温もりを感じられて、毎日愛用しています。プレゼントにも最適だと思います。'
              },
              {
                name: '佐藤 健一様',
                product: '木製の食器セット',
                rating: 5,
                comment: '職人の技術が光る美しい仕上がりで、食事の時間がより楽しくなりました。長く使える品質で、購入して本当に良かったです。'
              },
              {
                name: '山田 花子様',
                product: 'ベビー用おもちゃ',
                rating: 5,
                comment: '子供がとても気に入って遊んでいます。安全な素材で作られているので安心して使えます。作り手の愛情を感じる素敵な作品です。'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">購入商品: {review.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたの特別な一品を見つけませんか？
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            心を込めて作られたハンドメイド作品の中から、
            <br />
            あなたにぴったりの一品をお選びください
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              作品を探す
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">ハンドメイドマーケット</h3>
              <p className="text-gray-300 mb-4">
                心を込めて作られたハンドメイド作品を通じて、
                作り手とお客様をつなぐプラットフォームです。
                一つ一つの作品に込められた想いを大切にし、
                特別な体験をお届けします。
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">作品一覧</Link></li>
                <li><Link href="/categories" className="text-gray-300 hover:text-white transition-colors">カテゴリー</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">私たちについて</Link></li>
                <li><Link href="/sellers" className="text-gray-300 hover:text-white transition-colors">作家紹介</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">サポート</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">お問い合わせ</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">よくある質問</Link></li>
                <li><Link href="/shipping" className="text-gray-300 hover:text-white transition-colors">配送について</Link></li>
                <li><Link href="/returns" className="text-gray-300 hover:text-white transition-colors">返品・交換</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 ハンドメイドマーケット. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}