import React from "react";
import { 
  FaTachometerAlt, FaProjectDiagram, FaSearch, FaCalendarAlt, 
  FaBell, FaCog, FaLifeRing, FaUserCircle 
} from "react-icons/fa";
import { useTheme } from "../themeContext";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { darkMode } = useTheme();

  // Sidebar links
  const links = [
    { icon: <FaTachometerAlt />, label: "Dashboard", to: "/dashboard" },
    { icon: <FaProjectDiagram />, label: "Projects", to: "/projects" },
    { icon: <FaSearch />, label: "Scans", to: "/scans" },
    { icon: <FaCalendarAlt />, label: "Schedule", to: "/schedule" },
    { icon: <FaBell />, label: "Notifications", to: "/notifications" },
    { icon: <FaCog />, label: "Settings", to: "/settings" },
    { icon: <FaLifeRing />, label: "Support", to: "/support" },
  ];

  return (
    <div className={`w-64 flex flex-col justify-between bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6 transition-colors duration-500`}>
      
      {/* Navigation links */}
      <div className="space-y-2">
        {links.map((link, i) => (
          <NavLink
            key={i}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-md transition-colors duration-300
               hover:bg-gray-200 dark:hover:bg-gray-800
               ${isActive ? "bg-teal-500 text-white" : "text-gray-700 dark:text-gray-300"}`
            }
          >
            <span className="text-lg">{link.icon}</span>
            <span className="font-medium">{link.label}</span>
          </NavLink>
        ))}
      </div>

      {/* User profile */}
      <div className="flex items-center space-x-3 mt-6 border-t border-gray-300 dark:border-gray-700 pt-4">
        <FaUserCircle size={36} className="text-gray-500 dark:text-gray-400" />
        <div>
          <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;