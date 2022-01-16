import React from "react";
import ProjectList from '../Projects';
import Typed from 'react-typed';

const Portfolio = () => {

  return (
    <section>
          <div className="typed-text">
          <Typed strings={['My Projects']}
          typeSpeed={70}
          backSpeed={60}
          loop
          ></Typed>
        </div>
    <ProjectList />
    </section>
  );
};

export default Portfolio;
