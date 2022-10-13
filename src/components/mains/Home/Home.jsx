import Projects from "../../subs/Projects/Projects";

const Home = () => {
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

      <Projects />
    </div>
  );
};

export default Home;
