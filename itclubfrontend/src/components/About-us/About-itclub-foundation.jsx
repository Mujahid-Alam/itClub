import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import TopBar from '../TopBar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

// Areas of Intervention का डेटा ऐरे
const interventions = [
  {
    title: "Livelihood Promotion",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83m0 0a2.999 2.999 0 0 0-4.14-4.14m4.14 4.14L14.75 14.75m-5.83-5.83-.966-.967a2.25 2.25 0 0 0-3.182 0l-1.06 1.06a2.25 2.25 0 0 0 0 3.182l.967.966m5.83-5.83V6.75m0 10.5V21M3 14.75h3.5m10.5 0H21M14.75 3H9.75M12 3v3.75" />
      </svg>
    ),
    colorClasses: "text-blue-700 bg-blue-50 border-blue-100"
  },
  {
    title: "Healthcare & Nutrition",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    colorClasses: "text-emerald-600 bg-emerald-50 border-emerald-100"
  },
  {
    title: "Environmental Sustainability",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13.5m0-13.5a9 9 0 0 1 9 9c0 1.24-.25 2.41-.7 3.48M12 3a9 9 0 0 0-9 9c0 1.24.25 2.41.7 3.48M12 16.5h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Z" />
      </svg>
    ),
    colorClasses: "text-green-600 bg-green-50 border-green-100"
  },
  {
    title: "Women Empowerment",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    colorClasses: "text-orange-500 bg-orange-50 border-orange-100"
  },
  {
    title: "Child Welfare",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-6.75a1.125 1.125 0 0 0-1.125 1.125v3.375m9 0h-9M12 10.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
      </svg>
    ),
    colorClasses: "text-sky-600 bg-sky-50 border-sky-100"
  },
  {
    title: "Disaster Relief",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375-.336.375-.75Zm6 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375-.336.375-.75Z" />
      </svg>
    ),
    colorClasses: "text-red-500 bg-red-50 border-red-100"
  },
  {
    title: "Arts & Culture",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-1.242 2.25 2.25 0 0 1 2.18-1.74h.002a2.25 2.25 0 0 1 2.18 1.74 4.5 4.5 0 0 0 8.4 1.241 2.25 2.25 0 0 1-2.4-2.245 3 3 0 0 0-5.78-1.128M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    colorClasses: "text-indigo-600 bg-indigo-50 border-indigo-100"
  }
];

const AboutItClubFoundation = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION: About Us Data Incorporated --- */}
        <HeroSection
          backgroundText="ABOUT"
          topLabel="A Legacy of Digital Empowerment"
          title="WHO WE"
          highlight="ARE"
          footerText="Innovation • Inclusion • Sustainability"
        />
      </main>

      {/* --- MAIN STORY SECTION (Left: Innovation, Right: Photos/Philosophy) --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-12 mb-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          
          {/* ================= LEFT SIDE: Driving Social Innovation ================= */}
          <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-2xl font-black text-blue-900 uppercase tracking-wider relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[50px] after:h-[4px] after:bg-emerald-500 after:rounded-full">
                Driving Social Innovation
              </h2>
            </div>

            <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed">
              <p>
                <strong className="text-blue-900 font-bold">ITCLUB Foundation</strong> is a value-driven, not-for-profit organization dedicated to advancing India’s national development goals through sustainable, inclusive, and technology-led solutions. With a strong focus on Information Technology, Artificial Intelligence, and digital innovation, we empower communities and improve the quality of life for youth, women, and marginalized populations.
              </p>

              {/* Highlighted Quote Box */}
              <div className="bg-orange-50/70 border-l-4 border-orange-500 p-5 rounded-r-2xl italic text-slate-900 font-semibold text-sm md:text-base shadow-sm">
                "Leveraging technology as a catalyst for positive change and preparing communities for future-ready opportunities."
              </div>

              <p>
                Registered under <strong className="text-slate-800 font-semibold">Section 8 of the Companies Act, 2013</strong>, we are an MCA-compliant entity since 2023. We tackle critical social and economic challenges by promoting innovation and fostering strategic partnerships with government agencies and CSR organizations.
              </p>

              <p>
                We firmly believe that quality education, future-ready skills, and access to employment are essential for building self-reliant and resilient communities. By implementing scalable and transparent programs, we ensure every initiative creates a lasting impact at the grassroots level.
              </p>
            </div>

            {/* Certifications Quick Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              
              {/* 1. 80G & 12A Certified */}
              <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-blue-900 uppercase">80G & 12A Certified</h4>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-0.5">Tax Exemption for Donors</p>
                </div>
              </div>

              {/* 2. CSR-1 Registered */}
              <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-2xl hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-emerald-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-emerald-700 uppercase">CSR-1 Registered</h4>
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-0.5">MCA Registered NGO</p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE: Photos Cards & Philosophy ================= */}
          <div className="space-y-6">
            
            {/* Visual Mosaic (Photos Cards) */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group overflow-hidden rounded-[2rem] shadow-lg border border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80" 
                  alt="Education" 
                  className="h-56 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="relative group overflow-hidden rounded-[2rem] shadow-lg border border-white pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80" 
                  alt="Students" 
                  className="h-56 w-full object-cover transform group-hover:scale-105 transition-transform duration-500 rounded-[2rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Core Philosophy Solid Box */}
            <div className="bg-blue-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden group border border-blue-950">
              <i className="fas fa-quote-right absolute -bottom-6 -right-6 text-9xl opacity-5 transform group-hover:scale-110 transition-transform duration-500"></i>
              
              <div className="inline-block bg-emerald-500 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md mb-4">
                Core Philosophy
              </div>
              
              <p className="text-base md:text-lg font-medium leading-relaxed mb-6 text-slate-100">
                "Our approach is holistic and integrated, combining IT and AI-based education with initiatives in Healthcare, Nutrition, and Livelihood promotion to create an equitable society."
              </p>
              
              <div className="flex items-center gap-3 pt-2 border-t border-blue-800/60">
                <div className="w-8 h-[2px] bg-orange-500"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
                  ITCLUB Impact Strategy
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= NEW COMBINED SECTION (Interventions + CTA + Footer) ================= */}
      <div className="w-full bg-white select-none">
        
        {/* 1. AREAS OF INTERVENTION SECTION */}
        <section className="border-t border-b border-gray-100 py-20 px-4">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center max-w-xl mx-auto mb-16">
              <h3 className="text-orange-500 font-black text-[13px] uppercase tracking-[0.3em] mb-2">
                Our Footprint
              </h3>
              <h2 className="text-2xl md:text-3xl font-black text-blue-900 uppercase tracking-tight">
                Areas of Intervention
              </h2>
              <div className="w-12 h-1 bg-[#0233c3] mx-auto rounded-full mt-4" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {interventions.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50 p-6 rounded-3xl text-center border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center"
                >
                  <div className={`w-12 h-12 ${item.colorClasses} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h5 className="text-xs md:text-sm font-black uppercase text-blue-900 tracking-wider">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 2. PREMIUM CTA SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <h2 className="text-xl md:text-3xl font-black mb-4 uppercase tracking-tight leading-tight max-w-2xl mx-auto">
              Guided by Integrity, Accountability, and Innovation.
            </h2>
            <p className="text-xs md:text-sm text-slate-400 uppercase tracking-widest mb-8">
              Join hands with us to shape a self-reliant digital society
            </p>
            
            <Link 
              to="/contact-us" 
              className="inline-block bg-orange-500 text-white px-10 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg hover:bg-orange-600 hover:shadow-orange-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Collaborate With Us
            </Link>
          </div>
        </section>

        <Footer/>

      </div>

    </div>
  );
};

export default AboutItClubFoundation;