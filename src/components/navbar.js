import React from "react";

import {Link, animateScroll as scroll} from "react-scroll";

export default function Menubar() {
	// Define an array of link names
	const links = ["About", "Skills", "Work", "Experience", "Education", "Contact"];

	return (
		<div className="left-1/2 -translate-x-1/2 bottom-0 sm:bottom-6 z-50 w-screen sm:w-max h-20 flex flex-row fixed first-letter:z-50 text-white items-center bg-neutral-800 bg-opacity-50 sm:rounded-2xl backdrop-blur-md sm:tracking-wider overflow-x-scroll">
			<Link to="home" smooth={true} duration={1000}>
				<h2
					className=" hidden sm:block text-2xl w-max cursor-pointer text-white decoration-2 p-4 pr-6 font-light border-neutral-500"
					style={{borderRightWidth: "1px"}}>
					Eivind Wøien
				</h2>
			</Link>
			<div className="flex sm:pl-4 sm:pr-4 justify-center items-center w-full">
				{links.map((link, index) => (
					<Link
						key={index}
						to={link.toLowerCase()}
						smooth={true}
						duration={1000}
						className=" text-sm sm:text-lg text-neutral-300 decoration-2 p-[6px] sm:p-4 cursor-pointer font-light hover:text-white hover:font-normal transition-all duration-300 flex items-center justify-end">
						{link}
					</Link>
				))}
			</div>
		</div>
	);
}
