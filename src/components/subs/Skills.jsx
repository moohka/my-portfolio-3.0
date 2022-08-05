const Skills = () => {
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
  ];
  return (
    <div className="skill-div">
      <ul className="skill-list">
        {mySkills.map((skill) => {
          return (
            <li key={skill} className="skill-item">
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Skills;
