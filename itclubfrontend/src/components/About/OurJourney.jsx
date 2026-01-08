import React from 'react';

const OurJourney = () => {
  const data = [
    { year: "2013", title: "The Genesis", desc: "Incorporated under Ministry of Corporate Affairs." },
    { year: "2018", title: "Global Milestone", desc: "Achieved ISO 9001:2015 certification for quality management." },
    { year: "2026", title: "Nationwide Scale", desc: "Reaching millions through decentralized development models." }
  ];

  return (
    <section className="mb-32">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-4">
        <h2 className="text-5xl font-black text-it-blue tracking-tighter uppercase">Our <span className="text-it-green">Journey</span></h2>
        <div className="hidden md:block h-px flex-grow mx-10 bg-gray-200"></div>
        <p className="text-it-red font-black text-xs uppercase tracking-widest italic">A Legacy of Service</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {data.map((item, i) => (
          <div key={i} className="group p-10 border-l border-gray-100 first:border-l-0 hover:bg-slate-50 transition-colors relative">
            <span className="text-6xl font-black text-gray-100 group-hover:text-it-green/20 transition-colors absolute top-4 right-8">{item.year}</span>
            <div className="relative z-10">
              <h4 className="text-2xl font-black text-it-blue mb-4 group-hover:text-it-green transition-colors">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurJourney;