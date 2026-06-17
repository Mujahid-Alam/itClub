import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import TopBar from '../TopBar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';


const EnvironmentalSustainability = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION:  --- */}
          <HeroSection
            backgroundText="EnvironmentalSustainability"
            topLabel="A Legacy of Digital Empowerment"
            title="LiveliHoodPromotion &"
            highlight="LiveliHoodPromotion"
            footerText="Innovation • Inclusion • Sustainability"
          />
      </main>
<div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      textAlign: 'center', 
      height: '100vh' // यह पूरे स्क्रीन के बीच में वर्टिकल और हॉरिजॉन्टल सेंटर करेगा
    }}>
      <h2>upcoming.....</h2>
      <h3>EnvironmentalSustainability</h3>
    </div>

        <Footer/>
    </div>
  );
};

export default EnvironmentalSustainability;