import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import qr from '../assets/qr.jpeg';

const Donate = () => {
  const [amount, setAmount] = useState('');

  const causes = [
    { amount: 500, label: "Monthly Nutrition" },
    { amount: 1500, label: "Primary Education" },
    { amount: 5000, label: "Health Camp" },
    { amount: 10000, label: "Community Support" }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <TopBar />
      <Navbar />

      <main>
        <HeroSection
          backgroundText="DONATION"
          topLabel="Support Our Mission"
          title="MAKE A"
          highlight="DONATION"
          footerText="Secure • Transparent • Tax Exempted"
        />

        {/* MAIN DONATION SECTION */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-12 mb-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* LEFT COLUMN: SELECT AMOUNT */}
            <div className="space-y-5 order-2 lg:order-1 bg-white backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white">
              <h3 className="text-it-blue font-black text-[11px] uppercase tracking-[0.3em] mb-4 border-b pb-2">
                Select Amount
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {causes.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setAmount(c.amount)}
                    className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left
                      ${amount === c.amount 
                        ? 'border-it-green bg-it-green/5 shadow-md scale-95' 
                        : 'border-gray-50 bg-gray-50/50 hover:border-it-green/30'}
                    `}
                  >
                    <span className="block text-lg font-black text-it-green">₹{c.amount}</span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{c.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* CENTER COLUMN: QR CARD (lg:translate-y-6 से इसे नीचे किया गया है) */}
            <div className="order-1 lg:order-2 lg:translate-y-10">
              <div className="bg-white rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 text-center transform lg:scale-110 relative overflow-hidden">
                {/* <div className="absolute top-0 left-0 w-full h-0.5 bg-it-green"></div> */}
                
                <div className="relative inline-block p-3 bg-white rounded-3xl shadow-inner border border-gray-100 mt-2">
                  <img src={qr} alt="UPI QR" className="w-74 h-44 object-contain rounded-xl" />
                  
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-it-green rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-it-green rounded-br-3xl"></div>
                </div>

                <div className="mt-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                    Scan with UPI Apps
                  </p>
                  <div className="bg-gray-50 p-1 rounded-2xl border border-gray-100">
                    <h4 className="text-it-blue font-extrabold text-[11px] uppercase mb-1">Trusted & Accountable</h4>
                    <p className="text-gray-500 text-[11px] leading-snug">
                      Your contributions are eligible for <br/> 80G Tax Exemption.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 order-3 lg:order-3 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-it-blue text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">
                Secure Payment
              </div>
              
              <p className="text-center text-[10px] font-medium leading-relaxed text-gray-500 italic mb-8 px-2">
                "Thank you for your generous contribution! Your support helps us make a real difference."
              </p>

              <form className="space-y-5">
                <div className="relative">
                  <label className="text-[9px] uppercase font-bold text-it-blue/40 ml-1 absolute -top-2 left-3 bg-white px-1">Amount (INR)</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm font-bold focus:ring-2 focus:ring-it-green/20 outline-none transition-all"
                    placeholder="0.00"
                  />
                </div>

                <div className="relative">
                  <label className="text-[9px] uppercase font-bold text-it-blue/40 ml-1 absolute -top-2 left-3 bg-white px-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-it-green/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <button type="button" className="w-full bg-it-green hover:bg-it-blue text-white font-black uppercase text-[11px] tracking-[0.3em] py-4 rounded-2xl transition-all duration-500 shadow-lg shadow-it-green/20 active:scale-95">
                  Proceed to Donate
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

export default Donate;