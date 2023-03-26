import { useState } from "react";
import ProjectCard from "../../cards/ProjectCard/ProjectCard";
import MYPROJECTS from "../../../assets/database/myProjects.json";
import { NavContextValue } from "../../../contexts/NavContext";
import { ReactComponent as Arrow } from "../../../assets/visuals/arrow.svg";

const ProjectContainer = () => {
  const { projectRef } = NavContextValue();
  const [page, setPage] = useState("first-page");

  return (
    <section className="main-section" id="project-section" ref={projectRef}>
      <div className="section-content">
        <h2 className="project-heading">Projects</h2>

        <div className="project-card-container">
          <div className={`pagination-container ` + page}>
            {MYPROJECTS.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
          </div>
        </div>

        <div className="button-container">
          <button
            className={page}
            id="up"
            onClick={() => setPage("first-page")}
          >
            <Arrow />
          </button>
          <button
            className={page}
            id="down"
            onClick={() => setPage("second-page")}
          >
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
