import React from "react";
import FotoPresentase from './presentase.png';

const Persentase = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-greenCustom-100/70 via-greenCustom-100/80 to-greenCustom-100/70 p-6">
        {/* Container utama */}
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Bagian gambar */}
          <div className="relative">
            <img
              src={FotoPresentase}
              alt="Descriptive Alt Text"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 text-left  bg-gray-200 bg-opacity-20 w-full text-gray-900 text-sm p-2">
              From Python
            </div>
          </div>
  
          {/* Bagian teks */}
          <div className="p-6 text-justify ">
            <h2 className="text-2xl font-cambria text-center font-semibold text-gray-800 mb-4">
            Presentase Perubahan Suhu dan Klorofil 2022 ke 2023
            </h2>
            <p className="text-gray-700 font-georgia leading-relaxed">
            Grafik ini menggambarkan persentase perubahan suhu dan klorofil antara 2022 dan 2023.
            Perubahan Suhu Secara keseluruhan, suhu mengalami penurunan signifikan di semua indeks data, dengan 
            persentase penurunan terbesar pada indeks ke-0.
            Perubahan Klorofil Klorofil menunjukkan tren campuran dengan peningkatan signifikan pada beberapa indeks dan penurunan di indeks lainnya.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Persentase;
  