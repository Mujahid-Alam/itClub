import React from 'react';

export default function NgoProfile() {
  return (
    <div className="bg-gray-50 relative min-h-screen flex items-center justify-center p-4 md:p-12 font-sans overflow-x-hidden">
      
      {/* Main Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Right Side: Content (अब यह मोबाइल पर order-1 यानी पहले दिखेगा और बड़ी स्क्रीन पर order-2 हो जाएगा) */}
        <div className="lg:col-span-6 space-y-6 px-4 md:px-0 order-1 lg:order-2">
            {/* Top Small Tagline */}
            <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-green-600"></span>
                <span className="text-green-600 uppercase tracking-widest text-xs font-semibold">NGO Profile</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="text-[#0327a7]">WHO WE</span>{' '}
                <span className="text-orange-400">ARE</span>
            </h2>

            {/* Paragraphs */}
            <p className="text-gray-800 font-bold text-sm md:text-base leading-relaxed">
                ITCLUB Foundation is a Section 8 non-profit organization established in 2023 and registered with the Ministry of Corporate Affairs, Government of India. We are dedicated to empowering youth, women, and underserved communities through education, technology, skill development, and sustainable development initiatives.
            </p>

            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Driven by innovation and community participation, we create opportunities that enhance livelihoods, promote social inclusion, and equip individuals with the knowledge and skills needed to thrive in a rapidly evolving world.
            </p>

            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Through partnerships with government agencies, CSR organizations, academic institutions, and community stakeholders, we implement impactful programs that foster inclusive growth, strengthen communities, and contribute to building a more empowered and future-ready society.
            </p>
        </div>

        {/* Left Side: Image Collage with Badges (अब यह मोबाइल पर order-2 यानी नीचे दिखेगा और बड़ी स्क्रीन पर order-1 हो जाएगा) */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative px-4 md:px-0 order-2 lg:order-1 mt-6 lg:mt-0">
            
            {/* Top Left Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-md h-64 md:h-72">
                <img 
                  src="/NgoProfile/ngoprofile1.png" 
                  alt="Students" 
                  className="w-full h-full object-cover" 
                />
            </div>

            {/* Top Right Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-md h-44 md:h-48 mt-8">
                <img 
                  src="/NgoProfile/ngoprofile2.png" 
                  alt="Youth Group" 
                  className="w-full h-full object-cover" 
                />
            </div>

            {/* Bottom Left Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-md h-44 md:h-48 -mt-12 md:-mt-16">
                <img 
                  src="/NgoProfile/ngoprofile3.png" 
                  alt="Computer Lab" 
                  className="w-full h-full object-cover" 
                />
            </div>

            {/* Bottom Right Image */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-md h-64 md:h-72 -mt-6 md:-mt-8">
                <img 
                  src="/NgoProfile/ngoprofile4.png" 
                  alt="Training" 
                  className="w-full h-full object-cover" 
                />
            </div>

            {/* Overlapping Verified Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0327a7] text-white p-5 md:p-6 rounded-[1.8rem] shadow-xl text-center flex flex-col items-center justify-center border-4 border-white w-40 md:w-48 z-20">
                <div className="relative mb-2">
                  {/* Outer Badge Star */}
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-blue-200 animate-[spin_20s_linear_infinite]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-base md:text-lg leading-tight tracking-wide">80G & CSR-1</h4>
                <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-blue-200 mt-1">Verified Foundation</p>
            </div>
        </div>

      </div>
    </div>
  );
}