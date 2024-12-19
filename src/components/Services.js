import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col items-center bg-blue-950 w-full min-h-screen">
      <h1 className="font-bold text-5xl text-white mt-20 mb-4 text-center">
        Our Services
      </h1>
      <p className="text-white text-center max-w-2xl mb-12">
        We know software usage can be daunting sometimes, so we created services to support you and help extract maximum value!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl">
        {/* Farmcare Premium Service */}
        <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
          <div className="text-4xl mb-4 flex justify-center">
            <i className="fas fa-headset"></i> {/* Replace with an appropriate SVG or icon */}
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Farmcare Premium Service</h3>
          <p className="text-center">
            Farmcare service provides online help and call support to farmers in order to assist them on daily software configurations and alarm analysis.
          </p>
        </div>
        {/* Pro Audits */}
        <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
          <div className="text-4xl mb-4 flex justify-center">
            <i className="fas fa-brain"></i> {/* Replace with an appropriate SVG or icon */}
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Pro Audits</h3>
          <p className="text-center">
            With our livestock expertise, we can help you improve your farm productivity. We can visit your farm and provide advice and guidance to achieve better performances.
          </p>
        </div>
        {/* Training Programs */}
        <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
          <div className="text-4xl mb-4 flex justify-center">
            <i className="fas fa-graduation-cap"></i> {/* Replace with an appropriate SVG or icon */}
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">Training Programs</h3>
          <p className="text-center">
            Technology adoption is easier when you have the best people to guide you. At FarmControl, we can provide class workshops or custom on-site programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
