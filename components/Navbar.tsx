
import React from 'react';
import { redirectToWhatsApp } from '../services/whatsappService';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl px-4 md:px-8 py-3 bg-white/80 backdrop-blur-xl rounded-full border border-gray-100 shadow-lg flex items-center justify-between transition-all duration-300">
      {/* Links - Hidden on very small screens */}
      <div className="hidden lg:flex items-center gap-6 lg:gap-8">
        <a href="#home" className="text-[12px] lg:text-[13px] font-bold text-gray-600 hover:text-teal-600 transition-colors">Home</a>
        <a href="#services" className="text-[12px] lg:text-[13px] font-bold text-gray-600 hover:text-teal-600 transition-colors">Services</a>
        <a href="#about" className="text-[12px] lg:text-[13px] font-bold text-gray-600 hover:text-teal-600 transition-colors">About Us</a>
      </div>

      {/* Center Logo */}
      <div className="flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2 text-center">
        <h2 className="text-sm md:text-base font-black uppercase tracking-tighter leading-tight text-gray-900">
          Elite<br/>
          <span className="text-[8px] md:text-[9px] tracking-[0.2em] font-light text-gray-400">Cleaning Service</span>
        </h2>
      </div>

      {/* CTA */}
      <div className="flex items-center gap-4">
        <a href="#team" className="text-[12px] font-bold text-gray-600 hover:text-teal-600 transition-colors mr-2">Team</a>
        <button 
          onClick={() => redirectToWhatsApp()}
          className="px-4 md:px-6 py-2 md:py-2.5 bg-black text-white rounded-full font-bold text-[10px] md:text-xs hover:bg-teal-600 transition-all active:scale-95 flex items-center gap-2"
        >
          <span className="hidden sm:inline w-2 h-2 bg-white rounded-full animate-pulse"></span>
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
