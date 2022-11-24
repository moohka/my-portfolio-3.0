import LOGOS from "../../../assets/visuals/logos/logo_bundle";
import SkillCard from "../../cards/SkillCard/SkillCard";

const SkillContainer = () => {
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
    // {
    //   text: "Node",
    //   image: LOGOS.Node,
    // },
    // {
    //   text: "TypeScript",
    //   image: LOGOS.TypeScript,
    // },
    {
      text: "Java",
      image: LOGOS.Java,
    },
    {
      text: "SQL",
      image: LOGOS.SQL,
    },
    {
      text: "React",
      image: LOGOS.React,
    },
    // {
    //   text: "Redux",
    //   image: LOGOS.Redux,
    // },
    {
      text: "Firebase",
      image: LOGOS.Firebase,
    },
    {
      text: "Sass",
      image: LOGOS.Sass,
    },
    {
      text: "Figma",
      image: LOGOS.Figma,
    },
    {
      text: "GitHub",
      image: LOGOS.GitHub,
    },
  ];

  return (
    <div className="sub" id="skills">
      <h2 className="skill-title">My Skills</h2>

      <ul className="skill-list">
        {mySkills.map((skill) => {
          return <SkillCard key={skill.text} skill={skill} />;
        })}
      </ul>
    </div>
  );
};

export default SkillContainer;
