import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Donate = () => {
  const causes = [
    { amount: "500", label: "Monthly Nutrition", desc: "Provides healthy meals to a child for an entire month." },
    { amount: "1500", label: "Primary Education", desc: "Covers books, uniform, and tuition for one student." },
    { amount: "5000", label: "Health Camp", desc: "Funds a specialized check-up drive in rural villages." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION: Minimal & Direct --- */}
        <section className="bg-it-blue pt-0 pb-10 px-6 text-center relative overflow-hidden">
          
          {/* Subtle Background Watermark - High Tracking & Small Scale */}
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-[0.19em] uppercase leading-none opacity-[0.12] absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            CONTRIBUTION
          </h1>

          <div className="relative z-10 pt-6">
            {/* Micro Label Style */}
            <p className="text-it-green font-bold text-[9px] uppercase tracking-[0.6em] mb-2">
              Make an Impact
            </p>

            {/* Main Title - Compact Size */}
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
              GIVE TO <span className="text-it-green italic ">GROW</span>
            </h2>

            {/* Micro Tagline - Professional Financial Keywords */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="h-[px] w-4 bg-white/10"></span>
              <p className="text-white/40 text-[9px] uppercase tracking-[0.4em] font-semibold">
                Tax Exempted • Secure • Accountability
              </p>
              <span className="h-[px] w-4 bg-white/10"></span>
            </div>
          </div>
        </section>
        {/* --- DONATION BOX --- */}
        <section className="max-w-6xl mx-auto px-6 -mt-18 relative z-20 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* 1. Quick Impact Cards */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-it-blue font-black text-[10px] uppercase tracking-[0.4em] mb-6">Choose a Cause</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {causes.map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-[1.5rem] border border-it-blue/10 hover:border-it-green transition-all group cursor-pointer shadow-sm hover:shadow-xl">
                    <p className="text-it-green font-black text-xl mb-1">₹{item.amount}</p>
                    <p className="text-it-blue font-bold text-[10px] uppercase tracking-widest mb-3">{item.label}</p>
                    <p className="text-gray-400 text-[10px] leading-relaxed group-hover:text-gray-600 transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Secure Info Box */}
              <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 mt-8">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🛡️</span>
                  <div>
                    <h4 className="text-it-blue font-bold text-[11px] uppercase tracking-widest mb-2">Secure & Transparent</h4>
                    <p className="text-gray-500 text-[11px] leading-relaxed">
                      All donations are eligible for tax exemption under Section 80G. You will receive a digital receipt immediately after the transaction is completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Custom Donation Form */}
            <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] border border-it-blue/10 shadow-2xl h-fit sticky top-24">
              <h3 className="text-it-blue font-black text-xs uppercase tracking-[0.3em] mb-8 text-center">Donate Now</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[7px] font-black uppercase tracking-[0.4em] text-it-blue/40 ml-1">Custom Amount (INR)</label>
                  <input type="number" className="w-full bg-gray-50 border-none rounded-xl px-4 py-4 text-sm font-bold text-it-blue focus:ring-1 focus:ring-it-green outline-none" placeholder="Enter Amount" />
                </div>

                <div className="space-y-2">
                  <label className="text-[7px] font-black uppercase tracking-[0.4em] text-it-blue/40 ml-1">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green outline-none" placeholder="First & Last Name" />
                </div>

                <div className="space-y-2">
                  <label className="text-[7px] font-black uppercase tracking-[0.4em] text-it-blue/40 ml-1">PAN Card (For Tax Benefit)</label>
                  <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-1 focus:ring-it-green outline-none" placeholder="ABCDE1234F" />
                </div>

                <button className="w-full bg-it-green text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.5em] hover:bg-it-blue hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 mt-4">
                  Proceed to Pay
                </button>

                <p className="text-[7px] text-center text-gray-400 uppercase tracking-widest mt-4">
                  Secured by Razorpay • SSL Encrypted
                </p>
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