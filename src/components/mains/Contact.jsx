import ContactForm from "../interfaces/ContactForm";
import { useContext } from "react";
import { NavContext } from "../App";

const Contact = () => {
  const navRefs = useContext(NavContext);

  return (
    <div className="main" id="contact" ref={navRefs[2]}>
      <h1 className="main-title">Contact</h1>

      <div className="contact-info">
        <a
          className="contact-item"
          href="https://www.github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="contact-item"
          href="https://www.github.com"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
