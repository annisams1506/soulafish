import React from "react";

const Lampung = () => {
    return (
        <div className="relative w-full md:h-[550px] h-auto shadow-3xl m-0 p-0">
            {/* Background image with overlay */}
            <div className="absolute bg-hero md:bg-fixed bg-contain w-full h-full md:h-[510px]">
                <div className="absolute inset-0 bg-greenCustom-100 opacity-80"></div>
            </div>

            {/* Content Section */}
            <div className="relative w-full h-auto md:h-full p-4">
                <h1 className="text-2xl md:text-3xl font-bold mt-2 md:mt-10 text-white font-cambria mb-2 md:mb-14 text-center">
                    Lampung Selatan
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
                </div>
            </div>
        </div>
    );
};

export default Lampung;
