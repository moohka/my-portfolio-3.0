import ContactForm from "../interfaces/ContactForm";
import { useContext } from "react";
import { NavContext } from "../App";

const Contact = () => {
  const navRefs = useContext(NavContext);

  return (
    <div className="main" id="contact" ref={navRefs[2]}>
      <h2 className="main-title">Contact</h2>
      <ContactForm />
    </div>
  );
};

export default Contact;
