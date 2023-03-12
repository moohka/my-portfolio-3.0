import { NavContextValue } from "../../../contexts/NavContext";
import Skills from "../../Skills/Skills";

const About = () => {
  const { aboutRef } = NavContextValue();

  return (
    <section className="main-section" id="about-section" ref={aboutRef}>
      <div className="about-me">
        <h1 className="about-me-h">About Me</h1>

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
          out new challenges and opportunities to expand my knowledge and skills
          in the field.
        </p>

        <p className="about-me-p">
          &nbsp;I am dedicated to creating dynamic, user-friendly, and visually
          appealing websites and applications that meet the needs of clients and
          users. I believe that my passion and drive, combined with my formal
          education and self-taught skills, make me a valuable asset to any web
          development project.
        </p>

        <p className="about-me-p">
          &nbsp;If you are looking for a creative, motivated, and self-taught
          web developer, please feel free to explore my portfolio and contact me
          to discuss your next project. I am eager to bring my skills and
          passion to your project and create something amazing together.
        </p>
      </div>

      <Skills />
    </section>
  );
};

export default About;
