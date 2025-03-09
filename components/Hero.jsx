import React from 'react';

const Hero = () => {
    return (
      <section className="bg-[#fdf8f3] py-10 px-6 md:px-12 lg:px-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#432818] leading-tight">
          <span className="relative luckiest-guy-regular luckiest-guy-regular">
            BAKE THE <span className="text-green-500 mr-2 luckiest-guy-regular">TASTY</span>
          </span> 
          COOKIES <span className="text-orange-500 luckiest-guy-regular">CRUNCHY</span>
        </h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Kiri: Teks */}
          <div>
  
            <p className="text-3xl font-bold text-gray-800 mt-4 leading-12 luckiest-guy-regular">
              Premium bread and cookies made from scratch{" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md luckiest-guy-regular">FRESH</span>
            </p>
  
            <p className="text-md poppins-regular text-gray-700 mt-2">
              We're literally obsessed with giving more of what you love!
            </p>
  
            {/* Tombol */}
            <div className="mt-6 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
              <button className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-full luckiest-guy-regular shadow-md hover:bg-yellow-500 transition">
                ORDER NOW
              </button>
              <button className="border border-gray-800 luckiest-guy-regular text-gray-900 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-800 hover:text-white transition">
                PROGRAM KEMITRAAN →
              </button>
            </div>
          </div>
  
          {/* Kanan: Gambar */}
          <div className="relative">
            <img
              src="/example.png"
              alt="Fresh Bread"
              className="w-full max-w-md mx-auto md:max-w-lg lg:max-w-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-yellow-300 w-32 h-32 rounded-full -z-10"></div>
          </div>
        </div>
      </section>
    );
}

export default Hero