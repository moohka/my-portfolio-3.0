import Projects from "../subs/Projects";

const Home = () => {
  return (
    <div className="main" id="home">
      <div className="home-intro">
        <h1 className="intro-title">Web Developer, Programer</h1>
        <p className="intro-greeting">Hello, my name is Moohyun Kang</p>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
