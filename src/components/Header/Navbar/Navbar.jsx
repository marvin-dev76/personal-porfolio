import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  const [solid, setSolid] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  window.addEventListener('scroll', () => {
    window.scrollY >= 80 ? setSolid(true) : setSolid(false);
  })
  
  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <div className={solid ? 'nav solid-navbar' : 'nav'}>
      <div className="navbar">
        <div className="logo">
          <p>Marvin</p>
          <i className="ri-code-line"></i>
        </div>
        <i className="ri-function-line menu" onClick={() => toggleMenu()}></i>
        <div className={ showMenu ? "navbar-items show-menu" : "navbar-items"}>
          <i className="ri-close-line close-menu" onClick={() => toggleMenu()}></i>
          <div className="logo-navbar">
            <p>Marvin</p>
            <i className="ri-code-line"></i>
          </div>
          <a href="#header" className="navbar-item" onClick={() => toggleMenu()} >Home</a>
          <a href="#projects" className="navbar-item" onClick={() => toggleMenu()}>Projects</a>
          <a href="#about-me" className="navbar-item" onClick={() => toggleMenu()}>About Me</a>
          <a href="#hire-me" className="navbar-item" onClick={() => toggleMenu()}>Hire Me</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
