import { ReactComponent as Link } from "../../../assets/visuals/icons/link_icon.svg";
import { ReactComponent as Repo } from "../../../assets/visuals/icons/repo_icon.svg";

const ProjectCard = (props) => {
  const { id, title, detail, builtWith, url, view } = props.project;
  const { live, repo } = view;

  return (
    <div className="project-card">
      {/* Numbering */}
      <span className="project-numbering-container">0{id}</span>

      <div className="project-text">
        {/* Detail */}
        <div className="project-detail-container">
          <h2 className="project-h">{title}</h2>
          <div className="built-with-container">
            {builtWith.map((element) => (
              <span className="built-with-item" key={element}>
                {element}
              </span>
            ))}
          </div>
          <p className="project-p">{detail}</p>
        </div>

        {/* URL */}
        <div className="project-url-container">
          <a
            className="project-url-anchor"
            href={`https://` + url}
            target="_blank"
            rel="noreferrer"
          >
            {url}
          </a>
        </div>

        {/* View */}
        <div className="project-view-container">
          {live ? (
            <a
              className="project-view-anchor"
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              <Link />
              <span>Live</span>
            </a>
          ) : (
            <p className="project-view-anchor" id="placeholder">
              <Link />
              <span>Live</span>
            </p>
          )}

          {repo ? (
            <a
              className="project-view-anchor"
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              <Repo />
              <span>Repo</span>
            </a>
          ) : (
            <p className="project-view-anchor" id="placeholder">
              <Repo />
              <span>Repo</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
