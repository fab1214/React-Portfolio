import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  //destructure formState into its properties
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  //handleChange() will capture user keystrokes to update the formState via setFormState
  const handleChange = (e) => {
    //if element is email input, run validateEmail function on user input value
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      //if email is not valid, give error message
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      //if other two input elements (name, message) do not have length, give required message
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="form">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    defaultValue={name}
                    onBlur={handleChange}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    defaultValue={email}
                    onBlur={handleChange}
                  ></input>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    defaultValue={message}
                    onBlur={handleChange}
                  ></textarea>
                </div>

                {/*conditionally render errorMessage div*/}
                {errorMessage && (
                  <div>
                    <p>{errorMessage}</p>
                  </div>
                )}
                <button type="submit" className="form-control btn-dark">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
