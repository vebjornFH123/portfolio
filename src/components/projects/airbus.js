import {useInView} from "react-intersection-observer";

import airplaneImg from "../../img/mockups/vr.png";

import blenderLogo from "../../img/logos/blender.png";
import unityLogo from "../../img/logos/unity-black.png";
import csharpLogo from "../../img/logos/csharp.png";
import photoshopLogo from "../../img/logos/photoshop.png";

export default function Airbus() {
	const programs = [
		{link: "", name: "Unity", image: unityLogo},
		{link: "", name: "C#", image: csharpLogo},
		{link: "", name: "Blender", image: blenderLogo},
		{link: "https://www.adobe.com/no/products/photoshop.html", name: "Photoshop", image: photoshopLogo},
	];

	const goToPage = () => {
		return () => {
			window.open("https://www.atsportal.no/index.html"); // Redirect to the specified link
		};
	};

	const {ref: program, inView: programVisible} = useInView();
	const {ref: cont, inView: contVisible} = useInView();

	return (
		<div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center`}>
			<div
				onClick={goToPage()}
				className="m-auto max-w-[920px] w-[75vw] min-h-[70vh] p-10 rounded-3xl  border-2  border-sky-400 hover:brightness-110 transition-all duration-300 cursor-pointer">
				<h2 className="text-white text-center text-4xl">Airbus VR Trening</h2>
				<img className=" w-auto max-h-[30vh] h-res-1 m-auto object-contain sm:-mt-4 -mt-10" src={airplaneImg} />
				<p className="text-white lg:text-xl lg:font-light font-medium text-md sm:mt-0 -mt-10">
					As a part time consultant at Applica Training Systems, I contributed to developing a VR app for Airbus flight procedure training. The app
					offers pilots realistic, hands-on training in an interactive VR environment. Utilizing finger tracking, pilots can manipulate cockpit levers
					and buttons effortlessly with just their hands.
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
