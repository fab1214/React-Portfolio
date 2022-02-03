import React from 'react';

const ProjectList = () => {
  //declare object to hold projects
    const projects = [
        {
          name: "Myspace 2",
          url: "https://secure-falls-17879.herokuapp.com/login",
          alt: 'myspace 2 app',
          repo: "https://github.com/fab1214/MySpace-2",
          photo: require("../../assets/project-thumbnail/myspace-2.png")
        },
        {
          name: "The Huddle",
          url: "https://markgranade.github.io/the-huddle/",
          alt: 'the huddle app',
          repo: "https://github.com/MarkGranade/the-huddle",
          photo: require("../../assets/project-thumbnail/the-huddle.png")
        },
        {
          name: "Run Buddy",
          url: "https://fab1214.github.io/run-buddy-/",
          alt: 'run buddy app',
          repo: "https://github.com/fab1214/run-buddy-",
          photo: require("../../assets/project-thumbnail/run-buddy.png")
        },
        {
          name: "Budget Tracker",
          url: "https://stormy-stream-94592.herokuapp.com/",
          app: 'budget tracker app',
          repo: "https://github.com/fab1214/Budget-Tracker",
          photo: require("../../assets/project-thumbnail/budget-tracker.png")
        },
        {
          name: "Pizza Hunt",
          url: "https://mighty-retreat-87057.herokuapp.com/",
          alt: 'pizza app',
          repo: "https://github.com/fab1214/pizza-hunt",
          photo: require("../../assets/project-thumbnail/pizza-hunt.png")
        },
        {
          name: "Tech Blog",
          url: "https://aqueous-tundra-44491.herokuapp.com/",
          alt: 'tech blog',
          repo: "https://github.com/fab1214/MVC-Tech-Blog",
          photo: require("../../assets/project-thumbnail/tech-blog.png")
        },
      {
          name: "goghbuy",
          url: "https://nameless-fjord-50324.herokuapp.com/",
          alt: 'goghbuy ecommerce',
          repo: "https://github.com/fab1214/goghbuy",
          photo: require("../../assets/project-thumbnail/tech-blog.png")
        }
        ];      


    return (

        <div className="projects container">
        <div className="row">
        {projects.map((project) => (
        <div className="col-4" key={project.name}>
          <a href={project.url}>
            <img
              src={project.photo}
              alt={project.alt}
              width="300px"
              height="230px"
            />
          </a>
          <a href={project.repo}><p>View Github Repo</p></a>
          <div className='text-block'>
          <p>{project.name}</p>
          </div>
        </div>
        ))}
      </div>
     </div>

    );
};

export default ProjectList;
