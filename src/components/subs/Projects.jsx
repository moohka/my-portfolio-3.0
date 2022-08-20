import { useRef, useEffect } from "react";
import image from "../../visuals/image.jpg";

const Projects = () => {
  //project hover effect
  const firstRef = useRef();

  useEffect(() => {
    console.log("check");
  }, [firstRef]);

  //use async/await
  function showDetail(theRef) {
    theRef.current.classList.toggle("hovered");
    console.log(theRef.current.classList);
    console.log("enter");
  }

  function hideDetail(theRef) {
    theRef.current.classList.toggle("hovered");
    console.log("leave");
  }

  return (
    <div className="sub" id="projects">
      <h2 className="project-sub-title">My Projects</h2>

      <div className="project-container">
        <div className="project-div">
          <div
            className="project-detail"
            onMouseEnter={() => {
              console.log("??");
              showDetail(firstRef);
            }}
            onMouseLeave={() => {
              hideDetail(firstRef);
              console.log("??");
            }}
            ref={firstRef}
          >
            <h2 className="project-h">Olive Hair</h2>
            <p className="project-p">
              A website for hair salon based in Calgary. It is integrated with
              Square appointment system for better UX.
            </p>
          </div>
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
    </div>
  );
};

export default Projects;
