import React from "react";
import Fotoklorofil from './klorofil.png';

const Perbedaanklorofil = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-greenCustom-100/70 via-greenCustom-100/80 to-greenCustom-100/70 p-8">
      {/* Container utama */}
      <div className="max-w-7xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse">
        {/* Bagian gambar */}
        <div className="w-full md:w-3/5">
          <img
            src={Fotoklorofil}
            alt="Gambar klorofil"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bagian teks */}
        <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
            Perbedaan Klorofil antara 2022 dan 2023
          </h2>
          <p className="text-lg text-gray-700 font-georgia font-light leading-relaxed">
          Tren Klorofil 2022 Memiliki pola fluktuatif, dengan puncak tertinggi di indeks data ke-3 dan 
          penurunan signifikan pada indeks ke-4 dan Tren Klorofil 2023 Polanya lebih stabil, menunjukkan 
          kenaikan bertahap dari indeks awal hingga akhir, meskipun tetap lebih rendah dari beberapa puncak di tahun 2022.          </p>
        </div>
      </div>
    </div>
  );
};

export default Perbedaanklorofil;
