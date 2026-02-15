
import React from 'react';
import { SERVICES } from '../constants';
import { redirectToWhatsApp } from '../services/whatsappService';

const ServicesGrid: React.FC = () => {
  // Specifically curated images to match the 7 services in order
  const serviceImages = [
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600', // Residential
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600', // Commercial
    'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=600', // Deep Clean
    'https://images.unsplash.com/photo-1505798577917-a65157d3320a?auto=format&fit=crop&q=80&w=600', // Post-Construction
    'https://images.unsplash.com/photo-1603631350018-94c65a5d2227?auto=format&fit=crop&q=80&w=600', // Move-in/Move-out
    'https://images.unsplash.com/photo-1545173168-9f1947e96a3e?auto=format&fit=crop&q=80&w=600', // Laundry & Ironing
    'https://images.unsplash.com/photo-1562016600-ece13e8ba570?auto=format&fit=crop&q=80&w=600', // Window Cleaning
  ];

  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Sparkling Touch</h2>
            <div className="w-12 h-1 bg-teal-500 rounded-full mb-6"></div>
            <p className="text-sm font-bold text-teal-600 uppercase tracking-widest animate-pulse border-l-4 border-teal-500 pl-4">
              Select the service you want and you'll start chatting immediately
            </p>
          </div>
          <div className="max-w-sm">
            <p className="text-xs text-gray-400 leading-relaxed font-medium">
              We deliver spotless spaces with care, precision, and a touch of sparkle. Experience the elite difference with our tailored professional solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5] cursor-pointer shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2"
              onClick={() => redirectToWhatsApp(service.name)}
            >
              <img 
                src={serviceImages[i] || 'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=600'} 
                alt={service.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
              
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] font-bold opacity-60 mb-2">0{i + 1}/</p>
                <h3 className="text-xl font-bold leading-tight uppercase tracking-tight mb-2">{service.name}</h3>
                <p className="text-[10px] text-gray-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-teal-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Book Now
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
