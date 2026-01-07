import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  // Aapke handwritten notes se points
  const focusAreas = [
    "Education & Skill Development", "Youth Empowerment", 
    "Technology for Development", "Women Empowerment", 
    "Child welfare", "Health care", 
    "Environmental sustainability", "Art and culture preservation", 
    "Community Development", "Disaster Preparedness", 
    "Livelihoods", "Food, clothing and Shelter Provision"
  ];

  const initiatives = [
    "Skilling & Education", "Health care", "Livelihoods", 
    "Environment Protection", "Economic and social development"
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Shared Layout */}
      <TopBar />
      {/* <Header /> */}
      <Navbar />

      {/* Page Content */}
      <main className="grow">
        {/* Banner Section */}
        <div className="py-10 text-center">
          <h1 className="text-4xl font-black uppercase tracking-widest">About ITCLUB Foundation</h1>
          <div className="h-1.5 bg-it-green w-24 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-2">
          {/* Intro Paragraph from your image */}
          <div className="border-l-8 border-it-green bg-it-light p-8 rounded-r-lg shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-it-blue mb-4 uppercase">Who We Are</h2>
            <p className="text-gray-800 leading-relaxed text-justify font-medium">
              ITCLUB Foundation is a value-driven, non-profit organization that thrives in contribution 
              toward National development goals, impacting the lives of people and communities through 
              long-term sustainable programs. The foundation aims to alleviate and achieve inclusive 
              growth and development through a life cycle-based integrated community development approach, 
              with thematic focus on skilling & education, health, livelihoods, environment, and 
              disaster risk reduction & response.
            </p>
          </div>

          {/* Grid for Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Initiatives Column */}
            <div>
              <h3 className="text-xl font-black text-it-blue mb-6 border-b-2 border-it-green inline-block pb-1 uppercase">
                Our Key Initiatives
              </h3>
              <ul className="space-y-4">
                {initiatives.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <span className="bg-it-blue text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold group-hover:bg-it-green transition-colors">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 font-bold text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Focus Areas Column */}
            <div>
              <h3 className="text-xl font-black text-it-green mb-6 border-b-2 border-it-blue inline-block pb-1 uppercase">
                Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 bg-gray-50 p-2 rounded border-l-4 border-it-blue hover:border-it-green transition-all">
                    <span className="text-it-green font-bold text-lg leading-none">✓</span>
                    <span className="text-xs font-bold text-gray-600 uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;