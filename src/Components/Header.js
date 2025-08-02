import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

// Komponen ikon SVG dengan gradient agar tidak mengulang kode
function GradientIcon({ d, size = 30 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="url(#icon-gradient)"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 hover:scale-110"
    >
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3b82f6" }} /> {/* blue-500 */}
          <stop offset="50%" style={{ stopColor: "#a855f7" }} /> {/* purple-500 */}
          <stop offset="100%" style={{ stopColor: "#ec4899" }} /> {/* pink-500 */}
        </linearGradient>
      </defs>
      <path d={d} />
    </svg>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;
  const location = useLocation(); // Untuk mendeteksi perubahan halaman

  // Tutup menu mobile setiap kali pindah halaman
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Kelas untuk NavLink agar bisa dinamis
  const navLinkClass = ({ isActive }) =>
    `font-medium pb-1 transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        : "text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:bg-clip-text hover:text-transparent"
    }`;

  return (
    // Header dibuat fixed dengan background blur
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 max-w-7xl">
        {/* Logo */}
        <NavLink to="/">
          <img className="w-12 h-12" src={logos.logogradient} alt="logo" />
        </NavLink>

        {/* Tombol Hamburger Menu */}
        <div onClick={toggleMenu} className="cursor-pointer md:hidden">
          <svg
            className="stroke-gray-900 dark:stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625M1.4375 6.3125H14.5625"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
            <li><NavLink to="/technologies" className={navLinkClass}>Technologies</NavLink></li>
            <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
          </ul>
          <ul className="flex items-center space-x-5">
            <li><a href={twitter} target="_blank" rel="noopener noreferrer"><GradientIcon d="M25.949 11.253c.01.157.01.317.01.478 0 4.915-3.743 10.577-10.583 10.577-2.11 0-4.065-.613-5.712-1.668.29.034.578.048.886.048 1.741 0 3.341-.589 4.617-1.587-1.634-.03-3.007-1.102-3.483-2.575.572.109 1.121.088 1.706-.065-1.84-.37-3.23-1.98-3.23-3.953v-.05c.53.295 1.13.473 1.76.495-1.55-1.04-2.57-2.82-2.57-4.838 0-.965.26-1.858.71-2.615 1.98 2.43 4.93 4.02 8.3 4.205-.52-2.52 1.36-4.57 3.63-4.57 1.07 0 2.03.45 2.71 1.17.84-.16 1.64-.47 2.36-.9.28.86-.42 1.58-1.19 2.04.75-.08 1.47-.29 2.14-.58-.5 1.04-1.13 1.95-1.85 2.71z" /></a></li>
            <li><a href={linkdein} target="_blank" rel="noopener noreferrer"><GradientIcon d="M22.125 20.968H19.209v-5.2c0-1.21-.42-2.03-1.47-2.03-1.05 0-1.53.56-1.74 1.1.08.19.09.46.09.73v5.4h-2.91v-9.39h2.53l.13 1.3h.06c.38-.61 1.32-1.51 2.89-1.51 2 0 3.44 1.29 3.44 4.05v5.85zM9.999 10.432c-1.02 0-1.51-.65-1.51-1.46 0-.82.49-1.46 1.53-1.46 1.04 0 1.51.64 1.53 1.46 0 .81-.49 1.46-1.55 1.46zM8.56 20.968h2.91V11.583H8.56v9.385z" /></a></li>
            <li><a href={github} target="_blank" rel="noopener noreferrer"><GradientIcon d="M15 0C6.712 0 0 6.712 0 15c0 6.625 4.294 12.231 10.256 14.219.75.131 1.031-.35 1.031-.756 0-.356-.019-1.531-.019-2.781-3.75.694-4.525-1.612-4.525-1.612-.688-1.75-1.688-2.219-1.688-2.219-1.35-.919.113-.9.113-.9 1.5.113 2.288 1.531 2.288 1.531 1.35 2.312 3.544 1.65 4.406 1.269.131-.981.525-1.65 1.013-2.031-3.338-.375-6.844-1.688-6.844-7.462 0-1.65.581-3 1.575-4.05-.15-.375-.675-1.912.15-4.012 0 0 1.256-.4 4.125 1.531 1.2-.338 2.475-.5 3.75-.5s2.55.162 3.75.5c2.869-1.931 4.125-1.531 4.125-1.531.825 2.1.3 3.637.15 4.012.994 1.05 1.575 2.4 1.575 4.05 0 5.794-3.506 7.088-6.863 7.462.581.487 1.031 1.462 1.031 2.962 0 2.156-.019 3.869-.019 4.394 0 .406.281.887 1.031.75C25.706 27.231 30 21.625 30 15 30 6.712 23.288 0 15 0z" /></a></li>
          </ul>
        </nav>

        {/* Navigasi Mobile */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900">
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              <ul className="text-2xl font-medium flex flex-col items-center gap-8">
                <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
                <li><NavLink to="/technologies" className={navLinkClass}>Technologies</NavLink></li>
                <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
                <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
              </ul>
              <ul className="flex items-center space-x-8 mt-4">
                <li><a href={twitter} target="_blank" rel="noopener noreferrer"><GradientIcon d="M25.949 11.253c.01.157.01.317.01.478 0 4.915-3.743 10.577-10.583 10.577-2.11 0-4.065-.613-5.712-1.668.29.034.578.048.886.048 1.741 0 3.341-.589 4.617-1.587-1.634-.03-3.007-1.102-3.483-2.575.572.109 1.121.088 1.706-.065-1.84-.37-3.23-1.98-3.23-3.953v-.05c.53.295 1.13.473 1.76.495-1.55-1.04-2.57-2.82-2.57-4.838 0-.965.26-1.858.71-2.615 1.98 2.43 4.93 4.02 8.3 4.205-.52-2.52 1.36-4.57 3.63-4.57 1.07 0 2.03.45 2.71 1.17.84-.16 1.64-.47 2.36-.9.28.86-.42 1.58-1.19 2.04.75-.08 1.47-.29 2.14-.58-.5 1.04-1.13 1.95-1.85 2.71z" size={36} /></a></li>
                <li><a href={linkdein} target="_blank" rel="noopener noreferrer"><GradientIcon d="M22.125 20.968H19.209v-5.2c0-1.21-.42-2.03-1.47-2.03-1.05 0-1.53.56-1.74 1.1.08.19.09.46.09.73v5.4h-2.91v-9.39h2.53l.13 1.3h.06c.38-.61 1.32-1.51 2.89-1.51 2 0 3.44 1.29 3.44 4.05v5.85zM9.999 10.432c-1.02 0-1.51-.65-1.51-1.46 0-.82.49-1.46 1.53-1.46 1.04 0 1.51.64 1.53 1.46 0 .81-.49 1.46-1.55 1.46zM8.56 20.968h2.91V11.583H8.56v9.385z" size={36} /></a></li>
                <li><a href={github} target="_blank" rel="noopener noreferrer"><GradientIcon d="M15 0C6.712 0 0 6.712 0 15c0 6.625 4.294 12.231 10.256 14.219.75.131 1.031-.35 1.031-.756 0-.356-.019-1.531-.019-2.781-3.75.694-4.525-1.612-4.525-1.612-.688-1.75-1.688-2.219-1.688-2.219-1.35-.919.113-.9.113-.9 1.5.113 2.288 1.531 2.288 1.531 1.35 2.312 3.544 1.65 4.406 1.269.131-.981.525-1.65 1.013-2.031-3.338-.375-6.844-1.688-6.844-7.462 0-1.65.581-3 1.575-4.05-.15-.375-.675-1.912.15-4.012 0 0 1.256-.4 4.125 1.531 1.2-.338 2.475-.5 3.75-.5s2.55.162 3.75.5c2.869-1.931 4.125-1.531 4.125-1.531.825 2.1.3 3.637.15 4.012.994 1.05 1.575 2.4 1.575 4.05 0 5.794-3.506 7.088-6.863 7.462.581.487 1.031 1.462 1.031 2.962 0 2.156-.019 3.869-.019 4.394 0 .406.281.887 1.031.75C25.706 27.231 30 21.625 30 15 30 6.712 23.288 0 15 0z" size={36} /></a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;