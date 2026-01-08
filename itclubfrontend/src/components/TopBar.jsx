import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const TopBar = () => (
  <div className="bg-gray-100 py-0.5 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-2 md:px-4 flex justify-between items-center text-it-blue uppercase">
      
      {/* LEFT: Social Icons (Consistent sizing for professionalism) */}
      <div className="flex gap-3 md:gap-4 items-center text-[10px] md:text-[11px] font-semibold">
        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1" rel="noopener noreferrer" aria-label="Visit our Facebook page">
          <FaFacebook className="text-[13px] md:text-[15px]" /> 
          <span className="hidden md:inline">Facebook</span> 
        </a>

        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1" rel="noopener noreferrer" aria-label="Visit our Instagram page">
          <FaInstagram className="text-[13px] md:text-[15px]" /> 
          <span className="hidden md:inline">Instagram</span>
        </a>

        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1" rel="noopener noreferrer" aria-label="Visit our Twitter page">
          <FaTwitter className="text-[13px] md:text-[15px]" /> 
          <span className="hidden md:inline">Twitter</span>
        </a>

        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1" rel="noopener noreferrer" aria-label="Visit our LinkedIn page">
          <FaLinkedin className="text-[13px] md:text-[15px]" /> 
          <span className="hidden md:inline">LinkedIn</span>
        </a>

        <a href="#" className="hover:text-it-green transition-colors flex items-center gap-1" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
          <FaWhatsapp className="text-[13px] md:text-[15px]" /> 
          <span className="hidden md:inline">WhatsApp</span>
        </a>
      </div>

      {/* RIGHT: Contact and Donation (Improved readability and consistency) */}
      <div className="flex gap-4 md:gap-6 items-center text-[11px] md:text-[12px] font-bold">
        <a href="tel:+91840974414" className="hover:text-it-green whitespace-nowrap transition-colors" aria-label="Call us at +91 840974414">
          +91 840974414
        </a>
        
        <a href="mailto:itclubfoundation@gmail.com" className="hover:text-it-green whitespace-nowrap transition-colors hidden sm:block" aria-label="Email us at itclubfoundation@gmail.com">
          itclubfoundation@gmail.com
        </a>

        <a href="/donate-now" className="bg-it-blue text-white px-3 md:px-4 py-0.5 rounded-sm hover:bg-it-green transition-all text-[10px] md:text-[11px] font-bold active:scale-95 shrink-0 shadow-sm inline-block" aria-label="Make a donation">
          DONATION
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;