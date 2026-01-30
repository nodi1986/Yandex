import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Krasota = () => {
  const [products, setProducts] = useState([])

  const getProduct = async () => {
    const request = await fetch(
      'https://gist.githubusercontent.com/nodi1986/1a01388054a6083f933443408eca9fa0/raw/25b23086b1a56c4b5fe4d75d23c993452151743d/gistfile1.txt'
    )
    const response = await request.json()
    setProducts(response)
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-10">
      <div className="p-6 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/krasota/${item.id}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="bg-purple-50 rounded-t-2xl p-4 flex justify-center items-center">
              <img
                src={item.img || item.image}
                alt={item.title}
                className="w-full h-44 object-contain"
              />
            </div>

            <div className="px-4 pb-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                {item.title}
              </h2>
             
              <p className="text-xl font-bold text-purple-700">{item.price}</p>
             
              <button className="mt-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
                Savatga qoshish
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Krasota
