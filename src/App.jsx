import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Careers from './pages/Careers'
import Insurances from './pages/Insurances'
import Programs from './pages/Programs'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import SendReferral from './pages/SendReferral'
import AllDisciplines from './pages/AllDisciplines'
import DisciplineDetail from './pages/DisciplineDetail'
import HomeHealthCare from './pages/HomeHealthCare'
import PrivateDuty from './pages/PrivateDuty'
import HomeMakerCCP from './pages/HomeMakerCCP'
import HospicePalliative from './pages/HospicePalliative'
import PhysicalTherapy from './pages/PhysicalTherapy'
import OccupationalTherapy from './pages/OccupationalTherapy'
import SpeechTherapy from './pages/SpeechTherapy'
import SkilledNursing from './pages/SkilledNursing'
import HomeHealthAides from './pages/HomeHealthAides'
import MedicalSocialService from './pages/MedicalSocialService'
import Dietitians from './pages/Dietitians'
import HospiceCare from './pages/HospiceCare'
import WoundCare from './pages/WoundCare'
import DiabetesManagement from './pages/DiabetesManagement'
import OstomyCare from './pages/OstomyCare'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        {/* Skip to Main Content Link for Accessibility */}
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        
        <Header />
        
        <main className="main-content" id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/insurances" element={<Insurances />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/send-referral" element={<SendReferral />} />
            <Route path="/disciplines" element={<AllDisciplines />} />
            <Route path="/disciplines/:disciplineName" element={<DisciplineDetail />} />
            <Route path="/home-health-care" element={<HomeHealthCare />} />
            <Route path="/private-duty" element={<PrivateDuty />} />
            <Route path="/home-maker-ccp" element={<HomeMakerCCP />} />
            <Route path="/hospice-palliative" element={<HospicePalliative />} />
            <Route path="/physical-therapy" element={<PhysicalTherapy />} />
            <Route path="/occupational-therapy" element={<OccupationalTherapy />} />
            <Route path="/speech-therapy" element={<SpeechTherapy />} />
            <Route path="/skilled-nursing" element={<SkilledNursing />} />
            <Route path="/home-health-aides" element={<HomeHealthAides />} />
            <Route path="/medical-social-service" element={<MedicalSocialService />} />
            <Route path="/dietitians" element={<Dietitians />} />
            <Route path="/hospice-care" element={<HospiceCare />} />
            <Route path="/wound-care" element={<WoundCare />} />
            <Route path="/diabetes-management" element={<DiabetesManagement />} />
            <Route path="/ostomy-care" element={<OstomyCare />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App