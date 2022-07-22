function Footer() {
  return (
    <footer>
      <div className="footer-div">
        <ul className="footer-list">
          <li className="footer-item">
            <a
              className="footer-anchor"
              href="https://www.github.com"
              target="_blank"
            >
              Email
            </a>
          </li>
          <li className="footer-item">
            <a
              className="footer-anchor"
              href="https://www.github.com"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="footer-item">
            <a
              className="footer-anchor"
              href="https://www.github.com"
              target="_blank"
            >
              CodePen
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-div" id="copyright-div">
        <p className="footer-copyright">
          © 2022 Moohyun Kang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
