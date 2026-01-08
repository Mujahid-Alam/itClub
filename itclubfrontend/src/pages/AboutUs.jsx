import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisionMission from '../components/About/VisionMission';
import OurJourney from '../components/About/OurJourney';
import OurTeam from '../components/About/OurTeam';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />
      
      <main className="grow">
        {/* --- HERO SECTION: Ultra Minimal & Tight (Exact Match with Contact Page) --- */}
        <section className="bg-it-blue pt-0 pb-10 px-6 text-center relative overflow-hidden">
          
          {/* Subtle Background Watermark */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.19em] uppercase leading-none opacity-[0.12] absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            FOUNDATION
          </h1>

          <div className="relative z-10 pt-6">
            {/* Micro Label Style */}
            <p className="text-it-green font-bold text-[9px] uppercase tracking-[0.6em] mb-2">
              Organization Profile
            </p>

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
              ABOUT <span className="text-it-green italic">US</span>
            </h2>

            {/* Micro Tagline - Professional & Sharp */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-[1px] w-4 bg-white/10"></span>
              <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-semibold">
                Legacy • Governance • Mission
              </p>
              <span className="h-[1px] w-4 bg-white/10"></span>
            </div>
          </div>
        </section>

        {/* --- CONTENT AREA: Minimal Negative Margin --- */}
        {/* max-w-6xl keeps the reading width professional */}
        <div className="max-w-6xl mx-auto px-6 -mt-12 relative z-20 space-y-16 mb-24">
          
          {/* Vision & Mission Cards */}
          <div className="pt-2">
            <VisionMission />
          </div>
          
          {/* Timeline / Journey Section */}
          <div className="pt-6 border-t border-gray-50">
             <OurJourney />
          </div>

          {/* Team / Leadership Section */}
          <div className="pt-6 border-t border-gray-50">
             <OurTeam />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;