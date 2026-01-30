import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    const request = await fetch(
      "https://gist.githubusercontent.com/nodi1986/a5462c17460f3b3ed296dab6e257328f/raw/ed58cca7608585d2f7c8fea639964436c9425b77/gistfile1.txt"
    );
    const data = await request.json();
    const found = data.find((item) => item.id === parseInt(id));
    setProduct(found);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Loading product...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-20">
      
     
      

   
      <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        
       
        <div className="md:w-1/2 flex flex-col gap-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full max-h-[500px] object-contain rounded-xl shadow-md"
          />
      
          <div className="flex gap-3 mt-2">
            <img src={product.image} className="w-20 h-20 object-contain rounded-xl border p-1" />
            <img src={product.image} className="w-20 h-20 object-contain rounded-xl border p-1" />
            <img src={product.image} className="w-20 h-20 object-contain rounded-xl border p-1" />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

          
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-gray-900">{product.price.toLocaleString()} ₽</p>
            <p className="text-gray-400 line-through text-lg">{product.oldPrice.toLocaleString()} ₽</p>
            <span className="bg-red-100 text-red-500 px-2 py-1 rounded font-semibold text-sm">
              −{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          </div>

        
          <div className="flex flex-col gap-1 text-gray-600 text-sm">
            <p>Brand: <span className="font-semibold">{product.brand}</span></p>
            <p>Category: <span className="font-semibold">{product.category}</span></p>
            <p>Rating: <span className="font-semibold">⭐ {product.rating}</span></p>
          </div>

         
          <div className="bg-gray-50 p-4 rounded-xl flex flex-col gap-2 text-sm text-gray-700">
            <p>🚚 Tez yetkazib berish: 1 kun ichida</p>
            <p>📦 Omborda mavjud</p>
            <p>💳 Bolib tolash mumkin</p>
            <p>↩️ 7 kun ichida qaytarish</p>
          </div>

        
          <div>
            <h2 className="text-lg font-semibold mb-2">Mahsulot haqida</h2>
            <p className="text-gray-600 leading-relaxed">
              Ushbu mahsulot zamonaviy dizayn va yuqori sifatni o‘zida mujassam etgan. 
              Har bir detal professional tarzda ishlab chiqilgan va kundalik hayotda qulay foydalanish imkonini beradi.
              Materiallar ekologik toza va uzoq muddat xizmat qilishi kafolatlangan.
            </p>
          </div>

         
          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-xl font-semibold transition">
              Savatga qo‘shish
            </button>
            <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
              Xarid qilish
            </button>
          </div>

        </div>
      </div>

    
      <div className="mt-10 bg-white rounded-3xl p-8 shadow-md flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-800">Texnik tavsif</h2>
        <table className="w-full text-sm border rounded-xl overflow-hidden">
          <tbody>
            <tr className="border-b"><td className="p-3 bg-gray-50">Brand</td><td className="p-3">{product.brand}</td></tr>
            <tr className="border-b"><td className="p-3 bg-gray-50">Model</td><td className="p-3">{product.name}</td></tr>
            <tr className="border-b"><td className="p-3 bg-gray-50">Category</td><td className="p-3">{product.category}</td></tr>
            <tr className="border-b"><td className="p-3 bg-gray-50">Price</td><td className="p-3">{product.price.toLocaleString()} ₽</td></tr>
            <tr className="border-b"><td className="p-3 bg-gray-50">Old Price</td><td className="p-3">{product.oldPrice.toLocaleString()} ₽</td></tr>
            <tr className="border-b"><td className="p-3 bg-gray-50">Rating</td><td className="p-3">{product.rating}</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ProductPage;
