// import { NavContextValue } from "../../../contexts/NavContext";

const Navbar = () => {
  //refs
  // const { aboutRef, projectRef, contactRef } = NavContextValue();

  //navigate scroll function
  function scrollTo(sectionLocation) {
    document.documentElement.style.setProperty(
      "--section",
      `0 -${sectionLocation}00vh`
    );
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
        <li className="nav-element" onClick={() => scrollTo(1)}>
          About
        </li>
        <li className="nav-element" onClick={() => scrollTo(2)}>
          Project
        </li>
        <li className="nav-element" onClick={() => scrollTo(3)}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
