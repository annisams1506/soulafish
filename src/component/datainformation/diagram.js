import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Library untuk carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import klorofil from './klorofil.png';
import datahistoris from './datahistoris.jpg';
import presentase from './presentase.png';
import rasio from './rasio.png';
import suhu from './suhu.png';

const Diagram = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sections = [
    {
      title: 'Presentase Suhu dan Klorofil 2022 – 2023',
      img: presentase,
      desc: 'Grafik menunjukkan persentase perubahan suhu permukaan laut (SPL) dan klorofil dari 2022 ke 2023. Suhu laut menurun hingga lebih dari 30% di beberapa lokasi, sementara klorofil meningkat tajam, mengindikasikan produktivitas laut yang lebih tinggi. Lokasi dengan peningkatan klorofil dan suhu stabil atau menurun menjadi zona potensial penangkapan ikan, mendukung keberlanjutan ekosistem laut.',
      },
    {
      title: 'Perbedaan Suhu antara 2022 dan 2023',
      img: suhu,
      desc: 'Grafik  suhu pada tahun 2022 cenderung stabil dengan fluktuasi kecil, sementara suhu pada tahun 2023 menunjukkan variasi yang lebih signifikan, dengan beberapa indeks mengalami penurunan suhu yang tajam dibandingkan tahun sebelumnya. Pola ini mengindikasikan adanya perubahan kondisi lingkungan yang mungkin dipengaruhi oleh faktor eksternal, seperti pola cuaca atau fenomena alam lainnya.',
    },
    {
      title: 'Perbedaan Klorofil antara 2022 dan 2023',
      img: klorofil,
      desc: 'Kadar klorofil pada tahun 2022 mengalami fluktuasi lebih besar, terutama lonjakan signifikan pada indeks data ke-3, sedangkan tahun 2023 cenderung lebih stabil. Pola ini menggambarkan potensi produktivitas perairan yang dapat memengaruhi ketersediaan sumber makanan ikan, membantu pengguna memahami dinamika lingkungan yang relevan dengan aktivitas penangkapan ikan.',
    },
    {
      title: 'Perbedaan Rasio Suhu dan Klorofil (2023/2022)',
      img: rasio,
      desc: 'Grafik menunjukkan rasio perubahan suhu permukaan laut (SPL) dan konsentrasi klorofil dari 2022 ke 2023. Rasio di atas 1 menunjukkan peningkatan, sementara di bawah 1 menunjukkan penurunan. Beberapa lokasi mengalami peningkatan signifikan klorofil, menandakan produktivitas primer laut yang lebih tinggi, sementara suhu cenderung menurun, menciptakan kondisi yang mendukung bagi ikan. Analisis ini membantu mengidentifikasi zona penangkapan ikan yang optimal berdasarkan perubahan ekosistem laut.',
    },
    {
      title: 'Data Historis Hasil Tangkapan Kabupaten Lampung Selatan',
      img: datahistoris,
      desc: 'Berdasarkan data hasil tangkapan ikan tahun 2022 dan 2023, Kecamatan Rajabasa dan Ketapang menunjukkan hasil tangkapan konsisten tinggi. Sebaliknya, Katibung dan Bakauheni mencatat hasil rendah dan stagnan. Data ini dapat digunakan untuk mengarahkan lokasi prioritas penangkapan ikan yang lebih optimal.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-greenCustom-100/80 via-greenCustom-100/80 to-greenCustom-100/80 p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold font-cambria text-white">Information (Visualisasi Data)</h1>
        <p className="text-lg text-gray-100">Menggambarkan data perubahan suhu dan klorofil 2022–2023</p>
      </header>

      {/* Content */}
      {isMobile ? (
        <Slider {...sliderSettings} className="rounded-lg shadow-lg">
          {sections.map((section, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-50 rounded-lg shadow-md p-6">
                <img src={section.img} alt={section.title} className="w-full rounded-lg mb-4" />
                <h2 className="text-2xl text-center font-bold text-secondary font-cambria mb-4">{section.title}</h2>
                <p className="text-black font-georgia text-justify">{section.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        sections.map((section, index) => (
          <section
            key={index}
            className="bg-gray-50 text-justify rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl text-center font-bold text-secondary font-cambria mb-4">
              {section.title}
            </h2>
            <div className="flex flex-col items-center md:flex-row">
              <div className="w-full md:w-2/3">
                <img
                  src={section.img}
                  alt={section.title}
                  className="w-full rounded-lg shadow"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 w-full md:w-1/3">
                <p className="text-black font-georgia leading-relaxed">{section.desc}</p>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default Diagram;
  