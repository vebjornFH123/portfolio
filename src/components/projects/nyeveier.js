import {useInView} from "react-intersection-observer";

import estructionsMockup from "../../img/mockups/nyeveier-mockup-blur.png";

import threejsLogo from "../../img/logos/threejs.png";
import figmaLogo from "../../img/logos/figma.png";
import tailwindLogo from "../../img/logos/tailwind.png";
import reactLogo from "../../img/logos/react.png";
import nyeVeierLogo from "../../img/mockups/logo-color.png";
import mapboxLogo from "../../img/logos/Mapbox.png";
import typesScriptLogo from "../../img/logos/Typescript.png";

export default function Nyeveier() {
	const programs = [
		{link: "", name: "Rreact.js", image: reactLogo},
		{link: "", name: "TypeScript", image: typesScriptLogo},
		{link: "", name: "Three.js", image: threejsLogo},
		{link: "", name: "Tailwind", image: tailwindLogo},
		{link: "", name: "Mapbox", image: mapboxLogo},
	];

	const goToPage = () => {
		return () => {
			window.open("https://nyeveier.no"); // Redirect to the specified link
		};
	};

	const {ref: program, inView: programVisible} = useInView();
	const {cont, inView: contVisible} = useInView();

	return (
		<div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center `}>
			<div
				onClick={goToPage()}
				className=" max-w-[920px] w-[75vw] min-h-[70vh] p-10 rounded-3xl border-2  border-[#00969D] hover:brightness-110 transition-all duration-300 cursor-pointer">
				<img className=" w-auto m-auto max-h-[50px]" src={nyeVeierLogo} />

				<img className=" m-auto max-h-[30vh] object-contain sm:-mt-4 mt-0 " src={estructionsMockup} />
				<p className="text-white lg:text-xl lg:font-light font-medium text-md sm:mt-0 mt-4">
					My two classmates and I are currently engaged in the composition of our bachelor's degree thesis at Nye Veier. Our focus is on the creation
					of a modern visual system tailored to the organization's requirements. The system incorporates navigational 360-degree photos, images, maps,
					and incorporates 3D visualization elements.
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
							<h4 className="text-center text-neutral-200 font-medium text-xss md:text-sm -mt-2 ">{program.name}</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
