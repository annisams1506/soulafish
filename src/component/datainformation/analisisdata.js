import React from "react";
import { FaFish, FaWater } from "react-icons/fa";

const Analisisdata = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-greenCustom-100/90 via-greenCustom-100/80 to-greenCustom-100/70 text-gray-800">
      {/* Hero Section */}
      <div className="w-full bg-greenCustom-100/10 text-white py-16 px-6 text-center shadow-lg">
        <h1 className="text-4xl font-bold font-cambria mb-4">
          Soulafish: Suhu, Klorofil, dan Lokasi Penangkapan Ikan
        </h1>
        <p className="font-light font-georgia text-lg">
          Menjelajahi korelasi antara suhu laut, konsentrasi klorofil, dan
          efisiensi penangkapan ikan untuk masa depan yang berkelanjutan.
        </p>
       
      </div>

      {/* Korelasi Suhu dan Klorofil */}
      <div className="flex flex-col items-center py-12 px-6 space-y-8 w-full max-w-4xl">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full">
          <h3 className="text-2xl font-georgia font-semibold text-green-700 mb-4">
            Korelasi Suhu dan Klorofil
          </h3>
          <p className="text-justify font-light font-georgia leading-relaxed">
            Korelasi antara suhu laut dan konsentrasi klorofil sangat berperan
            penting dalam menentukan lokasi penangkapan ikan yang optimal.
            Dengan memahami kombinasi keduanya, nelayan dapat memilih area
            dengan suhu yang sesuai dan kadar klorofil yang tinggi, yang
            menandakan adanya kelimpahan plankton, sumber utama makanan bagi
            ikan. Platform seperti Soulafish Web memudahkan nelayan untuk
            mendapatkan informasi ini secara real-time dan akurat.
          </p>
        </div>
      </div>

      {/* Analisis Data Suhu dan Klorofil */}
      <div className="flex flex-col items-center py-12 px-6 space-y-8 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Teks Deskriptif */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Analisis Data Suhu
            </h2>
            <p className="text-justify font-light font-georgia leading-relaxed">
           
Suhu ideal bagi banyak spesies ikan berkisar antara 24°C hingga 28°C, mendukung metabolisme, aktivitas, dan reproduksi mereka. Suhu di atas 30°C dapat mengurangi oksigen dalam air, mendorong ikan berpindah ke perairan lebih sejuk. Pemahaman suhu ini penting untuk menentukan habitat ikan yang optimal.   </p>
            <div className="flex items-center space-x-4 mt-4">
              <div className="flex items-center space-x-2">
                <FaWater className="text-blue-500 text-2xl" />
                <span className="text-sm font-semibold">Data Suhu</span>
              </div>
              
            </div>
          </div>

          {/* Gambar atau Infografis Placeholder */}
          <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Analisis Data Klorofil
            </h2>
            <p className="text-justify font-light font-georgia leading-relaxed">
            Adanya Klorofil menandakan keberadaan fitoplankton, sebagai sumber makanan utama ikan. Lokasi dengan konsentrasi klorofil antara 0,5 hingga 3 mg/m³ menunjukkan kelimpahan plankton, mendukung populasi ikan. Sebaliknya, konsentrasi klorofil rendah (di bawah 0,2 mg/m³) cenderung kurang produktif.       </p>
            
              <div className="flex items-center mt-4 space-x-2">
                <FaFish className="text-green-500 text-2xl" />
                <span className="text-sm font-semibold">Data Klorofil</span>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analisisdata;
