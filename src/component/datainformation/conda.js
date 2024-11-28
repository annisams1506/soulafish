import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; // Slick carousel styles
import "slick-carousel/slick/slick-theme.css";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import suhu23 from './suhu23.png'; // Import image
import suhu22 from './suhu22.png';
import Klorofi22 from './klorof22.png';
import Klorof23 from './klorof23.png';

const Conda = () => {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default for large screens
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // Medium screens (tablets, small laptops)
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // Small screens (mobile devices)
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};


  return (
    <div className="bg-gradient-to-br from-greenCustom-100/70 via-greenCustom-100/80 to-greenCustom-100/70 min-h-screen py-10 px-4">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="text-center mb-4 animate-fadeIn">
          <h1 className="text-4xl font-cambria font-extrabold text-white  tracking-tight">SUMBER DATA DAN PENGOLAHAN DATA</h1>
        </div>

        {/* Sub-Title */}
        <div className="text-center mb-2">
          <h2 className="text-3xl font-cambria italic font-semibold text-slate-200">DATA CITRA LANDSAT 8</h2>
          <p className="text-lg italic mb-10 text-slate-300 ">
            Diunduh melalui USGS Earthexplorer. Data Tahun 2022 dan 2023           </p>
        </div>

        {/* Resolution and Processing Info */}
        <div className="grid grid-cols-2 gap-6 mb-2 animate-slideUp">
          <div className="bg-gray-200  shadow-lg rounded-lg p-2 ">
            <h3 className="md:text-xl text-lg font-bold text-center text-secondary font-cambria mb-2">Data</h3>
            <p className="md:text-lg text-sm  text-black font-georgia">Data mencakup wilayah Lampung <br></br>
                    Resolusi Spasial: 15 Meter (panc band), 30M (thermal band).<br></br> 
                    Resolusi Spektral: 11 band</p>
          </div>
          <div className="bg-gray-200 shadow-lg rounded-lg p-6">
            <h3 className="md:text-xl text-lg font-bold text-secondary font-cambria mb-4">Preprocessing</h3>
            <p className="md:text-lg text-sm  text-black font-georgia">Koreksi radiometrik untuk menghilangkan noise.<br></br> Cropping Area untuk wilayah Lampung Selatan.</p>
          </div>
          <div className="bg-gray-200 shadow-lg rounded-lg p-6">
            <h3 className="md:text-xl text-lg font-bold text-secondary font-cambria mb-4">Ekstraksi Suhu</h3>
            <p className="md:text-lg text-sm text-black font-georgia">Menggunakan band 10 dan 11.<br></br> 
            Konversi nilai digital menjadi Celsius.</p>
          </div>
          <div className="bg-gray-200 shadow-lg rounded-lg p-6">
            <h3 className="md:text-xl text-lg font-bold text-secondary font-cambria mb-4">Ekstraksi Klorofil-a</h3>
            <p className="md:text-lg text-sm text-black font-georgia">Menggunakan band 4 dan band 5.
                <br></br> Acuan untuk memetakan daerah dengan plankton tinggi.</p>
          </div>
        </div>

        {/* Card Carousel */}
        <div className="mb-10">
          <h3 className="text-3xl font-semibold text-center font-cambria mt-14 text-gray-200 mb-6">VISUALISASI DATA</h3>
          <Slider {...settings} className="rounded-lg shadow-lg">
            <div className="p-4">
              <div className="bg-gray-100 shadow-md rounded-lg p-6">
                <img src={suhu22} alt="Suhu 2022" className="object-contain h-40 mx-auto mb-4" />
                <p className="text-lg text-secondary font-cambria text-center">Data Suhu Tahun 2022</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6">
                <img src={suhu23} alt="Suhu 2023" className="object-contain h-40 mx-auto mb-4" />
                <p className="text-lg text-secondary font-cambria text-center">Data Suhu Tahun 2023</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6">
                <img src={Klorofi22} alt="Klorofil 2022" className="object-contain h-40 mx-auto mb-4" />
                <p className="text-lg text-secondary font-cambria text-center">Data Klorofil Tahun 2022</p>
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6">
                <img src={Klorof23} alt="Klorofil 2023" className="object-contain h-40 mx-auto mb-4" />
                <p className="text-lg text-secondary font-cambria text-center">Data Klorofil Tahun 2023</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Conda;
