import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
