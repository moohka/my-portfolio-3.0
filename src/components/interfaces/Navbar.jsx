import { useContext } from "react";
import { NavContext } from "../App";

const Navbar = () => {
  //navbar scroll effect
  let lastScrollTop;

  window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let navbar = document.querySelector("nav");
    //add/remove is smoother than toggle for some reason.
    if (scrollTop > "250" && scrollTop > lastScrollTop) {
      navbar.classList.remove("navdown");
      navbar.classList.add("navup");
    } else {
      navbar.classList.remove("navup");
      navbar.classList.add("navdown");
    }
    lastScrollTop = scrollTop;
  };

  //navigate to page
  const navRefs = useContext(NavContext);

  function scrollTo(pageRef) {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAbout() {
    const location = navRefs[1].current.offsetTop - 110;
    window.scrollTo({ top: location, behavior: "smooth" });
  }

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <span
            onClick={() => {
              scrollTo(navRefs[0]);
            }}
          >
            Home
          </span>
        </li>
        <li className="nav-item">
          <span onClick={scrollToAbout}>About</span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => {
              scrollTo(navRefs[2]);
            }}
          >
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
