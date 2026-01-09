import React from 'react';

const VisionMission = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 mt-2">
      
      {/* VISION CARD */}
      <div className="group relative bg-white p-10 md:p-12 rounded-[2rem] border border-it-blue/10 transition-all duration-500 hover:bg-it-blue cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl">
        {/* Accent line */}
        <div className="absolute top-0 left-0 w-1 h-full transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 flex items-center justify-center bg-gray-50 text-it-blue rounded-full text-sm group-hover:bg-white transition-all">🎯</span>
            {/* Small Uppercase Title */}
            <h3 className="text-it-blue font-bold text-[9px] uppercase tracking-[0.4em] group-hover:text-it-green transition-colors">Our Vision</h3>
          </div>
          
          {/* Main text reduced to text-lg and leading-relaxed for sophistication */}
          <p className="text-sm md:text-base font-medium text-it-blue/80 leading-relaxed group-hover:text-white transition-colors duration-300">
            To eliminate social disparity through the <span className="text-it-green italic font-bold">seamless integration</span> of technology and human compassion, reaching every doorstep.
          </p>
          
          <div className="mt-10 pt-6 border-t border-gray-50 group-hover:border-white/5 flex items-center justify-between">
            <span className="text-[8px] font-bold text-gray-300 uppercase tracking-[0.2em] group-hover:text-it-green transition-colors">Vision 2030</span>
            <div className="h-[1px] w-6 bg-gray-200 group-hover:w-12 group-hover:bg-it-green transition-all duration-500"></div>
          </div>
        </div>
      </div>

      {/* MISSION CARD */}
      <div className="group relative bg-white p-10 md:p-12 rounded-[2rem] border border-it-blue/10 transition-all duration-500 hover:bg-it-blue cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl">
        {/* Background icon reduced opacity */}
        <div className="absolute -bottom-6 -right-6 text-7xl text-gray-50 font-black select-none group-hover:text-white/5 transition-all duration-500">🚀</div>
        
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 flex items-center justify-center bg-gray-50 text-it-blue rounded-full text-sm group-hover:rotate-[360deg] transition-all duration-700">🚀</span>
            <h3 className="text-it-blue font-black text-[9px] uppercase tracking-[0.4em] group-hover:text-it-green transition-colors">Our Mission</h3>
          </div>
          
          <p className="text-sm md:text-base font-medium text-it-blue/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            To execute life-cycle based integrated development programs in education and healthcare, building a <span className="text-it-green font-bold italic">self-reliant nation</span> for future generations.
          </p>

          <div className="mt-10 pt-6 border-t border-gray-50 group-hover:border-white/5 flex items-center justify-between">
            <span className="text-[8px] font-bold text-gray-300 uppercase tracking-[0.2em] group-hover:text-it-green transition-colors">Strategic Goal</span>
            <div className="h-[1px] w-6 bg-gray-200 group-hover:w-12 group-hover:bg-it-green transition-all duration-500"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default VisionMission;