import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Projects from './components/Projects/Projects.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import HireMe from './components/HireMe/HireMe.jsx';

// Add 'Technologies used in project card'

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <AboutMe />
      <HireMe />
    </div>
  );
}

export default App;
