import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OurWork = () => {
  const projects = [
    {
      id: "01",
      title: "Digital Literacy",
      tag: "Education",
      desc: "Bridging the digital divide by providing tech-skills to underprivileged students.",
      color: "bg-it-green"
    },
    {
      id: "02",
      title: "Health Equity",
      tag: "Healthcare",
      desc: "Mobile clinics and health awareness programs in remote rural areas.",
      color: "bg-it-red"
    },
    {
      id: "03",
      title: "Sustainable Living",
      tag: "Environment",
      desc: "Implementing solar solutions and waste management at the community level.",
      color: "bg-it-blue"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION: Ultra Minimal --- */}
        <section className="bg-it-blue pt-0 pb-10 px-6 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.19em] uppercase leading-none opacity-[0.12] absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            INITIATIVES
        </h1>
        <div className="relative z-10 pt-6">
            <p className="text-it-green font-bold text-[9px] uppercase tracking-[0.6em] mb-2">Social Impact</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
            OUR <span className="text-it-green italic">WORK</span>
            </h2>
            <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-[1px] w-4 bg-white/10"></span>
            <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-semibold">Sectors • Stats • Progress</p>
            <span className="h-[1px] w-4 bg-white/10"></span>
            </div>
        </div>
        </section>

        {/* --- WORK GRID: Clean & Small Font --- */}
        <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.id} className="group relative bg-white border border-it-blue/10 rounded-[2rem] p-8 transition-all duration-500 hover:bg-it-blue hover:shadow-2xl cursor-pointer h-[320px] flex flex-col justify-between overflow-hidden">
                
                {/* Floating ID Number */}
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
                  {/* Small Font Description */}
                  <p className="text-gray-500 text-[12px] leading-relaxed group-hover:text-white/70 transition-colors mb-6">
                    {p.desc}
                  </p>
                  
                  {/* Micro Button */}
                  <div className="inline-flex items-center gap-2 group/btn cursor-pointer">
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

        {/* --- STATS SECTION: Minimalist --- */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Lives Touched", val: "1.2M+" },
              { label: "Active Projects", val: "45+" },
              { label: "States Covered", val: "12" },
              { label: "Volunteers", val: "5K+" }
            ].map((s, i) => (
              <div key={i}>
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-2">{s.label}</p>
                <h4 className="text-2xl font-black text-it-blue tracking-tighter">{s.val}</h4>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OurWork;