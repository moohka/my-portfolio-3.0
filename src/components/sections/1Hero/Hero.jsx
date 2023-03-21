import { NavContextValue } from "../../../contexts/NavContext";

const Hero = () => {
  const { heroRef } = NavContextValue();

  return (
    <section className="main-section" id="hero-section" ref={heroRef}>
      <canvas className="hero-art"></canvas>
    </section>
  );
};

export default Hero;
