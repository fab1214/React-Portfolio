import React from "react";

const Nav = () => {
    const sectionSelected = (name) => {
        console.log(`${name} selected`);
    }

    const sections = [
        {
            name: 'Portfolio'
        },
        {
            name:'Contact'
        },
        {
            name: 'Resume'
        }
    ];

  return (
    <header>
      <h2>
        <a href="/">Fabricio Bustamante</a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#About">
                <span onClick={() => sectionSelected('About')} >About</span></a>
          </li>
          {sections.map((section) => (
              <li key={section.name}>
                  <span onClick={() => sectionSelected(section.name)} >{section.name}</span>
              </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
