export default function Loading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
          {/* 画像スケルトン */}
          <div className="h-64 bg-gray-300"></div>
          
          {/* コンテンツスケルトン */}
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-300 rounded mb-4 w-3/4"></div>
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 bg-gray-300 rounded w-20"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 h-10 bg-gray-300 rounded"></div>
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}