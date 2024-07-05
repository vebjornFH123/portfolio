import React from "react";

import "./App.css";
import Menubar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills";
import Knowledge from "./components/knowledge.jsx";
import Work from "./components/work.jsx";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contact.jsx";
import Home from "./components/home.jsx";

export default function App() {
  return (
    <div className="w-screen overflow-hidden">
      <Menubar />
      {/* The pages below */}
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
