// Importing React and the CSS module for styling
import React, { useState } from "react";
import "./Contact.css";

// Functional component for the Contact form
const Contact = () => {
  // State for form data and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Function to handle changes in form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function to check form data
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (formData.name.trim() === "") {
      tempErrors.name = "Please enter your name.";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      tempErrors.email = "Please enter your email.";
      isValid = false;
    } else {
      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(formData.email)) {
        tempErrors.email = "Please enter a valid email address.";
        isValid = false;
      }
    }

    if (formData.message.trim() === "") {
      tempErrors.message = "Please enter your message.";
      isValid = false;
    }

    // Set errors and return validation status
    setErrors(tempErrors);
    return isValid;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      // Perform further actions, such as sending the data to a server
    }
  };

  // JSX for the Contact form component
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form
        name="contact" // This is important for Netlify Forms
        netlify // Netlify will automatically detect this form
        onSubmit={handleSubmit} // Add this line to reference the handleSubmit function
      >
        {/* Input for Name */}
        <p>
          <label htmlFor="name">Name: <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /></label>
          {errors.name && <p className="error-message">{errors.name}</p>}
        </p>

        {/* Input for Email */}
        <p>
          <label htmlFor="email">Email: <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /></label>
          {errors.email && <p className="error-message">{errors.email}</p>}
        </p>

        {/* Textarea for Message */}
        <p>
          <label htmlFor="message">Message: <textarea id="message" name="message" value={formData.message} onChange={handleChange} /></label>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </p>

        {/* Submit button */}
        <p>
          <button type="submit" className="button">
            Submit
          </button>
        </p>
      </form>
    </section>
  );
};

// Exporting the Contact component for use in other parts of the application
export default Contact;
