import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { FaHome, FaMapMarkerAlt, FaDatabase, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import Logomap from './logowebsite.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 w-full bg-gradient-to-r bg-greenCustom-100 text-white py-4 z-50 shadow-lg transition-colors duration-300 ${scrolling ? ' text-gray-100' : 'bg-gradient-to-r bg-greenCustom-100 text-white'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo di Kiri */}
        <div className="flex items-center">
          <img src={Logomap} alt="Logo Web" className="h-12 w-auto mr-4" />
        </div>
        
        {/* Tombol Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="ml-36 mr-8 text-white focus:outline-none">
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        {/* Menu di Tengah */}
        <nav className={`flex-1 md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-lg font-medium md:ml-52">
            {[
              { to: '/', icon: <FaHome />, text: 'Home' },
              { to: '/maps', icon: <FaMapMarkerAlt />, text: 'Maps' },
              { to: '/data', icon: <FaDatabase />, text: 'Data Information' },
              { to: '/about', icon: <FaInfoCircle />, text: 'About' },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className={`flex items-center space-x-2 hover:text-yellow-300 hover:scale-110 transition-transform ${scrolling ? 'text-black' : 'text-white'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;