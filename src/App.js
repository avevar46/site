import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Experience from "./pages/Experience";
import References from "./pages/References";
import Contact from "./pages/Contact";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import "./App.css";

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <Header />
      <Routes>
        <Route path="/" element={<Experience />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  );
}

export default App;
