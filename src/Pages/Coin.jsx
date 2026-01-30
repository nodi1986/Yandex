import React from "react";
import coinImg from "../assets/coin.jpg"; 
import coinImg2 from "../assets/coin.jpg"; 
import coinImg3 from "../assets/coin.jpg"; 
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.webp";
import giftImg from "../assets/gift.avif";

const Coin = () => {
  const products = [product1, product2, product3, product4, product5];

  return (
    <div className=" bg-white shadow-2xl flex flex-col items-center justify-center relative p-8 w-[800px] h-[500px] ml-90 mt-30">
      
      <div className="absolute top-4 right-4 flex gap-3">
        <img src={coinImg} alt="coin" className="w-12 h-12" />
        <img src={coinImg2} alt="coin" className="w-12 h-12" />
        <img src={coinImg3} alt="coin" className="w-12 h-12" />
      </div>

      <div className="absolute top-4 left-4">
        <img src={giftImg} alt="gift" className="w-16 h-16" />
      </div>

      
      <div className="flex gap-8 justify-center items-center mb-10">
        {products.map((prod, index) => (
          <div key={index} className="relative">
            <img
              src={prod}
              alt={`product-${index}`}
              className="w-36 h-36 object-contain rounded-xl shadow-lg"
            />
          </div>
        ))}
      </div>

      
      <button className="bg-brown-500 text-orange-500 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition transform">
        ВРАЩАТЬ 10
      </button>
    </div>
  );
};

export default Coin;
