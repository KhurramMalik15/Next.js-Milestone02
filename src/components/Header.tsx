// import Link from 'next/link';
// components/Header.tsx

import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle the scroll event to change the header style
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);  // Change header style once scrolled 100px
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);  // Listen for scroll events
    return () => {
      window.removeEventListener('scroll', handleScroll);  // Cleanup on component unmount
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Content */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
          <a href="#index">
            <span className="text-red-600">M</span>KM 
          </a>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-red-600 transition-colors">Home</a>
            <a href="#About" className="hover:text-red-600 transition-colors">About us</a>
            <a href="#projects" className="hover:text-red-600 transition-colors">Projects</a>
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact us</a>
          </nav>
 
          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button className="text-3xl">
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
          </div>
        </div> 
      </div>
    </header>
  );
};

export default Header;

