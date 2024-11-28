import React from "react";
import { Link } from 'react-router-dom'; 
import logo from '../logowebsite.png';

const Navmap = () => {
  return (
    <nav className="flex items-center justify-between bg-greenCustom-100 p-4">
     
      <div className="flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-12"
        />
      </div>

      
      <div>
      <li>
              <Link
                to="/"
                  >
             
                <span className=" text-xl font-candal text-white">Home</span>
              </Link>
            </li>
      </div>
    </nav>
  );
};

export default Navmap;
