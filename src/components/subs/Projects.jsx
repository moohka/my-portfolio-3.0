import { useRef, useEffect } from "react";
import Keep from "../../assets/screenshots/Screenshot_of_Google_Keep_Clone.png";
import Olive from "../../assets/screenshots/Screenshot_of_Olive_Hair.png";

const Projects = () => {
  //project hover effect
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  // const fourthRef = useRef();

  // function showDetail(theRef) {
  //   theRef.current.classList.toggle("hovered");
  //   console.log(theRef.current.classList);
  //   console.log("enter");
  // }

  // function hideDetail(theRef) {
  //   theRef.current.classList.toggle("hovered");
  //   console.log("leave");
  // }

  //projects
  const myProjects = [
    {
      id: 1,
      ref: firstRef,
      img: null,
      title: "Poultry Management Software",
      detail:
        "I made this software as a final project of Java course when I was enrolled in Software Development program.",
      builtWith: ["Java", "mySQL"],
      view: { live: null, repo: "https:www.github.com" },
    },
    {
      id: 2,
      ref: secondRef,
      img: Olive,
      title: "Olive Hair Salon",
      detail: "Calgary local hairsalon.",
      builtWith: ["React", "Sass"],
      view: {
        live: "https://olivehair2.netlify.app",
        repo: "https:www.github.com",
      },
    },
    {
      id: 3,
      ref: thirdRef,
      img: Keep,
      title: "Google Keep Clone",
      detail:
        "Clone website of Google Keep. This website demonstrates my knowledge on Firebase and data manipulation",
      builtWith: ["React", "Firebase", "Sass"],
      view: {
        live: "https://olivehair2.netlify.app",
        repo: "https:www.github.com",
      },
    },
  ];

  return (
    <div className="sub" id="projects">
      <h2 className="project-sub-title">My Projects</h2>

      <div className="project-container">
        {myProjects.map((project) => {
          return (
            <div className="project-card" key={project.id}>
              <img
                className="project-thumbnail"
                src={project.img}
                alt={`screenshot of ${project.title}`}
              ></img>

              <div
                className="project-detail"
                onMouseLeave={() => {}}
                ref={project.ref}
              >
                <h2 className="project-h">{project.title}</h2>
                <p className="project-p">{project.detail}</p>
                <div className="project-with">
                  {project.builtWith.map((element) => (
                    <span className="built-with-item" key={element}>
                      {element}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
