import React from "react";

const testimonials = [
  {
    id: 1,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "Artemis Agiomavriti",
    company: "Telefarm Greece - Technology Company",
    text: "We have installed Farmcontrol system in several farms through the last year with great success...",
  },
  {
    id: 2,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "André Barão",
    company: "Barão & Barão - Dairy Producer",
    text: "Farmcontrol can be clearly defined with 3 major attributes: flexibility, availability...",
  },
  {
    id: 3,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "António Luís",
    company: "Swine Producer",
    text: "With Farmcontrol we can make informed decisions based on real data...",
  },
  {
    id: 4,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "John Doe",
    company: "Farmer Pro",
    text: "Farmcontrol has helped us streamline operations like never before!",
  },
  {
    id: 4,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "John Doe",
    company: "Farmer Pro",
    text: "Farmcontrol has helped us streamline operations like never before!",
  },
  {
    id: 4,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "John Doe",
    company: "Farmer Pro",
    text: "Farmcontrol has helped us streamline operations like never before!",
  },
  {
    id: 4,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "John Doe",
    company: "Farmer Pro",
    text: "Farmcontrol has helped us streamline operations like never before!",
  },
  {
    id: 4,
    logo: "https://via.placeholder.com/100", // Replace with actual logo URL
    name: "John Doe",
    company: "Farmer Pro",
    text: "Farmcontrol has helped us streamline operations like never before!",
  },
];

const TestimonialScroll = () => {
  return (
    <div className="w-full mx-auto px-6 py-10 mb-[80px]">
      <h2 className="text-3xl font-bold text-center mb-8">What customers say about Farmcontrol
      </h2>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-[250px] flex-shrink-0 bg-white p-6 rounded-lg hover:shadow-md  text-center overflow-hidden "
            >
              <img
                src={testimonial.logo}
                alt={`${testimonial.name} Logo`}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600 mb-2">{testimonial.company}</p>
              <p className="text-gray-700 text-sm">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialScroll;
