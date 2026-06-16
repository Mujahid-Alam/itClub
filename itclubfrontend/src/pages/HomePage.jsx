import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import WelcomeSlider from '../components/WelcomeSlider';
import Footer from '../components/Footer';
import Affiliations from '../components/AffiliationsAccreditations';
import ImpactSection from '../components/Impact/Impact';
import LatestUpdates from '../components/LatestUpdates';
import NGOProfile from '../components/NGOProfile';

const HomePage = () => (
  <div className="">
    <TopBar />
    <Navbar />
    <LatestUpdates />
    <WelcomeSlider />
    <NGOProfile />

    <ImpactSection />
    <Affiliations />
    


    <Footer />
  </div>
);
export default HomePage;