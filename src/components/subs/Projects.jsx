import ProjectCard from "./cards/ProjectCard";
import SCREENSHOTS from "../../assets/visuals/screenshots/SCREENSHOTS";

const ProjectContainer = () => {
  const myProjects = [
    {
      id: 1,
      img: SCREENSHOTS.Software,
      title: "Poultry Management Software",
      detail:
        "I made this software as a final project of Java course when I was enrolled in Software Development program. This software is connected to relational database and store three main data. Chicken, Customer, and Expense. keep track of number of chickens in the poultry and add, search, edit, delete customer imformation. and finally create pre-formatted text file when you input your farm expense it will also create folder to organize the created text file ",
      builtWith: ["Java", "mySQL"],
      view: { live: null, repo: "https:www.github.com" },
    },
    {
      id: 2,
      img: SCREENSHOTS.Salon,
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
      img: SCREENSHOTS.Keep,
      title: "Google Keep Clone",
      detail:
        "Clone website of Google Keep. This website demonstrates my knowledge on Firebase and data manipulation",
      builtWith: ["React", "Firebase", "Sass"],
      view: {
        live: "https://olivehair2.netlify.app",
        repo: "https:www.github.com",
      },
    },
    {
      id: 4,
      img: SCREENSHOTS.Bookstore,
      title: "Orange City Bookstore",
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
    <div className="projects">
      <h2 className="project-sub-title">My Projects</h2>

      <div className="project-container">
        {myProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
