import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import WelcomeSlider from '../components/WelcomeSlider';
import Footer from '../components/Footer';
import Affiliations from '../components/AffiliationsAccreditations';
import ImpactSection from '../components/Impact';
import LatestUpdates from '../components/LatestUpdates';
import NGOProfile from '../components/NGOProfile';
import Projects from '../components/Projects'
import CSR from '../components/CSR';
import Annual from '../components/Annual';


const HomePage = () => (
  <div className="">
    <TopBar />
    <Navbar />

    <LatestUpdates />
    <WelcomeSlider />

    <NGOProfile />
    <ImpactSection />
    <Projects />
    <Affiliations />


    <CSR />
    <Annual />
    <Footer />
  </div>
);
export default HomePage;