import React from 'react';
import Data from './data.jpg';
import Laut from '../about/puncak.jpg';
import Sari from '../about/sibolga.jpg';

function Pageunggul() {
  const sections = [
    {
      image: Data,
      title: "Akses Data yang Mudah dan Interaktif",
      content: "WebGIS ini menyediakan visualisasi pemetaan yang menarik dan mudah dipahami. Pengguna dapat melihat informasi seperti kedalaman laut, suhu air, serta arus laut, yang membantu nelayan dalam memilih lokasi yang tepat untuk penangkapan ikan, meningkatkan hasil tangkapan, serta memastikan keselamatan mereka selama beraktivitas di laut.",
    },
    {
      image: Laut,
      title: "Mengurangi Dampak Lingkungan",
      content: "WebGIS ini dapat membantu mengurangi overfishing dan memastikan penangkapan ikan dilakukan di lokasi yang tepat tanpa merusak ekosistem laut yang rentan. Dengan analisis pemetaan ini, pengelolaan sumber daya laut menjadi lebih bijaksana dan berkelanjutan, menjaga keseimbangan alam untuk keberlanjutan ekosistem laut di Lampung Selatan.",
    },
    {
      image: Sari,
      title: "Meningkatkan Efisiensi dan Keamanan",
      content: "Hemat waktu dan biaya operasional! WebGIS kami membantu nelayan mengakses peta interaktif yang menunjukkan zona penangkapan terbaik dan kondisi laut terkini. platform ini mendukung perlindungan ekosistem laut di Lampung Selatan supaya penangkapan ikan dilakukan dengan cara yang ramah lingkungan dan efisien, menjaga kelestarian laut.",
    },
  ];

  return (
    <div className="pt-[40px]  -mt-10 bg-greenCustom-100/80 pb-24">
      <h1 className="text-white font-cambria font-bold text-3xl text-center mb-8">Keunggulan Peta WebGIS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {sections.map((section, index) => (
          <div key={index} className="transform hover:scale-105 transition-all duration-300 ease-in-out">
            <div className="border rounded-lg overflow-hidden shadow-lg bg-gray-300">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-cambria font-bold text-secondary text-center mb-4">{section.title}</h3>
                <p className="text-black font-georgia text-justify">{section.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pageunggul;
