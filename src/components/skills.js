import face from "../img/face.png";
import React from "react";
import {useInView} from "react-intersection-observer";

import reactLogo from "../img/logos/react.png";
import jsLogo from "../img/logos/js.png";
import nodeLogo from "../img/logos/nodejs.png";
import boostrapLogo from "../img/logos/bootstrap.png";
import tailwindLogo from "../img/logos/tailwind.png";
import threejsLogo from "../img/logos/threejs.png";
import typeScriptLogo from "../img/logos/Typescript.png";
import cssLogo from "../img/logos/css.png";
import html5Logo from "../img/logos/html5.png";
import gitLogo from "../img/logos/git.png";

import unityLogo from "../img/logos/unity.png";

export default function Skills() {
	const skills = [
		{link: "https://react.dev/", name: "React", image: reactLogo},
		{link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", name: "Javascript", image: jsLogo},
		{link: "https://getbootstrap.com/", name: "TypeScript", image: typeScriptLogo},
		{link: "https://nodejs.org/en", name: "Node.js", image: nodeLogo},
		{link: "https://tailwindcss.com/", name: "Tailwind", image: tailwindLogo},
		{link: "https://git-scm.com/", name: "Git", image: gitLogo},

		{link: "https://unity.com/", name: "Unity", image: unityLogo},
	];

	const {ref: program, inView: programVisible} = useInView();
	const {ref: faceRef, inView: faceVisible} = useInView();

	return (
		<div className=" relative h-auto m-auto w-screen lg:h-screen text-white bg-neutral-900 overflow-hidden">
			<div
				className="hidden md:block top-52 left-0 absolute h-2/3 w-2/3 opacity-10 z-50 pointer-events-none"
				style={{
					background: "radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
					filter: `hue-rotate(30deg) brightness(0.8)`,
				}}></div>
			<div className=" lg:scale-100 scale-75 flex flex-col m-auto md:h-screen md:flex-row">
				<div className=" sm:scale-100 scale-90 flex flex-col m-auto items-center">
					<div className=" flex gap-4">
						<h2 className=" text-white text-6xl font-extrabold text-center">My</h2>
						<h2
							style={{WebkitTextStrokeColor: "skyblue", WebkitTextStrokeWidth: "2px", WebkitTextFillColor: "rgba(0,0,0,0)"}}
							className=" text-6xl font-extrabold  h-max relative z-0 text-center">
							Skills
						</h2>
					</div>

					<div className="h-16"></div>
					<p className=" text-2xl italic max-w-md text-center">
						- Cooperative
						<br />- Hardworking
						<br />- Innovative
						<br /> - Creative
						<br />- Joyful
					</p>
					<div className="h-16"></div>
					<h3 className="text-center text-2xl font-bold">It's in Frontend I thrive</h3>
					<div className="h-16 "></div>
					<div className=" m-auto flex items-center gap-2 overflow-x-hidden">
						<div className=" flex flex-col items-center gap-2">
							<div className="h-10 w-10 border-2 rounded-full "></div>
							<span>Backend</span>
						</div>

						<div className="h-0.5 lg:w-80 w-56 bg-white -mt-7 pointer-events-none">
							<img
								ref={faceRef}
								className={`${faceVisible ? "basic-slide" : ""} absolute h-20 ml-32 lg:ml-48 -mt-10 grayscale `}
								src={face}
								alt="Eivind Wøien's face"
							/>
							<div className="absolute h-3 w-0.5 bg-white translate-x-1/2 left-1/2 -mt-1 -z-10"></div>
						</div>

						<div className=" flex flex-col items-center gap-2">
							<div className="h-10 w-10 border-2 rounded-full "></div>
							<span>Frontend</span>
						</div>
					</div>
					<div
						style={{
							height: "1px",
						}}
						className=" w-full bg-neutral-500 mt-8"></div>
					<div ref={program} className={`flex gap-5 m-auto mt-8 flex-wrap justify-center`}>
						{skills.map((skill, index) => (
							<a
								href={skill.link}
								target="_blank"
								key={index}
								style={{animationDelay: `${0.05 * (index + 1)}s`}}
								className={`${
									programVisible ? "slide-in" : ""
								} opacity-0 relative h-24 w-24 p-2 rounded-3xl flex flex-col gap-2 justify-center transition-all duration-200 bg-neutral-700 bg-opacity-50 hover:bg-neutral-600`}>
								<img className=" object-scale-down h-12 hover:grayscale-0" src={skill.image} alt={skill.name} />
								<h4 className="text-center text-white font-medium text-sm ">{skill.name}</h4>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
