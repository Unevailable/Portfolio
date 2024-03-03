import React from "react";
import "./Contact.css";

export default function Contact() {

return <div>
  <form 
  name="contact info" 
  method="post"
  data-netlify="true"
  onSubmit="submit"
>
  <input type="hidden" name="form-name" value="contact info"/>

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
          <textarea name="message" type="message"></textarea>
    </label>
  </div>

  <button type="submit">Submit</button>

</form>
</div>

}