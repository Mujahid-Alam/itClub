import React from 'react';
import { FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';

import tabrez from '../../assets/OurTeam/tabrez.jpeg';
import mujahid from '../../assets/OurTeam/mujahid.png';
import rani from '../../assets/OurTeam/rani.jpeg';

const OurTeam = () => {
  const team = [
    { 
      name: "Tabrez Alam", 
      role: "Founding Director", 
      dept: "Executive Board",
      img: tabrez,
      social: { linkedin: "#", twitter: "#", email: "tabrez@itclub.org" }
    },
    { 
      name: "Mujahid Alam", 
      role: "Strategic Advisor", 
      dept: "Advisory Council",
      img: mujahid,
      social: { linkedin: "#", twitter: "#", email: "mujahid@itclub.org" }
    },
    { 
      name: "Rani Bhowmick", 
      role: "Technical Head", 
      dept: "IT & Innovation",
      img: rani,
      social: { linkedin: "#", twitter: "#", email: "rani@itclub.org" }
    },
    { 
      name: "Chanda Rani", 
      role: "Head of Department", 
      dept: "Computer Innovation",
      img: rani,
      social: { linkedin: "#", twitter: "#", email: "chanda@itclub.org" }
    }
  ];

  return (
    <section className="py-3 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ---- SECTION HEADER ---- */}
        <div className="mb-3 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-it-blue uppercase tracking-tight">
            The <span className="text-it-green">Core</span>
          </h2>
          <p className="mt-3 text-gray-400 text-xs font-bold uppercase tracking-[0.35em]">
            Behind the IT Club Initiatives
          </p>
          <div className="mt-3 flex justify-center">
            <div className="w-24 border-t-2 border-it-green/40"></div>
          </div>
        </div>

        {/* ---- TEAM GRID ---- */}
        {/* Mobile: 2 cards | Desktop: 2 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {team.map((m, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center sm:flex-row gap-5 sm:gap-8 p-4 sm:p-6 rounded-[2rem] bg-[#fdfdfd] border border-gray-100 hover:bg-white hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              {/* ---- IMAGE ---- */}
              <div className="w-28 h-28 sm:w-36 sm:h-36 shrink-0 overflow-hidden rounded-2xl shadow-md group-hover:scale-95 transition-transform duration-700">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* ---- CONTENT ---- */}
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block mb-2 px-3 py-1 rounded-full bg-it-green/10 text-it-green text-[9px] font-black uppercase tracking-widest">
                  {m.dept}
                </span>

                <h3 className="text-sm sm:text-lg font-black text-it-blue uppercase tracking-tight">
                  {m.name}
                </h3>

                <p className="mt-1 text-[10px] sm:text-xs text-gray-400 font-bold uppercase tracking-widest mb-4">
                  {m.role}
                </p>

                {/* ---- SOCIAL ICONS ---- */}
                <div className="flex justify-center sm:justify-start gap-4">
                  <a href={m.social.linkedin} className="text-gray-300 hover:text-it-blue transition">
                    <FaLinkedinIn size={16} />
                  </a>
                  <a href={m.social.twitter} className="text-gray-300 hover:text-it-blue transition">
                    <FaTwitter size={16} />
                  </a>
                  <a href={`mailto:${m.social.email}`} className="text-gray-300 hover:text-it-blue transition">
                    <FaEnvelope size={16} />
                  </a>
                </div>
              </div>

              {/* ---- DECORATIVE INDEX ---- */}
              <span className="absolute top-6 right-6 text-5xl font-black text-gray-50 group-hover:text-it-green/10 transition-colors duration-500 -z-10">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
