import ContactForm from "../../ContactForm/ContactForm";
import { NavContextValue } from "../../../contexts/NavContext";

const Contact = () => {
  //navRef
  const { contactRef } = NavContextValue();

  return (
    <section className="main-section" id="contact-section" ref={contactRef}>
      <h1 className="contact-h">Contact</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
