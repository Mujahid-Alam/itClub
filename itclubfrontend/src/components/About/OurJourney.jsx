import React from 'react';

const OurJourney = () => {
  const data = [
    { year: "2013", title: "The Genesis", desc: "Incorporated under Ministry of Corporate Affairs." },
    { year: "2018", title: "Global Milestone", desc: "Achieved ISO 9001:2015 certification for quality management." },
    { year: "2026", title: "Nationwide Scale", desc: "Reaching millions through decentralized development models." }
  ];

  return (
    <section className="py-3 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header - Centered & Professional */}
        <div className="flex flex-col items-center text-center mb-3">
          <p className="text-it-red font-black text-[10px] uppercase tracking-[0.4em] mb-3 italic opacity-80">
            A Legacy of Service
          </p>
          <h2 className="text-4xl font-black text-it-blue tracking-tighter uppercase leading-none">
            Our <span className="text-it-green">Journey</span>
          </h2>
          {/* h-[1px] warning fix: border-t use kiya hai */}
          <div className="mt-3 w-30 border-t-2 border-it-green/40"></div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {data.map((item, i) => (
            <div 
              key={i} 
              className="group p-10 border-l border-gray-100 first:border-l-0 hover:bg-gray-50/50 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Year - Positioned for depth */}
              <span className="text-7xl font-black text-gray-100/60 group-hover:text-it-green/5 transition-colors absolute -top-2 -right-2 z-0 select-none">
                {item.year}
              </span>

              <div className="relative z-10">
                {/* Small Accent Dot */}
                <div className="w-8 h-1 bg-it-green/20 mb-6 group-hover:w-16 group-hover:bg-it-green transition-all duration-500"></div>
                
                <h4 className="text-2xl font-black text-it-blue mb-4 uppercase tracking-tight group-hover:text-it-green transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-it-green group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;