import Ssk from "./projects/ssk";
import Courseguide from "./projects/courseguide";
import Airbus from "./projects/airbus";
import Estructions from "./projects/nyeveier";
import ThisPage from "./projects/thispage";
import {useState} from "react";
import Nyeveier from "./projects/nyeveier";
import nyeVeierLogo from "../img/mockups/nv-logo-white.png";
import sskLogo from "../img/mockups/ssk-logo.png";
import atsLogo from "../img/mockups/ATS.png";
import {act} from "react-dom/test-utils";

export default function Work() {
	const projects = [
		{type: "logo", ico: nyeVeierLogo, name: "", id: "nyeveier", color: "#005f6e"},
		{type: "logo", ico: atsLogo, name: "", id: "airbus", color: "#0280ad"},
		{type: "logo", ico: sskLogo, name: "", id: "ssk", color: "#b35600"},
		{type: "txt", ico: "3D Golfcourse Map", name: "", id: "golf", color: "#00cf48"},
		{type: "txt", ico: "This Page", name: "", id: "page", color: "#0280ad"},
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
			<div className={`flex justify-center items-center gap-10 lg:flex-row flex-col -mt-4`}>
				<div>
					<h2 className=" text-white text-xl text-center border-neutral-400 border-b-[1px] w-max pr-4 pl-4 pb-1 m-auto">Select Project</h2>
					<div className=" mt-4 flex flex-col gap-2 lg:gap-10 rounded-3xl  lg:w-max p-4 bg-opacity-10 ">
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
								className={"text-white bg-white bg-opacity-5 p-3  rounded-2xl text-4xl transition-all hover:bg-opacity-10"}>
								{project.type === "logo" ? (
									<img className=" object-contain h-8 md:h-12 m-auto" src={project.ico} />
								) : (
									<h2 className=" text-lg md:text-2xl">{project.ico}</h2>
								)}
							</button>
						))}
					</div>
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
				</div>
			</div>
			<div className=" h-10"></div>
		</div>
	);
}
