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
                className="h-9 w-auto object-contain" 
              />
            </div>

            {/* Text: Mobile aur Desktop dono par dikhega */}
            <span className="tracking-tighter text-sm lg:text-lg">
              ITCLUB <span className="text-it-green">Foundation</span>
            </span>
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
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/skills">Skill Program</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/courses">Training/Course</Link></li>
            <li className="hover:bg-it-green/20 p-3 transition-all rounded-md"><Link to="/gallery">Project Gallery</Link></li>
            
            <li className="ml-4">
               <Link to="/contact" className="bg-it-green text-white px-5 py-2 rounded-full hover:bg-white hover:text-it-blue transition-all shadow-md">
                 Contact
               </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu List */}
        <div className={`${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} md:hidden overflow-hidden transition-all duration-500 bg-it-blue border-t border-it-green/20`}>
          <ul className="flex flex-col space-y-1 py-4 px-2">
            <li><Link onClick={() => setIsOpen(false)} to="/" className="block px-6 py-3 hover:bg-it-green rounded-lg transition-colors">Home</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/about" className="block px-6 py-3 hover:bg-it-green rounded-lg transition-colors">About Us</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/skills" className="block px-6 py-3 hover:bg-it-green rounded-lg transition-colors">Skill Program</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/courses" className="block px-6 py-3 hover:bg-it-green rounded-lg transition-colors">Training/Course</Link></li>
            <li><Link onClick={() => setIsOpen(false)} to="/gallery" className="block px-6 py-3 hover:bg-it-green rounded-lg transition-colors">Project Gallery</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;