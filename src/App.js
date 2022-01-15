import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
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
        name: "Contact",
      },
      {
        name: "Portfolio",
      },
      {
        name: "Resume",
      },
  ]);

  const [currentSection, setCurrentSection] = useState(sections[0]);

  return (
      <BrowserRouter>
    <div>
      <Nav
      sections={sections}
      currentSection={currentSection}
      setCurrentSection={setCurrentSection} />
      <main>
        <div className="container">
          <Route exact path='/About' component={About} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/Portfolio' component={Portfolio} />
          <Route exact path='/Resume' component={Resume} />

          {/* <Route component={About} /> */}
        </div>
      <Footer />
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
