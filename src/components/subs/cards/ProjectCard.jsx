const ProjectCard = (props) => {
  const { formatId } = props;
  const { title, detail, builtWiths, imgs, view } = props.project;
  const { live, repo } = view;

  return (
    <div className={`project-card ${formatId}`}>
      {imgs.map((img) => {
        const order = "num" + imgs.indexOf(img);
        return (
          <div key={img} className={`project-thumbnail ${order}`}>
            <img src={img} alt={`screenshot of ${title}`} />
          </div>
        );
      })}

      <div className="project-text-container">
        <h2 className="project-h">{title}</h2>

        <div className={`project-with`}>
          {builtWiths.map((element) => (
            <span className="built-with-item" key={element}>
              {element}
            </span>
          ))}
        </div>

        <p className="project-p">{detail}</p>

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
