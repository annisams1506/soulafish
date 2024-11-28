import React from "react";
import { FaFish, FaWater } from "react-icons/fa";

const Dain1 = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-greenCustom-100/70 via-greenCustom-100/80 to-greenCustom-100/70 justify-center bg-gray-100 py-2 px-6 space-y-8">
      {/* Konten Berdampingan */}
      <div className="flex items-center space-x-6">
       
      </div>

      {/* Penjelasan Korelasi */}
      <div className="w-full bg-white shadow-md rounded-lg p-6 mt-2">
        <h3 className="text-lg font-georgia font-semibold text-gray-700">
          Korelasi Suhu dan Klorofil dengan Rekomendasi Lokasi Penangkapan Ikan
        </h3>
        <p className="text-gray-700 font-light text-justify font-georgia leading-relaxed mt-4">
        Korelasi antara suhu laut dan konsentrasi klorofil sangat berperan penting dalam 
        menentukan lokasi penangkapan ikan yang optimal. Dengan memahami kombinasi keduanya, 
        nelayan dapat memilih area dengan suhu yang sesuai dan kadar klorofil yang tinggi, 
        yang menandakan adanya kelimpahan plankton, sumber utama makanan bagi ikan. 
        Suhu yang ideal bagi banyak spesies ikan berkisar antara 26°C hingga 28°C, 
        yang mendukung metabolisme ikan dan plankton. Di sisi lain, klorofil yang tinggi 
        menunjukkan area dengan produksi primer laut yang besar, yang berarti ketersediaan 
        makanan yang melimpah untuk ikan. Oleh karena itu, lokasi dengan suhu optimal dan 
        klorofil tinggi akan menarik ikan untuk berkumpul, meningkatkan potensi hasil tangkapan. 
        Dengan memanfaatkan data suhu dan klorofil ini, nelayan dapat meminimalkan waktu pencarian ikan, 
        mengoptimalkan hasil tangkapan, dan membuat proses penangkapan lebih efisien.
        Selain itu, pemahaman yang lebih mendalam tentang korelasi antara suhu dan klorofil 
        dapat membantu dalam pengelolaan sumber daya laut secara berkelanjutan. 
        Memantau kedua parameter ini memungkinkan nelayan untuk menghindari daerah yang kurang 
        produktif dan fokus pada lokasi dengan potensi tangkapan yang lebih tinggi. 
        Dengan demikian, data suhu dan klorofil tidak hanya mendukung efisiensi penangkapan, 
        tetapi juga menjaga keseimbangan ekosistem laut, mengurangi risiko penangkapan berlebihan, 
        dan melindungi keberlanjutan sumber daya laut jangka panjang. 
        Dengan penggunaan teknologi yang tepat dan pemantauan berkelanjutan, 
        nelayan dapat membuat keputusan yang lebih cerdas, meningkatkan hasil tangkapan, 
        dan berkontribusi pada pelestarian ekosistem laut yang sehat dan produktif.
       Penggunaan analisis data suhu laut dan klorofil untuk menentukan lokasi penangkapan ikan 
       dapat lebih dioptimalkan dengan adanya platform berbasis web seperti Soulafish Web, 
       yang menyediakan WebGIS (Geographic Information System). Melalui Soulafish Web, 
       nelayan dapat menerima rekomendasi lokasi penangkapan ikan secara real-time, 
       berdasarkan pemetaan suhu laut dan klorofil yang sudah dianalisis. 
       Platform ini memungkinkan visualisasi data secara spasial, sehingga nelayan dapat dengan 
       mudah melihat area dengan suhu laut yang sesuai dan konsentrasi klorofil tinggi, 
       yang menandakan adanya sumber makanan melimpah bagi ikan. Dengan menggunakan Soulafish Web,
        nelayan dapat mengakses informasi yang akurat dan efisien untuk mendukung keputusan 
        penangkapan ikan yang lebih cerdas dan berkelanjutan.

        </p>
      </div>
    </div>
  );
};

export default Dain1;
