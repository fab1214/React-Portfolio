import React from "react";
import { Link } from "react-router-dom";
import Typed from 'react-typed';
import photo from '../../assets/myself.jpeg';

const About = () => {
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="typed-text col-12">
          <Typed strings={['Welcome to my page!']}
          typeSpeed={40}
          backSpeed={50}
          loop
          ></Typed>
          </div>
      </div>
      <div className="row justify-content-space-around">
      <div className="col-6">
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
      <div className='col-6'>
        <img src={photo} width="400" height="auto" />
      </div>
    </div>
    </div>
    </section>
  );
};

export default About;
