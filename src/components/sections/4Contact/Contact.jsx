import ContactForm from "../../ContactForm/ContactForm";
import { NavContextValue } from "../../../contexts/NavContext";

const Contact = () => {
  //navRef
  const { contactRef } = NavContextValue();

  return (
    <section className="main-section" id="contact-section" ref={contactRef}>
      <h1 className="contact-h">Contact</h1>

      <div className="contact-container">
        <div className="contact-element" id="message-element">
          <p>
            Thank you for your interest in my work. Whether you have a question,
            a project proposal, or just want to say hi, I'm always happy to hear
            from you.
          </p>
          <p>
            Please feel free to use the contact form below to get in touch. I
            typically respond within 1-2 business days. You can also reach me
            via email or social media, links for which are available at the
            bottom of this page.
          </p>
          <p>Looking forward to hearing from you!</p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
