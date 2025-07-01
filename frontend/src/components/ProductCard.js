import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, priority = false }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
  }).format(price);
  };

  const getStockStatus = (stock) =>{
    if (stock === 0) return { status: '在庫なし', color: 'text-red-600' };
    if (stock <= 5) return { status: '残りわずか', color: 'text-orange-600' };
    return { status: '在庫あり', color  : 'text-green-600' };
  };

  const stockStatus = getStockStatus(product.stock);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <Link href={`/products/${product.id}`} className="block p-4">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
          { product.images && product.images.length > 0 ? (
            <Image 
              src={product.images[0].url}
              alt={product.name}
              width={300}
              height={300}
              priority={priority}
              className="h-48 w-full object-cover object-center group-hover:opacity-75"
            />
          ) : (
            <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
              <svg
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
          
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </p>
              <p className={`text-sm ${stockStatus.color}`}>
                {stockStatus.text}
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-sm text-gray-500">
                在庫: {product.stock}個
              </p>
            </div>
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <button
          disabled={product.stock === 0}
          className={`w-full py-2 px-4 rounded-md text-sm font-medium transition-colors duration-200 ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {product.stock === 0 ? '在庫切れ' : 'カートに追加'}
        </button>
      </div>

    </div>
  );
}