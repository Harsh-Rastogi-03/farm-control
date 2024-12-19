import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white fixed bottom-0 left-0 w-full py-2 border-t border-gray-200 shadow-lg z-10">
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Logo 1 */}
          <img
            src="path-to-your-logo-1.png"
            alt="PRR Logo"
            className="h-10 object-contain"
          />
          {/* Logo 2 */}
          <img
            src="path-to-your-logo-2.png"
            alt="Republica Portuguesa"
            className="h-10 object-contain"
          />
          {/* Logo 3 */}
          <img
            src="path-to-your-logo-3.png"
            alt="European Union"
            className="h-10 object-contain"
          />
          {/* Logo 4 */}
          <img
            src="path-to-your-logo-4.png"
            alt="Lisboa 2020"
            className="h-10 object-contain"
          />
          {/* Logo 5 */}
          <img
            src="path-to-your-logo-5.png"
            alt="Portugal 2020"
            className="h-10 object-contain"
          />
        </div>

        {/* Optional: Bottom Line */}
        <div className="mt-4 text-center text-gray-500 text-sm">
          Powered by Harsh Rastogi | All Rights Reserved © 2024
        </div>
      </div>
    </footer>
  );
};

export default Footer;
