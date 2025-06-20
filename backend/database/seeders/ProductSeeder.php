<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [
            [
                'name' => '手編みウールマフラー',
                'description' => '100%ウール使用。温かくて肌触りの良いマフラーです。冬の必需品として、また贈り物としても人気です。',
                'price' => 3500.00,
                'stock' => 15,
                'category' => 'ファッション',
                'images' => [
                    'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500',
                    'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'ハンドメイド陶器マグカップ',
                'description' => '一つ一つ手作りで焼き上げた温かみのあるマグカップ。毎日のコーヒータイムを特別なものにします。',
                'price' => 2800.00,
                'stock' => 8,
                'category' => '食器・キッチン',
                'images' => [
                    'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500',
                    'https://images.unsplash.com/photo-1563379091919-8bcd0d3c0463?w=500'
                ],
                'is_active' => true,
            ],
            [
                'name' => '木製アクセサリースタンド',
                'description' => '天然木を使用した美しいアクセサリースタンド。お気に入りのジュエリーを美しく収納できます。',
                'price' => 4200.00,
                'stock' => 5,
                'category' => 'インテリア',
                'images' => [
                    'https://images.unsplash.com/photo-1506629905107-675bda777fb4?w=500'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'レザーハンドバッグ',
                'description' => '本革を使用したシンプルで上品なハンドバッグ。日常使いからちょっとしたお出かけまで活躍します。',
                'price' => 12000.00,
                'stock' => 3,
                'category' => 'ファッション',
                'images' => [
                    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500'
                ],
                'is_active' => true,
            ],
            [
                'name' => 'アロマキャンドルセット',
                'description' => '天然素材のみを使用したアロマキャンドル3個セット。リラックスタイムにおすすめです。',
                'price' => 2500.00,
                'stock' => 20,
                'category' => 'リラクゼーション',
                'images' => [
                    'https://images.unsplash.com/photo-1602874801006-e24aa6a25095?w=500'
                ],
                'is_active' => true,
            ],
            [
                'name' => '押し花しおり',
                'description' => '本物の花を使った美しい押し花しおり。読書のお供に、またギフトとしても喜ばれます。',
                'price' => 800.00,
                'stock' => 30,
                'category' => '文具・雑貨',
                'images' => [
                    'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500'
                ],
                'is_active' => true,
            ]
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
