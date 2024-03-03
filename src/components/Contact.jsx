import "./Contact.css";

const Contact = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Use the form data directly
      const formDataToSubmit = { ...formData, _gotcha: "" };

      console.log(formDataToSubmit);
      // Perform further actions, such as sending the data to a server
      // Example: You can use fetch to send the form data to a server
      // fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: new URLSearchParams(formDataToSubmit).toString(),
      // })
      //   .then(() => console.log("Form data submitted successfully"))
      //   .catch((error) => console.error("Error submitting form data:", error));
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
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

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`textarea ${errors.message ? "textarea-error" : ""}`}
        />
        {errors.message && <p className="error-message">{errors.message}</p>}

        {/* Add the hidden input field for the _gotcha token */}
        <input type="hidden" name="_gotcha" />

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
