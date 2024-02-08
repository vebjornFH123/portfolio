import React from "react";
import gitHubLogo from "../img/logos/github.png";
import linkedInLogo from "../img/logos/linkedin.png";
import cvLogo from "../img/logos/cv.png";

const linksData = [
	{url: "https://github.com/EivindHacker", img: gitHubLogo},
	{url: "https://www.linkedin.com/in/eivind-w%C3%B8ien-8bb22a151/", img: linkedInLogo},
	{url: "https://www.dropbox.com/scl/fi/c9h2iqutw67saxk9yw3hx/CV-Eivind-W-ien-2024-v7.pdf?rlkey=kqd110hpwx8k2b2zvhbl2bzn0&dl=0", img: cvLogo},
];

export default function Links() {
	return (
		<div className=" fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 sm:gap-4 p-3 sm:p-4 bg-neutral-400 bg-opacity-10 rounded-l-2xl backdrop-blur-lg">
			{linksData.map((link, index) => (
				<a key={index} href={link.url} target="_blank" className="hover:scale-105 brightness-[0.9] hover:brightness-100">
					<img className=" h-4 sm:h-8 " style={{filter: link.style}} src={link.img} alt={`Logo ${index}`} />
				</a>
			))}
		</div>
	);
}
