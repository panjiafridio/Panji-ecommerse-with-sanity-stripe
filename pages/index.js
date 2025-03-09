import React from 'react';
import { Hero, FeaturedItem, Products, About, SpecialItems, Contact } from "../components";

const App = () => {
  return (
    <div className="bg-[#fdf8f3] luckiest-guy-regular text-gray-900 w-full overflow-x-hidden">
      {/* <Navbar /> */}
      <Hero />
      <FeaturedItem />
      <Products />
      <About />
      <SpecialItems />
      <Contact />
    </div>
  );
}

export default App