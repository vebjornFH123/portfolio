import thisPageMockup from "../../img/mockups/thispage.png";
import {useInView} from "react-intersection-observer";

import threejsLogo from "../../img/logos/threejs.png";
import reactLogo from "../../img/logos/react.png";
import tailwindLogo from "../../img/logos/tailwind.png";
import blenderLogo from "../../img/logos/blender.png";
import photoshopLogo from "../../img/logos/photoshop.png";

export default function ThisPage() {
	const programs = [
		{link: "https://react.dev/", name: "React", image: reactLogo},
		{link: "https://tailwindcss.com/", name: "Tailwind", image: tailwindLogo},
		{link: "", name: "Three.js", image: threejsLogo},
		{link: "", name: "Blender", image: blenderLogo},
		{link: "https://www.adobe.com/no/products/photoshop.html", name: "Photoshop", image: photoshopLogo},
	];

	const goToPage = () => {
		return () => {
			window.location.href = "https://eivind.woien.com"; // Redirect to the specified link
		};
	};

	const {ref: program, inView: programVisible} = useInView();
	const {ref: cont, inView: contVisible} = useInView();

	return (
		<div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center `}>
			<div
				onClick={goToPage()}
				className="m-auto max-w-[920px] w-[75vw] min-h-[70vh] p-10 lg:pl-28 lg:pr-28 rounded-3xl border-2 border-sky-600 hover:brightness-110 transition-all duration-300 cursor-pointer">
				<h2 className=" text-4xl text-center pb-8 pt-2 text-white ">You are looking at it!</h2>
				<img className=" w-auto max-h-[30vh] h-res-1 m-auto object-contain sm:-mt-4 -mt-20" src={thisPageMockup} />
				<p className="text-white text-xl font-medium pt-8 text-center lg:text-xl lg:font-light sm:mt-0 -mt-16">
					I hope you like what you see! I've familiarized myself with React and Tailwind CSS, as these frameworks are widely used in the professional
					field.
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
