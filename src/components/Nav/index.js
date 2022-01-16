import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const {
    sections=[],
    setCurrentSection,
    currentSection,
  } = props;

  //update browser title with section name
  useEffect(() => {
    document.title = currentSection.name;
  }, [currentSection]);

  return (
    <header>
      <div className="container">
      <div className="row justify-content-center">
          <div className='col-12'>
          <Link to='/'>
          <h2 className='header-text'>
            <div className='nav-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-activity" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"/>
</svg>Fabricio Bustamante</div>
          </h2>
          </Link>
          </div>
          </div>
        <nav>
            <div className="row">
              {sections.map((section) => (
                <div
                  className={`col-3 ${currentSection.name === section.name && 'navActive'}`} key={section.name}
                  onClick={() => { setCurrentSection(section)}}
                >
                  <Link to={`/${section.name}`}>{section.name}</Link>
                </div>
              ))}
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
