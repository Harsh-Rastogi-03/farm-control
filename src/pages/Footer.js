import React from "react";

const Footer = () => {
  return (
    <footer className=" py-10 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-start mb-12">
          {/* Logo and Contact Information */}
          <div className="mb-12 md:mb-0">
            <img
              src="logo.png" // Replace with your logo URL
              alt="Farmcontrol Logo"
              className="mb-4"
            />
            <p className="text-gray-700">
              Rua Alfredo da Silva 12, 2610-016 Alfragide - Portugal
            </p>
            <p className="text-gray-700">Tel: +351 927 353 721</p>
            <p className="text-gray-700">info@farmcontrol.com</p>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-twitter fa-lg"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ml-[180px]">
            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-950">Products</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    IoT Cloud Platform
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Smart Stock Manager
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Smartbox Master
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Smartbox Wireless
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Smartbox One
                  </a>
                </li>
              </ul>
            </div>

            {/* Solutions by Business */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-950">Solutions by Business</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-500">
                    Poultry Production
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Beef Production
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Pig Production
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Lamb Production
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Dairy Production
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Agriculture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Industry
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-950">Company</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Book a Demo
                  </a>
                </li>
              </ul>
            </div>

            {/* Login */}
            <div>
              <h4 className="text-lg font-semibold mb-2 text-blue-950">Log In</h4>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row md:justify-between items-center text-gray-700 text-xs">
          <p>© 2023 Farmcontrol. All rights reserved. | Designed by The Double Studio</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img
              src="https://via.placeholder.com/50" // Replace with the PRR logo
              alt="PRR"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/50" // Replace with the EU logo
              alt="EU Logo"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/50" // Replace with another logo
              alt="Lisboa 2020"
              className="h-6"
            />
            <img
              src="https://via.placeholder.com/50" // Replace with Portugal logo
              alt="Portugal 2020"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
