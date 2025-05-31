import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollRouter from './ScrollRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './pages/Gallery';
import Rooms from './components/Rooms';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
         <Route path="/gallery" element={<Gallery />} />
         <Route path="/rooms" element={<Rooms />} />
         <Route path="/about" element={<About />} />
        <Route path="/*" element={<ScrollRouter />} />
      </Routes>
       <Footer />
    </Router>
  );
};

export default App;
