import React, { useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import { toast } from "react-toastify";
import "./HireMe.css";

init(process.env.REACT_APP_EMAILJS_USER_ID);

const HireMe = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [inputState, setInputState] = useState(initialState);

  const handleChange = (e) => {
    let { value } = e.target;
    setInputState({
      ...inputState,
      [e.target.name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(inputState);

    if (
      inputState.email === "" &&
      inputState.message === "" &&
      inputState.name === ""
    ) {
      toast.error("Complete form first!");
      return;
    }

    emailjs
      .send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, inputState)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => () => {
        console.log(err.status);
      });
    toast.success("Email sended successfully!");
    setInputState(initialState);
  };

  return (
    <div className="hire-me" id="hire-me">
      <div className="container">
        <h1>Hire Me</h1>
        <h2 className="touch">Always in touch 🤝</h2>
        <div className="hire-me-container">
          <form className="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="// Name"
              className="input name"
              name="name"
              value={inputState.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="// Email"
              className="input email"
              name="email"
              value={inputState.email}
              onChange={(e) => handleChange(e)}
            />
            <textarea
              rows="10"
              placeholder="// Comment or Message"
              className="input message"
              name="message"
              value={inputState.message}
              onChange={(e) => handleChange(e)}
            ></textarea>
            <input type="submit" value="Send" className="input btn" />
          </form>
          <div className="social-section">
            <h2>Social</h2>
            <div className="social-container">
              <a
                href="https://github.com/marvin-dev76/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="devicon-github-original social"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/marvin-erasmo-orellana-navas-1716bb216/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="devicon-linkedin-plain colored social"></i>
              </a>
              <a href="/cv.pdf" download>
                <button className="download-cv">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
