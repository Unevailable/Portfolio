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
      // You don't need to log formData since Netlify will handle the form submission
    }
  };

  // JSX for the Contact form component
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form
        name="contact" // This is important for Netlify Forms
        method="POST"
        data-netlify="true" // Enable Netlify Forms
        onSubmit={handleSubmit} // Add this line to reference the handleSubmit function
      >
        {/* Hidden form field for Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Input for Name */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input ${errors.name ? "input-error" : ""}`}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        {/* Input for Email */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input ${errors.email ? "input-error" : ""}`}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        {/* Textarea for Message */}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`textarea ${errors.message ? "textarea-error" : ""}`}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}

        {/* Submit button */}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </section>
  );
};

// Exporting the Contact component for use in other parts of the application
export default Contact;
