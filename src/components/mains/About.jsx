import Skills from "../subs/Skills";
import { useContext } from "react";
import { NavContext } from "../App";

const About = () => {
  const navRefs = useContext(NavContext);

  return (
    <div className="main" id="about" ref={navRefs[1]}>
      <div className="about-me">
        <h1 className="about-me-h">About me</h1>
        <p className="about-me-p">
          My name is Moohyun Kang. I persue web developer career. based in
          Winnipeg, Canada.
        </p>
      </div>

      <Skills />
    </div>
  );
};

export default About;
