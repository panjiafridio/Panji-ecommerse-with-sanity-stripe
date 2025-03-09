import React from "react";

const SpecialItems = () => {
    return (
      <section className="w-[95%] mx-auto mt-10">
        <h2 className="text-4xl md:w-[50%] font-bold mb-[5%] text-brown-900 luckiest-guy-regular">
          WHY BAKERY’S ITEMS IS SO SPECIAL TO CUSTOMER?
        </h2>
  
        <div className="grid grid-cols-3 gap-4 mt-6">
          {/* Cookies Image */}
          <div className="relative mt-[10%]">
            <img
              src="/example4.jpg"
              alt="Cookies"
              className="rounded-lg w-[90%]"
            />
          </div>
  
          {/* Product Description */}
          <div className="bg-amber-800 text-white p-6 rounded-[20%] shadow-lg mt-[40%]">
            <h3 className="text-3xl font-bold luckiest-guy-regular">
              TASTE THE REAL WHEAT BAKED ITEMS.
            </h3>
            <p className="mt-2 text-3xl font-semibold luckiest-guy-regular">$16</p>
            <img
              src="/example.png"
              alt="Chef Ashton Cooper"
              className="rounded-full w-40 h-40 ml-[30%]"
            />
          </div>
  
          {/* Chef Image */}
          <div className="relative mb-[40%] bg-yellow-300 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="/chef.jpg"
              alt="Chef Ashton Cooper"
              className="rounded-full w-40 h-40"
            />
            <p className="mt-4 text-center font-semibold poppins-regular">
              “Baking is a craft in itself, and we bake these delicious and
              crumbly flavors bakery items.”
            </p>
            <p className="mt-2 font-bold poppins-bold">— Owner</p>
          </div>
        </div>
  
        {/* Customer Review Section */}
        <div className="bg-blue-200 p-6 mt-10 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold luckiest-guy-regular">WITH ENOUGH BUTTER, ANYTHING IS GOOD!</h3>
          <div className="flex justify-between mt-4">
            <div className="text-sm">
              <p className="luckiest-guy-regular">Our master plan to freshen up a 200-year-old</p>
              <p className="underline luckiest-guy-regular">What we are dishing out?</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold luckiest-guy-regular">3.73 ★★★★☆</p>
              <p className="text-sm luckiest-guy-regular">Based on 4,350 reviews.</p>
            </div>
          </div>
  
          {/* Category List */}
          <div className="mt-4 flex space-x-4">
            <span className="px-3 py-1 bg-white rounded-full shadow-md text-sm font-semibold">
              Plain Cake
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-md text-sm font-semibold">
              Croissant
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-md text-sm font-semibold">
              Loaf Bread
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-md text-sm font-semibold">
              Cookies
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-md text-sm font-semibold">
              Bretzel
            </span>
            <span className="px-3 py-1 bg-white rounded-full shadow-md text-sm font-semibold">
              Apple Pie
            </span>
          </div>
        </div>
      </section>
    );
}

export default SpecialItems