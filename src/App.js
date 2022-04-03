import React from "react";
import "./App.css";

import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import AboutMe from "./components/AboutMe/AboutMe.jsx";
import HireMe from "./components/HireMe/HireMe.jsx";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.log(process.env.REACT_APP_MESSAGE);

function App() {
  return (
    <div>
      <Header />
      <Projects />
      <AboutMe />
      <HireMe />
      <Footer />
      <ToastContainer toastStyle={{backgroundColor: 'var(--fg)', color: 'var(--bg)'}}/>
    </div>
  );
}

export default App;
