import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Project from "../../sections/Project/Project";
import Contact from "../../sections/Contact/Contact";

const Home = () => {
  return (
    <div className="main-page" id="home-page">
      <Hero />
      <About />
      {/* <Project /> */}
      <Contact />
    </div>
  );
};

export default Home;
