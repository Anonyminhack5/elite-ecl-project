'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#fafdfd]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
           <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px]">
              <div className="absolute top-0 right-0 w-[80%] aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=600" alt="cleaning" className="w-full h-full object-cover" />
              </div>

              <div className="absolute -left-4 top-[30%] w-32 h-32 md:w-40 md:h-40 bg-[#d9fdd2] rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white transform hover:scale-105 transition-transform">
                <span className="text-xl md:text-2xl font-bold">30+</span>
                <span className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest text-center">Homes<br/>Cleaned</span>
              </div>

              <div className="absolute left-[15%] bottom-0 w-32 h-32 md:w-40 md:h-40 bg-[#e4e1ff] rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white transform hover:scale-105 transition-transform">
                <span className="text-xl md:text-2xl font-bold">10+</span>
                <span className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest text-center">Years Of<br/>Experience</span>
              </div>

              <div className="absolute right-0 bottom-[10%] w-28 h-28 md:w-32 md:h-32 bg-[#ffefdb] rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white transform hover:scale-105 transition-transform">
                <span className="text-xl md:text-2xl font-bold">98%</span>
                <span className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-widest text-center">Satisfaction</span>
              </div>
           </div>
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Bringing Shine And Comfort To Every <span className="text-teal-500 italic font-serif font-normal">Space</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg font-medium">
            Elite Cleaning Service provides premium hygiene solutions with a personal touch. We believe that a pristine environment is the foundation of a healthy and happy lifestyle.
          </p>
          
          <ul className="space-y-4">
            {['Customized Cleaning Plans', 'Professional Grade Equipment', 'Reliable and Insured Team'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-xs font-bold text-gray-700">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
