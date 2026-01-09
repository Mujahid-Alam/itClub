import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Media = () => {
  const gallery = [
    { id: 1, title: "Community Meetup", category: "Events", size: "md:col-span-2" },
    { id: 2, title: "Healthcare Camp", category: "Impact", size: "md:col-span-1" },
    { id: 3, title: "Digital Classroom", category: "Education", size: "md:col-span-1" },
    { id: 4, title: "Rural Outreach", category: "Mission", size: "md:col-span-2" },
    { id: 5, title: "Volunteer Drive", category: "People", size: "md:col-span-1" },
    { id: 6, title: "Awards Night", category: "Success", size: "md:col-span-2" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-it-green selection:text-white">
      <TopBar />
      <Navbar />

      <main>
        {/* --- HERO SECTION: Ultra Minimal & Tight --- */}
        <HeroSection
          backgroundText="Archive"
          topLabel="Visual Stories"
          title="MEDIA  "
          highlight="CENTRE"
          footerText=" Events • Outreach • Moments"
        />

        {/* --- MASONRY GRID GALLERY --- */}
        <section className="max-w-6xl mx-auto px-6 -mt-8 relative z-20 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <div 
                key={item.id} 
                className={`${item.size} group relative h-[300px] rounded-[1.5rem] overflow-hidden bg-gray-100 border border-it-blue/5 shadow-sm transition-all duration-500 hover:shadow-2xl`}
              >
                {/* Image Placeholder with Grayscale to Color Effect */}
                <img 
                  src={`https://picsum.photos/seed/${item.id + 10}/800/600`} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Content Overlay - Revealed on Hover */}
                <div className="absolute inset-0 bg-it-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <p className="text-it-green font-bold text-[8px] uppercase tracking-[0.4em] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </p>
                  <h3 className="text-white font-black text-lg uppercase tracking-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                  <div className="mt-4 w-6 h-[1px] bg-it-green group-hover:w-12 transition-all duration-700"></div>
                </div>

                {/* Tiny Badge (Always Visible) */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full group-hover:opacity-0 transition-opacity">
                   <p className="text-it-blue font-bold text-[7px] uppercase tracking-widest">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Link - Minimal Style */}
          <div className="mt-16 text-center">
             <button className="text-[10px] font-black uppercase tracking-[0.5em] text-it-blue border-b border-it-blue/20 pb-2 hover:text-it-green hover:border-it-green transition-all">
                Load More Archive
             </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Media;