import React from "react";
import photo from "../../assets/project-thumbnail/myspace-2.png";

const Portfolio = () => {
  //declare object to hold projects
  const projects = [
  {
    name: "Myspace 2",
    url: "https://secure-falls-17879.herokuapp.com/login",
    alt: 'myspace 2 app',
    repo: "https://github.com/fab1214/MySpace-2"
  },
  {
    name: "The Huddle",
    url: "https://markgranade.github.io/the-huddle/",
    alt: 'the huddle app',
    repo: "https://github.com/MarkGranade/the-huddle"
  },
  {
    name: "Run Buddy",
    url: "https://fab1214.github.io/run-buddy-/",
    alt: 'run buddy app',
    repo: "https://github.com/fab1214/run-buddy-"
  },
  {
    name: "Budget Tracker",
    url: "https://stormy-stream-94592.herokuapp.com/",
    app: 'budget tracker app',
    repo: "https://github.com/fab1214/Budget-Tracker"
  },
  {
    name: "Pizza Hunt",
    url: "https://mighty-retreat-87057.herokuapp.com/",
    alt: 'pizza app',
    repo: "https://github.com/fab1214/pizza-hunt"
  },
  {
    name: "Tech Blog",
    url: "https://aqueous-tundra-44491.herokuapp.com/",
    alt: 'tech blog',
    repo: "https://github.com/fab1214/MVC-Tech-Blog"
  }
  ];

  return (
    <section>
      <h1>My Projects</h1>
      <div className="container">
        <div className="row">
        {projects.map((project) => (
        <div className="col-4">
        <p>{project.name}</p>
        <a href={project.repo}><p>GitHub Repo</p></a>
          <a href={project.url}>
            <img
              src={photo}
              alt={project.alt}
              width="300px"
              height="230px"
            />
          </a>
        </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default Portfolio;
