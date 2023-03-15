import Hero from "../../sections/1Hero/Hero";
import About from "../../sections/2About/About";
import Project from "../../sections/3Project/Project";
import Contact from "../../sections/4Contact/Contact";
import { NavContextValue } from "../../../contexts/NavContext";

const Home = () => {
  const { homePageRef } = NavContextValue();

  return (
    <div className="main-page" id="home-page" ref={homePageRef}>
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
