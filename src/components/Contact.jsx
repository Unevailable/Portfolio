import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Additional logic for form submission if needed
  };

  return (
    <div>
      <form
        name="contact info"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact info" />

        <div>
          <label>
            Name <br />
            <input type="text" name="name" />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email <br />
            <input id="email" type="email" name="email" />
          </label>
        </div>

        <div>
          <label>
            Message <br />
            <textarea name="message"></textarea>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
