import React from "react";
import Typed from "react-typed";
import resumeURL from "../../assets/resume/Resume v5.pdf";
import photo from "../../assets/resume/resume.png";

const Resume = () => {
  return (
    <section>
      <div className="resume container">
        <div className="row">
          <div className="typed-text col-12">
            <Typed
              strings={["Resume"]}
              typeSpeed={70}
              backSpeed={60}
              loop
            ></Typed>
          </div>
        </div>
        <div className="resume-display row">
          <div className="col-6">
            <img src={photo} height="500" width="auto" />
          </div>

          <div className='col-6'>
              <h2>Front End Skills</h2>
              <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li> 
                  <li>Bootstrap</li>
                  <li>Bulma</li>
              </ul>
              <h2>Back End Skills</h2>
              <ul>
                  <li>MongoDB/Mongoose</li>
                  <li>MySQL/Sequelize</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                  <li>APIs</li>
                  <li>RESTful APIs</li>
              </ul>
              
          </div>
          </div>
          <a
            class="download-btn btn btn-danger"
            role="button"
            href={resumeURL}
            download="Fabricio Bustamante Resume"
          >
            Download
          </a>
      </div>
    </section>
  );
};

export default Resume;
