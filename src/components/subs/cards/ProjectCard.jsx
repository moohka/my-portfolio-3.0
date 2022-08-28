const ProjectCard = (props) => {
  const { project } = props;
  const { id, title, detail, builtWiths, img, view } = project;
  const { live, repo } = view;

  return (
    <div className="project-card" key={id}>
      <img
        className="project-thumbnail"
        src={img}
        alt={`screenshot of ${title}`}
      ></img>

      <div className="project-detail">
        <h2 className="project-h">{title}</h2>
        <p className="project-p">{detail}</p>
        <div className="project-with">
          {builtWiths.map((element) => (
            <span className="built-with-item" key={element}>
              {element}
            </span>
          ))}
        </div>
      </div>

      <div className="project-view">
        {live ? (
          <a
            className="project-view-item"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        ) : (
          <p className="project-view-item" id="disabled">
            Live
          </p>
        )}

        {repo ? (
          <a
            className="project-view-item"
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        ) : (
          <p className="project-view-item" id="disabled">
            Repo
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
