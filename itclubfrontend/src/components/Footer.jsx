import React from "react";
import { Link } from "react-router-dom";
// react-icons से आइकन्स इम्पोर्ट किए
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

const socialLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/itclubfoundatio",
    icon: <FaFacebook className="text-lg" />,
    hoverClass: "hover:border-blue-600 hover:text-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/itclubfoundation/",
    icon: <FaInstagram className="text-lg" />,
    hoverClass: "hover:border-pink-600 hover:text-pink-500 hover:shadow-[0_0_15px_rgba(219,39,119,0.3)]",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/itclubfoundation/",
    icon: <FaLinkedin className="text-lg" />,
    hoverClass: "hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]",
  },
  {
    name: "x",
    url: "https://x.com/itclubfoundatio",
    icon: <FaXTwitter className="text-base" />,
    hoverClass: "hover:border-white hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@itclubfoundation",
    icon: <FaYoutube className="text-lg" />,
    hoverClass: "hover:border-red-600 hover:text-red-500 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]",
  },
  {
    name: "whatsapp",
    url: "https://wa.me/918292999947",
    icon: <FaWhatsapp className="text-lg" />,
    hoverClass: "hover:border-green-500 hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-gray-400 py-16 px-4 relative overflow-hidden border-t border-gray-800">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: About & Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="IT CLUB FOUNDATION Logo"
                className="h-30 w-auto object-contain brightness-110"
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 pt-2">
              ITCLUB Foundation is committed to driving positive change and building a more equitable, digitally empowered society through innovation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-blue-500">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Who We Are", "Our Mission", "Media & Gallery", "Contact Us"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-blue-500">
              Head Office
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-blue-400 mt-1">📍</span>
                <span className="leading-relaxed">
                  ITCLUB House, Madhopara Khazanchi Hat,
                  Bhatta Bazar, Purnea-854301<br />
                  Bihar, India
                </span>
              </li>
              <li className="flex flex-col space-y-1">
                <a href="tel:+918409744414" className="flex items-center space-x-3 hover:text-white transition-colors">
                  <span className="text-blue-400">📞</span>
                  <span>+91 84097 44414</span>
                </a>
                <a href="tel:+918292999947" className="ml-6 hover:text-white transition-colors">
                  +91 82929 99947
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-blue-400">✉️</span>
                <a href="mailto:info@itclubfoundation.org" className="hover:text-white transition-colors break-all">
                  info@itclubfoundation.org
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Socials */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-blue-500">
              Newsletter
            </h3>
            <p className="text-sm mb-4 text-gray-400">
              Subscribe to stay updated with our latest initiatives.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-900/60 border border-gray-800 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-gray-600"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-600/10 cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </form>

            {/* सोशल लिंक्स ब्लॉक - टॉपबार वाले आइकन्स यहाँ सेट कर दिए हैं */}
            <div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    title={social.name}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-900/80 border border-gray-800 text-gray-400 transition-all duration-300 hover:-translate-y-1 shadow-md ${social.hoverClass}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Divider Bar */}
        <div className="border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            <p>© 2026 <span className="text-gray-300 font-medium">ITCLUB FOUNDATION</span>. All Rights Reserved.</p>
            <p className="text-gray-600 mt-1">Designed by ITCLUB</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-500">
            {["Privacy Policy", "Refund policy", "Terms and Conditions", "Disclaimer"].map((policy) => (
              <Link
                key={policy}
                to={`/${policy.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-gray-300 transition-colors"
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}