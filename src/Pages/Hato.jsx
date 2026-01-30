import React from "react";
      import { Link } from "react-router-dom";
const Hato = () => {
  
  return (

    
     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-purple-600">404</h1>
        <p className="mt-3 text-xl font-semibold text-gray-800">
          Sahifa topilmadi
        </p>
        <p className="mt-2 text-gray-500">
          Siz kiritgan manzil mavjud emas.
        </p>



<Link
  to="/"
  className="inline-block mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition"
>
  Bosh sahifaga qaytish
</Link>

      </div>
    </div>
  );
};

export default Hato;
