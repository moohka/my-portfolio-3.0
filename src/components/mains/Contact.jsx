import ContactForm from "../interfaces/ContactForm";
import { useContext } from "react";
import { NavContext } from "../App";

const Contact = () => {
  //navRef
  const navRefs = useContext(NavContext);

  //contact items array
  const contacts = [
    {
      key: "Email",
      href: "mailto:moohka@hotmail.com",
      target: ``,
      rel: ``,
    },
    {
      key: "GitHub",
      href: "https://www.naver.com",
      target: `target="_blank"`,
      rel: `noreferrer`,
    },
    {
      key: "CodePen",
      href: "https://www.naver.com",
      target: `target="_blank"`,
      rel: `noreferrer`,
    },
  ];

  return (
    <div className="main" id="contact" ref={navRefs[2]}>
      <h1 className="contact-h">Contact</h1>

      <div className="contact-container">
        {contacts.map((item) => {
          return (
            <a
              key={item.key}
              className="contact-item"
              href={item.href}
              target={item.target}
              rel={item.rel}
            >
              {item.key}
            </a>
          );
        })}
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
