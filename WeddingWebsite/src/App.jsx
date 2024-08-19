import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import Home from './components/Home';
import Baby from './Pages/Baby';
import Birthday from './Pages/Birthday';
import EngagementGallery from './Pages/EngagementGallery';
import Wedding from './Pages/Wedding';
import PreWedding from './Pages/PreWedding';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const appStyle = {
    background: isHomePage ? 'none' : 'linear-gradient(45deg, #AF8F6F, #74512D, #543310, #AF8F6F)',
    minHeight: '100vh',
    transition: 'background 0.5s ease' 
  };

  return (
    <div className="App" style={appStyle}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/engagement" element={<EngagementGallery />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/prewedding" element={<PreWedding />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
