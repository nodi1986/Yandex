import React from "react";
import logoLeft from "../logo-left.webp";
import logoRight from "../logo-right.webp";
import coin from "../coin.avif";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      
      <div className="bg-orange-500 text-white text-center text-sm py-2 font-semibold"> 40 000 баллов PLUS за каждый заказ по промокоду</div>

      <div className="max-w-[1400px] mx-auto flex items-center gap-4 px-4 py-4">
        <a href="/">
         <img src={logoLeft} alt="" className="h-13" />
        </a>
       
 
        <Link to='/katalog' className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-lg font-semibold">Каталог</Link>

     
        <div className="flex-1">
          <input type="text" placeholder="Найти товары" className="w-full border-2 border-yellow-400 rounded-lg px-4 py-2 focus:outline-none"/>
        </div>

       
        <Link to='/coin' className="flex items-center gap-1 border rounded-lg px-3 py-2">
          <img src={coin} alt="coin" className="h-5 w-5" />
          <span className="font-semibold">20</span>
        </Link>
                
 <div className="relative">
  <select className="border rounded-lg px-3 py-2 text-sm cursor-pointer focus:outline-none ">
    <option>Eng</option>
    <option>Rus</option>
    <option>Uzb</option>
  </select>
</div>


        
        <div className="relative cursor-pointer">
          <div className="w-9 h-9 rounded-full  flex items-center justify-center">🛒</div>
          
        </div>


      <img src={logoRight} alt="icon" className="h-10 rounded-full" />
      
      </div>

      
      <nav className="max-w-[1400px] mx-auto flex gap-6 px-4 py-2 text-sm font-medium list-none">
        <Link to='/rasprodaja' className="text-red-500">Распродажа</Link>
        <Link to='/korzina'>Корзинка</Link>
        <Link to='/rub'>Из-за рубежа</Link>
        <Link to='/kiyim'>Одежда</Link>
        <Link to='/uy'>Товары для дома</Link>
        <Link to='/kra'>Красота</Link>
        <Link to='/el'>Электроника</Link>
      </nav>

    </header>
  );
};

export default Header;
