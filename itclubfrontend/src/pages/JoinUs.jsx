import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
const JoinUs = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>

        {/* --- HERO SECTION: Ultra Minimal & Tight --- */}
        <HeroSection
          backgroundText="COMMUNITY"
          topLabel="Be The Change"
          title="JOIN OUR "
          highlight="MISSION"
          footerText=" Volunteer • Member • Partner"
        />

        
        {/* --- FORM SECTION --- */}
        <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-24">
          <div className="bg-white rounded-[2.5rem] border border-it-blue/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
            
            {/* Left Side: Info (2 Columns) */}
            <div className="lg:col-span-2 bg-gray-50 p-10 md:p-14 border-r border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-it-blue font-black text-xs uppercase tracking-[0.4em] mb-8">Why Join Us?</h3>
                <div className="space-y-10">
                  {[
                    { t: "Make an Impact", d: "Directly contribute to grassroots development." },
                    { t: "Networking", d: "Connect with like-minded changemakers globally." },
                    { t: "Skill Growth", d: "Gain hands-on experience in social leadership." }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <h4 className="text-it-blue font-bold text-[10px] uppercase tracking-widest mb-2 group-hover:text-it-green transition-colors">{item.t}</h4>
                      <p className="text-gray-400 text-[11px] leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-[7px] font-bold text-gray-300 uppercase tracking-[0.5em]">Global Network • 2024</p>
              </div>
            </div>

            {/* Right Side: Form (3 Columns) */}
            <div className="lg:col-span-3 p-10 md:p-14 bg-white">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-[8px] font-black uppercase tracking-[0.3em] text-it-blue/50 ml-1">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none" placeholder="John Doe" />
                  </div>
                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-[8px] font-black uppercase tracking-[0.3em] text-it-blue/50 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-[8px] font-black uppercase tracking-[0.3em] text-it-blue/50 ml-1">Phone Number</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none" placeholder="+91 0000 000 000" />
                  </div>
                  {/* Role Select */}
                  <div className="space-y-2">
                    <label className="text-[8px] font-black uppercase tracking-[0.3em] text-it-blue/50 ml-1">I want to join as</label>
                    <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-[11px] font-bold text-it-blue/70 focus:ring-1 focus:ring-it-green outline-none">
                      <option>Volunteer</option>
                      <option>Member</option>
                      <option>Donor Partner</option>
                    </select>
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-[8px] font-black uppercase tracking-[0.3em] text-it-blue/50 ml-1">Why do you want to join?</label>
                  <textarea rows="4" className="w-full bg-gray-50 border-none rounded-2xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green transition-all outline-none resize-none" placeholder="Tell us about your motivation..."></textarea>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-it-blue text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.5em] hover:bg-it-green hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                  Submit Application
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default JoinUs;