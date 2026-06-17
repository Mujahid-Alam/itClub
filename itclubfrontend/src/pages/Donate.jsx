import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';


const Donate = () => {


  const impactCards = [
    {
      amount: "₹500",
      description: "Can provide digital literacy to 1 child",
    },
    {
      amount: "₹1,000",
      description: "Support a youth with professional skill training",
    },
    {
      amount: "₹5,000",
      description: "Empower a village with an AI awareness workshop",
    },
    {
      amount: "₹10,000",
      description: "Support community development initiatives",
    },
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
        <section className="max-w-7xl mx-auto px-4 md:px-4 -mt-8 mb-28 relative z-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.1fr_1.3fr] gap-1 items-start">
            

            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  
                  {/* LEFT COLUMN: DONATION IMPACT */}
                  <div className="space-y-5 order-2 lg:order-1 bg-white p-3 rounded-3xl shadow-xl border border-white">

                    <h3 className="text-it-blue font-black text-[14px] text-center uppercase tracking-[0.4em] mb-4 border-b pb-2">
                      Your Impact
                    </h3>

                    <div className="grid grid-cols-2 gap-1">
                      {impactCards.map((item, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 border border-gray-100 rounded-2xl p-3 hover:shadow-md transition-all duration-300"
                        >
                          <h4 className="text-xl font-black text-it-green mb-2">
                            {item.amount}
                          </h4>

                          <p className="text-xs text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-orange-50 border border-orange-100 rounded-2xl p-4">
                      <p className="text-sm text-orange-700 font-medium text-center">
                        Every contribution helps us create a stronger digital future for underserved communities.
                      </p>
                    </div>

                  </div>

                  {/* Center Card */}
                  <div className="order-1 lg:order-2 flex justify-center">
                    <div className="bg-white rounded-[3rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 text-center relative overflow-hidden w-full ">
                      {/* <div className="absolute top-0 left-0 w-full h-0.5 bg-it-green"></div> */}
                      
                      <div className="relative inline-block p-3 bg-white rounded-3xl shadow-inner border border-gray-100 mt-2">
                        <img
                          src="qr.jpg"
                          alt="QR Code"
                          className="w-[250px] h-[250px] object-contain mx-auto"
                        />
                        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-it-green rounded-tl-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-it-green rounded-br-3xl"></div>
                      </div>

                      <div className="mt-0">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                          Scan with UPI Apps
                        </p>
                        <p className="text-gray-500 text-[15px] leading-snug">
                          ITCLUB FOUNDATION
                        </p>
                        <div className="bg-gray-50 p-1 rounded-2xl border border-gray-100">
                          <h2 className="text-it-blue font-extrabold text-[15px] uppercase mb-1">UPI ID: 84097@sbi</h2>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* New Bottom Card */}
                <div className="mt-1 bg-white rounded-2xl p-3 shadow-xl border border-gray-100">

                  <p className="text-gray-600">
                    After you donate, please share the screenshot of the donation at:
                    <span className="ml-4 font-bold text-it-blue">
                      itclubfoundation@gmail.com
                    </span>
                  </p>
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

                  <div className="mt-2 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                    
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


                <div className="mt-1 bg-orange-50 border border-orange-100 rounded-2xl p-4 text-center">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider">
                    80G Certified NGO
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Donations are eligible for tax benefits under Section 80G.
                  </p>
                </div>

              </div>              

          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-20">

            {/* LEFT SIDE - Cheque / Draft */}
            <div className="mt-1 bg-orange-50 border border-orange-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:bg-orange-100">

              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                Cheque / Draft Donation
              </p>

              <p className="text-sm text-gray-700">
                <span className="font-semibold">Payable at:</span> ITCLUB FOUNDATION
              </p>

              <p className="text-xs text-gray-500 mt-3 uppercase font-semibold">
                Courier Address
              </p>

              <p className="text-sm text-gray-700 leading-relaxed mt-1">
                ITCLUB FOUNDATION, ITCLUB House, Madhopara Khazanchi Hat,<br />
                Bhatta Bazar, Purnea – 854301, Bihar, India
              </p>

            </div>

            {/* RIGHT SIDE - Legal Transparency */}
            <div className="mt-1 bg-orange-50 border border-orange-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:bg-orange-100">

              <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-3">
                Legal Transparency
              </p>

              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                We are a Section 8 Company (Non-Profit) registered under the Companies Act, 2013 with the Ministry of Corporate Affairs, Government of India.
              </p>

              <p className="text-sm text-gray-700">
                <span className="font-semibold">Reg. Type:</span> NGO (S-8)
              </p>

              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Income Tax:</span> 80G Certified
              </p>

            </div>

          </div>
                    



                            <div className="mt-2 bg-white rounded-3xl p-15 shadow-xl border border-gray-100">

          <h3 className="text-xl font-bold text-it-blue mb-2">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">

            {/* Q1 */}
            <div className="transition-all duration-300 hover:bg-gray-50 hover:shadow-md rounded-2xl p-4">
              <p className="font-semibold text-gray-800 mb-2">
                Q: Will I get a tax receipt?
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Yes, all donations are 80G certified. We will email your tax-exemption receipt within 7-10 working days after verifying the payment.
              </p>
            </div>

            {/* Q2 */}
            <div className="transition-all duration-300 hover:bg-gray-50 hover:shadow-md rounded-2xl p-4">
              <p className="font-semibold text-gray-800 mb-2">
                Q: Is my payment secure?
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Absolutely. We only use official bank channels and authorized UPI for transactions to ensure maximum security.
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