import { useEffect, useRef } from "react";
import Projects from "../subs/Projects";

const Home = () => {
  //scroll-effect
  const efficientRef = useRef();
  const dynamicRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    observer.observe(efficientRef.current);
    observer.observe(dynamicRef.current);
  }, []);

  return (
    <div className="main" id="home">
      <div className="home-container">
        <div className="home-title">
          <h1 className="title-element">Moohyun Kang</h1>
          <h1 className="title-element">
            <span>Web Developer,</span>
            <span>Programer</span>
          </h1>
        </div>

        <div className="home-intro">
          <p className="intro-greeting">
            <span>Hello, my name is Moohyun Kang.</span>&nbsp;
            <span>Nice to meet you.</span>
          </p>

          <p className="intro-about">
            I'm a programmer with a passion for building smart websites and
            learning new things.
          </p>
        </div>
      </div>

      <div className="home-box" id="left-box" ref={efficientRef}>
        <div className="inner-box">
          <span className="box-h">Efficient,</span>
          <span className="box-p">Concise and structured coding.</span>
        </div>
      </div>

      <div className="home-box" id="right-box" ref={dynamicRef}>
        <div className="inner-box">
          <span className="box-h">Dynamic,</span>
          <span className="box-p">make static page comes to life</span>
        </div>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
