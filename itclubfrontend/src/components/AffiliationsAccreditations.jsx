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
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          Recognition & Trust
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-3 tracking-tight sm:text-5xl">
          Affiliations & <span className="text-[rgb(29,63,180)] bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Accreditations</span>
        </h2>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          Proudly associated and registered with India's leading recognized institutions, ministries, and national initiatives.
        </p>
      </div>

      {/* Infinite Slider Container with Faded Edges */}
      <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-32 before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-32 after:bg-gradient-to-l after:from-gray-50 after:to-transparent">
        
        {/* Animated Track */}
        <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused] py-4">
          
          {/* Loop over data twice for seamless continuous scroll */}
          {[...affiliations, ...affiliations].map((item, index) => (
            <div
              key={index}
              className="group flex-shrink-0 bg-white rounded-2xl border border-gray-100/80 mx-4 w-[240px] h-36 flex flex-col items-center justify-center p-5 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_30px_rgba(29,63,180,0.08)] hover:border-blue-200 relative overflow-hidden"
            >
              {/* Subtle top bar glow on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              
              {/* Mini Tag */}
              <span className="absolute top-2 right-3 text-[9px] font-semibold text-gray-400 tracking-wider uppercase bg-gray-50 group-hover:bg-blue-50 group-hover:text-blue-600 px-1.5 py-0.5 rounded transition-colors duration-300">
                {item.tag}
              </span>

              {/* Logo Wrapper */}
              <div className="h-14 w-full flex items-center justify-center mb-3 filter grayscale group-hover:grayscale-0 contrast-125 group-hover:contrast-100 transition-all duration-300 transform group-hover:scale-105">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Name */}
              <p className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 tracking-wide text-center line-clamp-1">
                {item.name}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}