import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import WelcomeSlider from '../components/WelcomeSlider';
import Footer from '../components/Footer';
import Affiliations from '../components/AffiliationsAccreditations';
import ImpactSection from '../components/Impact/Impact';

const HomePage = () => (
  <div className="">
    <TopBar />
    <Navbar />

    <div className="w-full h-8 bg-[rgb(29,63,180)] flex items-center overflow-hidden">

        {/* Fixed Latest Updates */}
        <div className="h-full px-5 bg-it-blue text-[#fe8d02] flex items-center justify-center text-[10px] md:text-xs font-extrabold uppercase tracking-widest shrink-0">
            Latest Updates
        </div>
              {/* TOP MOVING TEXT BAR */}
              <div className="w-full h-7 bg-[#003d7a] flex items-center overflow-hidden">
                <marquee
                  direction="left"
                  scrollamount="7"
                  className="text-white text-[12px] font-bold tracking-widest"
                  onMouseOver={(e) => e.target.stop()}
                  onMouseOut={(e) => e.target.start()}
                >
                  1. ITCLUB Foundation has successfully launched its new Digital Literacy & AI Training Center!
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  2. Free IT Skills & Employability Training Camp starting soon for Underprivileged Youth.
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  3. Inviting Corporate Partners & CSR Companies for Collaborative Social Impact Initiatives.
                </marquee>

            
              </div>
    </div>

    <WelcomeSlider />
    <ImpactSection />
    <Affiliations />
    


    <Footer />
  </div>
);
export default HomePage;