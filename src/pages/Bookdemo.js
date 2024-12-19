import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    demoDate: '',
    demoTime: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending the data to the backend.
    console.log('Form Data:', formData);
    alert('Your demo request has been submitted!');
  };

  return (
    <div>
      <main className="pt-20 px-8">
        <div className="max-w-screen-lg mx-auto bg-white p-8 rounded-lg shadow-lg mt-8 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section: Form */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl text-center font-semibold text-blue-950 mb-6">
              Book a Demo
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="demoDate" className="text-sm text-gray-700">Preferred Demo Date</label>
                <input
                  type="date"
                  id="demoDate"
                  name="demoDate"
                  value={formData.demoDate}
                  onChange={handleInputChange}
                  required
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="demoTime" className="text-sm text-gray-700">Preferred Demo Time</label>
                <input
                  type="time"
                  id="demoTime"
                  name="demoTime"
                  value={formData.demoTime}
                  onChange={handleInputChange}
                  required
                  className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-lime-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="logo.png"  // Replace with your image path
              alt="Book a Demo"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;
