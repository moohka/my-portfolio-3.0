import image from "../visuals/image.jpg";

const Projects = () => {
  return (
    <div className="sub" id="projects">
      <div className="project-div">
        <img className="project-thumbnail" alt="thumbnail" src={image}></img>
        <h2 className="project-title">Olive Hair</h2>
        <p className="project-detail">
          A website for hair salon based in Calgary
        </p>
      </div>

      <div className="project-div">
        <img className="project-thumbnail" alt="thumbnail" src={image}></img>
        <h2 className="project-title">Lorem Ipsum</h2>
        <p className="project-detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias,
          consectetur inventore rem ipsam iusto beatae reprehenderit eaque
          soluta dolorum?
        </p>
      </div>
    </div>
  );
};

export default Projects;
