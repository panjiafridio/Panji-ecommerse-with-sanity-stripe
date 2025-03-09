import React from 'react';

const FeaturedItem = () => {
    return (
      <section className="p-10 w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between bg-[#fcf5eb] rounded-lg">
        {/* Gambar Produk */}
        <div className="relative">
          <img
            src="/example2.jpg"
            alt="Bread Basket"
            className="rounded-lg shadow-lg max-w-sm"
          />
          <div className="absolute top-10 left-[-40px] bg-yellow-300 p-2 rounded-full text-center text-sm font-bold rotate-[-30deg]">
            <span className="block luckiest-guy-regular">FUN FOR</span>
            <span className="block luckiest-guy-regular">THE WHOLE FAMILY</span>
          </div>
        </div>
  
        {/* Deskripsi Produk */}
        <div className="mt-6 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-extrabold text-brown-900 luckiest-guy-regular">
            YOUR ONLY <span className="relative luckiest-guy-regular">DOSE OF DELIGHT</span>
            {/* <span className="absolute -right-5 top-2 text-2xl">🍪</span> */}
          </h2>
  
          {/* Produk Unggulan */}
          <div className="flex items-center justify-center md:justify-start mt-4">
            <img
              src="/example.png"
              alt="Bagel Buns"
              className="w-16 h-16 rounded-lg"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold luckiest-guy-regular">Bagel Buns</h3>
              <p className="text-sm text-gray-600 luckiest-guy-regular">Gluten free</p>
            </div>
            <p className="ml-3 text-2xl font-bold text-brown-800 luckiest-guy-regular">$16</p>
          </div>
  
          <p className="mt-4 text-gray-700 font-semibold w-[80%] md:w-[50%] poppins-regular">
            All cookies should have a show-stopping German chocolate cake in their
            repertoire and this is one of our favourites.
          </p>
        </div>
      </section>
    );
}

export default FeaturedItem