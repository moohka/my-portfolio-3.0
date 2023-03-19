import { useRef } from "react";
import { NavContextValue } from "../../../contexts/NavContext";

const Navbar = () => {
  //variables
  const { dispatch } = NavContextValue();

  return (
    <nav>
      <input className="nav-input" id="nav-for-mobile" type="checkbox"></input>
      <label className="nav-label" htmlFor="nav-for-mobile">
        <i className="menu-bar"></i>
        <i className="menu-bar"></i>
      </label>

      <ul className="nav-list">
        <li
          className="nav-element"
          onClick={() => {
            if (window.innerWidth > 1024) {
              dispatch({ type: "FIRST" });
            } else {
            }
          }}
        >
          Home
        </li>
        <li
          className="nav-element"
          onClick={() => dispatch({ type: "SECOND" })}
        >
          About
        </li>
        <li className="nav-element" onClick={() => dispatch({ type: "THIRD" })}>
          Project
        </li>
        <li
          className="nav-element"
          onClick={() => dispatch({ type: "FOURTH" })}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
