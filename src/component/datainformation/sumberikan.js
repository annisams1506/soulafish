import React from "react";
import BSP from './bsp.png';
import Shkl from './shkl.png';
import Integrasi from './intgrasi.png';

const Sumberikan = () => {
  return (
    <div className="bg-gradient-to-r from-greenCustom-100/70 via-greenCustom-100/80 to-greenCustom-100/70 py-10">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Title Section */}
        <h1 className="text-3xl font-cambria italic font-semibold text-white">
          DATA HISTORIS IKAN
        </h1>
        <p className="text-center font-cambria text-lg text-gray-300 mb-12">
          Diunduh melalui Badan Pusat Statistik Lampung Selatan (Produksi Penangkapan Perikanan Tangkap)
        </p>

        {/* Cards Section */}
        <div className="grid font-georgia grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Data BSP */}
          <div className="bg-gray-300  rounded-lg font-georgia shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-56 object-cover"
              src={BSP}
              alt="Data BSP"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary font-cambria">Data BPS</h3>
              <p className="text-black font-georgia mt-4">
                Data ini diunduh langsung melalui Badan Pusat Statistik Lampung Selatan, yang mencakup statistik produksi penangkapan perikanan tangkap.
              </p>
            </div>
          </div>

          {/* Card 2: Mengelompokan Tangkapan Per Kecamatan */}
          <div className="bg-gray-300 rounded-lg font-georgia shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-56 object-cover"
              src={Shkl}
              alt="Mengelompokan Tangkapan"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary font-cambria">Mengelompokan Tangkapan Per Kecamatan</h3>
              <p className="text-black font-georgia mt-4">
                Mengelompokkan data tangkapan ikan berdasarkan kecamatan Lampung Selatan.
              </p>
            </div>
          </div>

          {/* Card 3: Integrasi dengan Python */}
          <div className="bg-gray-300  rounded-lg font-georgia shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img
              className="w-full h-56 object-cover"
              src={Integrasi}
              alt="Integrasi dengan Python"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary font-cambria">Integrasi dengan Python</h3>
              <p className="text-black font-georgia mt-4">
                Menggunakan Python untuk mengolah dan mengintegrasikan data suhu dan klorofil, untuk memberikan rekomendasi lokasi penangkapan ikan secara lebih akurat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sumberikan;
