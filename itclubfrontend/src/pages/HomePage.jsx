import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import WelcomeSlider from '../components/WelcomeSlider';
import Footer from '../components/Footer';
import VisionMission from '../components/About/VisionMission';
// import OurTeam from '../components/About/OurTeam';
import OurJourney from '../components/About/OurJourney';
import StatsSection from '../components/OurWork/StatsSection';
const HomePage = () => (
  <div className="">
    <TopBar />
    <Navbar />
    <WelcomeSlider />

    <div className="w-full px-2 sm:px-25">
      <VisionMission />
    </div>

    <OurJourney />
        {/* <OurTeam /> */}
   


    <StatsSection/>
    <Footer />
  </div>
);
export default HomePage;