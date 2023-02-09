import Hero from "../home-sections/Hero/Hero";
import About from "../home-sections/About/About";
import Project from "../home-sections/Project/Project";
import Contact from "../home-sections/Contact/Contact";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
