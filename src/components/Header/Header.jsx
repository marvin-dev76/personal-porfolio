import React from 'react';
import Typewriter from 'typewriter-effect';
import './Header.css';

import Navbar from './Navbar/Navbar.jsx';

const options = {
  autoStart: true,
  loop: true,
  wrapperClassName: "typewriter",
}

const typewriterCb = (typewriter) => {
  typewriter.typeString('I am a jr. Frontend Web developer')
    .pauseFor(2500)
    .deleteAll()
    .start();
}

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="layer">
        <Navbar />
        <div className="hero container">
          <div className="left-side">
            <h1 className="title">My name is Marvin Orellana</h1>
          </div>
          <div className="right-side">
            <i className="ri-braces-fill brace"></i>
            <Typewriter onInit={(typewriter) => typewriterCb(typewriter)} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
