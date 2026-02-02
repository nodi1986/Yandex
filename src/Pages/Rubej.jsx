import React, { useEffect, useState } from 'react'
import { Link,  useOutletContext } from 'react-router-dom'

const Rubej = () => {
  const [products, setProducts] = useState([])
const { search } = useOutletContext()

  const getProduct = async () => {
    const request = await fetch(
      'https://gist.githubusercontent.com/nodi1986/6a51bcd37fa0073860756341ae70b06c/raw/937bc4f0df23591494baaddf6c3c72f5e9e3e187/gistfile1.txt'
    )
    const response = await request.json()
    setProducts(response)
  }

  useEffect(() => {
    getProduct()
  }, [])
  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {filteredProducts.length > 0 ? (
    filteredProducts.map((item) => (
      <Link
        key={item.id}
        to={`/ru/${item.id}`}
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
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500">Продукт не найден</p>
  )}
</div>

  )
}

export default Rubej
