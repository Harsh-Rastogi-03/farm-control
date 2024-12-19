import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLanguage = (lang) => {
    console.log("Language changed to:", lang);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-3 bg-white ">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img
            src="/logo.png"
            alt="FarmControl Logo"
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex flex-col">
          <div className=" flex font-semibold text-3xl text-blue-950 ">
            <b>farm</b><p className='font-thin'>Control</p>
          </div>
          <span className="text-xs text-blue-950">SMART LIVESTOCK MANAGER</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center">
        <ul className="flex items-center space-x-8 gap-4">
          <li>
            <Link to="/solutions" className="text-gray-800 hover:text-blue-500 font-xs">
              Solutions
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="text-gray-800 hover:text-blue-500 font-xs">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-gray-800 hover:text-blue-500 font-xs">
              Log In
            </Link>
          </li>
          <li>
            <Link to="/bookdemo">
              <button className="flex items-center space-x-2 bg-[#2C1B5C] text-white px-3 py-2 rounded-md hover:bg-[#1E1440] transition duration-300">
                <span>Book a Demo</span>
                <span>➔</span>
              </button>
            </Link>
          </li>
        </ul>

        {/* Language Dropdown */}
        <div
          className="relative ml-6 cursor-pointer"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {/* Current Flag */}
          <img
            src="/us-flag.png" // Default flag image in public directory
            alt="Language"
            className="h-6 w-auto"
          />

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-auto bg-white border border-gray-200 shadow-lg rounded-md">
              <ul>
                <li
                  onClick={() => changeLanguage('en')}
                  className="flex items-center px-1 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img src="/us-flag.png" alt="English" className="h-4 w-6 mr-2" />
                  
                </li>
                <li
                  onClick={() => changeLanguage('fr')}
                  className="flex items-center px-1 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img src="/fr-flag.png" alt="French" className="h-4 w-6 mr-2" />
                  
                </li>
                <li
                  onClick={() => changeLanguage('es')}
                  className="flex items-center px-1 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img src="/gr-flag.png" alt="Spanish" className="h-4 w-6 mr-2" />
                  
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
