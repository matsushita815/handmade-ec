'use client';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Star, Users, Brush, Leaf, BookOpen } from 'lucide-react';
import React, { useEffect, useState, useCallback } from 'react';

const heroImages = [
  '/home/hero-1.jpg',
  '/home/hero-2.jpg',
  '/home/hero-3.jpg',
];

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="relative h-screen text-white bg-black">
        {/* Background Images */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
            style={{ zIndex: 0 }}
          >
            <img
              src={src}
              alt={`Hero Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        {/* Text content overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h1 className="text-4xl md:text-6xl font-bold mb-6">
             心を込めて作られた
             <br />
             <span className="text-yellow-300">ハンドメイド作品</span>
           </h1>
           <p className="text-xl md:text-2xl mb-8 text-gray-200">
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

        {/* Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 rounded-full p-2 z-20 hover:bg-opacity-75 transition"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 rounded-full p-2 z-20 hover:bg-opacity-75 transition"
        >
          <ChevronRight size={32} />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentImage === index ? 'bg-white' : 'bg-white/50'}`}
            ></button>
          ))}
        </div>
      </section>

      {/* 物語のあるものづくりセクション */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
            <div className="w-full md:w-1/2">
              <img src="/about/story-main.jpg" alt="物語のあるものづくり" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                すべての作品に、物語を。
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                私たちの作るものには、一つひとつに作り手の想いやインスピレーションの源となったストーリーがあります。それは旅の記憶かもしれませんし、愛する人への贈り物かもしれません。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                単なる「モノ」としてではなく、その背景にある温かい物語も一緒にお届けすることで、あなたの日常がより豊かになることを願っています。
              </p>
              <div className="text-center md:text-left">
                <Link href="/about"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  私たちの物語をもっと知る
                </Link>
              </div>
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
                image: '/categories/fashion.jpg',
                count: '48点'
              },
              {
                name: '食器・キッチン',
                description: '陶器、木製食器、キッチン雑貨',
                image: '/categories/tableware.jpg',
                count: '32点'
              },
              {
                name: 'インテリア',
                description: '家具、雑貨、装飾品など',
                image: '/categories/interior.jpg',
                count: '25点'
              },
              {
                name: '文房具',
                description: 'ノート、ペンケース、しおりなど',
                image: '/categories/stationery.jpg',
                count: '19点'
              },
              {
                name: 'ベビー・キッズ',
                description: 'おもちゃ、衣類、知育グッズ',
                image: '/categories/kids.jpg',
                count: '37点'
              },
              {
                name: 'アート',
                description: '絵画、写真、手工芸品など',
                image: '/categories/art.jpg',
                count: '28点'
              }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-opacity-30 transition-opacity duration-300" />
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

      {/* デザインと素材セクション */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <img src="/about/design-main.jpg" alt="デザインと素材" className="rounded-lg shadow-lg w-full h-auto object-cover aspect-square" />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                デザインと素材への、深いこだわり。
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                トレンドを意識しつつも、ありきたりなデザインで終わらせない。作家一人ひとりの世界観が色濃く反映された、ユニークなデザインが私たちの誇りです。
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                また、作品に使うのは、作り手自らが世界中を旅して見つけ出した、高品質な自然素材のみ。見て、触れて、心から満足していただける品質を追求しています。
              </p>
              <div className="text-center md:text-left">
                <Link href="/products"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  すべての作品を見る
                </Link>
              </div>
            </div>
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