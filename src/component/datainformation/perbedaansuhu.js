import React from "react";
import Fotosuhu from './suhu.png';

const Perbedaansuhu = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-greenCustom-100/70 via-greenCustom-100/80 to-greenCustom-100/70 p-8">
      {/* Container utama */}
      <div className="max-w-7xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Bagian gambar */}
        <div className="w-full md:w-3/5">
          <img
            src={Fotosuhu}
            alt="Gambar suhu"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bagian teks */}
        <div className="w-full md:w-2/5 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-cambria font-bold text-gray-800 mb-6">
            Perbedaan Suhu antara 2022 dan 2023
          </h2>
          <p className="text-lg text-gray-700 font-georgia leading-relaxed">
          Suhu 2022 Relatif stabil dengan fluktuasi kecil di sekitar 28-30°C sedangkan Suhu 2023
           Menunjukkan penurunan drastis di awal tahun, tetapi ada kenaikan kembali sebelum menurun 
           signifikan pada indeks akhir.          </p>
        </div>
      </div>
    </div>
  );
};

export default Perbedaansuhu;
