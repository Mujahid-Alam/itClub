import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const TopBar = () => (
  <div className="bg-gray-100 py-1.5 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-2 md:px-4 flex justify-between items-center text-[9px] md:text-[10px] font-bold text-it-blue uppercase">
      
      {/* LEFT: Social Icons (Mobile: Icons Only | Desktop: Icon + Text) */}
      <div className="flex gap-3 md:gap-4 items-center">
        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1">
          <FaFacebook className="text-[14px] md:text-[12px]" /> 
          <span className="hidden md:inline">Facebook</span> 
        </a>

        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1">
          <FaInstagram className="text-[14px] md:text-[12px]" /> 
          <span className="hidden md:inline">Instagram</span>
        </a>

        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1">
          <FaWhatsapp className="text-[14px] md:text-[12px]" /> 
          <span className="hidden md:inline">WhatsApp</span>
        </a>
      </div>

      {/* RIGHT: Ye sections Mobile par bhi dikhenge (Sabse important) */}
      <div className="flex gap-2 md:gap-4 items-center">
        <span className="hover:text-it-green cursor-pointer border-b border-transparent hover:border-it-green whitespace-nowrap">
          View Certificate
        </span>
        
        <span className="hover:text-it-green cursor-pointer border-b border-transparent hover:border-it-green whitespace-nowrap">
          Apply for Business Partner
        </span>

        <button className="bg-it-blue text-white px-2 md:px-3 py-0.5 rounded hover:bg-it-green transition-all text-[8px] md:text-[9px] active:scale-95 shrink-0">
          Login
        </button>
      </div>
    </div>
  </div>
);

export default TopBar;