import React from "react";
import logo from "../logotentang.png";
import Tres from "../poto/laut.jpg";

const Tentang1 = () => {
  return (
    <div className=" bg-gradient-to-br from-greenCustom-100/90 via-greenCustom-100/80 to-greenCustom-100/70 py-16 px-6">
      {/* Judul utama */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-cambria drop-shadow-lg">
          ABOUT THE LOGO
        </h1>
        <p className="text-green-950 font-bold font-cambria mt-2 md:text-lg">
          Discover the purpose and essence of{" "}
          <span className="font-bold text-green-950">SOULAFISH</span>
        </p>
      </div>
    
      {/* Section Identity */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
        {/* Teks di sebelah kiri */}
        <div className="order-2 md:order-1 font-cambria">
          <h2 className="text-3xl font-semibold text-white mb-4">
            IDENTITY
          </h2>
          <p className="text-white font-georgia text-base md:text-lg leading-relaxed text-justify">
            <span className="font-extrabold text-green-950  ">SOULAFISH</span>{" "}
            merupakan singkatan dari{" "}
            <em>South Lampung Fish & Chlorophyll Insights</em>. Nama ini
            mencerminkan fokus aplikasi pada pemetaan data spasial ikan dan
            klorofil di wilayah Lampung Selatan.
            <br />
            <br />
            Penggunaan font{" "}
            <span className="font-semibold text-white">Brixton Sans</span>{" "}
            pada nama utama{" "}
            <strong className="text-white">"SOULAFISH"</strong>{" "}
            memberikan kesan kontemporer yang mencerminkan bahwa WebGIS ini
            adalah teknologi modern dan inovatif.
          </p>
        </div>

        {/* Gambar di sebelah kanan */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="h-64 w-full md:w-auto bg-greenCustom-100/70 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-110">
            <img
              src={logo}
              alt="Logo Soulafish"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Section Background */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Gambar background di sebelah kiri */}
        <div className="order-2 md:order-1 h-64 bg-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
          <img
            src={Tres}
            alt="Background Laut"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Teks di sebelah kanan */}
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-cambria font-semibold text-white mb-4">
            BACKGROUND
          </h2>
          <p className="text-white font-georgia text-base md:text-lg leading-relaxed text-justify">
            <span className="font-semibold text-white">SOULAFISH</span>{" "}
            dirancang untuk menyediakan data spasial yang terintegrasi dan
            mudah diakses terkait pemetaan klorofil sebagai indikator utama
            produktivitas primer laut, serta Suhu Permukaan Laut (SPL) sebagai
            parameter oseanografi yang memengaruhi habitat dan distribusi ikan.
            <br />
            <br />
            Platform ini bertujuan untuk mendukung keberlanjutan ekosistem laut
            dan memberikan informasi lokasi penangkapan ikan potensial
            berdasarkan analisis data spasial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tentang1;
