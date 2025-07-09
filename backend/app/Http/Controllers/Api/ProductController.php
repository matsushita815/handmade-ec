<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Http\Resources\ProductResource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query= Product::where('is_active', true);

        // カテゴリでフィルタリング
        if ($request->has('category')) {
            $query->where('category', $request->input('category'));
        }
        // 検索キーワードでフィルタリング
        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->input('search') . '%');
        }
        //価格でフィルタリング
        if ($request->has('min_price')) {
            $query->where('price', '>=', $request->input('min_price'));
        }
        if ($request->has('max_price')) {
            $query->where('price', '<=', $request->input('max_price'));
        }

        $products = $query->orderBy('id', 'asc')->paginate(12);

        // 画像のURLを整形
        $products->getCollection()->transform(function ($product) {
            if (is_array($product->images)) {
                $product->images = array_map(function ($image) {
                    return ['url' => $image];
                }, $product->images);
            }
            return $product;
        });

        return ProductResource::collection(Product::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        // 商品の作成
        $product = Product::create($request->validated());

        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        if (is_array($product->images)) {
            $product->images = array_map(function ($image) {
                return ['url' => $image];
            }, $product->images);
        }

        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->vaildated());

        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product): JsonResponse
    {
        $product->delete();

        return response()->json(['message' => 'Product deleted successfully']);
    }

    public function categories(): JsonResponse
    {
        // カテゴリの一覧を取得
        $categories = Product::select('category')
            ->distinct()
            ->pluck('category');

        return response()->json($categories);
    }
}
