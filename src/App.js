import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import "leaflet/dist/leaflet.css";

import './App.css';
import Navbar from './component/Navbar';
import Landingpage from './component/landingpage';
import Footer from './component/Footer';

import Pagedatain from './component/Pageinfdat';
import About from './component/About';
import PageMap from './component/Maps';

const App = () => {
  const location = useLocation(); // Dapatkan jalur aktif

  // Tentukan apakah Navbar harus ditampilkan
  const shouldShowNavbar = location.pathname !== '/maps';

  return (
    <div className="App w-full m-0 p-0">
      {shouldShowNavbar && <Navbar />} {/* Render Navbar hanya jika bukan di /maps */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/maps" element={<PageMap />} />
        <Route path="/data" element={<Pagedatain />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
