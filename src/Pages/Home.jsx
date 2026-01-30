import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/banner1.webp";
import img2 from "../assets/banner2.webp";
import img3 from "../assets/banner3.webp";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const request = await fetch(
      "https://gist.githubusercontent.com/nodi1986/a5462c17460f3b3ed296dab6e257328f/raw/ed58cca7608585d2f7c8fea639964436c9425b77/gistfile1.txt"
    );
    const response = await request.json();
    setProducts(response);
    const text = await request.text()
console.log(text)

  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="w-full bg-gray-100">


      <div className="max-w-[1500px] mx-auto mt-8 flex justify-center gap-6 px-4">
        <img
          src={img1}
          className="w-[320px] h-[220px] object-cover rounded-2xl opacity-50 scale-95 hidden lg:block"
        />
        <img
          src={img2}
          className="w-full max-w-[720px] h-[260px] object-cover rounded-2xl shadow-xl"
        />
        <img
          src={img3}
          className="w-[320px] h-[220px] object-cover rounded-2xl opacity-50 scale-95 hidden lg:block"
        />
      </div>


      <div className="flex justify-center gap-4 mt-6">
        <button className="px-6 py-2 rounded-full border bg-white text-gray-700 hover:bg-gray-100 transition">
          Для вас
        </button>
        <button className="px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
          WOW-цены
        </button>
      </div>

      
      <div className="max-w-[1500px] mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="bg-white rounded-xl border hover:shadow-lg transition-all duration-300 group"
          >

            <div className="relative h-52 bg-gray-50 flex items-center justify-center rounded-t-xl">
              <img
                src={item.image}
                alt={item.name}
                className="max-h-44 group-hover:scale-105 transition"
              />

              
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                −{Math.round(
                  ((item.oldPrice - item.price) / item.oldPrice) * 100
                )}%
              </span>
            </div>

           
            <div className="p-4 flex flex-col gap-2">

              <span className="text-xs bg-gray-100 w-max px-2 py-1 rounded text-gray-600">
                {item.category}
              </span>

              <h2 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[40px]">
                {item.name}
              </h2>

              <div className="flex items-center gap-2">
                <p className="text-xl font-bold text-gray-900">
                  {item.price.toLocaleString()} ₽
                </p>
                <p className="text-sm text-gray-400 line-through">
                  {item.oldPrice.toLocaleString()} ₽
                </p>
              </div>

           
              <div className="text-sm text-gray-500">
                ⭐ {item.rating} • {item.brand}
              </div>

            
              <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black text-sm py-2 rounded-lg font-semibold transition">
                Savatga qo‘shish
              </button>

            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Home;
