import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION: Ultra Minimal & Tight --- */}
        <section className="bg-it-blue pt-0 pb-10 px-6 text-center relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.19em] uppercase leading-none opacity-[0.12] absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            CONNECT
        </h1>
        <div className="relative z-10 pt-6">
            <p className="text-it-green font-bold text-[9px] uppercase tracking-[0.6em] mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
            CONTACT <span className="text-it-green italic">US</span>
            </h2>
            <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-[1px] w-4 bg-white/10"></span>
            <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-semibold">Support • Queries • Reach</p>
            <span className="h-[1px] w-4 bg-white/10"></span>
            </div>
        </div>
        </section>
        
        {/* --- CONTACT GRID --- */}
        <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              {[
                { label: "Head Office", val: "123 Foundation Hub, Tech Park, New Delhi", icon: "📍" },
                { label: "Email Us", val: "info@foundation.org", icon: "✉️" },
                { label: "Call Us", val: "+91 98765 43210", icon: "📞" }
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472!3d28.52728030605361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71dbff41d5!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000" 
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