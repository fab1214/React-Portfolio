import React, {useEffect} from "react";

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
        <div className="row">
          <h2>
            <a href="/">Fabricio Bustamante</a>
          </h2>
        </div>
        <nav>
            <div className="row">
              {/* <div className="col">
                <a href="#About">
                  <span className='selected' onClick={() => sectionSelected("About")}>About</span>
                </a>
              </div> */}
              {sections.map((section) => (
                <div
                  className={`col ${currentSection.name === section.name && 'navActive'}`} key={section.name}
                  onClick={() => { setCurrentSection(section)}}
                >
                  {section.name}
                </div>
              ))}
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
