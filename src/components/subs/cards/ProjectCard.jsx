const ProjectCard = (props) => {
  return (
    <div className="project-card" key={props.project.id}>
      <img
        className="project-thumbnail"
        src={props.project.img}
        alt={`screenshot of ${props.project.title}`}
      ></img>

      <div className="project-detail" ref={props.project.ref}>
        <h2 className="project-h">{props.project.title}</h2>
        <p className="project-p">{props.project.detail}</p>
        <div className="project-with">
          {props.project.builtWith.map((element) => (
            <span className="built-with-item" key={element}>
              {element}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
