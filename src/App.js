import React from "react";

import "./App.css";
import Menubar from "./components/navbar.js";
import About from "./components/about.js";
import Skills from "./components/skills";
import Knowledge from "./components/knowledge.js";
import Work from "./components/work.js";
import Experience from "./components/experience";
import Education from "./components/education";
import Contact from "./components/contact";
import PhoneStart from "./components/phoneStart";

import ThreeScene from "./threeScene";

export default function App() {
	return (
		<div className=" w-screen overflow-x-hidden">
			<Menubar />
			{/* The pages below */}
			<div id="home">
				<ThreeScene />
			</div>
			<div id="about">
				<About />
			</div>
			<div id="skills">
				<Skills />
			</div>
			<Knowledge />
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
