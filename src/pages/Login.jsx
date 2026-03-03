import React, { useState } from "react"; 
import { FaApple, FaGoogle, FaFacebookF, FaSun, FaMoon, FaStar } from "react-icons/fa";
import { useTheme } from "../themeContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { darkMode, setDarkMode } = useTheme();
  const navigate = useNavigate();

  // Add state to capture form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the full name to localStorage
    const fullName = `${firstName} ${lastName}`;
    localStorage.setItem("username", fullName);

    // Navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen font-sans transition-colors duration-500 relative">
      {/* Left Side */}
      <div className="w-1/2 p-12 flex flex-col justify-center bg-gradient-to-br dark:from-darkbg dark:to-darksurface from-gray-100 to-gray-200 text-gray-900 dark:text-white transition-colors duration-500 relative">
        {/* Logo + Theme toggle */}
        <div className="absolute top-4 left-6 flex items-center space-x-4">
          <div className="text-3xl font-bold text-teal-500 flex items-center">
            <span className="mr-2"></span>aps
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Features */}
        <h3 className="text-2xl font-semibold mb-3 mt-16">
          Expert level Cybersecurity in <span className="text-teal-400">hours,</span> not weeks.
        </h3>

        <h4 className="text-lg font-medium mt-4 mb-2">What’s included</h4>
        <ul className="space-y-2 list-disc list-inside text-gray-600 dark:text-gray-300">
          <li>Effortlessly spider and map targets to uncover hidden security flaws</li>
          <li>Deliver high-quality, validated findings in hours, not weeks</li>
          <li>Generate professional, enterprise-grade security reports automatically</li>
        </ul>

        <div className="mt-8 flex items-center space-x-2">
          <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <FaStar key={i} />)}</div>
          <p className="text-gray-600 dark:text-gray-300">Rated 4.5/5.0 (100k+ reviews)</p>
        </div>
      </div>

      {/* Right Side — Sign-up Form */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100 dark:bg-darksurface transition-colors duration-500">
        <div className="bg-white dark:bg-darkbg shadow-lg rounded-xl p-10 w-3/4 max-w-md transition-colors duration-500">
          {/* Heading inside form */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">Signup</h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              Already have an account?{" "}
              <span
                className="text-teal-500 hover:underline cursor-pointer"
                onClick={() => navigate("/")}
              >
                Login
              </span>
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-darksurface dark:text-white dark:border-gray-700"
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-darksurface dark:text-white dark:border-gray-700"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-darksurface dark:text-white dark:border-gray-700"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-darksurface dark:text-white dark:border-gray-700"
            />

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-gray-700 dark:text-gray-300 text-sm">
                I agree to the Terms and Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-400 transition"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center text-gray-500 dark:text-gray-400">or sign up with</div>
          <div className="flex justify-center space-x-4 mt-4">
            <button className="p-3 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <FaApple size={20} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <FaGoogle size={20} />
            </button>
            <button className="p-3 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <FaFacebookF size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;