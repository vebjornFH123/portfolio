import loadIco from "./img/loading.svg";

import React, {Suspense, useEffect, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {PerspectiveCamera} from "@react-three/drei";
import {SoftShadows} from "@react-three/drei";
import {useState} from "react";

import Desk from "./components/3D/desk";
import Golf from "./components/3D/golf";

let scrollAmount = 0;

document.addEventListener("wheel", (event) => {
	scrollAmount += (event.deltaY * -1) / 200;
	if (scrollAmount > 0) {
		scrollAmount = -0.01;
	} else if (scrollAmount < -4) {
		scrollAmount = -3.99;
	}
});

let mouseX;
let mouseY;

let cx = window.innerWidth * 0.5;
let cy = window.innerWidth * 0.5;

window.addEventListener("resize", function () {
	cx = window.innerWidth * 0.5;
	cy = window.innerWidth * 0.5;
});

window.addEventListener("mousemove", (e) => {
	mouseX = (e.clientX - cx) / 50000; // Horizontal
	mouseY = (e.clientY - cy) / 50000;
});

function ThreeScene() {
	const loadingRef = useRef(null);

	const myFunctionInThreeScene = (finished) => {
		if (finished) {
			canvasContRef.current.style.opacity = 1;
			loadingRef.current.style.opacity = 0;
			setTimeout(() => {
				loadingRef.current.style.display = "none";
			}, 500);
		} else {
			canvasContRef.current.style.opacity = 0;
			loadingRef.current.style.display = "flex";
			setTimeout(() => {
				loadingRef.current.style.opacity = 1;
			}, 50);
		}
		console.log(finished);
	};

	const cameraPos = [6, 2, 0];
	const canvasContRef = useRef(null);

	const cameraRef = useRef(null);
	const modelRef = useRef(null);

	const [currentModel, changeModel] = useState("DeskModel");

	var models = {
		DeskModel: <Desk callFunction={myFunctionInThreeScene} />,
		GolfModel: <Golf callFunction={myFunctionInThreeScene} />,
	};

	function change(model) {
		changeModel(`${model}`);
		myFunctionInThreeScene(false);
		console.log("kjører");
	}

	const modelTexts = {
		DeskModel: '"Jeg brenner for kreativitet"',
		Model2: "This is the second model text",
		GolfModel: '"Men jeg har også passion for golf!',
		Skate: "This is the skate model text",
	};

	function showCanvas(mouseMove) {
		if (mouseMove == undefined) {
			// Create and dispatch a simulated mouse movement event
			const mouseMoveEvent = new MouseEvent("mousemove", {
				bubbles: true,
				clientX: 10, // Adjust the X and Y coordinates as needed
				clientY: 10,
			});
			canvasContRef.current.dispatchEvent(mouseMoveEvent);
		}
	}

	useEffect(() => {
		setInterval(() => {
			if (cameraRef.current) {
				cameraRef.current.position.set(cameraPos[0], scrollAmount + cameraPos[1], mouseX * 100 + cameraPos[2] - scrollAmount * 1.25);
			}
		}, 1000 / 24);
	}, []);

	//Here i want a function that is beeing called from the desk.js script.
	//I would also like the function to update some styleing from to ref's i fetched from above, and update them.

	return (
		<div className="relative  w-screen h-screen bg-neutral-900">
			<div className=" flex absolute left-1/2 -translate-x-1/2 bottom-28 bg-opacity-50 p-5 z-20 rounded-r-3xl flex-col gap-5">
				{<h3 className=" w-full text-neutral-400 font-thin text-center text-xl">My Week in 3D</h3>}
				<div className=" flex gap-4 flex-row text-white font-thin text-lg justify-center z-50 -mt-1 ">
					<button
						style={{
							backgroundColor: currentModel === "DeskModel" ? "grey" : "#383838",
						}}
						className=" p-2 text-center font-medium rounded-lg w-28 transition-all duration-200 hover:bg-neutral-300 hover:bg-opacity-50"
						onClick={function () {
							change("DeskModel");
						}}>
						Mon-Fri
					</button>

					<button
						style={{
							backgroundColor: currentModel === "GolfModel" ? "grey" : "#383838",
						}}
						className=" p-2 text-center font-medium  rounded-lg w-28 transition-all duration-200 hover:bg-neutral-300 hover:bg-opacity-50"
						onClick={function () {
							change("GolfModel");
						}}>
						Sat-Sun
					</button>
				</div>
			</div>

			<div className="flex m-auto w-screen justify-center absolute top-10  xl:gap-10 gap-5">
				<h2 className=" uppercase font-extrabold text-white w-max z-10 2xl:text-9xl xl:text-8xl lg:text-6xl md:text-5xl text-3xl ">Fullstack</h2>
				<h2
					style={{
						WebkitTextStrokeColor: "skyblue",
						WebkitTextStrokeWidth: window.innerWidth > 1280 ? "4px" : "2px",
						WebkitTextFillColor: "rgba(0, 0, 0, 0)",
					}}
					className=" uppercase font-extrabold w-max z-10 2xl:text-9xl xl:text-8xl lg:text-6xl md:text-5xl text-3xl  ">
					Developer
				</h2>
			</div>

			<div className={`absolute top-0 left-0 w-screen h-screen`}>
				<div
					style={{
						opacity: 1,
						transition: "opacity 0.5s",
					}}
					ref={loadingRef}
					className="flex flex-wrap h-full justify-center items-center ">
					<img className=" absolute h-10 animate-spin" src={loadIco} />
					<h2 className=" text-white mt-20 text-2xl">Loading 3D model</h2>
				</div>
			</div>
			<div
				style={{
					opacity: 0,
					transition: "opacity 2s",
				}}
				className=" w-screen h-screen sm:scale-100"
				ref={canvasContRef}>
				{/*
				<h3 className=" absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-44 font-thin w-max text-white text-4xl z-20 italic">
					{modelTexts[currentModel]}
				</h3>
*/}
				<Canvas
					shadows
					className=" z-10"
					style={{touchAction: "auto !important", pointerEvents: "none"}}
					onCreated={(state) => {
						showCanvas();
					}}>
					<OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
					<ambientLight intensity={1} />
					<directionalLight
						args={["#ffffff", 4]}
						position={[2, 3, -1]}
						shadow-bias={-0.00004}
						shadow-mapSize-width={2048}
						shadow-mapSize-height={2048}
						shadow-radius={10}
						castShadow
					/>
					<PerspectiveCamera
						ref={cameraRef}
						makeDefault // This makes the camera the default for the scene
						position={cameraPos} // Initial camera position
					/>
					<Suspense ref={modelRef} fallback={null}>
						{models[currentModel]}
					</Suspense>
					<SoftShadows />
				</Canvas>
			</div>
		</div>
	);
}

export default ThreeScene;
