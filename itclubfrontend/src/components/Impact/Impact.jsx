import React from "react";

const impactStats = [
  {
    number: "1+ Lakh",
    label: "Lives Touched",
    icon: (
      <svg className="w-5 h-5 text-[rgb(29,63,180)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    bgIcon: "bg-blue-50",
    hoverBorder: "hover:border-blue-200",
  },
  {
    number: "100+",
    label: "Villages Reached",
    icon: (
      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    bgIcon: "bg-emerald-50",
    hoverBorder: "hover:border-emerald-200",
  },
  {
    number: "8+",
    label: "Active Projects",
    icon: (
      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    bgIcon: "bg-indigo-50",
    hoverBorder: "hover:border-indigo-200",
  },
  {
    number: "10+",
    label: "Indian States",
    icon: (
      <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    bgIcon: "bg-sky-50",
    hoverBorder: "hover:border-sky-200",
  },
];

export default function ImpactSection() {
  return (
    // पैडिंग py-20 से घटाकर py-14 (Medium) की
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800 py-14 px-4 relative overflow-hidden">
      
      {/* Background Saturated Decorative Bubbles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* SECTION HEADER (Size reduced to Medium) */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
            Our Milestone
          </span>
          <h2 className="text-2xl font-extrabold text-gray-900 mt-2 tracking-tight sm:text-3xl">
            Our Growing <span className="text-[rgb(29,63,180)] bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2 max-w-lg mx-auto font-medium">
            Transforming grassroots communities through scalable, technology-driven, and humanitarian initiatives.
          </p>
        </div>

        {/* STATS GRID (More compact margins and gaps) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className={`group flex flex-col items-center p-5 bg-white border border-gray-100/80 rounded-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_15px_25px_rgba(29,63,180,0.05)] ${stat.hoverBorder} relative overflow-hidden`}
            >
              {/* Top Bar Glow Effect */}
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-blue-500 to-it-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              {/* Icon Holder (Medium size) */}
              <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${stat.bgIcon} mb-3.5 group-hover:scale-105 transition-all duration-300`}>
                {stat.icon}
              </div>

              {/* Number (Reduced from text-4xl to text-2xl/3xl) */}
              <span className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-1 select-none">
                {stat.number}
              </span>

              {/* Label (Smaller text-xs size) */}
              <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-700 transition-colors text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}