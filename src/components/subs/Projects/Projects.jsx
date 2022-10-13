import ProjectCard from "../../cards/ProjectCard/ProjectCard";
import SCREENSHOTS from "../../../assets/visuals/screenshots/screenshot_bundle";
import MYPROJECTS from "../../../assets/database/myProjects.json";

const ProjectContainer = () => {
  //attaching images to the project database
  MYPROJECTS[0].imgs = [
    SCREENSHOTS.Poultry,
    SCREENSHOTS.Poultry1,
    SCREENSHOTS.Poultry2,
    SCREENSHOTS.Poultry3,
    SCREENSHOTS.Poultry4,
  ];
  MYPROJECTS[1].imgs = [SCREENSHOTS.Salon];
  MYPROJECTS[2].imgs = [SCREENSHOTS.Keep];
  MYPROJECTS[3].imgs = [SCREENSHOTS.Bookstore];

  return (
    <div className="projects">
      <h2 className="project-sub-title">My Projects</h2>

      <div className="project-container">
        <ProjectCard project={MYPROJECTS[0]} formatId="multi-img" />
        <ProjectCard project={MYPROJECTS[1]} formatId="right-img" />
        <ProjectCard project={MYPROJECTS[2]} formatId="left-img" />
        <ProjectCard project={MYPROJECTS[3]} formatId="right-img" />
      </div>
    </div>
  );
};

export default ProjectContainer;
