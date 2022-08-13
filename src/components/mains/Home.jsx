import Projects from "../subs/Projects";

const Home = () => {
  return (
    <div className="main" id="home">
      <div className="intro">
        <h2 className="home-title">Web Developer, Programer</h2>
        <p className="greeting">Hello, my name is Moohyun Kang</p>
      </div>

      <Projects />
    </div>
  );
};

export default Home;
