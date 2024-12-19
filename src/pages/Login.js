import React, { useState } from "react";
import { Link } from "react-scroll";

const Login = () => {
  const [notificationVisible, setNotificationVisible] = useState(true); // State to show/hide notification
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Function to close the notification
  const closeNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Login Form Container */}
      <div className="p-8 rounded-lg w-96 relative z-0">
        {/* Notification Box */}
        {notificationVisible && (
          <div className="absolute top-[130px] left-0 w-full p-4 bg-blue-500 text-sm text-blue-950 rounded-lg shadow-md z-10">
            <div>
              <p>
                Farmcontrol reports that the voice call notification service is
                already active, in addition to the SMS notification service. The
                use of this service has an additional cost, check Fair Policy. All
                voice call notifications now come from the following number:
                <br />
                <b>+351 965 965 367</b>
              </p>
              <p className="mt-2">
                <b>Fair Policy</b>: No additional costs up to 300 SMS/month, €0.07
                per SMS, after exceeding the monthly limit. €0.10 cost per phone
                call.
              </p>
              <p className="mt-2">For any further information, please contact: info@farmcontrol.com</p>
            </div>
            <button
              onClick={closeNotification}
              className="absolute top-0 right-0 text-blue-950 font-bold text-xl mr-4 mt-2"
            >
              ×
            </button>
          </div>
        )}

        {/* Login Form */}
        <div>
          <div className="flex justify-center mb-6">
            <Link to="/">
              <img
                src="/logo.png"
                alt="FarmControl Logo"
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex flex-col">
              <div className="flex font-semibold text-3xl text-blue-950">
                <b>farm</b>
                <p className="font-thin">Control</p>
              </div>
              <span className="text-xs text-blue-950">SMART LIVESTOCK MANAGER</span>
            </div>
          </div>
          <h2 className="text-center text-xl text-gray-300 font-thin mb-6">Welcome</h2>
          <span className="text-center text-sm text-gray-300 font-thin">
            Please enter your credentials and sign in to your account.
          </span>

          <form className="space-y-4 mt-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
              required
            />
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"} // Toggle password type
                name="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {passwordVisible ? "Hide" : "Show"} {/* Show or Hide text */}
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-lime-500 text-white font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-600">
            <a href="#" className="text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <div className="mt-2 text-center text-sm text-gray-600">
            <a href="#" className="text-gray-500 hover:underline">
              Terms of Use
            </a>{" "}
            | 
            <a href="#" className="text-gray-500 hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
