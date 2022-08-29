const ProjectCard1 = (props) => {
  const { id, title, detail, builtWiths, imgs, view } = props.project;
  const { live, repo } = view;

  return (
    <div className={`project-card multi-img`}>
      <img
        className="project-thumbnail one"
        src={imgs[0]}
        alt={`screenshot of ${title}`}
      ></img>
      <img
        className="project-thumbnail two"
        src={imgs[1]}
        alt={`screenshot of ${title}`}
      ></img>
      <img
        className="project-thumbnail three"
        src={imgs[1]}
        alt={`screenshot of ${title}`}
      ></img>
      <img
        className="project-thumbnail four"
        src={imgs[1]}
        alt={`screenshot of ${title}`}
      ></img>

      <div className="project-text-container">
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

export default ProjectCard1;
