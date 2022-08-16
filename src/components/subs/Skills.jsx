// import { useEffect } from "react";
import LOGOS from "../visuals/logos/logos";

const Skills = () => {
  //list of my skills
  const mySkills = [
    {
      text: "HTML5",
      image: LOGOS.HTML,
    },
    {
      text: "CSS3",
      image: LOGOS.CSS,
    },
    {
      text: "JavaScript",
      image: LOGOS.JavaScript,
    },
    {
      text: "Java",
      image: LOGOS.Java,
    },
    {
      text: "SQL",
      image: LOGOS.SQL,
    },
    // {
    //   text: "TypeScript",
    //   image: LOGOS.TypeScript,
    // },
    {
      text: "React",
      image: LOGOS.React,
    },
    // {
    //   text: "Node",
    //   image: LOGOS.Node,
    // },
    {
      text: "Sass",
      image: LOGOS.Sass,
    },
    {
      text: "jQuery",
      image: LOGOS.jQuery,
    },
    {
      text: "GitHub",
      image: LOGOS.GitHub,
    },
  ];

  return (
    <div className="sub" id="skills">
      <ul className="skill-list">
        {mySkills.map((skill) => {
          return (
            <li key={skill.text} className="skill-item">
              {skill.text}
              <skill.image />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
