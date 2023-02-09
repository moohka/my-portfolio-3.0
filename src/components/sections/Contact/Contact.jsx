import ContactForm from "../../ContactForm/ContactForm";
import { NavContextValue } from "../../../contexts/NavContext";

const Contact = () => {
  //navRef
  const { contactRef } = NavContextValue();

  return (
    <div className="main" id="contact" ref={contactRef}>
      <h1 className="contact-h">Contact</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
