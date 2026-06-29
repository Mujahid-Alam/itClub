import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaHandshake,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-it-blue border-b border-gray-800/50 text-white">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-1">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

          {/* LEFT SECTION */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-4 text-[10px] md:text-[11px] font-semibold uppercase">

            <a
              href="https://www.facebook.com/itclubfoundatio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-it-green transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-[13px] md:text-[15px]" />
            </a>

            <a
              href="https://www.instagram.com/itclubfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-it-green transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-[13px] md:text-[15px]" />
            </a>

            <a
              href="https://x.com/itclubfoundatio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-it-green transition-colors"
              aria-label="Twitter X"
            >
              <FaXTwitter className="text-[12px] md:text-[14px]" />
            </a>

            <a
              href="https://www.linkedin.com/in/itclubfoundation/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-it-green transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-[13px] md:text-[15px]" />
            </a>

            <a
              href="https://wa.me/918292999947"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-it-green transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-[13px] md:text-[15px]" />
            </a>

            <span className="text-gray-500 hidden sm:inline">|</span>
              <a
                href="tel:+918409744414"
                className="hidden md:flex items-center gap-1 hover:text-it-green whitespace-nowrap transition-colors"
              >
                <FaPhoneAlt className="text-[13px] md:text-[15px]" />
                <span>+91-8409744414</span>
              </a>

              <a
                href="mailto:info@itclubfoundation.org"
                className="hidden lg:flex items-center gap-1 hover:text-it-green lowercase whitespace-nowrap transition-colors"
              >
                <FaEnvelope className="text-[13px] md:text-[15px]" />
                <span>info@itclubfoundation.org</span>
              </a>
          </div>
            {/* RIGHT SECTION */}
            <div className="grid grid-cols-3 md:flex gap-1 md:gap-3 w-full md:w-auto text-[10px] md:text-[11px] font-bold">

              {/* CSR */}
              <a
                href="#"
                className="bg-[#003d7a] text-white px-2 md:px-4 py-2 md:py-1 rounded-sm hover:bg-it-green transition-all active:scale-95 shadow-sm flex items-center justify-center gap-2"
              >
                <FaHandshake className="text-[13px] md:text-[15px]" />
                <span className="block md:hidden">CSR</span>
                <span className="hidden md:block">
                  CSR Partner With Us
                </span>
              </a>

              {/* Profile */}
              <a
                href="#"
                className="bg-[#003d7a] text-white px-2 md:px-4 py-2 md:py-1 rounded-sm hover:bg-it-green transition-all active:scale-95 shadow-sm flex items-center justify-center gap-2"
              >
                <FaClipboardList className="text-[13px] md:text-[15px]" />
                <span className="block md:hidden">Profile</span>
                <span className="hidden md:block">
                  Organization Profile
                </span>
              </a>

              {/* Implementation Partner */}
              <a
                href="#"
                className="bg-[#003d7a] text-white px-2 md:px-4 py-2 md:py-1 rounded-sm hover:bg-it-green transition-all active:scale-95 shadow-sm flex items-center justify-center gap-2"
              >
                <FaUsers className="text-[13px] md:text-[15px]" />
                <span className="block md:hidden">Partner</span>
                <span className="hidden md:block">
                  Implementation Partner
                </span>
              </a>

            </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;