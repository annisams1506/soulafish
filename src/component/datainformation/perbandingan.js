import React from "react";
import Fotoperbandingan from './rasio.png';

const Perbandingan = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-greenCustom-100/80 p-6">
        {/* Container utama */}
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Bagian gambar */}
          <div className="relative">
            <img
              src={Fotoperbandingan}
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
            Perbandingan antara Suhu dan Klorofil 2022 ke 2023
            </h2>
            <p className="text-gray-700 font-georgia leading-relaxed">
            Grafik ini menampilkan rasio perbandingan suhu dan klorofil pada tahun 2023 terhadap 2022.
            Rasio Klorofil terdapat Beberapa indeks menunjukkan peningkatan (rasio kurang dari 1), tetapi pada indeks lain ada penurunan.
        Rasio Suhu Sebagian besar rasio lebih dari1, mengindikasikan suhu rata-rata tahun 2023 lebih rendah dibandingkan tahun 2022.
            Garis merah horizontal menunjukkan titik acuan (rasio = 1) sebagai batas perubahan.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Perbandingan;
  