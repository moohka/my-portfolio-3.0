const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <button className="top-button" onClick={scrollTop}></button>

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

        <div className="footer-attribute">
          Backgrounds from&nbsp;
          <a
            className="footer-attribute-anchor"
            href="https://www.freepik.com/search?format=search&query=pattern"
            target="_blank"
            rel="noreferrer"
          >
            freepik
          </a>
        </div>
      </div>

      <div className="footer-div" id="second-div">
        <p className="footer-copyright">
          © 2022 Moohyun Kang. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
