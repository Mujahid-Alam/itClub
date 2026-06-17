import React, { useState } from 'react';

// 1. डेटा स्ट्रक्चर
const PROJECT_DATA = [
  {
    id: 'proj-001',
    title: "FREE COMPUTER TRAINING PROGRAM",
    description: "Empowering local youth with industry-grade IT competencies under the structural framework of Bihar state skill development missions and digital literacy drives.",
    imagePath: "/Projects/project1.png",
  },
  {
    id: 'proj-002',
    title: "FREE RURAL MIDDLE SCHOOL",
    description: "Providing standard primary education, textbook kits, and comprehensive primary literacy up to Class 5 for rural and underprivileged children in remote areas.",
    imagePath: "/Projects/project2.png",
  },
  {
    id: 'proj-003',
    title: "FREE SKILL DEVELOPMENT CENTER",
    description: "Driving women empowerment by providing professional sewing, pattern cutting, and livelihood micro-entrepreneurship support programs.",
    imagePath: "/Projects/project3.png",
  },
  {
    id: 'proj-004',
    title: "FREE HEALTHCARE CAMP",
    description: "Organizing medical checkups, providing free prescribed medicines, and healthcare awareness for rural and suburban families.",
    imagePath: "/Projects/project2.png",
  },
  {
    id: 'proj-005',
    title: "CLEAN DRINKING WATER INITIATIVE",
    description: "Installing water filtration plants and promoting water conservation practices across water-scarce villages.",
    imagePath: "/Projects/project3.png",
  }
];

// 2. प्रोजेक्ट कार्ड सब-कंपोनेंट (onReadMore प्रॉप जोड़ा गया है)
const ProjectCard = ({ title, description, imagePath, onReadMore }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600&auto=format&fit=crop';
  };

  return (
    <article className="flex flex-col justify-between w-full max-w-[350px] overflow-hidden bg-white border border-gray-100 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md shrink-0 relative z-10">
      
      {/* Image Wrapper */}
      <div className="relative w-full aspect-[16/10] bg-gray-50 overflow-hidden select-none">
        <img 
          src={imagePath} 
          alt={title} 
          loading="lazy" 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
          onError={handleImageError}
        />
      </div>

      {/* Content Body */}
      <div className="flex flex-col flex-grow p-4 sm:p-5">
        <h3 className="mb-2 text-sm sm:text-base font-bold tracking-tight text-gray-900 line-clamp-2 min-h-[40px] sm:min-h-[48px]">
          {title}
        </h3>
        
        <p className="mb-4 text-[11px] sm:text-xs leading-relaxed text-gray-500 line-clamp-3 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto pt-1">
          <button 
            type="button" 
            onClick={onReadMore}
            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-[#fe9402] hover:opacity-80 transition-opacity uppercase tracking-wider group/btn"
          >
            Read More 
            <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>

    </article>
  );
};

// 3. मुख्य कंपोनेंट (पॉप-अप लॉजिक के साथ)
export default function Project() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); // पॉप-अप स्टेट

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative select-none">
      
      {/* Background Blur Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#fe9402]/10 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

      {/* CSS इन्जेक्शन */}
      <style>{`
        @keyframes scrollRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-project-scroll-slow {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scrollRightToLeft 45s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* CENTERED HEADER */}
        <header className="flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Our Recent <span className="text-[#fe9402]">Project</span>
          </h2>

          <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            See how we are making a sustainable impact.
          </p>
          <div className="w-12 h-1 bg-[#fe9402] mx-auto rounded-full mt-4" />
        </header>

        {/* CENTERED BUTTON */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#fe9402] hover:brightness-95 text-white px-8 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200"
          >
            {showAll ? "Show Slider View" : "View All Project"}
          </button>
        </div>

        {/* CARDS CONTAINER */}
        {showAll ? (
          /* 1. GRID VIEW */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 justify-items-center mb-4 animate-fadeIn">
            {PROJECT_DATA.map((project) => (
              <ProjectCard 
                key={`grid-${project.id}`}
                title={project.title}
                description={project.description}
                imagePath={project.imagePath}
                onReadMore={() => setSelectedProject(project)} // क्लिक होने पर प्रोजेक्ट डेटा सेट करेगा
              />
            ))}
          </div>
        ) : (
          /* 2. INFINITE AUTOMATIC SLIDER VIEW */
          <div className="relative w-full overflow-hidden mb-4 before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-12 before:bg-gradient-to-r before:from-gray-50 before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-12 after:bg-gradient-to-l after:from-gray-50 after:to-transparent">
            
            <div className="animate-project-scroll-slow hover:[animation-play-state:paused] py-2">
              
              {[...PROJECT_DATA, ...PROJECT_DATA].map((project, index) => (
                <div key={`slider-wrapper-${project.id}-${index}`} className="w-[290px] sm:w-[350px]">
                  <ProjectCard 
                    title={project.title}
                    description={project.description}
                    imagePath={project.imagePath}
                    onReadMore={() => setSelectedProject(project)} // क्लिक होने पर प्रोजेक्ट डेटा सेट करेगा
                  />
                </div>
              ))}

            </div>
          </div>
        )}

      </div>

      {/* ==================== POP-UP MODAL MODAL ==================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          
          {/* बैकग्राउंड पर क्लिक करने से भी पॉप-अप बंद हो जाएगा */}
          <div className="absolute inset-0" onClick={() => setSelectedProject(null)}></div>
          
          {/* पॉप-अप बॉक्स */}
          <div className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative z-10 transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col">
            
            {/* क्रॉस क्लोज बटन */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center bg-black/40 text-white rounded-full hover:bg-black/60 transition-colors text-sm"
            >
              ✕
            </button>

            {/* प्रोजेक्ट इमेज */}
            <div className="w-full aspect-[16/10] bg-gray-100 relative overflow-hidden shrink-0">
              <img 
                src={selectedProject.imagePath} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600&auto=format&fit=crop';
                }}
              />
            </div>

            {/* पॉप-अप कंटेंट (Scrollable if text is long) */}
            <div className="p-5 sm:p-6 overflow-y-auto">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 tracking-tight">
                {selectedProject.title}
              </h3>
              
              <div className="w-10 h-0.5 bg-[#fe9402] mb-4 rounded-full" />
              
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {selectedProject.description}
              </p>
            </div>

            {/* नीचे का क्लोज बटन फुटर */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end shrink-0">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-[#fe9402] hover:brightness-95 text-white px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Close
              </button>
            </div>

            

          </div>
        </div>
      )}
      {/* ==================== END POP-UP MODAL ==================== */}

    </section>
  );
}