import { useLocation } from "react-router-dom";
import { NavContextValue } from "../../../contexts/NavContext";
import { ReactComponent as Arrow } from "../../../assets/visuals/icons/up_arrow.svg";
import { ReactComponent as GitHub } from "../../../assets/visuals/icons/github_icon.svg";
import { ReactComponent as CodePen } from "../../../assets/visuals/icons/codepen_icon.svg";

const Footer = () => {
  //variables
  const { pathname } = useLocation();
  const { homePageRef } = NavContextValue();

  //functions
  const scrollTop = () => {
    if (window.innerWidth > 1024) {
      document.documentElement.style.setProperty("--section", `0 0`);
    } else {
      homePageRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer>
      {pathname === "/" ? (
        <div className="top-button" onClick={scrollTop}>
          <Arrow />
        </div>
      ) : null}

      <div className="footer-wrapper">
        <div className="footer-div" id="first-div">
          <ul className="footer-list">
            <li className="footer-item">
              <a className="footer-anchor" href="mailto:moohka@hotmail.com">
                <span>moohka@hotmail.com</span>
              </a>
            </li>

            <li className="footer-item">
              <a
                className="footer-anchor"
                href="https://github.com/moohka"
                rel="noreferrer"
                target="_blank"
              >
                <GitHub />
                <span>GitHub</span>
              </a>
            </li>

            <li className="footer-item" id="last-item">
              <a
                className="footer-anchor"
                href="https://codepen.io/moohka"
                rel="noreferrer"
                target="_blank"
              >
                <CodePen />
                <span>CodePen</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-div" id="second-div">
          <p className="footer-copyright">
            Designed and Developed by Moohyun Kang
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
