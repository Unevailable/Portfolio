import React from "react";
import "./Contact.css";

function Contact(){
  return ( <div>
    <form 
    name="contact" 
    action="/success"
    method="POST"
    >

  <input type="hidden" name="form-name" value="contact"/>

  <div>
    <label> Name <br />
        <input type="text" id="name" name="name"/>
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