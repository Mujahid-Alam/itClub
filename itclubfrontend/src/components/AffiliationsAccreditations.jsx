import { useState } from "react";

const affiliations = [
  { name: "NITI Aayog", logo: "/AffiliationsAccreditations/niti.png", tag: "Govt. of India" },
  { name: "MSME", logo: "/AffiliationsAccreditations/msme.png", tag: "Ministry" },
  { name: "NGO Darpan", logo: "/AffiliationsAccreditations/darpan.png", tag: "Portal" },
  { name: "Skill India", logo: "/AffiliationsAccreditations/skillindia.png", tag: "Initiative" },
  { name: "Digital India", logo: "/AffiliationsAccreditations/india.png", tag: "Initiative" },
  { name: "GeM Portal", logo: "/AffiliationsAccreditations/gem.png", tag: "Govt. Procurement" },
  { name: "GST", logo: "/AffiliationsAccreditations/gst.png", tag: "Taxation" },
  { name: "ISO Certified", logo: "/AffiliationsAccreditations/iso.png", tag: "Quality" },
  { name: "Income Tax", logo: "/AffiliationsAccreditations/itr.png", tag: "Govt. Department" },
  { name: "MCA", logo: "/AffiliationsAccreditations/mca.png", tag: "Ministry" },
  { name: "NSDC", logo: "/AffiliationsAccreditations/nsdc.png", tag: "Skill Development" },
  { name: "EPFO", logo: "/AffiliationsAccreditations/epfo.png", tag: "Government" },
  { name: "ESIC", logo: "/AffiliationsAccreditations/esi.png", tag: "Government" },
  { name: "DDU-GKY", logo: "/AffiliationsAccreditations/ddugky.png", tag: "Scheme" },
  { name: "Anudhan", logo: "/AffiliationsAccreditations/anudhan.png", tag: "Portal" },
];

export default function Affiliations() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">

      {/* Background blur blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-10 relative z-10">

        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Recognition & Trust
        </span>

        <h2 className="text-4xl font-extrabold text-gray-900 mt-3 sm:text-5xl">
          Affiliations &{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text">
            Accreditations
          </span>
        </h2>

        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          Proudly associated with India's leading institutions and initiatives.
        </p>

        {/* Toggle Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-3 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          {showAll ? "Show Slider View" : "Show All Affiliations"}
        </button>

      </div>

      {/* CONDITIONAL VIEW */}
      {!showAll ? (

        /* 🔥 YOUR ORIGINAL SLIDER (UNCHANGED) */
        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-24 before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-24 after:bg-gradient-to-l after:from-gray-50 after:to-transparent">

          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] py-4">

            {[...affiliations, ...affiliations].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group flex-shrink-0 bg-white rounded-2xl border border-gray-100 mx-4 w-[240px] h-40 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg relative"
              >

                {/* top glow */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                {/* tag */}
                <span className="absolute top-2 right-3 text-[9px] font-semibold text-gray-400 uppercase bg-gray-50 px-1.5 py-0.5 rounded">
                  {item.tag}
                </span>

                {/* logo */}
                <div className="h-16 w-full flex items-center justify-center mb-3">
                  <img
                    src={item.logo}
                    alt={item.name}
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* name */}
                <p className="text-sm font-semibold text-gray-700 text-center">
                  {item.name}
                </p>

              </div>
            ))}

          </div>
        </div>

      ) : (

        /* 🔥 GRID VIEW (ALL CARDS) */
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {affiliations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
            >

              <div className="h-16 w-full flex items-center justify-center">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="text-sm font-semibold mt-2 text-center text-gray-700">
                {item.name}
              </p>

            </div>
          ))}

        </div>

      )}

    </section>
  );
}