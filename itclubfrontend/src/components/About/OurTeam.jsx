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
      dept: "Executive Governance",
      img: tabrez,
      social: { linkedin: "#", twitter: "#", email: "tabrez@itclub.org" }
    },
    { 
      name: "Mujahid Alam", 
      role: "Strategic Advisor", 
      dept: "Operations & Advisory",
      img: mujahid,
      social: { linkedin: "#", twitter: "#", email: "mujahid@itclub.org" }
    },
    { 
      name: "Rani Bhowmick", 
      role: "Technical Head", 
      dept: "Technology & Digital",
      img: rani,
      social: { linkedin: "#", twitter: "#", email: "rani@itclub.org" }
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-20">
          <h2 className="text-4xl font-black text-it-blue uppercase tracking-tighter inline-block border-b-4 border-it-green pb-2">
            The Council
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((m, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 transition-all duration-500 hover:shadow-2xl">
              
              {/* Photo Area - Large & Sharp */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={m.img} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  alt={m.name} 
                />
                
                {/* Floating Social Bar */}
                <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-100">
                  <a href={m.social.linkedin} className="w-9 h-9 bg-white text-it-blue rounded-full flex items-center justify-center shadow-md hover:bg-it-green hover:text-white transition-all"><FaLinkedinIn size={14}/></a>
                  <a href={`mailto:${m.social.email}`} className="w-9 h-9 bg-white text-it-blue rounded-full flex items-center justify-center shadow-md hover:bg-it-green hover:text-white transition-all"><FaEnvelope size={14}/></a>
                </div>
              </div>

              {/* Info Content - Slide Up Effect */}
              <div className="relative p-6 bg-white transition-transform duration-500 translate-y-2 group-hover:-translate-y-4">
                <span className="text-it-green font-black text-[9px] uppercase tracking-[0.3em] mb-1 block">
                  {m.role}
                </span>
                <h3 className="text-2xl font-black text-it-blue uppercase tracking-tight mb-4">
                  {m.name}
                </h3>

                {/* This part reveals on hover */}
                <div className="h-0 group-hover:h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 border-t border-gray-100 pt-4">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    Department: <span className="text-it-blue">{m.dept}</span>
                  </p>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-it-green group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;