import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION: Ultra Minimal & Tight --- */}
        <HeroSection
          backgroundText="CONTACT"
          topLabel="Get in Touch"
          title="CONTACT"
          highlight="US"
          footerText="Support • Queries • Collaboration"
        />

        
        {/* --- CONTACT GRID --- */}
        <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">

              

              {[
                { label: "Head Office", val: "ITCLUB House, Madhopara Khazanchi Hat, Bhatta Bazar, Purnea-854301 Bihar, India  ", icon: "📍" },
                { label: "Email Us", val: "info@itclubfoundation.org", icon: "✉️" },
                { label: "Call Us", val: "+91 84097 44414", icon: "📞" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-it-blue/5 shadow-sm hover:shadow-md transition-all group">
                  <div className="flex items-center gap-4">
                    <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-[0.3em] text-it-green mb-1">{item.label}</p>
                      <p className="text-it-blue font-bold text-[12px] leading-tight">{item.val}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Map Placeholder */}
              <div className="h-48 bg-gray-100 rounded-[1.5rem] overflow-hidden border border-it-blue/5 mt-6 grayscale hover:grayscale-0 transition-all">
              <iframe
                src="https://www.google.com/maps?q=ITCLUB%20House%2C%20Madhopara%20Khazanchi%20Hat%2C%20Bhatta%20Bazar%2C%20Purnea%2C%20Bihar%20854301&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              </div>
            </div>

            {/* 2. Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[2.5rem] border border-it-blue/10 shadow-2xl">
              <h3 className="text-it-blue font-black text-xs uppercase tracking-[0.4em] mb-10 border-b border-gray-50 pb-6">Send a Message</h3>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[7px] font-black uppercase tracking-[0.4em] text-it-blue/40 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none" placeholder="Full Name" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[7px] font-black uppercase tracking-[0.4em] text-it-blue/40 ml-1">Email ID</label>
                  <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none" placeholder="email@example.com" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[7px] font-black uppercase tracking-[0.4em] text-it-blue/40 ml-1">Subject</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none" placeholder="How can we help?" />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[7px] font-black uppercase tracking-[0.4em] text-it-blue/40 ml-1">Message</label>
                  <textarea rows="4" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none resize-none" placeholder="Write your message here..."></textarea>
                </div>

                <div className="md:col-span-2 pt-4">
                  <button className="w-full bg-it-blue text-white py-4 rounded-xl text-[9px] font-black uppercase tracking-[0.6em] hover:bg-it-green hover:shadow-xl transition-all duration-500">
                    Dispatch Message
                  </button>
                </div>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;