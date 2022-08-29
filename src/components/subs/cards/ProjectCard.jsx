const ProjectCard = (props) => {
  // export default function ProjectCard(props) {

  const { project } = props;
  const { id, title, detail, builtWiths, img, view } = project;
  const { live, repo } = view;

  return (
    <div className={`project-card ${id}`}>
      <div className="project-image-container">
        <img
          className="project-thumbnail"
          src={img}
          alt={`screenshot of ${title}`}
        ></img>
      </div>

      <div className="project-details-container">
        <h2 className="project-h">{title}</h2>

        <div className="project-with">
          {builtWiths.map((element) => (
            <span className="built-with-item" key={element}>
              {element}
            </span>
          ))}
        </div>

        <p className="project-description">{detail}</p>

        <div className="project-view">
          {live ? (
            <a
              className="project-view-button"
              href={live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : (
            <p className="project-view-button" id="placeholder">
              Live
            </p>
          )}

          {repo ? (
            <a
              className="project-view-button"
              href={repo}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          ) : (
            <p className="project-view-button" id="placeholder">
              Repo
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
