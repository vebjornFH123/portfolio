import "../Animations.css";
import {useInView} from "react-intersection-observer";

import chatgptLogo from "../img/logos/chatgpt.png";
import csharpLogo from "../img/logos/csharp.png";
import html5Logo from "../img/logos/html5.png";
import howlerLogo from "../img/logos/howlerjs.png";
import phpLogo from "../img/logos/php.png";
import vscodeLogo from "../img/logos/vscode.png";
import visualstudioLogo from "../img/logos/visualstudio.png";
import unityLogo from "../img/logos/unity.png";
import illustratorLogo from "../img/logos/illustrator.png";
import cssLogo from "../img/logos/css.png";
import premierProLogo from "../img/logos/premierepro.png";
import photoshopLogo from "../img/logos/photoshop.png";
import aftereffectsLogo from "../img/logos/aftereffects.png";
import finalcutLogo from "../img/logos/finalcut.png";
import flstudioLogo from "../img/logos/flstudio.png";
import logicproxLogo from "../img/logos/logicprox.png";
import blenderLogo from "../img/logos/blender.png";
import lightroomLogo from "../img/logos/lightroom.png";
import fireflyLogo from "../img/logos/firefly.png";
import figmaLogo from "../img/logos/figma.png";
import mapboxLogo from "../img/logos/Mapbox.png";
import threejsLogo from "../img/logos/threejs.png";

export default function Knowledge() {
	const programs = [
		{link: "https://learn.microsoft.com/en-us/dotnet/csharp/", name: "C#", image: csharpLogo},
		{link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", name: "HTML5", image: html5Logo},
		{link: "https://developer.mozilla.org/en-US/docs/Web/CSS", name: "CSS3", image: cssLogo},
		{link: "https://howlerjs.com/", name: "Howler.js", image: howlerLogo},
		{link: "https://www.mapbox.com", name: "Mapbox GL", image: mapboxLogo},
		{link: "https://threejs.org/", name: "Three.js", image: threejsLogo},
		{link: "https://figma.com", name: "Figma", image: figmaLogo},
		{link: "https://code.visualstudio.com/", name: "VSCode", image: vscodeLogo},
		{link: "https://visualstudio.microsoft.com/", name: "Visual Studio", image: visualstudioLogo},

		{link: "https://unity.com/", name: "Unity", image: unityLogo},
		{link: "https://www.blender.org/", name: "Blender", image: blenderLogo},
		{link: "https://www.adobe.com/products/illustrator.html", name: "Illustrator", image: illustratorLogo},
		{link: "https://www.adobe.com/no/products/photoshop.html", name: "Photoshop", image: photoshopLogo},
		{link: "https://www.adobe.com/products/photoshop-lightroom.html", name: "Lightroom", image: lightroomLogo},
		{link: "https://www.adobe.com/sensei/generative-ai/firefly.html", name: "Firefly", image: fireflyLogo},
		{link: "https://www.apple.com/final-cut-pro/", name: "Final Cut Pro", image: finalcutLogo},
		{link: "https://www.apple.com/logic-pro/", name: "Logic Pro X", image: logicproxLogo},
	];

	const {ref: program, inView: programVisible} = useInView();

	return (
		<div className=" relative h-max w-screen lg:h-screen flex items-center justify-center bg-neutral-900 p-20">
			<div
				className=" hidden md:block top-52 right-0 absolute h-2/3 w-2/3 opacity-10 z-50 pointer-events-none"
				style={{
					background: "radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
					filter: `hue-rotate(40deg) brightness(0.8)`,
				}}></div>
			<div className=" flex flex-col items-center lg:gap-7">
				<h2 className="text-white text-4xl text-center relative">Not convinced yet?</h2>
				<h2 className="text-white text-xl text-center relative">I am proficient in this as well</h2>
				<div className="h-1"></div>
				<div ref={program} className="relative flex flex-wrap w-screen lg:max-w-3xl m-auto gap-3 scale-75 justify-center xl:scale-100">
					{programs.map((program, index) => (
						<a
							href={program.link}
							key={index}
							target="_blank"
							className={`${
								programVisible ? "scale-up" : ""
							} scale-0 relative h-24 w-24 bg-sky-950 bg-opacity-50 flex flex-col gap-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-cyan-900`}
							style={{animationDelay: `${0.025 * (index + 1)}s`}}>
							<img className="h-14 w-14 m-auto mt-3" src={program.image} alt={program.name} />
							<h4 className="text-center text-gray-400 text-sm -mt-1">{program.name}</h4>
						</a>
					))}
					<h2 className="text-white text-xl text-center h-max relative mt-5">
						I quickly grasp softwares and programming, and love a good challenge!
					</h2>
				</div>
				<div className="h-4"></div>

				<div className="flex max-w-3xl m-auto gap-10 items-center flex-col md:flex-row text-white">
					<img className="w-36" src={chatgptLogo} />
					<div className="flex-1 lg:p-0 pl-12 pr-12">
						<p className=" text-lg lg:text-2xl lg:leading-10" style={{animationDelay: "0s"}}>
							I utilize AI to optimize and streamline my tasks, with a focus on increased productivity, accuracy, and innovative solutions.{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
