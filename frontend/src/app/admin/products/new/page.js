'use client';

import { useState } from "react";

export default function NewProductPage() {
  // フォームデータを管理するstate
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: '',
    images: [''], // 画像は後で追加するための初期値
  });

  // フォームの変更
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 画像の変更
  const handleImageChange = (index, e) => {
    const newImages = [...formData.images];
    newImages[index] = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      images: newImages,
    }));
  };

  // 画像の追加
  const addImageField = () => {
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ''],
    }));
  };

  // 画像の削除
  const removeImageField = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      images: newImages.length > 0 ? newImages : [''], // 最低1つの画像フィールドを保持
    }));
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">新しい商品の追加</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        {/* 商品名 */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            商品名
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* 商品説明 */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">説明:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        {/* 価格 */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">価格:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            min="0"
          />
        </div>

        {/* 在庫 */}
        <div className="mb-4">
          <label htmlFor="stock" className="block text-gray-700 text-sm font-bold mb-2">在庫:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            min="0"
          />
        </div>
        {/* カテゴリー */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">カテゴリ:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {/* 画像 */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">画像URL:</label>
          {formData.images.map((image, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="url"
                value={image}
                onChange={(e) => handleImageChange(index, e)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                placeholder={`画像URL ${index + 1}`}
              />
              {formData.images.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeImageField(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                  削除
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            画像URLを追加
          </button>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            商品を登録
          </button>
        </div>
      </form>
    </div>  
  );
}
