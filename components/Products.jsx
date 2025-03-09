import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Bagel with Seeds",
    image: "/example.png",
    bgColor: "bg-orange-200",
  },
  {
    id: 2,
    name: "Sliced Piece Bread",
    image: "/example2.jpg",
    bgColor: "bg-blue-200",
  },
  {
    id: 3,
    name: "Cookies Glucose",
    image: "/example3.jpg",
    bgColor: "bg-yellow-200",
  },
  {
    id: 4,
    name: "Croissant",
    image: "/example2.jpg",
    bgColor: "bg-green-200",
  },
];

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section className="py-10 bg-[#fdf8f3] w-[95%] mx-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:flex justify-between w-full mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-left md:w-[50%] w-full text-brown-900 mb-8 luckiest-guy-regular">
            PRODUCT WE BAKE HERE DAILY-
          </h2>

          {/* Filter kategori */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-2">
            {["Cookies", "Cake", "Bretzel", "Pastries", "Croissant", "Bagel"].map(
              (category, index) => (
                <span
                  key={index}
                  className={`p-4 md:p-2 cursor-pointer text-sm font-bold rounded-2xl text-center luckiest-guy-regular ${
                    index % 2 === 0 ? "bg-gray-300 text-gray-800" : "bg-yellow-300 text-black"
                  }`}
                >
                  {category}
                </span>
              )
            )}
          </div>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-3">
              <div className={`p-6 rounded-xl shadow-lg ${product.bgColor} text-center`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-lg mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold luckiest-guy-regular">{product.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Products