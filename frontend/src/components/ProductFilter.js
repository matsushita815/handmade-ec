export default function ProductFilter() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">Filter Products</h2>
      <div className="flex flex-col space-y-2">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Show Available Products
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Show Out of Stock Products
        </label>
      </div>
    </div>
  );
}