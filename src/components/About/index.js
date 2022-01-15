import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>
        My name is Fabricio Bustamante and I am an incoming Full Stack Web
        Developer from the Rutgers Coding Bootcamp. I reside in the NJ area and
        am actively open to new job opportunities where I am able to exemplify
        my new skills in web development, as well as continuting to learn in the
        field. I hope any guests who visit my page enjoy some of the projects I
        have worked on throughout my bootcamp experience!
      </p>
      <p>
        Feel free to leave a note as well in the{" "}
        <Link to="/contact">Contact</Link> section :){" "}
      </p>
      <p>
        Enjoy!
        <br />- Fabricio
      </p>
    </div>
  );
};

export default About;
