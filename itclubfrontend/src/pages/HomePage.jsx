import TopBar from '../components/TopBar';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import WelcomeSlider from '../components/WelcomeSlider';
import EnquiryForm from '../components/EnquiryForm';
import Footer from '../components/Footer';

const HomePage = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col">
    <TopBar />
    <Header />
    <Navbar />
    <main className="grow">
      <WelcomeSlider />
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section className="bg-white p-8 rounded border-l-4 border-it-green shadow-sm">
            <h3 className="text-2xl font-bold text-it-blue mb-4 uppercase">News & Events</h3>
            <p className="text-gray-600 italic">"Welcome to IT CLUB - Innovating for a better future."</p>
          </section>
          {/* Yahan aap AboutSection add kar sakte hain */}
        </div>
        <aside>
          <EnquiryForm />
        </aside>
      </div>
    </main>
    <Footer />
  </div>
);
export default HomePage;