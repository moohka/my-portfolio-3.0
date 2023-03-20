import ProjectCard from "../../cards/ProjectCard/ProjectCard";
import MYPROJECTS from "../../../assets/database/myProjects.json";
import { NavContextValue } from "../../../contexts/NavContext";

const ProjectContainer = () => {
  const { projectRef } = NavContextValue();

  return (
    <section className="main-section" id="project-section" ref={projectRef}>
      <div className="section-content">
        <h2 className="project-heading">Projects</h2>

        <div className="project-card-container">
          {MYPROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
