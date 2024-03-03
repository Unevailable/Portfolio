import React from "react";
import "./Contact.css";

function Contact(){
  return ( <div>
    <form 
    name="contact info" 
    action="/contact"
    method="post"
    >

  <div>
    <label> Name <br />
        <input type="text" name="name"/>
    </label>
  </div>

  <div>
    <label htmlFor="email"> Email </label> <br />
        <input id="email" type="email" name="email"/>
  </div>

  <div>
    <label> Message <br />
        <textarea name="message"></textarea>
    </label>
  </div>

  <button type="submit">Submit</button>
  
    </form>
  </div>
  );
  
}

export default Contact;