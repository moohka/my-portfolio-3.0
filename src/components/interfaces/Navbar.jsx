import "./Navbar.css";

function Navbar() {
  //--navbar-scroll-effect--
  let lastScrollTop;
  window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let navbar = document.querySelector("nav");
    if (scrollTop > "280" && scrollTop > lastScrollTop) {
      navbar.classList.remove("navdown");
      navbar.classList.add("navup");
    } else {
      navbar.classList.remove("navup");
      navbar.classList.add("navdown");
    }
    lastScrollTop = scrollTop;
  };

  //--navigate-to-page--
  // function scrollTo(pageRef) {
  //   pageRef.current.scrollIntoView({ behavior: "smooth" });
  // }
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-element">
          <span>Home</span>
        </li>
        <li className="nav-element">
          <span>About</span>
        </li>
        <li className="nav-element">
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
