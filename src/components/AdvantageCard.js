import React from 'react';

const Card = ({ image, title, descriptions }) => {
  return (
    <div className="flex bg-gray-100 shadow-lg rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="w-1/3">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="w-2/3 p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
        {descriptions.map((desc, index) => (
          <p key={index} className="text-gray-600 mb-2 font-thin">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card;
