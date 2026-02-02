import React from 'react'
import { useOutletContext } from 'react-router-dom'

const Korzinasavat = () => {
  const { cart } = useOutletContext()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-10">
      <div className="max-w-[1500px] mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Savatdagi mahsulotlar</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-xl">Savat bo'sh</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-5 flex flex-col gap-3 group relative"
              >
                <div className="h-52 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={item.img || item.image}
                    alt={item.title}
                    className="max-h-44 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h2>
                <p className="text-sm text-gray-500">Category: {item.category || "Yo'q"}</p>

                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold text-gray-900">{item.price}</p>
                  {item.oldPrice && (
                    <p className="text-sm text-gray-400 line-through">{item.oldPrice}</p>
                  )}
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>⭐ {item.rating || 0}</span>
                  <span>{item.brand || "Brand yo'q"}</span>
                </div>

                <button className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-xl font-semibold transition">
                  Sotib olish
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Korzinasavat
