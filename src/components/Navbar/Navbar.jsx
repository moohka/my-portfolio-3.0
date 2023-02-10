import { NavContextValue } from "../../contexts/NavContext";

const Navbar = () => {
  const { headerRef, contactRef, aboutRef, projectRef } = NavContextValue();

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
  function scrollTo(pageRef) {
    pageRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAbout() {
    const location = aboutRef.current.offsetTop - 70;
    const mobileLocation = aboutRef.current.offsetTop + 40;

    if (window.innerWidth > 640) {
      window.scrollTo({ top: location, behavior: "smooth" });
    } else {
      window.scrollTo({ top: mobileLocation, behavior: "smooth" });
    }
  }

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <span
            onClick={() => {
              scrollTo(headerRef);
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
              scrollTo(projectRef);
            }}
          >
            Project
          </span>
        </li>

        <li className="nav-item">
          <span
            onClick={() => {
              scrollTo(contactRef);
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
