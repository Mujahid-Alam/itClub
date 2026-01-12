import React from 'react';

const OurJourney = () => {
  const data = [
    { year: "2022", title: "Expansion", desc: "Broadened our service portfolio and scaled operations to new regions." },
    { year: "2023", title: "Innovation", desc: "Integrated AI-driven solutions to enhance client delivery and efficiency." },
    { year: "2024", title: "Certification", desc: "Achieved elite industry standards for security and data management." },
    { year: "2025", title: "Digital Shift", desc: "Transitioned to a fully cloud-native infrastructure for global access." },
    { year: "2026", title: "Future Ready", desc: "Empowering millions through our decentralized development models." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Compact & Clean Header */}
        <div className="mb-16 max-w-xl">
          <p className="text-it-green font-bold text-[10px] uppercase tracking-[0.3em] mb-2">Milestones</p>
          <h2 className="text-3xl font-black text-it-blue uppercase tracking-tight leading-none">
            Strategic <span className="text-it-green">Growth</span>
          </h2>
          <div className="mt-4 w-12 h-1 bg-it-green/40"></div>
        </div>

        {/* Number Line Container */}
        <div className="relative">
          
          {/* Main Horizontal Line (Desktop) */}
          <div className="absolute top-[1.15rem] left-0 w-full h-[1px] bg-gray-100 hidden lg:block">
            {/* Animated progress highlight */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-it-green/40 via-it-blue/20 to-transparent"></div>
          </div>

          {/* Grid for 5 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {data.map((item, i) => (
              <div key={i} className="group relative">
                
                {/* Year Marker */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:border-it-green group-hover:shadow-md transition-all duration-300">
                    <div className="w-1.5 h-1.5 bg-it-green rounded-full opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all"></div>
                  </div>
                  <span className="text-xl font-black text-it-blue group-hover:text-it-green transition-colors">
                    {item.year}
                  </span>
                </div>

                {/* Content - Fixed height for alignment */}
                <div className="pl-2 border-l border-gray-50 group-hover:border-it-green/40 transition-all duration-500">
                  <h4 className="text-[13px] font-bold text-it-blue uppercase tracking-wider mb-2 group-hover:text-it-green transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Mobile/Tablet Spacer */}
                <div className="lg:hidden h-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;