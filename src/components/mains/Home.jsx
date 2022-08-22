import Projects from "../subs/Projects";

const Home = () => {
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
            <span>Hello, my name is Moohyun Kang.</span>
            <span>Nice to meet you.</span>
          </p>

          <p className="intro-about">
            I'm a programmer with a passion for building smart websites and
            learning new things.
          </p>
        </div>
      </div>

      <div className="home-box" id="left-box"></div>

      <div className="home-box" id="right-box"></div>

      <Projects />
    </div>
  );
};

export default Home;
