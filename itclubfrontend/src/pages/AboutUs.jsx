import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VisionMission from '../components/About/VisionMission';
import OurJourney from '../components/About/OurJourney';
import OurTeam from '../components/About/OurTeam';
import HeroSection from '../components/HeroSection';
const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />
      
      <main className="grow">
        {/* --- HERO SECTION: Ultra Minimal & Tight --- */}
      <HeroSection
        backgroundText="FOUNDATION"
        topLabel="Who We Are"
        title="ABOUT"
        highlight="US"
        footerText="Mission • Vision • Values"
      />


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