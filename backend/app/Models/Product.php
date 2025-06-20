<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'stock',
        'category',
        'images',
        'is_active',
    ];

    protected $casts = [
        'images' => 'array',
        'price' => 'decimal:2',
        'is_active' => 'boolean',
    ];

    // 在庫チェック
    public function hasStock($quantity = 1) {
        return $this->stock >= $quantity;
    }

    // 在庫減少
    public function decreaseStock($quantity) {
        if(!$this->hasStock($quantity)) {
            throw new \Exception('Insufficient stock');
        }
        $this->stock -= $quantity;
        $this->save();
    }

}
