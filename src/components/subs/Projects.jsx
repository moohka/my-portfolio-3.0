import ProjectCard from "./cards/ProjectCard";
import SCREENSHOTS from "../../assets/visuals/screenshots/SCREENSHOTS";

const ProjectContainer = () => {
  const myProjects = [
    {
      id: 1,
      img: SCREENSHOTS.POULTRY_FARM_SOFTWARE,
      title: "Poultry Management Software",
      detail:
        "I made this software as a final project of Java course when I was enrolled in Software Development program. This software is connected to relational database and store three main data. Chicken, Customer, and Expense. keep track of number of chickens in the poultry and add, search, edit, delete customer imformation. and finally create pre-formatted text file when you input your farm expense it will also create folder to organize the created text file ",
      builtWiths: ["Java", "mySQL"],
      view: {
        live: null,
        repo: "https:www.github.com/moohka/poultry-farm-software",
      },
    },
    {
      id: 2,
      img: SCREENSHOTS.OLIVE_HAIR_SALON,
      title: "Olive Hair Salon",
      detail: "Calgary local hairsalon.",
      builtWiths: ["React", "Sass"],
      view: {
        live: "https://olivehair2.netlify.app",
        repo: null,
      },
    },
    {
      id: 3,
      img: SCREENSHOTS.GOOGLE_KEEP_CLONE,
      title: "Google Keep Clone",
      detail:
        "Clone website of Google Keep. This website demonstrates my knowledge on Firebase and data manipulation",
      builtWiths: ["React", "Firebase", "Sass"],
      view: {
        live: "https://notefield.netlify.app",
        repo: "https:www.github.com/moohka/note-field",
      },
    },
    {
      id: 4,
      img: SCREENSHOTS.ORANGE_CITY_BOOKSTORE,
      title: "Orange City Bookstore",
      detail:
        "Clone website of Google Keep. This website demonstrates my knowledge on Firebase and data manipulation",
      builtWiths: ["React", "Firebase", "Sass"],
      view: {
        live: "https://orangecitybookstore.netlify.app",
        repo: "https:www.github.com/moohka/orange-city-bookstore",
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
