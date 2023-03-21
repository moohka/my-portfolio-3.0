import { useRef } from "react";
import { NavContextValue } from "../../../contexts/NavContext";

const Navbar = () => {
  //variables
  const { dispatch, heroRef, aboutRef, projectRef, contactRef } =
    NavContextValue();
  const menuRef = useRef();

  function navigateTo(location) {
    if (window.innerWidth >= 1024) {
      switch (location) {
        case "hero":
          dispatch({ type: "FIRST" });
          break;
        case "about":
          dispatch({ type: "SECOND" });
          break;
        case "project":
          dispatch({ type: "THIRD" });
          break;
        case "contact":
          dispatch({ type: "FOURTH" });
          break;
        default:
          break;
      }
    } else {
      switch (location) {
        case "hero":
          heroRef.current.scrollIntoView();
          menuRef.current.checked = false;
          break;
        case "about":
          aboutRef.current.scrollIntoView();
          menuRef.current.checked = false;
          break;
        case "project":
          projectRef.current.scrollIntoView();
          menuRef.current.checked = false;
          break;
        case "contact":
          contactRef.current.scrollIntoView();
          menuRef.current.checked = false;
          break;
        default:
          break;
      }
    }
  }

  return (
    <nav>
      <input
        className="nav-input"
        id="nav-for-mobile"
        type="checkbox"
        ref={menuRef}
      ></input>
      <label className="nav-label preload" htmlFor="nav-for-mobile">
        <i className="menu-bar"></i>
        <i className="menu-bar"></i>
      </label>

      <ul className="nav-list">
        <li
          className="nav-element"
          onClick={() => {
            navigateTo("hero");
          }}
        >
          Home
        </li>
        <li
          className="nav-element"
          onClick={() => {
            navigateTo("about");
          }}
        >
          About
        </li>
        <li
          className="nav-element"
          onClick={() => {
            navigateTo("project");
          }}
        >
          Project
        </li>
        <li
          className="nav-element"
          onClick={() => {
            navigateTo("contact");
          }}
        >
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
