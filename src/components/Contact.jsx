import React from "react";
import "./Contact.css";

export default function Contact() {

  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // You can add additional logic here if needed

    // Submit the form using Netlify Forms
    const form = event.target;
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => alert("Form submitted successfully"))
      .catch((error) => alert(error));
  };

  return (
    <div>
      <form
        name="contact info"
        method="post"
        action=""
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
}
