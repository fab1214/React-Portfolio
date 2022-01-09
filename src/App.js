import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [sections] = useState([
      {
        name: "About"
      },
      {
        name: "Portfolio",
      },
      {
        name: "Contact",
      },
      {
        name: "Resume",
      },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
    <div>
      <Nav
      sections={sections}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection} />
      <main>
      <About />
      <Contact />
      <Portfolio />
      <Resume />
      <Footer />
      </main>
    </div>
  );
}

export default App;
