import Skills from "../subs/Skills";
import { useContext } from "react";
import { NavContext } from "../App";

const About = () => {
  const navRefs = useContext(NavContext);

  return (
    <div className="main" id="about" ref={navRefs[1]}>
      <div className="about-me" data-aos="fade-right">
        <h1 className="about-me-h">About Me</h1>

        <p className="about-me-p">
          &nbsp;Hello, I am a web developer based in Winnipeg, MB Canada.
        </p>

        <p className="about-me-p">
          &nbsp;Initially, I studied aviation in Providence UC. However, I felt
          that it was not for me. I dropped out of the school during Covid time
          and looked for different career path. Then I came across with Computer
          Science.
          <br />
          &nbsp;I enrolled into a certificate program, Software Development,
          offered by Red River College. I learned general computer science,
          relational database (SQL) and Java.
          <br />
          &nbsp;During the time of learning, I found my interest in web
          development. So, after I completed the program, I studied web
          development on my own.
        </p>

        <p className="about-me-p">
          &nbsp;I'm looking forward to makeing the leap and continue refining my
          skills with the right company.
        </p>
      </div>

      <Skills />
    </div>
  );
};

export default About;
