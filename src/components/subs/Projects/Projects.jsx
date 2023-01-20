import ProjectCard from "../../cards/ProjectCard/ProjectCard";
import SCREENSHOTS from "../../../assets/visuals/screenshots/screenshot_bundle";
import MYPROJECTS from "../../../assets/database/myProjects.json";

const ProjectContainer = () => {
  //attaching images to the project database
  MYPROJECTS[0].images = [SCREENSHOTS.Salon];
  MYPROJECTS[1].images = [SCREENSHOTS.Converter, SCREENSHOTS.Converter1];
  MYPROJECTS[2].images = [SCREENSHOTS.Bookstore];
  MYPROJECTS[3].images = [SCREENSHOTS.Keep];
  MYPROJECTS[4].images = [
    SCREENSHOTS.Poultry,
    SCREENSHOTS.Poultry1,
    SCREENSHOTS.Poultry2,
    SCREENSHOTS.Poultry3,
    SCREENSHOTS.Poultry4,
  ];

  return (
    <div className="projects">
      <h2 className="project-sub-title">My Projects</h2>

      <div className="project-container">
        <ProjectCard project={MYPROJECTS[0]} formatId="left-img" />
        <ProjectCard project={MYPROJECTS[1]} formatId="mobile-img" />
        <ProjectCard project={MYPROJECTS[2]} formatId="right-img" />
        <ProjectCard project={MYPROJECTS[3]} formatId="left-img" />
        <ProjectCard project={MYPROJECTS[4]} formatId="multi-img" />
      </div>
    </div>
  );
};

export default ProjectContainer;
