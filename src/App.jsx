import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutUs.jsx'
import ContactUs from '../pages/ContactUs.jsx';
import ProjectsPage from '../pages/ProjectsPage.jsx';
import HospitalityPage from '../pages/Hospitality.jsx';
import LandingPage from '../pages/LandingPage.jsx';
import Navbar from '../components/layout/Navbar.jsx';
function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Navbar/> */}
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
        <Route path="/hospitality" element={<HospitalityPage/>} />
        <Route path="/" element={<LandingPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
