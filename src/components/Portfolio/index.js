import React from "react";
import photo from "../../assets/project thumbnail/myspace-2.png";

const Portfolio = () => {
  //declare object to hold projects
  const projects = {
    name: "Myspace 2",
    url: "https://secure-falls-17879.herokuapp.com/login",
  };

  return (
    <section>
      <h1>My Projects</h1>
      <div className="container">
        <div className="row">

          <div className="col-4">
            <p>{projects.name}</p>
            <div>
              <a href={projects.url}>
                <img
                  src={photo}
                  alt="myspace 2 app"
                  width="300px"
                  height="230px"
                />
              </a>
            </div>
          </div>

          <div className="col-4">
            <p>{projects.name}</p>
            <div>
              <a href={projects.url}>
                <img
                  src={photo}
                  alt="myspace 2 app"
                  width="300px"
                  height="230px"
                />
              </a>
            </div>
          </div>

          <div className="col-4">
            <p>{projects.name}</p>
            <div>
              <a href={projects.url}>
                <img
                  src={photo}
                  alt="myspace 2 app"
                  width="300px"
                  height="230px"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
