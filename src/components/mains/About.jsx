import Skills from "../subs/Skills";
import { useContext } from "react";
import { NavContext } from "../App";

const About = () => {
  const navRefs = useContext(NavContext);

  return (
    <div className="main" id="about" ref={navRefs[1]}>
      <div className="about-me">
        <h1 className="about-me-h">About Me</h1>

        <p className="about-me-p">
          My name is Moohyun Kang. I persue web developer career. based in
          Winnipeg, Canada. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Est voluptate eos molestias omnis eligendi itaque porro facilis
          laudantium ducimus quibusdam.
        </p>

        <p className="about-me-p">
          Other than coding, I spend most of my time playing CSGO and LOL. Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Cumque, ducimus.
        </p>
      </div>

      <Skills />
    </div>
  );
};

export default About;
