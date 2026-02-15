
import React from 'react';
import { STATS } from '../constants';

const StatsBar: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto -mt-12 relative z-20 px-4 md:px-0">
      <div className="bg-[#111] rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {STATS.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
            {index < STATS.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-white/10" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
