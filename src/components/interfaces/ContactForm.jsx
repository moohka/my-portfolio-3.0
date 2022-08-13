import { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  //keeping track of textarea
  const textareaRef = useRef();
  const [remaining, setRemaining] = useState(0);
  function keepTrack() {
    setRemaining(textareaRef.current.value.length);
  }

  //textarea auto-grow
  function autoGrow() {}

  return (
    <form
      action="https://formsubmit.co/moohka@hotmail.com"
      method="POST"
      className="contact-form"
    >
      <div className="form-container">
        <div className="form-element" id="form-element-name">
          <input
            className="form-input"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          ></input>
          <label className="form-label">Name</label>
        </div>

        <div className="form-element" id="form-element-email">
          <input
            className="form-input"
            type="text"
            placeholder="Your Email"
            name="email"
            required
          ></input>
          <label className="form-label">Email</label>
        </div>
      </div>
      <div className="form-element" id="form-element-textarea">
        <div id="textarea-length">{remaining}/500</div>

        <textarea
          className="form-input"
          id="form-input-textarea"
          placeholder=" "
          rows="5"
          badinput="false"
          maxLength="500"
          name="message"
          ref={textareaRef}
          // onChange={}
          onInput={keepTrack}
          required
        ></textarea>

        <label className="form-label" id="form-label-textarea">
          Message
        </label>
      </div>

      <input type="submit" id="form-input-submit" value="Send Message"></input>
    </form>
  );
};

export default ContactForm;
