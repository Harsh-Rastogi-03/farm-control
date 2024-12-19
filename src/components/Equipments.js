import React from 'react';

const Equipments = () => {
  const equipmentList = [
    {
      title: 'Smartbox Master',
      description: 'The complete custom solution for livestock farms',
      link: '#',
      image: 'smartbox-master.png', // Replace with your actual image path
    },
    {
      title: 'Smartbox Wireless',
      description: 'Industrial grade solution with lower cost of installation',
      link: '#',
      image: 'smartbox-master.png', // Replace with your actual image path
    },
    {
      title: 'Smartbox One',
      description: 'A simple, low cost animal welfare monitor',
      link: '#',
      image: 'smartbox-master.png', // Replace with your actual image path
    },
  ];

  return (
    <div className="flex flex-col items-center  py-20 px-4">
      <h1 className="text-4xl font-bold text-blue-950 mb-6">Our Equipments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {equipmentList.map((equipment, index) => (
          <div
            key={index}
            className="bg-white hover:shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <img
              src={equipment.image}
              alt={equipment.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {equipment.title}
            </h2>
            <p className="text-gray-600 text-center mb-4">
              {equipment.description}
            </p>
            <a
              href={equipment.link}
              className="text-blue-500 font-medium hover:underline"
            >
              See more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipments;
