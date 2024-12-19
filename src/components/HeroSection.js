import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center w-full py-0 mb-0">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row lg:justify-start lg:gap-x-12 items-start">
        {/* Left Text Section */}
        <div className="text-left lg:w-1/2">
          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-blue-950 mb-6">
            We turn <br />
            <span className="relative inline-block">
              <span className="absolute bottom-2 left-0 w-full h-5 bg-lime-300 -z-10"></span>
              Data into Value.
            </span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed font">
            Seamlessly connecting to farms anytime, anywhere, empowering farmers
            with relevant knowledge to be more efficient and sustainable.
          </p>
          <div className="mt-8">
            <a
              href="/book-demo"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Book a Demo →
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative lg:w-1/2 flex justify-center lg:justify-start">
          {/* Hero Image */}
          <img
            src="sheep-img.png"
            alt="Hero Illustration"
            className="w-auto h-80 lg:w-full max-w-lg"
          />

          {/* Floating Indicators */}
          <div className="absolute top-0 lg:left-10 flex flex-col space-y-6">
            <div className="bg-white p-3 lg:p-4 shadow-lg rounded-lg text-center transform translate-x-4 hover:scale-105 transition-all duration-300">
              <p className="text-sm lg:text-base text-gray-700 font-semibold">
                76% Humidity
              </p>
            </div>
            <div className="bg-white p-3 lg:p-4 shadow-lg rounded-lg text-center transform -translate-x-4 hover:scale-105 transition-all duration-300">
              <p className="text-sm lg:text-base text-gray-700 font-semibold">
                90% Light
              </p>
            </div>
            <div className="bg-white p-3 lg:p-4 shadow-lg rounded-lg text-center transform translate-x-4 hover:scale-105 transition-all duration-300">
              <p className="text-sm lg:text-base text-gray-700 font-semibold">
                25°C Temperature
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
