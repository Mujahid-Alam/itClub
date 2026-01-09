import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import WorkGrid from '../components/OurWork/WorkGrid';
import StatsSection from '../components/OurWork/StatsSection';
import HeroSection from '../components/HeroSection';


const OurWork = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION: Ultra Minimal & Tight --- */}
        <HeroSection
          backgroundText="INITIATIVES"
          topLabel="Social Impact"
          title="OUR"
          highlight="WORK"
          footerText="Sectors • Stats • Progress"
        />
        <WorkGrid />
        <StatsSection />
      </main>

      <Footer />
    </div>
  );
};

export default OurWork;
