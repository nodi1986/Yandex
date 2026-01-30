import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const KorzinkaPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProduct = async () => {
    try {
      setLoading(true);
      const request = await fetch(
        "https://gist.githubusercontent.com/nodi1986/72b0e948cb06959d2fa5e06b22db8a0a/raw/4a4c06cc83147813a67c064a979bdaa6859696a5/gistfile1.txt"
      );
      const data = await request.json();

      // JSONdagi id string, shuning uchun === id ishlatamiz
      const found = data.find((item) => item.id === id);

      if (!found) {
        setError("Mahsulot topilmadi");
      } else {
        setProduct(found);
      }
    } catch (err) {
      setError("Ma’lumot yuklanmadi");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Loading product...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 md:px-20">
      {/* Mahsulot asosiy karta */}
      <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row gap-8">
        {/* Chap: Rasm */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-h-[500px] object-contain rounded-xl shadow-md"
          />
          <div className="flex gap-3 mt-2">
            <img
              src={product.img}
              className="w-20 h-20 object-contain rounded-xl border p-1"
            />
            <img
              src={product.img}
              className="w-20 h-20 object-contain rounded-xl border p-1"
            />
            <img
              src={product.img}
              className="w-20 h-20 object-contain rounded-xl border p-1"
            />
          </div>
        </div>

        {/* O‘ng: Ma’lumot */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-3xl font-bold text-gray-900">{product.price}</p>

          {/* Mahsulot haqida */}
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
              Har bir detal professional tarzda ishlab chiqilgan va kundalik hayotda qulay
              foydalanish imkonini beradi. Materiallar ekologik toza va uzoq muddat xizmat qilishi kafolatlangan.
            </p>
          </div>

          {/* Buttonlar */}
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
    </div>
  );
};

export default KorzinkaPage;
