import { useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "../../../assets/visuals/icons/up_arrow.svg";

const Footer = () => {
  //pathname
  const { pathname } = useLocation();

  //function
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                Email
              </a>
            </li>

            <li className="footer-item">
              <a
                className="footer-anchor"
                href="https://github.com/moohka"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>

            <li className="footer-item" id="last-item">
              <a
                className="footer-anchor"
                href="https://codepen.io/moohka"
                rel="noreferrer"
                target="_blank"
              >
                CodePen
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
