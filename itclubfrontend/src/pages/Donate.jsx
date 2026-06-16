import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';


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
        <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 mb-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr_1.5fr] gap-1 items-start">
            
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
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="bg-white rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 text-center relative overflow-hidden w-full max-w-[300px]">
                {/* <div className="absolute top-0 left-0 w-full h-0.5 bg-it-green"></div> */}
                
                <div className="relative inline-block p-3 bg-white rounded-3xl shadow-inner border border-gray-100 mt-2">
                  <img
                    src="qr.jpg"
                    alt="QR Code"
                    className="w-[220px] h-[220px] object-contain mx-auto"
                  />
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
              {/* RIGHT COLUMN: BANK DETAILS */}
              <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-gray-100 order-3 relative">
                
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <p className="text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg animated-tax-box whitespace-nowrap">
                    All donations are eligible for 50% Tax Exemption
                    <br />
                    <span className="block text-center">
                      (u/s 80G of Income Tax Act.)
                    </span>
                  </p>
                </div>

<div className="text-center mt-3">
  <h3 className="text-xl lg:text-2xl font-black text-it-blue leading-tight">
    Your <span className="text-orange-500">Donation</span> Can Change Lives
  </h3>
</div>

<div className="mt-4 bg-gray-50 border border-gray-100 rounded-2xl p-4">
  
  <h4 className="text-sm font-bold text-it-blue uppercase tracking-wide mb-3">
    Bank Details
  </h4>

  <div className="grid grid-cols-2 gap-y-2 text-sm">

    <span className="text-gray-500">Bank Name</span>
    <span className="font-semibold text-right">State Bank of India</span>

    <span className="text-gray-500">Account Name</span>
    <span className="font-semibold text-right">ITCLUB FOUNDATION</span>

    <span className="text-gray-500">Account Number</span>
    <span className="font-bold text-it-green text-right">42482743614</span>

    <span className="text-gray-500">IFSC Code</span>
    <span className="font-bold text-it-green text-right">SBIN0016622</span>

    <span className="text-gray-500">MICR Code</span>
    <span className="font-semibold text-right">854002108</span>

    <span className="text-gray-500">Account Type</span>
    <span className="font-semibold text-right">Current Account</span>

  </div>

</div>


                <div className="mt-6 bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    80G Certified NGO
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Donations are eligible for tax benefits under Section 80G.
                  </p>
                </div>

              </div>

          </div>
        </section>



        
      </main>

      <Footer />
    </div>
  );
};

export default Donate;