import { useEffect, useRef } from "react";
import Projects from "../containers/ProjectContainer";

const Home = () => {
  //scroll-effect
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

    observer.observe(dynamicRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="main" id="home">
      <div className="home-text-container">
        <div className="home-title">
          <h1 className="title-element" id="title-name">
            Moohyun Kang
          </h1>

          <h1 className="title-element">
            <span className="title-element-span" id="first-span">
              Web Developer,
            </span>
            <span className="title-element-span" id="second-span">
              Programer
            </span>
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

      <div className="home-box-container">
        <div className="home-box" id="left-box">
          <div className="text-box">
            <span className="box-span">Efficient,</span>
            <span className="box-span">concise and structured coding.</span>
          </div>
        </div>

        <div className="home-box" id="right-box" ref={dynamicRef}>
          <div className="text-box">
            <span className="box-span">Dynamic,</span>
            <span className="box-span" id="wave-span">
              <span>m</span>
              <span>a</span>
              <span>k</span>
              <span>e&nbsp;</span>

              <span>s</span>
              <span>t</span>
              <span>a</span>
              <span>t</span>
              <span>i</span>
              <span>c&nbsp;</span>

              <span>p</span>
              <span>a</span>
              <span>g</span>
              <span>e&nbsp;</span>

              <span>c</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
              <span>s&nbsp;</span>

              <span>t</span>
              <span>o&nbsp;</span>

              <span>l</span>
              <span>i</span>
              <span>f</span>
              <span>e&nbsp;</span>
            </span>
          </div>
        </div>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
