const SkillCard = (props) => {
  return (
    <li className="skill-card">
      <props.skill.image />

      <span>{props.skill.text}</span>
    </li>
  );
};

export default SkillCard;
