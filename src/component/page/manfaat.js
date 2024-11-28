import React from "react";
import Lamsel from './lamsel.jpg';

const Manfaat = () => {
    return (
        <div className="relative w-full  md:h-[600px] h-auto shadow-3xl m-0 p-0">
            {/* Background image with overlay */}
            <div className="absolute bg-hero md:bg-fixed bg-contain w-full h-full md:h-[600px]">
                <div className="absolute inset-0 bg-greenCustom-100 opacity-80"></div>
            </div>

            {/* Content Section */}
            <div className="relative w-full h-auto md:h-full p-4">
                <h1 className="text-2xl md:text-3xl font-bold text-white font-cambria mb-2 md:mb-14 text-center">
                    Manfaat Peta WebGIS
                </h1>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:ml-12 w-full md:w-1/2 mb-4 md:mb-0">
                        <p className="font-georgia text-base md:text-lg text-black text-justify">
                            Peta ini memberikan gambaran lokasi penangkapan ikan yang potensial di Kecamatan 
                            Lampung Selatan dengan memanfaatkan data suhu laut dan tingkat klorofil. Dengan informasi 
                            tersebut, peta ini memungkinkan pengguna untuk mengidentifikasi area yang memiliki kondisi 
                            lingkungan yang optimal untuk keberadaan ikan. Lokasi-lokasi yang ditandai pada peta 
                            menunjukkan daerah dengan suhu air yang sesuai dan konsentrasi klorofil yang tinggi, 
                            yang sering kali menjadi indikator keberadaan plankton dan ikan. Dengan peta ini, nelayan 
                            dapat menentukan wilayah yang lebih efisien dan produktif untuk penangkapan ikan, sehingga 
                            meningkatkan hasil tangkapan sekaligus mendukung keberlanjutan sumber daya perikanan di kawasan tersebut.
                        </p>
                    </div>
                    <div className="fotopmb w-full mb-8 md:w-1/3 flex justify-center">
                        <img
                            src={Lamsel}
                            alt="Logo 1"
                            className="border border-white rounded-lg w-10/12 md:max-w-[300px] object-cover transform hover:scale-105 hover:rotate-2 transition-transform"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manfaat;
