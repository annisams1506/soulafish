import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import laut from "../about/dj.jpg";
import sky from "../poto/tower.jpg";
import pramuka from "../poto/blu.png";

function Slideshow() {
  const slides = [
    {
      url: sky,
      text: "DATA DAN INFORMASI",
      subtext: "Data and Information",
    },
    {
      url: laut,
      text: "LOKASI PENANGKAPAN IKAN",
      subtext: "Zona Penangkapan Ikan",
    },
    {
      url: pramuka,
      text: "PERAIRAN WILAYAH LAMPUNG SELATAN",
      subtext: "South Lampung",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-[400px] relative group">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-700 transition-opacity relative"
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      </div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-xl md:text-3xl font-bold animate-fadeIn">
          {slides[currentIndex].text}
        </h1>
        <p className="text-lg md:text-2xl mt-2 animate-fadeIn">
          {slides[currentIndex].subtext}
        </p>
      </div>

      {/* Left Arrow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-5 text-2xl p-2 rounded-full bg-black/30 text-white cursor-pointer hover:bg-black/50 transition"
        onClick={prevSlide}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl p-2 rounded-full bg-black/30 text-white cursor-pointer hover:bg-black/50 transition"
        onClick={nextSlide}
      >
        <BsChevronCompactRight size={30} />
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
