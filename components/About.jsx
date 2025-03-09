import React from "react";

const About = () =>  {
    return (
      <section className="p-10 bg-[#643322] rounded-4xl flex flex-col md:flex-row justify-center items-center w-[95%] mx-auto">
        <img src="/example.png" alt="" className="w-[80%] md:w-[40%]" />
        <div className="">
          <h2 className="md:text-6xl text-4xl text-left text-white font-bold luckiest-guy-regular">
            Tertarik menjadi Mitra Kami?
          </h2>
          <p className="text-lg text-left mt-4 text-white max-w-2xl mx-auto poppins-regular">
            Their experience plays a role in the way they work. Bakers use flavors
            and visual appeal to produce an edible art piece.
          </p>
          <button className="mt-6 text-left bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 luckiest-guy-regular">
            Join Sekarang
          </button>
        </div>
      </section>
    );
}

export default About