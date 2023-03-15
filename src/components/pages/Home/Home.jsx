import Hero from "../../sections/1Hero/Hero";
import About from "../../sections/2About/About";
import Project from "../../sections/3Project/Project";
import Contact from "../../sections/4Contact/Contact";
import Footer from "../../apps/Footer/Footer";

const Home = () => {
  return (
    <div className="main-page" id="home-page">
      <Hero />

      <div className="margin-container">
        <About />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
