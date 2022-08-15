import { useEffect } from "react";
import LOGOS from "../visuals/logos/logos";
// import html_logo from "../visuals/logos/HTML.svg";
import { ReactComponent as HTML } from "../visuals/logos/HTML.svg";

const Skills = () => {
  useEffect(() => {}, []);

  //list of my skills
  const mySkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "SQL",
    "Sass",
    "jQuery",
    "React",
    "Github",
    "TypeScript",
    "*Node",
  ];

  const mySkills2 = [
    {
      test: "HTML5",
    },
  ];

  return (
    <div className="sub" id="skills">
      <ul className="skill-list">
        {mySkills2.map((skill) => {
          return (
            <li key={skill} className="skill-item">
              {skill} <HTML />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
