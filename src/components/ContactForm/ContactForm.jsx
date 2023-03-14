import { useRef, useState } from "react";

const ContactForm = () => {
  //keeping track of textarea
  const textareaRef = useRef();
  const [remaining, setRemaining] = useState(0);

  function remainingInput() {
    setRemaining(textareaRef.current.value.length);
  }

  return (
    <form
      className="contact-element"
      id="form-element"
      action="https://formsubmit.co/a7861fcda47b7862e1a636d0fdd58a17 "
      method="POST"
    >
      <div className="form-input-container">
        <div className="form-element" id="form-element-name">
          <input
            className="form-input"
            id="form-input-name"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          ></input>
          <label className="form-label" htmlFor="form-input-name">
            Name
          </label>
        </div>

        <div className="form-element" id="form-element-email">
          <input
            className="form-input"
            id="form-input-email"
            type="email"
            placeholder="youremail@email.com"
            name="email"
            required
          ></input>
          <label className="form-label" htmlFor="form-input-email">
            Email
          </label>
        </div>
      </div>

      <div className="form-element" id="form-element-textarea">
        <div id="textarea-length">{remaining}/500</div>
        <textarea
          className="form-input"
          id="form-input-textarea"
          placeholder=" "
          rows="6"
          badinput="false"
          maxLength="500"
          name="message"
          ref={textareaRef}
          onChange={() => {
            remainingInput();
          }}
          required
        ></textarea>
        <label
          className="form-label"
          id="form-label-textarea"
          htmlFor="form-input-textarea"
        >
          Message
        </label>
      </div>

      <input type="submit" id="form-input-submit" value="Send Message"></input>
    </form>
  );
};

export default ContactForm;
