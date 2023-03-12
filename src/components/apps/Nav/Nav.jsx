import { NavContextValue } from "../../../contexts/NavContext";

const Navbar = () => {
  const { contactRef, aboutRef, projectRef } = NavContextValue();

  //navbar scroll effect
  let lastScrollTop;

  window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let navbar = document.querySelector("nav");

    //add or remove is smoother than toggle for some reason.
    if (scrollTop > lastScrollTop) {
      navbar.classList.remove("nav-down");
      navbar.classList.add("nav-up");
    } else {
      navbar.classList.remove("nav-up");
      navbar.classList.add("nav-down");
    }
    lastScrollTop = scrollTop;
  };

  //navigate function
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollTo(pageRef) {
    pageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <nav>
      <input className="nav-input" id="nav-for-mobile" type="checkbox"></input>
      <label className="nav-label" htmlFor="nav-for-mobile">
        <i className="menu-bar"></i>
        <i className="menu-bar"></i>
      </label>

      <ul className="nav-list">
        <li className="nav-element" onClick={scrollToTop}>
          Home
        </li>
        <li className="nav-element" onClick={() => scrollTo(aboutRef)}>
          About
        </li>
        <li className="nav-element" onClick={() => scrollTo(projectRef)}>
          Project
        </li>
        <li className="nav-element" onClick={() => scrollTo(contactRef)}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
