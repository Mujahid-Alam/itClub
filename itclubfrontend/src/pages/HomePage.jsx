import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import WelcomeSlider from '../components/WelcomeSlider';
import Footer from '../components/Footer';
import OurTeam from '../components/About/OurTeam';

const HomePage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <TopBar />
    <Navbar />
    <WelcomeSlider />
    <OurTeam />
    <Footer />
  </div>
);
export default HomePage;