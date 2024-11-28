import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import IconKuning from './iconkuning.png';
import IconMerah from './iconmerahh.png';
import IconHijau from './iconhijau.png';

// Pastikan ini untuk mengatasi masalah ikon default Leaflet
delete L.Icon.Default.prototype._getIconUrl;

const Maps = () => {
  const [fishingSpots, setFishingSpots] = useState([]);

  useEffect(() => {
    const fetchFishingSpots = async () => {
      try {
        const data = [
          {
            id: 1,
            name: "Perairan Pulau Katibung",
            latitude: -5.559901,
            longitude: 105.366256,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 2,
            name: "Perairan Pulau Katibung",
            latitude: -5.551204,
            longitude: 105.35666,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 3,
            name: "Perairan Pulau Katibung",
            latitude: -5.573544,
            longitude: 105.340383,
            fishSpecies: "Barakuda, Tenggiri",
            depth: 25,
            description: "Hijau",
          },
          {
            id:  4,
            name: "Perairan Pulau Katibung",
            latitude: -5.613009,
            longitude: 105.365646,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 5,
            name: "Perairan Pulau Sidumulyo",
            latitude: -5.644536,
            longitude: 105.448883,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 6,
            name: "Perairan Pulau Sidumulyo",
            latitude: -5.649212,
            longitude: 105.467445,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 7,
            name: "Perairan Pulau Sidumulyo",
            latitude: -5.65272,
            longitude: 105.43549,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 8,
            name: "Perairan Pulau Sidumulyo",
            latitude: -5.672126,
            longitude: 105.443949,
            fishSpecies: "Not highly recommended for fishing, but it remains feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 9,
            name: "Perairan Pulau Sidumulyo",
            latitude: -5.676802,
            longitude: 105.421158,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 10,
            name: "Perairan Pulau Kalianda",
            latitude: -5.670099,
            longitude: 105.556352,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 11,
            name: "Perairan Pulau Kalianda",
            latitude: -5.676142,
            longitude: 105.487158,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 12,
            name: "Perairan Pulau Kalianda",
            latitude: -5.748014,
            longitude: 105.481953,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 13,
            name: "Perairan Pulau Kalianda",
            latitude: -5.667059,
            longitude: 105.491008,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 14,
            name: "Perairan Pulau Kalianda",
            latitude: -5.707885,
            longitude: 105.519412,
            fishSpecies: "Not highly recommended for fishing, but it remains feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 15,
            name: "Perairan Pulau Kalianda",
            latitude: -5.728900,
            longitude: 105.541503,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 16,
            name: "Perairan Pulau Rajabasa",
            latitude: -5.834906,
            longitude: 105.610632,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 17,
            name: "Perairan Pulau Rajabasa",
            latitude: -5.880203,
            longitude: 105.612503,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 18,
            name: "Perairan Pulau Rajabasa",
            latitude: -5.917544,
            longitude: 105.391592,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 19,
            name: "Perairan Pulau Rajabasa",
            latitude: -5.801021,
            longitude: 105.572263,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 20,
            name: "Perairan Pulau Rajabasa",
            latitude: -5.817154,
            longitude: 105.473668,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 21,
            name: "Perairan Pulau Rajabasa",
            latitude: -5.852471,
            longitude: 105.373692,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 22,
            name: "Perairan Pulau Sragi",
            latitude: -5.612948,
            longitude: 105.833685,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 23,
            name: "Perairan Pulau Sragi",
            latitude: -5.592447,
            longitude: 105.836775,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 24,
            name: "Perairan Pulau Sragi",
            latitude: -5.607139,
            longitude: 105.858747,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 25,
            name: "Perairan Pulau Sragi",
            latitude: -5.619440,
            longitude: 105.868017,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 26,
            name: "Perairan Pulau Sragi",
            latitude: -5.629690,
            longitude: 105.819609,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 27,
            name: "Perairan Pulau Bakauheni",
            latitude: -5.857946,
            longitude: 105.712666,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 28,
            name: "Perairan Pulau Bakauheni",
            latitude: -5.902685,
            longitude: 105.729661,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 29,
            name: "Perairan Pulau Bakauheni",
            latitude: -5.887829,
            longitude: 105.770001,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 30,
            name: "Perairan Pulau Bakauheni",
            latitude: -5.851713,
            longitude: 105.672669,
            fishSpecies: "Recomendation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 31,
            name: "Perairan Pulau Bakauheni",
            latitude: -5.876901,
            longitude: 105.713095,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 32,
            name: "Perairan Pulau Sragi",
            latitude: -5.6106505,
            longitude: 105.9684784,
            fishSpecies: "Recomandation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 33,
            name: "Perairan Pulau Sragi",
            latitude: -5.6315929,
            longitude: 105.8205321,
            fishSpecies: "Not Recomendation For Fishing Zone",
            depth: 20,
            description: "Merah",
          },
          {
            id: 34,
            name: "Perairan Pulau Ketapang",
            latitude: -5.8079311,
            longitude: 105.7945418,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 35,
            name: "Perairan Pulau Ketapang",
            latitude: -5.8379552,
            longitude: 105.7821001,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
            depth: 20,
            description: "Kuning",
          },
          {
            id: 36,
            name: "Perairan Pulau Ketapang",
            latitude: -5.7862632,
            longitude: 105.8478782,
            fishSpecies: "Recomandation For Fishing Zone",
            depth: 20,
            description: "Hijau",
          },
          {
            id: 37 ,
            name: "Perairan Pulau RajaBasa",
            latitude: -6.138291, 
            longitude: 105.419019,
            fishSpecies: "Not Recomendation For Fishing Zone",
            description: "Merah",
          },
          {
            id: 38,
            name: "Perairan Pulau RajaBasa",
            latitude: -6.002130, 
            longitude: 105.323706,
            fishSpecies: "Recomendation For Fishing Zone ",
           
            description: "Hijau",

          },
          {
            id: 39,
            name: "Perairan Pulau RajaBasa",
            latitude: -5.925189,
            longitude: 105.272430,
            fishSpecies: "Recomendation For Fishing Zone ",
            description: "Hijau",
          },
          {
            id: 40 ,
            name: "Perairan Pulau RajaBasa",
            latitude: -6.018780, 
            longitude: 105.446000,
            fishSpecies: "Recomendation For Fishing Zone ",
            description:  "Hijau",
          },
          {
            id: 41 ,
            name: "Perairan Pulau RajaBasa",
            latitude: -5.977210, 
            longitude: 105.286336,
            fishSpecies: " Recomendation For Fishing Zone ",

            description: "Hijau",
          },
          {
            id: 42 ,
            name: "Perairan Pulau Katibung",
            latitude: -5.578204, 
            longitude: 105.323566,
            fishSpecies: "No Recomendation For Fishing Zone ",
           
            description: "Kuning",

          },
          {
            id: 43 ,
            name: "Perairan Pulau Katibung",
            latitude: -5.688091, 
            longitude: 105.321257,
            fishSpecies: "No Recomendation For Fishing Zone ",
            description: "Kuning",
          },
          {
            id: 44 ,
            name: "Perairan Pulau RajaBasa",
            latitude: -5.860299, 
            longitude: 105.322473,
            fishSpecies: "Recomendation For Fishing Zone ",
            description: "Hijau"
          },
          {
            id: 45 ,
            name: "Perairan Pulau Ketapang",
            latitude: -5.805618, 
            longitude: 105.830236,
            fishSpecies: " Recomendation For Fishing Zone ",

            description: "Hijau",
          },
          {
            id: 46 ,
            name: "Perairan Pulau Ketapang",
            latitude: -5.797229, 
            longitude:  105.795368,
            fishSpecies: "Not Recomendation For Fishing Zone ",
           
            description: "Merah",

          },
          {
            id: 47 ,
            name: "Perairan Pulau Ketapang",
            latitude: -5.793361, 
            longitude: 105.807158,
            fishSpecies: "Not highly recommended for fishing, but it Remains Feasible",
           
            description: "Kuning",

          },
          {
            id: 48 ,
            name: "Perairan Pulau Ketapang",
            latitude: -5.782976, 
            longitude: 105.876403,
            fishSpecies: "Recomendation For Fishing Zone ",
           
            description: "Hijau",

          },
          {
            id: 49 ,
            name: "Perairan Pulau Ketapang",
            latitude: -5.730094, 
            longitude: 105.846506,
            fishSpecies: "Recomendation For Fishing Zone ",
           
            description: "Hijau",

          },
          {
            id: 50 ,
            name: "Perairan Pulau Bakauheni",
            latitude: -5.934587, 
            longitude: 105.750588,
            fishSpecies: "Recomendation For Fishing Zone ",
           
            description: "Hijau",
          }
          
        ];
        setFishingSpots(data);
      } catch (error) {
        console.error("Error fetching fishing spots:", error);
      }
    };

    fetchFishingSpots();
  }, []);

  // Fungsi untuk menentukan ikon berdasarkan deskripsi
  const getIconByDescription = (description) => {
    let iconUrl;
    switch (description) {
      case "Kuning":
        iconUrl = IconKuning;
        break;
      case "Merah":
        iconUrl = IconMerah;
        break;
      case "Hijau":
        iconUrl = IconHijau;
        break;
      default:
        iconUrl = IconKuning; // Default jika tidak cocok
    }

    return new L.Icon({
      iconUrl: iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };
  const exportToCSV = () => {
    const csvContent = fishingSpots.map(spot =>
      `${spot.id},${spot.name},${spot.latitude},${spot.longitude},${spot.description},${spot.fishSpecies}`
    );
    const header = "ID,Name,Latitude,Longitude,Kateori Klorofil,Description\n";
    const blob = new Blob([header + csvContent.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "fishing_spots.csv";
    link.click();
  };

  return (
    <div className="relative w-full h-screen">
      {/* Tombol Ekspor CSV */}
      <div className="absolute top-4 right-4 z-[1000]">
        <button
          onClick={exportToCSV}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
        >
          Ekspor ke CSV
        </button>
      </div>
      <MapContainer center={[-5.6841, 105.6213]} zoom={10} scrollWheelZoom={true} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {fishingSpots.map((spot) => (
          <Marker
            key={spot.id}
            position={[spot.latitude, spot.longitude]}
            icon={getIconByDescription(spot.description)}
          >
            <Popup>
              <div className="p-4 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-greenCustom-100">{spot.name}</h3>
                <p className="text-sm text-gray-600 mt-2">Kategori: {spot.description}</p>
                <p className="text-sm text-gray-600 mt-2">{spot.fishSpecies}</p>
                <p className="text-sm italic text-gray-600 ">Longtitude: {spot.longitude} </p>
                <p className="text-sm italic text-gray-600 ">Latitude: {spot.latitude} </p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Legend inside MapContainer */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-lg shadow-md z-[1000]">
          <h4 className="font-bold text-gray-700">Legenda Klorofil</h4>
          <div className="mt-2">
            <div className="flex items-center mb-2">
              <span className="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Tinggi</span>
            </div>
            <div className="flex items-center mb-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Sedang</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
              <span className="text-sm text-gray-600">Rendah</span>
            </div>
          </div>
        </div>
      </MapContainer>
    </div>
  );
};

export default Maps;
