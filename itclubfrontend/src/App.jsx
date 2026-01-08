import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/AboutUs'; 
import OurWork from './pages/OurWork';
import Media from './pages/Media';
import JoinUs from './pages/JoinUs';
import Contact from './pages/ContactUs';
import Donate from './pages/Donate';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/media" element={<Media />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate-now" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;