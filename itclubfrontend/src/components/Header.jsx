import { useState } from 'react';
import logo from '../assets/logo.webp'; 

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <header className="bg-white py-3 md:py-4 shadow-sm relative border-b border-gray-100 group transition-all">
      
      {/* --- CLOSE BUTTON --- */}
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-1 right-1 md:top-2 md:right-2 z-20 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="bg-gray-50 hover:bg-red-500 text-gray-400 hover:text-white transition-all p-1 rounded-md shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </button>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-10">
        
        {/* Logo Section - Slightly smaller */}
        <div className="flex items-center shrink-0">
          <img src={logo} alt="ITCLUB Logo" className="h-14 md:h-16 w-auto object-contain" />
        </div>

        {/* Registration Details - Clean & Medium Font */}
        <div className="text-center md:text-left space-y-1 flex-1">
          <p className="text-it-blue font-black uppercase tracking-tight text-[11px] md:text-sm lg:text-base leading-tight">
            Registered Under the Companies Act 2013, Ministry of Corporate Affairs
          </p>
          <p className="text-it-green font-bold italic underline decoration-it-blue text-[10px] md:text-xs">
            An ISO 9001:2015 Certified Company
          </p>
          <p className="text-gray-500 font-mono font-bold bg-gray-50 px-2 py-0.5 rounded border border-gray-200 inline-block text-[10px] md:text-[11px]">
            CIN: U80302BR | GSTIN: 10AAPCT54
          </p>
        </div>

        {/* Partners Section - More Compact */}
        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-2 w-full justify-center">
            <div className="hidden md:block flex-1 border-t border-gray-200"></div>
            <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest whitespace-nowrap">
              Business Partner
            </span>
            <div className="hidden md:block flex-1 border-t border-gray-200"></div>
          </div>
          
          <div className="flex items-center gap-0 border border-gray-200 rounded-md overflow-hidden shadow-sm">
            <div className="p-2 md:p-2.5 text-center w-24 md:w-28 bg-it-light border-r border-gray-100 hover:bg-white transition-colors">
              <p className="text-[9px] md:text-[11px] font-bold text-it-blue uppercase leading-none">NSDC Partner</p>
            </div>
            <div className="p-2 md:p-2.5 text-center w-24 md:w-28 bg-it-light hover:bg-white transition-colors">
              <p className="text-[9px] md:text-[11px] font-bold text-it-green uppercase leading-none">Skill India</p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;