import React from "react";
import "./HireMe.css";

const HireMe = () => {
  return (
    <div className="hire-me" id="hire-me">
      <div className="container">
        <h1>Hire Me</h1>
        <h2 className="touch" >Always in touch 🤝</h2>
        <div className="hire-me-container">
          <form className="contact-form">
            <input type="text" placeholder="// Name" className="input name" />
            <input
              type="text"
              placeholder="// LastName"
              className="input lastname"
            />
            <input
              type="email"
              placeholder="// Email"
              className="input email"
            />
            <textarea
              rows="10"
              placeholder="// Comment or Message"
              className="input message"
            ></textarea>
            <input type="button" value="Send" className="input btn" />
          </form>
          <div className="social-section">
            <h2>Social</h2>
            <div className="social-container">
              <a href="#hire-me">
                <i className="devicon-github-original social"></i>
              </a>
              <a href="#hire-me">
                <i className="devicon-linkedin-plain colored social"></i>
              </a>
              <button className="download-cv">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
