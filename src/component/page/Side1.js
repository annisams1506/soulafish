import React, { useState } from "react";
import LogoMap from '../head.png';
import './Side1.css';
import './manfaat.css';

const Side1 = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full">
      <div
        className={`relative overflow-hidden transition-all duration-500 ease-in-out ${hovered ? "bg-green-300 shadow-lg" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="background-logo" />
        <main className="h-[480px] md:h-[600px] bg-gradient-to-r from-greenCustom-400/70 via-greenCustom-100/80 to-greenCustom-400/70 flex flex-col justify-center items-center px-4 text-black md:flex-row md:justify-between md:px-10">
          <div className="max-w-lg mt-28 md:mb-20 md:mt-28  px-4 md:ml-10 space-y-6 md:max-w-md">
            <h1 className="text-4xl font-bold font-['ubuntu] text-white tracking-wide md:text-7xl animate-fadeIn">
              SOULAFISH
            </h1>
            <h2 className="text-2xl font-cambria font-bold italic text-white md:text-3xl">
              South Lampung Fish & Chlorophyll Insights
            </h2>
            <p className="text-lg text-black md:text-gray-800 md:px-6 text-justify font-georgia md:text-base">
              SOULAFISH merupakan platform dengan teknologi WebGIS yang menyediakan informasi
              lokasi penangkapan ikan potensial di daerah Lampung Selatan berdasarkan analisis data spasial.
            </p>
          </div>

          <div className="ml-auto mr-24 transform mb-32 md:mt-36 hover:scale-110 hover:rotate-2 transition-transform md:ml-0 md:mr-20 logo-container">
            <img
              src={LogoMap}
              alt="Logo"
              className="logo-image w-auto h-48 md:h-72 drop-shadow-xl"
            />
          </div>
        </main>

       
      </div>
    </div>
  );
};

export default Side1;
