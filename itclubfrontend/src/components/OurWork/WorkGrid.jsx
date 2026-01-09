import React from 'react';

const projects = [
  {
    id: "01",
    title: "Digital Literacy",
    tag: "Education",
    desc: "Bridging the digital divide by providing tech-skills to underprivileged students."
  },
  {
    id: "02",
    title: "Health Equity",
    tag: "Healthcare",
    desc: "Mobile clinics and health awareness programs in remote rural areas."
  },
  {
    id: "03",
    title: "Sustainable Living",
    tag: "Environment",
    desc: "Implementing solar solutions and waste management at the community level."
  }
];

const WorkGrid = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group relative bg-white border border-it-blue/10 rounded-[2rem] p-8 transition-all duration-500 hover:bg-it-blue hover:shadow-2xl cursor-pointer h-[320px] flex flex-col justify-between overflow-hidden"
          >
            <span className="absolute top-8 right-8 text-it-blue/5 font-black text-6xl group-hover:text-white/5 transition-colors">
              {p.id}
            </span>

            <div className="relative z-10">
              <p className="text-it-green font-black text-[9px] uppercase tracking-[0.4em] mb-4">
                {p.tag}
              </p>

              <h3 className="text-xl font-black text-it-blue group-hover:text-white transition-colors uppercase tracking-tight leading-tight">
                {p.title}
              </h3>
            </div>

            <div className="relative z-10">
              <p className="text-gray-500 text-[12px] leading-relaxed group-hover:text-white/70 transition-colors mb-6">
                {p.desc}
              </p>

              <div className="inline-flex items-center gap-2 cursor-pointer">
                <span className="text-[9px] font-bold uppercase tracking-widest text-it-blue group-hover:text-it-green transition-colors">
                  View Details
                </span>
                <div className="w-6 h-[1px] bg-it-blue/20 group-hover:bg-it-green group-hover:w-10 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;
