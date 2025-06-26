<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create('ja_JP'); // 日本語のダミーデータを生成

        $categories = [
            'ファッション',
            '食器・キッチン',
            'インテリア',
            'リラクゼーション',
            '文具・雑貨',
            'アクセサリー',
            'ベビー・キッズ',
            'アート・デザイン',
            '食品・飲料',
            'ペット用品',
        ];

        // 50件のダミーデータを生成
        for ($i = 0; $i < 50; $i++) {
            Product::create([
                'name' => $faker->unique()->word . $faker->word . ' (' . $faker->randomElement(['限定品', '新作', '人気']) . ')',
                'description' => $faker->realText(200),
                'price' => $faker->randomFloat(2, 500, 15000), // 500円から15000円の範囲で価格を生成
                'stock' => $faker->numberBetween(1, 50), // 1から50の範囲で在庫を生成
                'category' => $faker->randomElement($categories), // 定義したカテゴリーからランダムに選択
                'images' => [
                    'https://picsum.photos/400/300?' . $faker->unique()->randomNumber(5), // ランダムな画像URL
                    'https://picsum.photos/400/300?' . $faker->unique()->randomNumber(5),
                ],
                'is_active' => $faker->boolean(90), // 90%の確率でtrue
            ]);
        }
    }
}
