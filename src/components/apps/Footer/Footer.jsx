import { ReactComponent as Email } from "../../../assets/visuals/icons/email_icon.svg";
import { ReactComponent as GitHub } from "../../../assets/visuals/icons/github_icon.svg";
import { ReactComponent as CodePen } from "../../../assets/visuals/icons/codepen_icon.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-div" id="first-div">
        <ul className="footer-list">
          <li className="footer-item">
            <a className="footer-anchor" href="mailto:moohka@hotmail.com">
              <Email />
              <span>Email</span>
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
    </footer>
  );
};

export default Footer;
