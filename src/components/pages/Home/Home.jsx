import { useEffect } from "react";
import Hero from "../../sections/1Hero/Hero";
import About from "../../sections/2About/About";
import Project from "../../sections/3Project/Project";
import Contact from "../../sections/4Contact/Contact";
import { NavContextValue } from "../../../contexts/NavContext";

const Home = () => {
  //variables
  const { section, dispatch } = NavContextValue();

  //scrolling components
  let sectionNum = 0;
  let key = true;

  function scrolling(e) {
    if (key) {
      key = false;
      if (e.deltaY < 0) {
        if (sectionNum > 0) {
          sectionNum -= 1;
          document.documentElement.style.setProperty(
            "--section",
            `0 -${sectionNum}00vh`
          );
        } else {
          key = true;
          return;
        }
      } else {
        if (sectionNum < 3) {
          sectionNum += 1;
          document.documentElement.style.setProperty(
            "--section",
            `0 -${sectionNum}00vh`
          );
        } else {
          key = true;
          return;
        }
      }
      setTimeout(() => {
        key = true;
      }, 1300);
    } //end of "if"
  } //end of scrolling function

  function scrollingTest(e) {
    if (key) {
      key = false;
      if (e.deltaY < 0) {
        if (sectionNum > 0) {
          sectionNum -= 1;
          document.documentElement.style.setProperty(
            "--section",
            `0 -${sectionNum}00vh`
          );
        } else {
          key = true;
          return;
        }
      } else {
        if (sectionNum < 3) {
          sectionNum += 1;
          document.documentElement.style.setProperty(
            "--section",
            `0 -${sectionNum}00vh`
          );
        } else {
          key = true;
          return;
        }
      }
      setTimeout(() => {
        key = true;
      }, 1300);
    } //end of "if"
  } //end of scrolling function

  useEffect(() => {
    var width = window.innerWidth;
    if (width > 1024) {
      window.addEventListener("wheel", scrolling);
    }

    //reset on refresh
    window.scrollTo({ top: 0, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sectionNum = 0;
    document.documentElement.style.setProperty("--section", "0 0");

    //go to closest section
    // window.addEventListener("resize");

    //return
    return () => {
      window.removeEventListener("wheel", scrolling);
    };
  }, []);

  return (
    <div className="main-page" id="home-page">
      <ul className="section-map">
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
