import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },


     {
      name: 'About Us',
      submenu: [
        {
          name: 'About ITCLUB Foundation',
          path: '/about-us/about-itclub-foundation',
        },
        {
          name: 'Mission & Vision',
          path: '/about-us/mission-vision',
        },
        {
          name: 'Legal & Registration',
          path: '/about-us/legal-registration',
        },
        {
          name: 'Our Team & Management',
          path: '/about-us/team-management',
        },
        {
          name: 'Our Journey & Milestones',
          path: '/about-us/journey-milestones',
        },
      ],
    },

    {
      name: 'Our Program',
      submenu: [
        {
          name: 'Skill Development',
          path: '/our-work/skill-development',
        },
        {
          name: 'Women Empowerment',
          path: '/our-work/women-empowerment',
        },
        {
          name: 'Youth Development',
          path: '/our-work/youth-development',
        },
        {
          name: 'Livelihood Promotion',
          path: '/our-work/livelihood-promotion',
        },
        {
          name: 'Education & Digital Literacy',
          path: '/our-work/education-digital-literacy',
        },
        {
          name: 'Healthcare & Nutrition',
          path: '/our-work/healthcare-nutrition',
        },
        {
          name: 'Relief & Humanitarian',
          path: '/our-work/relief-humanitarian',
        },
        {
          name: 'Govt. Schemes',
          path: '/our-work/govt-schemes',
        },
        {
          name: 'Environmental Sustainability',
          path: '/our-work/environmental-sustainability',
        },
        {
          name: 'Arts, Culture & Heritage',
          path: '/our-work/arts-culture-heritage',
        },
      ],
    },

    {
      name: 'Impact',
      path: '/impact',
      submenu: [
        {
          name: 'Success Stories',
          path: '/impact/success-stories',
        },
        {
          name: 'Annual Reports',
          path: '/impact/annual-reports',
        },
      ],
    },

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
{/* Desktop Menu */}
<ul className="hidden md:flex items-stretch gap-1">
  {navLinks.map((item) => (
    <li key={item.name} className="relative group flex">

      <Link
        to={item.path}
        className="relative px-4 h-full flex items-center gap-1 transition-colors duration-150"
      >
        <span className="group-hover:text-it-green transition-colors duration-150">
          {item.name}
        </span>

        {/* Dropdown Arrow */}
        {item.submenu && (
          <svg
            className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </Link>

      {/* Dropdown Menu */}
      {item.submenu && (
        <ul className="absolute top-full left-0 w-72 bg-white text-gray-800 shadow-xl rounded-md border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">

          {item.submenu.map((sub) => (
            <li key={sub.name}>
              <Link
                to={sub.path}
                className="block px-5 py-3 text-sm hover:bg-gray-100 hover:text-it-blue transition-colors duration-150"
              >
                {sub.name}
              </Link>
            </li>
          ))}

        </ul>
      )}

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
          <ul className="flex flex-col py-1">
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