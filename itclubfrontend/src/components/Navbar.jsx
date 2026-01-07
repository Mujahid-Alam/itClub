import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-it-blue text-white sticky top-0 z-50 shadow-lg font-bold uppercase text-[12px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
        
          {/* BRANDING SECTION */}
          <div className="flex items-center gap-3">
            {/* Logo: Sirf Mobile par dikhega (md:hidden) */}
            <div className="md:hidden bg-white p-1 rounded shadow-md">
              <img 
                src={logo} 
                alt="ITCLUB Logo" 
                className="h-9 w-auto object-contain " 
              />
            </div>

            {/* Text: Mobile aur Desktop dono par dikhega */}
            {/* <span className="tracking-tighter text-sm lg:text-lg">
              ITCLUB <span className="text-it-green">Foundation</span>
            </span> */}


             
        {/* Logo Section - Slightly smaller */}
        <div className="flex items-center shrink-0">
          <img src={logo} alt="ITCLUB Logo" className="h-14 md:h-16 w-auto object-contain" />
        </div>



        {/* Registration Details - Clean & Medium Font */}
        <div className="text-center md:text-left space-y-1 flex-1">
          <p className="text-it-red font-black uppercase tracking-tight text-[2px] md:text-sm leading-tight">
            Registered Under the Companies Act 2013, <br /> Ministry of Corporate Affairs
          </p>
          <p className="text-it-green font-bold italic underline decoration-it-blue text-[10px] md:text-xs">
            An ISO 9001:2015 Certified Company
          </p>
          {/* <p className="text-gray-500 font-mono font-bold bg-gray-50 px-2 py-0.5 rounded border border-gray-200 inline-block text-[10px] md:text-[11px]">
            CIN: U80302BR | GSTIN: 10AAPCT54
          </p> */}
        </div>
          </div>

          {/* Hamburger Button (Mobile Only) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 rounded-full hover:bg-it-green transition-colors focus:outline-none border border-white/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1">
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/">Home</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/about">About Us</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/skills">Our Work</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/courses">News&Media</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/gallery">Join Us</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/courses">Contact</Link></li>

          </ul>
        </div>

        {/* Mobile Menu List */}
        <div className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-500 bg-it-blue border-t border-it-green/20`}>
          <ul className="flex flex-col space-y-1 py-4 px-2">
            
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/">Home</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/about">About Us</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/skills">Our Work</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/courses">News&Media</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/gallery">Join Us</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/courses">Contact</Link></li>
         
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;