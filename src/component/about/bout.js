import React from "react";
import { motion } from "framer-motion";

const Bout = () => {
  return (
    <div className="bg-gradient-to-br from-greenCustom-100/70 via-greenCustom-100/90 to-greenCustom-100/70 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
      <h1 className="md:text-3xl text-xl font-extrabold text-green-950 mb-6">About</h1>
      <p className="text-gray-700 text-justify font-georgia text-xs md:text-lg leading-relaxed">
        <strong className="text-black">Soulafish</strong> dirancang untuk menyediakan data spasial yang terintegrasi dan mudah diakses terkait 
        pemetaan klorofil sebagai indikator utama produktivitas primer laut, serta Suhu Permukaan Laut (SPL) sebagai 
        parameter oseanografi yang memengaruhi habitat dan distribusi ikan. Dengan pengintegrasian data-data ini, kami 
        harap pengelolaan perikanan dapat dilakukan lebih akurat untuk mendukung keberlanjutan ekosistem laut.
      </p>
      <p className="text-gray-700 font-georgia text-justify text-xs  md:text-lg leading-relaxed mt-4">
        Platform ini juga bertujuan untuk menyediakan informasi lokasi penangkapan ikan yang potensial berdasarkan 
        analisis data spasial. Dengan memanfaatkan teknologi WebGIS, <strong className="text-black">Soulafish</strong> memberikan kemudahan 
        bagi pengguna untuk mengakses informasi mengenai kondisi perairan di Lampung Selatan. Hal ini diharapkan dapat 
        menciptakan sinergi antara teknologi, ekologi, dan ekonomi, sehingga dapat mendorong pengelolaan sumber daya 
        laut yang lebih berkelanjutan dan mendukung kesejahteraan masyarakat pesisir.
      </p>
     
      <div className="mt-8">
        <h2 className="md:text-3xl text-lg font-bold text-green-950 font-cambria  mb-4">Fitur Utama</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-greenCustom-400/20 p-4 rounded-lg shadow">
            <h3 className="md:text-lg text-xs font-bold text-secondary font-cambria">Pemetaan Klorofil</h3>
            <p className="text-gray-700 mt-2">
            Penyajian data distribusi klorofil secara visual untuk mendukung identifikasi produktivitas primer laut, yang menjadi indikator utama keberadaan plankton sebagai sumber makanan ikan.            </p>
          </div>
          <div className="bg-greenCustom-400/20 p-4 rounded-lg shadow">
            <h3 className="md:text-lg text-xs font-bold text-secondary font-cambria">Suhu Permukaan Laut</h3>
            <p className="text-slate-800 mt-2">
            Menyediakan data suhu permukaan laut (SPL) yang relevan untuk memahami pola pergerakan ikan, habitat optimal, serta kondisi lingkungan yang mendukung keberlanjutan ekosistem laut            </p>
          </div>
          <div className="bg-greenCustom-400/20 p-4 rounded-lg shadow">
            <h3 className="md:text-lg text-xs font-bold text-secondary font-cambria">Lokasi Penangkapan Ikan</h3>
            <p className="text-slate-800 mt-2">
            Mengidentifikasi area potensial penangkapan ikan berdasarkan analisis data suhu laut, klorofil, dan hasil tangkapan sebelumnya, sehingga meningkatkan efisiensi nelayan.            </p>
          </div>
          <div className="bg-greenCustom-400/20 p-4 rounded-lg shadow">
            <h3 className="md:text-lg text-xs font-bold text-secondary font-cambria">WebGIS Interaktif</h3>
            <p className="text-slate-800 mt-2">
            Mengintegrasikan teknologi WebGIS untuk memvisualisasikan data spasial secara interaktif, memungkinkan nelayan dan peneliti untuk mengeksplorasi informasi lokasi penangkapan ikan dengan mudah.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
);
};

export default Bout;