import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div className="bg-overlay" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Destinations route removed */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Destinations page can be added later; using Home section for now */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;