import React from 'react'
import { Link } from 'react-router-dom'

const Katalog = () => {
  return (
       <div className="bg-white  sticky top-0 z-50 flex justify-between">
      <div className="max-w-[1400px] bg-yellow-400 mx-auto flex gap-6 px-4 py-3 text-sm font-medium mt-[50px]">

        {/* Распродажа */}
        <div className="relative group">
          <Link to='/rasprodaja' className="hover:text-red-500 transition font-semibold">РАСПРОДАЖА</Link>
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl border rounded-lg min-w-[700px] z-50 p-6 gap-6">
            <div>
              <h3 className="font-bold mb-2">Электроника</h3>
              <Link to='/rasprodaja/el' className="block py-1 hover:text-red-500">Ноутбук</Link>
              <Link to='/rasprodaja/el' className="block py-1 hover:text-red-500">Планшет</Link>
              <Link to='/rasprodaja/el' className="block py-1 hover:text-red-500">Телефон</Link>
            </div>
            <div>
              <h3 className="font-bold mb-2">Одежда</h3>
              <Link to='/rasprodaja/kiyim' className="block py-1 hover:text-red-500">Мужская</Link>
              <Link to='/rasprodaja/kiyim' className="block py-1 hover:text-red-500">Женская</Link>
              <Link to='/rasprodaja/kiyim' className="block py-1 hover:text-red-500">Детская</Link>
            </div>
            <div>
              <h3 className="font-bold mb-2">Дом</h3>
              <Link to='/rasprodaja/uy' className="block py-1 hover:text-red-500">Кухня</Link>
              <Link to='/rasprodaja/uy' className="block py-1 hover:text-red-500">Спальня</Link>
              <Link to='/rasprodaja/uy' className="block py-1 hover:text-red-500">Ванная</Link>
            </div>
          </div>
        </div>

        {/* Корзинка */}
        <div className="relative group">
          <Link to='/korzina' className="hover:text-red-500 transition font-semibold">КОРЗИНА</Link>
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl border rounded-lg min-w-[500px] z-50 p-4 gap-4">
            <div>
              <h3 className="font-bold mb-2">Ваши товары</h3>
              <Link to='/korzina/el' className="block py-1 hover:text-red-500">Электроника</Link>
              <Link to='/korzina/kiyim' className="block py-1 hover:text-red-500">Одежда</Link>
              <Link to='/korzina/uy' className="block py-1 hover:text-red-500">Дом</Link>
            </div>
          </div>
        </div>

        {/* Из-за рубежа */}
        <div className="relative group">
          <Link to='/rub' className="hover:text-red-500 transition font-semibold">ИЗ-ЗА РУБЕЖА</Link>
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl border rounded-lg min-w-[600px] z-50 p-4 gap-6">
            <div>
              <h3 className="font-bold mb-2">Электроника</h3>
              <Link to='/rub/el' className="block py-1 hover:text-red-500">Ноутбук</Link>
              <Link to='/rub/el' className="block py-1 hover:text-red-500">Телефон</Link>
            </div>
            <div>
              <h3 className="font-bold mb-2">Одежда</h3>
              <Link to='/rub/kiyim' className="block py-1 hover:text-red-500">Мужская</Link>
              <Link to='/rub/kiyim' className="block py-1 hover:text-red-500">Женская</Link>
            </div>
          </div>
        </div>

        {/* Одежда */}
        <div className="relative group">
          <Link to='/kiyim' className="hover:text-red-500 transition font-semibold">ОДЕЖДА</Link>
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl border rounded-lg min-w-[600px] z-50 p-4 gap-4">
            <div>
              <h3 className="font-bold mb-2">Мужская одежда</h3>
              <Link to='/kiyim/muzhskaya' className="block py-1 hover:text-red-500">Рубашки</Link>
              <Link to='/kiyim/muzhskaya' className="block py-1 hover:text-red-500">Футболки</Link>
            </div>
            <div>
              <h3 className="font-bold mb-2">Женская одежда</h3>
              <Link to='/kiyim/zhenskaya' className="block py-1 hover:text-red-500">Платья</Link>
              <Link to='/kiyim/zhenskaya' className="block py-1 hover:text-red-500">Блузки</Link>
            </div>
            <div>
              <h3 className="font-bold mb-2">Детская одежда</h3>
              <Link to='/kiyim/detskie' className="block py-1 hover:text-red-500">Костюмы</Link>
              <Link to='/kiyim/detskie' className="block py-1 hover:text-red-500">Футболки</Link>
            </div>
          </div>
        </div>

        {/* Товары для дома */}
        <div className="relative group">
          <Link to='/uy' className="hover:text-red-500 transition font-semibold">ТОВАРЫ ДЛЯ ДОМА</Link>
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl border rounded-lg min-w-[600px] z-50 p-4 gap-4">
            <div>
              <h3 className="font-bold mb-2">Кухня</h3>
              <Link to='/uy/kuhnya' className="block py-1 hover:text-red-500">Посуда</Link>
              <Link to='/uy/kuhnya' className="block py-1 hover:text-red-500">Кастрюли</Link>
            </div>
            <div>
              <h3 className="font-bold mb-2">Спальня</h3>
              <Link to='/uy/spalnya' className="block py-1 hover:text-red-500">Постельное</Link>
              <Link to='/uy/spalnya' className="block py-1 hover:text-red-500">Декор</Link>
            </div>
          </div>
        </div>

        {/* Красота */}
        <div className="relative group">
          <Link to='/kra' className="hover:text-red-500 transition font-semibold">КРАСОТА</Link>
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl border rounded-lg min-w-[600px] z-50 p-4 gap-4">
            <div>
              <h3 className="font-bold mb-2">Уход за кожей</h3>
              <Link to='/kra/ukhod' className="block py-1 hover:text-red-500">Кремы</Link>
              <Link to='/kra/ukhod' className="block py-1 hover:text-red-500">Сыворотки</Link>
            </div>
            <div>
              <h3 className="font-bold mb-2">Макияж</h3>
              <Link to='/kra/makiyazh' className="block py-1 hover:text-red-500">Помады</Link>
              <Link to='/kra/makiyazh' className="block py-1 hover:text-red-500">Тени</Link>
            </div>
          </div>
        </div>

        {/* Электроника */}
        <div className="relative group">
          <Link to='/el' className="hover:text-red-500 transition font-semibold">ЭЛЕКТРОНИКА</Link>
          <div className="absolute left-0 top-full mt-2 hidden group-hover:flex bg-white shadow-xl border rounded-lg min-w-[700px] z-50 p-6 gap-6">

            <div>
              <h3 className="font-bold mb-2">Ноутбуки и планшеты</h3>
              <Link to='/el/noutbuk' className="block py-1 hover:text-red-500">Ноутбук</Link>
              <Link to='/el/planshet' className="block py-1 hover:text-red-500">Планшет</Link>
              <Link to='/el/noutbuki-aks' className="block py-1 hover:text-red-500">Ноутбук аксессуары</Link>
            </div>

            <div>
              <h3 className="font-bold mb-2">Телефоны и аксессуары</h3>
              <Link to='/el/telefon' className="block py-1 hover:text-red-500">Телефон</Link>
              <Link to='/el/batareya' className="block py-1 hover:text-red-500">Батареи</Link>
              <Link to='/el/aksessuary' className="block py-1 hover:text-red-500">Аксессуары</Link>
            </div>

            <div>
              <h3 className="font-bold mb-2">Гаджеты и техника</h3>
              <Link to='/el/gadzhety' className="block py-1 hover:text-red-500">Гаджеты</Link>
              <Link to='/el/umnye-ustroystva' className="block py-1 hover:text-red-500">Умные устройства</Link>
              <Link to='/el/komplektuyushchie' className="block py-1 hover:text-red-500">Комплектующие</Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Katalog