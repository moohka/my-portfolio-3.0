import ContactForm from "../interfaces/ContactForm";
import { useContext } from "react";
import { NavContext } from "../App";

const Contact = () => {
  //navRef
  const navRefs = useContext(NavContext);

  return (
    <div className="main" id="contact" ref={navRefs[2]}>
      <h1 className="contact-h">Contact</h1>

      <ContactForm />
    </div>
  );
};

export default Contact;
