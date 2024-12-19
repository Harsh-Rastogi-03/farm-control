import React, { useState } from 'react';
import AdvantageCard from './AdvantageCard';

const MainAdvantagesSection = () => {
  const [selectedOption, setSelectedOption] = useState(0);

  const options = [
    { icon: '🌱', title: 'Sustainable Efficiency' },
    { icon: '📊', title: 'Data Analysis' },
    { icon: '⚙️', title: 'Equipment Control' },
  ];

  const optionCards = [
    {
      title: 'Full Automation',
      description:
        'Create custom automation rules to control windows, ventilation, lights, and more.',
      image: './sheep-img.png', // Replace with actual image URLs
      descriptions: [
        'Automate ventilation systems.',
        'Optimize energy usage for lighting.',
        'Control operations remotely.',
      ],
    },
    {
      title: 'Real-time Monitoring',
      description:
        'Track key parameters like temperature, humidity, and animal activity in real-time.',
      image: './sheep-img.png',
      descriptions: [
        'Live temperature tracking.',
        'Humidity monitoring.',
        'Animal activity alerts.',
      ],
    },
    {
      title: 'Predictive Analysis',
      description:
        'Anticipate potential issues and optimize farm operations for maximum efficiency.',
      image: './sheep-img.png',
      descriptions: [
        'Identify maintenance needs.',
        'Forecast productivity trends.',
        'Reduce downtime through analytics.',
      ],
    },
  ];

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <section className="container mx-auto py-16">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-950">Main Advantages</h2>
      <p className="text-gray-600 text-center mb-8 justify-center mx-10">
        Our system uses advanced sensors and software to provide real-time insights into every
        aspect of your farm. With this information at your fingertips, you can make data-driven
        decisions that lead to increased productivity, improved animal welfare, and greater
        profitability.
      </p>

      <div className="flex justify-center space-x-8">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`hover:shadow-md text-gray-500 rounded-lg px-6 py-4 ${
              selectedOption === index ? 'text-blue-500 shadow-md' : ''
            }`}
          >
            {option.icon} {option.title}
          </button>
        ))}
      </div>

      {selectedOption !== null && (
        <div className="mt-8">
          <AdvantageCard
            image={optionCards[selectedOption].image}
            title={optionCards[selectedOption].title}
            descriptions={optionCards[selectedOption].descriptions}
          />
        </div>
      )}
    </section>
  );
};

export default MainAdvantagesSection;
