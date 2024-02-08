import {useInView} from "react-intersection-observer";

import sskMockup from "../../img/mockups/songstarterkits-mockup.png";
import sskLogo from "../../img/mockups/ssk-logo.png";

import howlerLogo from "../../img/logos/howlerjs.png";
import html5Logo from "../../img/logos/html5.png";
import nodeLogo from "../../img/logos/nodejs.png";
import cssLogo from "../../img/logos/css.png";
import jsLogo from "../../img/logos/js.png";

export default function Ssk() {
	const goToPage = () => {
		return () => {
			window.location.href = "https://songstarterkits.com"; // Redirect to the specified link
		};
	};
	const programs = [
		{link: "", name: "Javascript", image: jsLogo},
		{link: "", name: "Node.js", image: nodeLogo},
		{link: "", name: "Howler.js", image: howlerLogo},
		{link: "", name: "HTML5", image: html5Logo},
		{link: "", name: "CSS", image: cssLogo},
	];

	const {ref: program, inView: programVisible} = useInView();
	const {ref: cont, inView: contVisible} = useInView();

	return (
		<div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center `}>
			<div
				onClick={goToPage()}
				className=" max-w-[920px] w-[75vw] min-h-[70vh] m-auto p-10 rounded-3xl border-2 border-orange-400 hover:brightness-110 transition-all duration-300 cursor-pointer">
				<img className=" w-auto h-res-2 m-auto object-contain" src={sskLogo} />

				<img className=" max-h-[28vh] m-auto object-contain sm:-mt-4 -mt-0" src={sskMockup} />

				<p className="text-white lg:text-xl lg:font-light font-medium text-md sm:mt-0 mt-4 ">
					Songstarterkits empowers you to effortlessly create unique music for your project. Our packs cater to songwriters, videographers, and those
					in film, TV, or games. The Stem Selector on our website lets you preview combinations to find the perfect fit. This private project is
					solely driven by me, handling everything from conception to development and design.
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
