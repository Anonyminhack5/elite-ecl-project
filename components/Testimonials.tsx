
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-4xl font-bold max-w-xs leading-tight">Hear From Our Happy Customers</h2>
          <p className="text-[10px] text-gray-400 max-w-xs uppercase leading-loose font-bold tracking-widest">Real stories from our satisfied customers who experienced exceptional cleaning and reliable service.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Customer" className="w-full h-[400px] object-cover" />
          </div>

          <div className="lg:col-span-2 bg-[#f6f3ff] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-10 right-10 opacity-10">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
            </div>
            
            <p className="text-lg md:text-2xl font-medium leading-relaxed text-gray-800 mb-10">
              "Details Are Kind To Your Body And Pleasant To Look At. The Professional Skill And Compassion Were Evident. This Is A List Of Meticulous Work Done Mostly For High-Standard Clients."
            </p>
            
            <div>
              <p className="font-black text-sm uppercase tracking-widest">Jeremiah Tanner</p>
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Academic Advisor</p>
            </div>

            <div className="mt-10 flex gap-2">
              <div className="w-2.5 h-2.5 bg-black rounded-full" />
              <div className="w-2.5 h-2.5 bg-black/10 rounded-full" />
              <div className="w-2.5 h-2.5 bg-black/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
