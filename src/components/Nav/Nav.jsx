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
    <nav onTouchStart={() => {}}>
      {/* menu button */}
      <input
        className="nav-input"
        id="nav-input"
        type="checkbox"
        onChange={(e) => {}}
      ></input>
      <label className="nav-label" htmlFor="nav-input">
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
        <i className="icon-bar"></i>
      </label>

      {/* each nav items */}
      <ul className="nav-item-container">
        <li onClick={scrollTo(headerRef)}>Home</li>
        <li onClick={scrollTo(aboutRef)}>About</li>
        <li onClick={scrollTo(projectRef)}>Project</li>
        <li onClick={scrollTo(contactRef)}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
