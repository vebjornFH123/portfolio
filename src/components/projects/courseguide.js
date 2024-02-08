import {useInView} from "react-intersection-observer";

import courseguideMockup from "../../img/mockups/courseguide-mockup.png";

import threejsLogo from "../../img/logos/threejs.png";
import html5Logo from "../../img/logos/html5.png";
import blenderLogo from "../../img/logos/blender.png";
import cssLogo from "../../img/logos/css.png";
import jsLogo from "../../img/logos/js.png";

export default function Courseguide() {
	const programs = [
		{link: "", name: "Javascript", image: jsLogo},
		{link: "", name: "Three.js", image: threejsLogo},
		{link: "", name: "HTML5", image: html5Logo},
		{link: "", name: "CSS", image: cssLogo},
		{link: "", name: "Blender", image: blenderLogo},
	];

	const goToPage = () => {
		return () => {
			window.location.href = "https://eivind.woien.com/golf"; // Redirect to the specified link
		};
	};

	const {ref: program, inView: programVisible} = useInView();
	const {ref: cont, inView: contVisible} = useInView();

	return (
		<div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center`}>
			<div
				onClick={goToPage()}
				className="m-auto max-w-[920px] w-[75vw] min-h-[70vh] p-10 border-2  border-[#67d466]  rounded-3xl bg-opacity-25 hover:brightness-110 transition-all duration-300 cursor-pointer">
				<h2 className="text-white text-center text-4xl">3D Golf Course Guide</h2>
				<img className=" w-auto max-h-[30vh] h-res-1 m-auto object-contain sm:-mt-4 -mt-10" src={courseguideMockup} />
				<p className="text-white lg:text-xl lg:font-light font-medium text-md sm:mt-0 -mt-10">
					Strategize your golf with my low-poly 3D course demo. The unique style offers a fun, relaxed experience for all skill levels, aiding in game
					improvement. Discover golf in a new way through our stylized 3D world.
				</p>
				<h3 className="text-neutral-500 text-center text-xl mt-5">Tools</h3>

				<div ref={program} className=" mt-2 m-auto flex gap-4 justify-center flex-wrap">
					{programs.map((program, index) => (
						<div
							style={{animationDelay: `${0.05 * (index + 1)}s`}}
							className={`${
								programVisible ? "slide-in" : ""
							} opacity-0 relative h-16 w-16 md:h-24 md:w-24 p-2 md:rounded-3xl rounded-lg  flex flex-col gap-2 justify-center transition-all duration-200 bg-neutral-700 bg-opacity-25`}>
							<img className=" md:scale-100 scale-75 object-scale-down h-12 hover:grayscale-0" src={program.image} alt={program.name} />
							<h4 className="text-center text-white font-medium text-xss md:text-sm -mt-2 ">{program.name}</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
