const SkillCard = (props) => {
  return (
    <li className="skill-card">
      <props.skill.image />
      {props.skill.text}
    </li>
  );
};

export default SkillCard;
