import { useState } from "react";

export default function ProductFilter({ categories, filters, onFilterChange }) {
  const [localFilters, setLocalFilters] = useState(filters);
  
  const handleInputChange = (key, value) => {
    const newFilters = {
      ...localFilters,
      [key]: value,
    };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  }

  const handleReset = () => {
    const resetFilters = {
      search: '',
      category: '',
      min_price: '',
      max_price: '',  
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex flex-wrap gap-4 items-end">
        {/* 検索キーワード */}
        <div className="flex-1 min-w-60">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            検索キーワード
          </label>
          <input
            type="text"
            id="search"
            placeholder="商品名で検索..."
            value={localFilters.search}
            onChange={(e) => handleInputChange('search', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* カテゴリフィルター */}
        <div className="min-w-48">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            カテゴリ
          </label>
          <select
            id="category"
            value={localFilters.category}
            onChange={(e) => handleInputChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">すべてのカテゴリ</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* 最低価格 */}
        <div className="min-w-36">
          <label htmlFor="min_price" className="block text-sm font-medium text-gray-700 mb-1">
            最低価格
          </label>
          <input
            type="number"
            id="min_price"
            placeholder="0"
            min="0"
            value={localFilters.min_price}
            onChange={(e) => handleInputChange('min_price', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* 最高価格 */}
        <div className="min-w-36">
          <label htmlFor="max_price" className="block text-sm font-medium text-gray-700 mb-1">
            最高価格
          </label>
          <input
            type="number"
            id="max_price"
            placeholder="999999"
            min="0"
            value={localFilters.max_price}
            onChange={(e) => handleInputChange('max_price', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* リセットボタン */}
        <div>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200"
          >
            リセット
          </button>
        </div>
      </div>

      {/* アクティブなフィルターの表示 */}
      <div className="mt-4 flex flex-wrap gap-2">
        {localFilters.category && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
            カテゴリ: {localFilters.category}
            <button
              onClick={() => handleInputChange('category', '')}
              className="ml-2 text-blue-600 hover:text-blue-800"
            >
              ×
            </button>
          </span>
        )}
        {localFilters.search && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
            検索: {localFilters.search}
            <button
              onClick={() => handleInputChange('search', '')}
              className="ml-2 text-green-600 hover:text-green-800"
            >
              ×
            </button>
          </span>
        )}
        {localFilters.min_price && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
            最低価格: ¥{localFilters.min_price}
            <button
              onClick={() => handleInputChange('min_price', '')}
              className="ml-2 text-purple-600 hover:text-purple-800"
            >
              ×
            </button>
          </span>
        )}
        {localFilters.max_price && (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800">
            最高価格: ¥{localFilters.max_price}
            <button
              onClick={() => handleInputChange('max_price', '')}
              className="ml-2 text-orange-600 hover:text-orange-800"
            >
              ×
            </button>
          </span>
        )}
      </div>
    </div>
  );
}