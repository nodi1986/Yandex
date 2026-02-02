import React from "react";
import logoLeft from "../logo-left.webp";
import logoRight from "../logo-right.webp";
import coin from "../coin.avif";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Header = ({ search, setSearch }) => {
  const { t, i18n } = useTranslation();
  return (
    <header className="w-full border-b bg-white">
      
      <div className="bg-orange-500 text-white text-center text-sm py-2 font-semibold">{t("blog.card1Title")}</div>

      <div className="max-w-[1400px] mx-auto flex items-center gap-4 px-4 py-4">
        <a href="/">
         <img src={logoLeft} alt="" className="h-13" />
        </a>
       
 
        <Link to='/katalog' className="bg-yellow-400 hover:bg-yellow-500 transition px-4 py-2 rounded-lg font-semibold">{t("blog.card1Text")}</Link>

     
        <div className="flex-1">
        <input
          type="text"
          placeholder={t("blog.card2Title")}
          value={search}               
          onChange={(e) => setSearch(e.target.value)} 
          className="w-full border-2 border-yellow-400 rounded-lg px-4 py-2 focus:outline-none"
        />
      </div>

       
        <Link to='/coin' className="flex items-center gap-1 border rounded-lg px-3 py-2">
          <img src={coin} alt="coin" className="h-5 w-5" />
          <span className="font-semibold">20</span>
        </Link>
                
<div className="relative w-max">
  <select
    className="border rounded-lg px-3 py-2 text-sm cursor-pointer focus:outline-none"
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    defaultValue="en" 
  >
    <option value="ru">Ru</option>
    <option value="en">Eng</option>
    <option value="uz">UZ</option>
  </select>
</div>


        
        <Link to='/savat' className="relative cursor-pointer">
          <div className="w-9 h-9 rounded-full  flex items-center justify-center">🛒</div>
          
        </Link>


      <img src={logoRight} alt="icon" className="h-10 rounded-full" />
      
      </div>

      
      <nav className="max-w-[1400px] mx-auto flex gap-6 px-4 py-2 text-sm font-medium list-none">
        <Link to='/rasprodaja' className="text-red-500">{t("blog.card2Text")}</Link>
        <Link to='/korzina'>{t("blog.card3Title")}</Link> 
        <Link to='/rub'>{t("blog.card3Text")}</Link>
        <Link to='/kiyim'>{t("blog.card4Title")}</Link>
        <Link to='/uy'>{t("blog.card4Text")}</Link>
        <Link to='/kra'>{t("blog.card5Title")}</Link>
        <Link to='/el'>{t("blog.card5Text")}</Link>
      </nav>

    </header>
  );
};

export default Header;
