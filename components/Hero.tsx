
import React, { useEffect, useState, useRef } from 'react';
import { redirectToWhatsApp } from '../services/whatsappService';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const height = window.innerHeight;
        // Divisor set to 5.0 for a significantly slower fade-out transition.
        const progress = Math.min(Math.max(-rect.top / (height * 5.0), 0), 1);
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = 1 - scrollProgress;

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative pt-48 pb-24 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Main Background Image - Multiple Cleaning Utensils */}
      <div className="absolute inset-0 -z-20">
        <img 
          src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=1920" 
          alt="Elite Cleaning Supplies Background" 
          className="w-full h-full object-cover"
        />
        {/* Reduced overlay opacity from 70% to 30% to make the image much more visible as requested */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />
        {/* Gradient to ensure bottom text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white" />
      </div>

      {/* Heading Group */}
      <div className={`text-center max-w-5xl mx-auto z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[1.0] mb-8 tracking-tighter text-gray-900 drop-shadow-xl">
          Creating Comfort <br className="hidden md:block" />
          <span className="italic font-serif text-teal-600 font-normal">Through</span> Cleanliness
        </h1>
        <p className="text-gray-900 text-sm md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-black uppercase tracking-widest bg-white/40 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
          Elite Cleaning Service: We bring spotless perfection and tranquility to your environment.
        </p>
      </div>

      {/* CTA Button */}
      <div className={`relative z-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <button 
          onClick={() => redirectToWhatsApp()}
          className="group px-10 md:px-16 py-5 md:py-8 bg-black text-white rounded-full font-bold text-[12px] md:text-sm uppercase tracking-[0.2em] flex items-center gap-6 hover:bg-teal-600 transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
        >
          <div className="p-2 md:p-3 bg-white rounded-full group-hover:rotate-45 transition-transform duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          Book Your Elite Service
        </button>
      </div>
    </section>
  );
};

export default Hero;
