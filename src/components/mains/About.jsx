import Skills from "../subs/Skills";
import { useContext } from "react";
import { NavContext } from "../App";

const About = () => {
  const navRefs = useContext(NavContext);

  return (
    <div className="About" ref={navRefs[1]}>
      <Skills />
    </div>
  );
};

export default About;
