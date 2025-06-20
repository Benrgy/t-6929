
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import VerborgenDorpen from "./pages/VerborgenDorpen";
import StrandenNatuur from "./pages/StrandenNatuur";
import EtenDrinken from "./pages/EtenDrinken";
import VervoerTips from "./pages/VervoerTips";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/verborgen-dorpen" element={<VerborgenDorpen />} />
            <Route path="/stranden-natuur" element={<StrandenNatuur />} />
            <Route path="/eten-drinken" element={<EtenDrinken />} />
            <Route path="/vervoer-tips" element={<VervoerTips />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
