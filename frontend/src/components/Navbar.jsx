import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaCertificate,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", href: "#home", icon: FaHome },
    { name: "About", href: "#about", icon: FaUser },
    { name: "Skills", href: "#skills", icon: FaCode },
    {
      name: "Certifications",
      href: "#certificates",
      icon: FaCertificate,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FaProjectDiagram,
    },
    { name: "Contact", href: "#contact", icon: FaEnvelope },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-4 w-[90%] max-w-4xl"
      >
        <div className="relative rounded-2xl border border-white/20 bg-linear-to-r from-red-600 to-red-800 px-3 py-2 shadow-2xl backdrop-blur-xl">
          <div className="absolute -top-5 right-3">
            <motion.button
              type="button"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`rounded-full p-2 transition-colors backdrop-blur-sm ${
                darkMode ? "bg-gray-100" : "bg-gray-900"
              }`}
            >
              {darkMode ? (
                <Sun className="h-4 w-4 text-black lg:h-5 lg:w-5" />
              ) : (
                <Moon className="h-4 w-4 text-white lg:h-5 lg:w-5" />
              )}
            </motion.button>
          </div>

          <div className="flex items-center justify-around gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveTab(item.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-1.5 sm:px-2"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -top-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-white"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <Icon
                    aria-hidden="true"
                    className={`h-4 w-4 lg:h-5 lg:w-5 ${
                      isActive
                        ? "text-white"
                        : "text-white/70 group-hover:text-white"
                    }`}
                  />

                  <span
                    className={`text-[8px] font-medium transition-colors duration-300 sm:text-[10px] ${
                      isActive
                        ? "text-white"
                        : "text-white/60 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
