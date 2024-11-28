import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-greenCustom-100 text-white py-4">
      <div className="container mx-auto px-4 md:px-8">
        {/* Bagian Atas Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-4 mb-4">
          {/* Logo dan Deskripsi */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-xl font-bold">Nice Eagle Eze</h1>
            <p className="text-sm mt-2">
              Your trusted partner in providing WebGIS solutions and insightful data visualization.
            </p>
          </div>

          {/* Media Sosial */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/annisa._.ms/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram Annisa"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.instagram.com/ou.kayyy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram Oukayy"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.instagram.com/ezze19/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram Ezze"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Bagian Bawah Footer */}
        <div className="text-center text-sm">
          <p>&#169; 2024 Nice Eagle Eze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
