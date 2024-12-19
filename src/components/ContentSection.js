import React from "react";

const ContentSection = () => {
  return (
    <section className="container  items-start mx-auto mb-20 mt-0">
      <div className="text-center mb-6 mt-0">
        <a
          href="/our-clients"
          className="text-s text-blue-950 hover:underline hover:text-blue-400"
        >
          Proud to work with leading producers
        </a>
      </div>
      <div className="flex justify-center items-center mb-4">
        <div className="container grid grid-cols-2 sm:grid-cols-4 gap-2 w-[80%] py-2 px-0">
          <img src="logo.png" alt="Grupo Jorge Logo" className="w-8 mx-auto" />
          <img src="logo.png" alt="Circulo Logo" className="w-8 mx-auto" />
          <img src="logo.png" alt="Valigrupo Logo" className="w-8 mx-auto" />
          <img src="logo.png" alt="Best Farmer Logo" className="w-8 mx-auto" />
          <img src="logo.png" alt="Agrupalto Logo" className="w-8 mx-auto" />
          <img src="logo.png" alt="Interaves Logo" className="w-8 mx-auto" />
          <img src="logo.png" alt="Agrupalto Logo" className="w-8 mx-auto" />
          <img src="logo.png" alt="Interaves Logo" className="w-8 mx-auto" />
        </div>
      </div>
      <div className="container px-6 py-8">
        <div className="flex justify-center gap-4  bg-gradient-to-b from-blue-950 to-black rounded-lg mx-[230px]">
          <div className="p-8 text-center text-white">
            <span className="text-4xl font-bold">+250</span>
            <p className="mt-2">Explorations</p>
          </div>
          <div className="p-8 text-center text-white">
            <span className="text-4xl font-bold">+250</span>
            <p className="mt-2">Explorations</p>
          </div>
          <div className="p-8 text-center text-white">
            <span className="text-4xl font-bold">+250</span>
            <p className="mt-2">Explorations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
