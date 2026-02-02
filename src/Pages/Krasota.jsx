import React, { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";

const Krasota = () => {
  const { cart, setCart, search } = useOutletContext();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    const request = await fetch(
      "https://gist.githubusercontent.com/nodi1986/1a01388054a6083f933443408eca9fa0/raw/25b23086b1a56c4b5fe4d75d23c993452151743d/gistfile1.txt"
    );
    const response = await request.json();
    setProducts(response);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (item) => {
    setCart([...cart, item]);
    navigate("/savat"); 
  };

  const openProductPage = (id) => {
    navigate(`/krasota/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-10">
      <div className="p-6 max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-2 cursor-pointer"
          >
          
            <div onClick={() => openProductPage(item.id)}>
              <img
                src={item.img || item.image}
                alt={item.title}
                className="w-full h-44 object-contain"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-xl font-bold">{item.price}</p>
            </div>

         
            <button
              onClick={() => addToCart(item)}
              className="mt-3 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition"
            >
              Savatga qoshish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Krasota;
