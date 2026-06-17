import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Media from './pages/Media';
import JoinUs from './pages/JoinUs';
import Contact from './pages/ContactUs';
import Donate from './pages/Donate';

import UpdateNotice from './components/UpdateNotice';
import ScrollManager from './components/ScrollManager';
//About 
import AboutITClub from './components/About-us/About-itclub-foundation';
import MissionVision from './components/About-us/MissionVision';
import LegalRegistration from './components/About-us/LegalRegistration';
import OurTeamManagement from './components/About-us/OurTeamManagement';
import JourneyMilestones from './components/About-us/JourneyMilestones';


// OUR-PROGRAM  
import SkillDevelopment from './components/Our-Program/SkillDevelopment';
import WomenEmpowerment from './components/Our-Program/WomenEmpowerment';
import YouthDevelopment from './components/Our-Program/YouthDevelopment';

import LiveliHoodPromotion from './components/Our-Program/LiveliHoodPromotion';
import EducationDigitalLiteracy from './components/Our-Program/EducationDigitalLiteracy';
import HealthcareNutrition from './components/Our-Program/HealthcareNutrition';

import ReliefHumanitarian from './components/Our-Program/ReliefHumanitarian';



import GovtSchemes from './components/Our-Program/GovtSchemes';
import EnvironmentalSustainability from './components/Our-Program/EnvironmentalSustainability';

import ArtsCultureHeritage from './components/Our-Program/ArtsCultureHeritage';


//IMPACT
import SuccessStories from './components/Impact/SuccessStories';
import AnnualReports from './components/Impact/AnnualReports';

function App() {
  return (

    <Router>
      <UpdateNotice />
      <ScrollManager /> {/* इसे यहाँ रखें */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* ABOUT-US  */}
        <Route path="/about-us/about-itclub-foundation" element={<AboutITClub />} />
        <Route path="/about-us/mission-vision" element={<MissionVision />} />
        <Route path="/about-us/legal-registration" element={<LegalRegistration />} />
        <Route path="/about-us/team-management" element={<OurTeamManagement />} />
        <Route path="/about-us/journey-milestones" element={<JourneyMilestones />} />

        {/* OUR-PROGRAM  */}
        <Route path="/Our-Program/skill-development" element={<SkillDevelopment />} />
        <Route path="/Our-Program/women-empowerment" element={<WomenEmpowerment />} />
        <Route path="/Our-Program/youth-development" element={<YouthDevelopment />} />

        <Route path="/Our-Program/livelihood-promotion" element={<LiveliHoodPromotion />} />
        <Route path="/Our-Program/education-digital-literacy" element={<EducationDigitalLiteracy />} />
        <Route path="/Our-Program/healthcare-nutrition" element={<HealthcareNutrition />} />

        <Route path="/Our-Program/relief-humanitarian" element={<ReliefHumanitarian />} />
        <Route path="/Our-Program/environmental-sustainability" element={<EnvironmentalSustainability />} />

        <Route path="/Our-Program/govt-schemes" element={<GovtSchemes />} />
        <Route path="/Our-Program/arts-culture-heritage" element={<ArtsCultureHeritage />} />


        {/* IMPACT  */}
        <Route path="/impact/success-stories" element={<SuccessStories />} />
        <Route path="/impact/annual-reports" element={<AnnualReports />} />




        <Route path="/media" element={<Media />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/donate-now" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;