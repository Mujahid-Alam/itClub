import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Media', path: '/media' },
    { name: 'Join Us', path: '/join-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <nav className="bg-it-blue text-white sticky top-0 z-50 shadow-lg font-bold uppercase text-[12px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-stretch h-14 md:h-16">
          
          {/* BRANDING SECTION */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-full flex items-center shrink-0">
              <img 
                src={logo} 
                alt="ITCLUB Logo" 
                className="h-full w-auto object-contain block py-1 transition-transform duration-200 group-hover:scale-105" 
              />
            </div>

            <div className="flex flex-col justify-center transition-opacity duration-200 group-hover:opacity-90">
              <p className="text-it-red font-black uppercase tracking-tight text-[11px] md:text-[12px] leading-[1.2]">
                Registered Under the Companies Act 2013, <br /> 
                <span className="text-[10px] md:text-[11px]">Ministry of Corporate Affairs</span>
              </p>
              <p className="text-it-green font-bold italic underline decoration-it-blue text-[10px] md:text-[11px] mt-0.5">
                An ISO 9001:2015 Certified Company
              </p>
            </div>
          </Link>

          {/* Desktop Menu - Faster Underline Animation */}
          <ul className="hidden md:flex items-stretch gap-1">
            {navLinks.map((item) => (
              <li key={item.name} className="flex">
                <Link 
                  to={item.path}
                  className="relative px-4 flex items-center transition-colors duration-150 group overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-it-green transition-colors duration-150">
                    {item.name}
                  </span>
                  {/* Underline: Fast duration-200 */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-it-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center"></span>
                  {/* Flash: Instant duration-150 */}
                  <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md transition-all duration-200 hover:bg-white/10 active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown - Faster Slide and fixed Warning */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 border-t border-white/10' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link 
                  onClick={() => setIsOpen(false)} 
                  to={item.path}
                  className="px-6 py-3 block transition-all duration-200 hover:bg-it-green/20 hover:pl-8 text-[13px] border-b border-white/5"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;