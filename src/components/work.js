import Ssk from "./projects/ssk";
import Courseguide from "./projects/courseguide";
import Airbus from "./projects/airbus";
import ThisPage from "./projects/thispage";
import {useState} from "react";
import Nyeveier from "./projects/nyeveier";
import nyeVeierLogo from "../img/mockups/nv-ico.png";
import sskLogo from "../img/mockups/ssk-logo.png";
import atsLogo from "../img/mockups/ATS-ico.png";
import kirkeLogo from "../img/mockups/sjomannskirken_small.png";
import Kirke from "./projects/kirke";

export default function Work() {
	const projects = [
		{type: "logo", ico: nyeVeierLogo, id: "nyeveier", color: "#005f6e"},
		{type: "logo", ico: atsLogo, id: "airbus", color: "#0280ad"},
		{type: "logo", ico: kirkeLogo, id: "kirke", color: "#f15c55"},
		{type: "logo", ico: sskLogo, id: "ssk", color: "#b35600"},
		{type: "txt", ico: "⛳️", id: "golf", color: "#00cf48"},
		{type: "txt", ico: "🖥️", id: "page", color: "#0280ad"},
	];

	const [activeProject, setActiveProject] = useState("nyeveier");
	const [hueRotate, setHueRotate] = useState(0);
	const [xValue, setxValue] = useState(0);
	const [transition, setTransition] = useState(1);

	function setGradientColor(project) {
		setxValue(Math.round(Math.random() * 30));
		if (project === "nyeveier") {
			setHueRotate(0);
		} else if (project === "ssk") {
			setHueRotate(-120);
		} else if (project === "airbus") {
			setHueRotate(45);
		} else if (project === "golf") {
			setHueRotate(-90);
		} else if (project === "page") {
			setHueRotate(45);
		}
	}

	function startTransition(project) {
		if (project != activeProject) {
			setGradientColor(project);
			setTransition(0);
			setTimeout(() => {
				setTransition(1);
				setActiveProject(project);
			}, 300);
		}
	}

	return (
		<div className=" min-h-screen relative ">
			<div
				className=" hidden md:block absolute h-2/3 w-2/3 opacity-10 z-10 right-[-10%] pointer-events-none"
				style={{
					background: "radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
					filter: `hue-rotate(${hueRotate}deg)`,
					transform: `translateX(${-xValue + 10}%)`,
					transition: "transform 0.5s",
				}}></div>
			<h2
				style={{WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "2px", WebkitTextFillColor: "rgba(0,0,0,0)"}}
				className=" uppercase -mt-10 xl:text-7xl md:text-6xl text-5xl font-extrabold  text-center pt-10 pb-5 ">
				Work
			</h2>
			<div className={`flex justify-center items-center flex-col md:flex-row gap-5 -mt-4`}>
				<h2 className=" block md:hidden  text-white text-xl text-center border-neutral-400 border-b-[1px] w-max pr-4 pl-4 pb-1 m-auto">
					Select Project
				</h2>
				<div className=" -mt-4 md:mt-4 mb-5 md:mb-0 justify-center items-center flex flex-wrap md:flex-col gap-1 lg:gap-4 rounded-3xl max-w-[100vw] p-4 bg-opacity-10 ">
					<h2 className="  md:block hidden text-white text-xl text-center border-neutral-400 border-b-[1px] w-max pr-4 pl-4 pb-1 m-auto">
						Select Project
					</h2>
					{projects.map((project, index) => (
						<button
							id={project.id}
							key={index}
							onClick={() => {
								startTransition(project.id);
							}}
							style={{
								filter: project.id === activeProject ? "brightness(1.5)" : "",
								borderColor: project.id === activeProject ? project.color : "",
								borderWidth: project.id === activeProject ? 2 : 0,
							}}
							className={"text-white bg-white bg-opacity-5 p-2 h-14 w-14 md:h-20 sm:w-20  rounded-2xl text-4xl transition-all hover:bg-opacity-10"}>
							{project.type === "logo" ? (
								<img className=" object-contain h-6 md:h-10 m-auto" src={project.ico} />
							) : (
								<h2 className=" text-2xl md:text-4xl">{project.ico}</h2>
							)}
						</button>
					))}
				</div>

				<div style={{opacity: transition}} className=" duration-300 transition-all sm:mt-0 -mt-16">
					<div style={{display: activeProject === "nyeveier" ? "block" : "none"}}>
						<Nyeveier />
					</div>
					<div style={{display: activeProject === "airbus" ? "block" : "none"}}>
						<Airbus />
					</div>
					<div style={{display: activeProject === "ssk" ? "block" : "none"}}>
						<Ssk />
					</div>
					<div style={{display: activeProject === "golf" ? "block" : "none"}}>
						<Courseguide />
					</div>

					<div style={{display: activeProject === "page" ? "block" : "none"}}>
						<ThisPage />
					</div>
					<div style={{display: activeProject === "kirke" ? "block" : "none"}}>
						<Kirke />
					</div>
				</div>
			</div>
			<div className=" h-10"></div>
		</div>
	);
}
