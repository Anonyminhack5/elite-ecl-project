
import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 px-6 bg-[#f8fdfd]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-teal-500 mb-4 block">Our Visionaries</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">The Minds Behind <br/> <span className="text-gray-400">Elite Group</span></h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-gray-500 leading-relaxed font-medium">
              Experience the combined expertise of our dedicated leadership team. We are committed to redefining the standards of cleaning through innovation and excellence.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className="group relative">
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] mb-6 bg-white shadow-xl shadow-gray-200/40">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-[9px] font-bold uppercase tracking-widest mb-1 opacity-80">{member.role}</p>
                  <p className="text-white text-xs font-black uppercase tracking-tight">{member.name}</p>
                </div>
              </div>
              <div className="px-2">
                <h3 className="text-xs font-black text-gray-900 group-hover:text-teal-600 transition-colors uppercase tracking-tight leading-tight">{member.name}</h3>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
