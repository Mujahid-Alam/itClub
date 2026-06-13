import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';


import Media from './pages/Media';
import JoinUs from './pages/JoinUs';
import Contact from './pages/ContactUs';
import Donate from './pages/Donate';

import UpdateNotice from './components/UpdateNotice';
function App() {
  return (

    <Router>

            <UpdateNotice />

      <Routes>
        <Route path="/" element={<HomePage />} />
        
          {/* <Route path="/about-us/about-itclub-foundation" element={<AboutITCLUB />} />
          <Route path="/about-us/mission-vision" element={<MissionVision />} />
          <Route path="/about-us/legal-registration" element={<LegalRegistration />} />
          <Route path="/about-us/team-management" element={<TeamManagement />} />
          <Route path="/about-us/journey-milestones" element={<JourneyMilestones />} /> */}


        <Route path="/media" element={<Media />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate-now" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;