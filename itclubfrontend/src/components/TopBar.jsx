import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // लेटेस्ट ट्विटर (X) आइकन के लिए

const TopBar = () => (
  <div className="bg-it-blue py-1 border-b border-gray-800/50">
    <div className="max-w-7xl mx-auto px-2 md:px-4 flex justify-between items-center text-white uppercase">
      
      {/* LEFT: Social Icons & Contact */}
      <div className="flex gap-3 md:gap-4 items-center text-[10px] md:text-[11px] font-semibold">
        
        {/* असली सोशल मीडिया लिंक्स जोड़े गए हैं */}
        <a href="https://www.facebook.com/itclubfoundatio" target="_blank" rel="noopener noreferrer" className="hover:text-it-green transition-colors flex items-center" aria-label="Visit our Facebook page">
          <FaFacebook className="text-[13px] md:text-[15px]" /> 
        </a>

        <a href="https://www.instagram.com/itclubfoundation/" target="_blank" rel="noopener noreferrer" className="hover:text-it-green transition-colors flex items-center" aria-label="Visit our Instagram page">
          <FaInstagram className="text-[13px] md:text-[15px]" /> 
        </a>

        <a href="https://x.com/itclubfoundatio" target="_blank" rel="noopener noreferrer" className="hover:text-it-green transition-colors flex items-center" aria-label="Visit our X (Twitter) page">
          <FaXTwitter className="text-[12px] md:text-[14px]" /> 
        </a>

        <a href="https://www.linkedin.com/in/itclubfoundation/" target="_blank" rel="noopener noreferrer" className="hover:text-it-green transition-colors flex items-center" aria-label="Visit our LinkedIn page">
          <FaLinkedin className="text-[13px] md:text-[15px]" /> 
        </a>

        <a href="https://wa.me/918292999947" target="_blank" rel="noopener noreferrer" className="hover:text-it-green transition-colors flex items-center" aria-label="Contact us on WhatsApp">
          <FaWhatsapp className="text-[13px] md:text-[15px]" /> 
        </a>

        {/* सेपरेटर लाइन */}
        <span className="text-gray-500 hidden sm:inline">|</span>

        <a href="tel:+91-8409744414" className="hover:text-it-green whitespace-nowrap transition-colors" aria-label="Call us">
          +91-8409744414
        </a>
        
        <a href="mailto:info@itclubfoundation.org" className="hover:text-it-green lowercase whitespace-nowrap transition-colors hidden lg:block" aria-label="Email us">
          info@itclubfoundation.org
        </a>

      </div>

      {/* RIGHT: Buttons */}
      <div className="flex gap-2 md:gap-3 items-center text-[10px] md:text-[11px] font-bold">
        <a href="/donate-now" className="bg-[#003d7a] text-white px-2.5 md:px-4 py-1 rounded-sm hover:bg-it-green transition-all active:scale-95 shrink-0 shadow-sm inline-block" aria-label="CSR Partner">
          CSR Partner With Us
        </a>
        <a href="/donate-now" className="bg-[#003d7a] text-white px-2.5 md:px-4 py-1 rounded-sm hover:bg-it-green transition-all active:scale-95 shrink-0 shadow-sm inline-block" aria-label="Organization Profile">
          Organization Profile
        </a>
        <a href="/donate-now" className="bg-[#003d7a] text-white px-2.5 md:px-4 py-1 rounded-sm hover:bg-it-green transition-all active:scale-95 shrink-0 shadow-sm inline-block" aria-label="Implementation Partner">
          Implementation Partner
        </a>
      </div>

    </div>
  </div>
);

export default TopBar;