'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${id}`);
          if (!response.ok) {
            throw new Error('ネットワークの応答が正常ではありませんでした');
          }
          const data = await response.json();
          setProduct(data);
        } catch (error) {
          console.error('商品の取得に失敗しました:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center mt-10">商品が見つかりません</div>;
  }

  console.log('Product data:', product); // デバッグ用
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {product.images && product.images.length > 0 ? (
            <>
              <img
                src={product.images[selectedImageIndex].url}
                alt={product.name}
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                      index === selectedImageIndex ? 'border-2 border-blue-500' : 'border-2 border-transparent'
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-4">¥{product.price.toLocaleString()}</p>
          <p className="text-gray-700 mb-4">在庫: {product.stock}</p>
          <p className="text-gray-500 mb-6">カテゴリー: {product.category}</p>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">カートに入れる</button>
        </div>
      </div>
    </div>
  );
}
