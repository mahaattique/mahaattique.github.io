
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '/Users/mahaattique/Documents/GitHub/mahaattique.github.io/portfolio-website/src/styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    // <Router basename="/portfolio-website">
      <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
    // </Router>
  );
}

export default App;
