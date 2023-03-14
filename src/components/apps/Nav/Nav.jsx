// import { NavContextValue } from "../../../contexts/NavContext";

const Navbar = () => {
  //refs
  // const { contactRef, aboutRef, projectRef } = NavContextValue();

  //navigate scroll function
  function scrollTo(sectionLocation) {
    window.scrollTo({ top: { sectionLocation } + `vh`, behavior: "smooth" });
  }

  return (
    <nav>
      <input className="nav-input" id="nav-for-mobile" type="checkbox"></input>
      <label className="nav-label" htmlFor="nav-for-mobile">
        <i className="menu-bar"></i>
        <i className="menu-bar"></i>
      </label>

      <ul className="nav-list">
        <li className="nav-element" onClick={() => scrollTo(0)}>
          Home
        </li>
        <li className="nav-element" onClick={() => scrollTo(100)}>
          About
        </li>
        <li className="nav-element" onClick={() => scrollTo(200)}>
          Project
        </li>
        <li className="nav-element" onClick={() => scrollTo(300)}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
