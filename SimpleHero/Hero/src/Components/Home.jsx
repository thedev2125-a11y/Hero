import React from "react";
import Hero from "../assets/heros.png";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto h-auto md:h-[90vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 md:gap-x-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left px-12 md:px-0 left-side">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Explore Your <span className="text-[#61DBFB]">Digital Future</span>{" "}
            with{" "}
            <span className="inline-block transform transition-all duration-300 ease-out hover:scale-110 hover:text-gray-600 cursor-pointer origin-center">
              Hassu.
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover the power of Hassu, your gateway to a seamless digital
            experience. Join us on a journey to explore the endless
            possibilities of the digital world and unlock your true potential.
          </p>
          <button className="bg-[#61DBFB] text-white px-4 md:px-8 py-2.5 rounded-lg hover:bg-white border hover:border-[#61DBFB] hover:text-black transition duration-300 cursor-pointer">
            Get Started
          </button>
        </div>
        {/* right side */}
        {/* <div className="w-full h-[50vh] md:h-[70vh] flex items-center justify-center">
          <img
            src={Hero}
            alt="Hero Image"
            className="max-w-full max-h-full object-contain rounded-xl 
                             shadow-lg shadow-indigo-600/10 transform transition-all 
                             duration-500 ease-out hover:scale-105 hover:shadow-2xl 
                             hover:shadow-indigo-600/20 cursor-pointer [animation:bounce_10s_infinite_ease-in-out]"
          />
        </div> */}
        <div className="w-full h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden p-4">
          <img
            src={Hero}
            alt="Hero Image"
            className="max-w-full max-h-full object-contain rounded-xl 
               shadow-lg shadow-indigo-600/10 cursor-pointer
               hover:scale-105 
               transition-all duration-500
               hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
