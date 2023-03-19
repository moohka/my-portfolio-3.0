import { useEffect } from "react";
import Hero from "../../sections/1Hero/Hero";
import About from "../../sections/2About/About";
import Project from "../../sections/3Project/Project";
import Contact from "../../sections/4Contact/Contact";
import { NavContextValue } from "../../../contexts/NavContext";

const Home = () => {
  //useReducer
  const { state } = NavContextValue();

  //when window size change reset section
  useEffect(() => {
    //go to closest section
    function resetScroll() {
      if (window.innerWidth > 1020) {
        console.log("check");
        window.scrollTo({ top: 0 });
      }
    }
    window.addEventListener("resize", resetScroll);

    return () => {
      window.removeEventListener("resize", resetScroll);
    };
  }, []);

  return (
    <div className="main-page" id="home-page">
      <ul className={`section-map-container ` + state.currentSection}>
        <li className="section-map-element"></li>
        <li className="section-map-element"></li>
        <li className="section-map-element"></li>
        <li className="section-map-element"></li>
      </ul>

      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
