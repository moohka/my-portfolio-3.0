import { useEffect } from "react";
import Hero from "../../sections/1Hero/Hero";
import About from "../../sections/2About/About";
import Project from "../../sections/3Project/Project";
import Contact from "../../sections/4Contact/Contact";
import { NavContextValue } from "../../../contexts/NavContext";

const Home = () => {
  //useReducer
  const { state, dispatch } = NavContextValue();

  //when window size change reset section
  useEffect(() => {
    let prevWidth = window.innerWidth;

    const handleWindowResize = () => {
      const currentWidth = window.innerWidth;
      if (prevWidth <= 1024 && currentWidth > 1024) {
        window.location.reload();
      }
      prevWidth = currentWidth;
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="main-page" id="home-page">
      <ul className={`section-map-container ` + state.currentSection}>
        <li
          className="section-map-element"
          onClick={() => {
            dispatch({ type: "FIRST" });
          }}
        ></li>
        <li
          className="section-map-element"
          onClick={() => {
            dispatch({ type: "SECOND" });
          }}
        ></li>
        <li
          className="section-map-element"
          onClick={() => {
            dispatch({ type: "THIRD" });
          }}
        ></li>
        <li
          className="section-map-element"
          onClick={() => {
            dispatch({ type: "FOURTH" });
          }}
        ></li>
      </ul>

      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
