'use client';

import { useState, useEffect } from "react"; 
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import Loading from "@/components/Loading";

export default function Home() {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  const [ filters, setFilters ] = useState({
    category: '',
    search: '',
    min_price: '',
    max_price: '',
  });

  const fetchProducts = async (page = 1) => {
    setLoading(true);
    try {
      // 空文字のフィルターは除外してクエリ文字列を構築
      const params = new URLSearchParams({
        page: page,
        ...Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== '')
        )
      });

      // APIから商品データを取得
			const url = `/api/products?${params}`;;

    	const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			console.log('Received data:', data); // デバッグ用      
			
			setProducts(data.data);
      setCurrentPage(data.current_page);
      setTotalPages(data.last_page);
    } catch (error) {
      console.error('商品データの取得に失敗しました:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async() => {
    try {
			const url = `api/categories`;
			
			const response = await fetch(url);
			
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			console.log('Received categories:', data); // デバッグ用

			setCategories(data);
		} catch (error) {
			console.error('カテゴリーの取得に失敗しました:', error);
		};
  }

  // 初回レンダリング
  useEffect(() => {
    fetchCategories();
  }, []);

  // 商品フィルターの変更時に商品を再取得
  useEffect(() => {
    fetchProducts(1); // ページを1にリセット
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePageChange = (page) => {
    fetchProducts(page);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">商品一覧</h1>
            <p className="text-gray-600">お気に入りの商品を見つけてください</p>
          </div>

          {/* フィルター */}
          <div className="mb-8">
            <ProductFilter 
              categories={categories}
              filters={filters}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* 商品一覧 */}
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {products.map((product, index) => (
                  <ProductCard key={product.id} product={product} priority={index < 6} />
                ))}
              </div>

              {/* 商品が見つからない場合 */}
              {products.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">商品が見つかりませんでした</p>
                </div>
              )}

              {/* ページネーション */}
              {totalPages > 1 && (
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    前へ
                  </button>
                  
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + Math.max(1, currentPage - 2);
                    return page <= totalPages ? (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium ${
                          currentPage === page
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'text-gray-700 bg-white border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ) : null;
                  })}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    次へ
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>   
    </>
  );
}
