import LOGOS from "../../../assets/visuals/logo_bundle";
import SkillCard from "../../cards/SkillCard/SkillCard";
import { NavContextValue } from "../../../contexts/NavContext";

const About = () => {
  //variables
  const { aboutRef } = NavContextValue();

  //my skill list
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
      text: "TypeScript",
      image: LOGOS.TypeScript,
    },
    // {
    //   text: "Node js",
    //   image: LOGOS.Node,
    // },
    // {
    //   text: "Java",
    //   image: LOGOS.Java,
    // },
    // {
    //   text: "SQL",
    //   image: LOGOS.SQL,
    // },
    {
      text: "React",
      image: LOGOS.React,
    },
    // {
    //   text: "Redux",
    //   image: LOGOS.Redux,
    // },
    {
      text: "Sass",
      image: LOGOS.Sass,
    },
    {
      text: "Firebase",
      image: LOGOS.Firebase,
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
    <section className="main-section" id="about-section" ref={aboutRef}>
      <div className="section-content">
        <div className="about-me">
          <h1 className="about-me-h">About</h1>

          {/* My Story */}
          <p className="about-me-p">
            &nbsp;Welcome to my Web Developer Portfolio! I am a self-taught web
            developer with a software development certificate from Red River
            College. Despite my formal education, I have pursued my passion for
            web development through self-study and personal projects.
          </p>

          <p className="about-me-p">
            &nbsp;Through my self-taught efforts, I have developed a strong
            understanding of the latest technologies and trends in web
            development. I have honed my skills in HTML, CSS, JavaScript, and
            several front-end frameworks such as React. I am constantly seeking
            out new challenges and opportunities to expand my knowledge and
            skills in the field.
          </p>

          <p className="about-me-p">
            &nbsp;I am dedicated to creating dynamic, user-friendly, and
            visually appealing websites and applications that meet the needs of
            clients and users. I believe that my passion and drive, combined
            with my formal education and self-taught skills, make me a valuable
            asset to any web development project.
          </p>

          <p className="about-me-p">
            &nbsp;If you are looking for a creative, motivated, and self-taught
            web developer, please feel free to explore my portfolio and contact
            me to discuss your next project. I am eager to bring my skills and
            passion to your project and create something amazing together.
          </p>
        </div>

        {/* My Skills */}
        <div className="skill-container">
          <h2 className="skill-title">Skills</h2>

          <ul className="skill-list">
            {mySkills.map((skill) => {
              return <SkillCard key={skill.text} skill={skill} />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
