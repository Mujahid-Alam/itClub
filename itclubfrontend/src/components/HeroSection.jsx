import React from 'react';

const HeroSection = ({
  backgroundText = "TITLE",
  topLabel = "Section",
  title = "PAGE",
  highlight = "NAME",
  footerText = "Overview"
}) => {
  return (
    <section className="bg-it-blue pt-0 pb-10 px-6 text-center relative overflow-hidden">
      
      {/* Big Background Text */}
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.19em] uppercase leading-none opacity-[0.12] absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        {backgroundText}
      </h1>

      <div className="relative z-10 pt-6">
        {/* Small top label */}
        <p className="text-it-green font-bold text-[9px] uppercase tracking-[0.6em] mb-2">
          {topLabel}
        </p>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
          {title} <span className="text-it-green italic">{highlight}</span>
        </h2>

        {/* Footer micro text */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-[1px] w-4 bg-white/10"></span>
          <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-semibold">
            {footerText}
          </p>
          <span className="h-[1px] w-4 bg-white/10"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
