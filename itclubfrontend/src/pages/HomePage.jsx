import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import WelcomeSlider from '../components/WelcomeSlider';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';

const HomePage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <TopBar />
    <Navbar />
    <WelcomeSlider />
    <Footer />
  </div>
);
export default HomePage;