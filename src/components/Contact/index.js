import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers';

const Contact = () => {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    //destructure formState into its properties
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    //handleChange() will capture user keystrokes to update the formState via setFormState
    const handleChange = e => {
        //if element is email input, run validateEmail function on user input value
        if(e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //if email is not valid, give error message
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
            //if other two input elements (name, message) do not have length, give required message
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        setFormState({...formState, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formState);
    };

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" defaultValue={email} onBlur={handleChange}></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="4" defaultValue={message} onBlur={handleChange}></textarea>
        </div>
        {/*conditionally render errorMessage div*/}
        {errorMessage && (
            <div>
                <p>{errorMessage}</p>
            </div>
        )}
        <button type="submit" className="btn btn-light">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
