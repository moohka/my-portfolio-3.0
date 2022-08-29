import ProjectCard from "./cards/ProjectCard";
import SCREENSHOTS from "../../assets/visuals/screenshots/SCREENSHOTS";

const ProjectContainer = () => {
  const myProjects = [
    {
      id: 1,
      img: SCREENSHOTS.POULTRY_FARM_SOFTWARE,
      title: "Poultry Farm Software",
      detail:
        "A poultry farm management software that display live number of chicken, chick, egg counts. And manipulate customer data. and store farm expense in formatted text file.",
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
      detail:
        "Olive Hair is local hair shop located in Calgary, AB. \nIt displays business hours and service with pricing. Various buttons has been added to contact with the business owner. Also it has a link to Square appointment system. \nThe shop is not yet opened. ",
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
      detail: "A Google Keep clone website that is built upon Firebase",
      builtWiths: ["React", "Firebase", "Keep"],
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
        "A book search website. It uses Netlify Functions to fetch book data. Netlify Functions are serverless functions that are deployed on AWS Lambda. \nThe book data is retrieved from Google Books APIs.",
      builtWiths: ["React", "API", "Serverless Functions"],
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
          <ProjectCard key={project.id} project={myProjects[0]} />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
