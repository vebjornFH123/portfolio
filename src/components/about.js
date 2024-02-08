import portrait from "../img/portrait-transparent.png";
import progBg from "../img/bg/programs-bg.png";

import {useInView} from "react-intersection-observer";

export default function About() {
	const {ref: talkBubble, inView: talkBubbleVisible} = useInView();

	let screenWidth = window.innerWidth;

	window.addEventListener("resize", () => {
		screenWidth = window.innerWidth;
	});

	const handleDownload = () => {
		// Replace 'http://your-server.com/path-to-your-pdf.pdf' with the actual URL of your PDF file on the server.
		const pdfFileURL = "http://eivind.woien.com/CV/CV.pdf";

		// Open the PDF file in a new tab or window for download
		window.open(pdfFileURL, "_blank");
	};

	return (
		<div>
			<div className=" h-max w-screen ">
				<div className=" flex flex-col-reverse lg:flex-row lg:h-screen justify-center w-screen ">
					<div className=" md:p-0 p-12 h-1/2 lg:h-auto lg:w-1/2 w-screen md:pt-12 bg-neutral-800 bg-opacity-50 relative overflow-visible flex flex-col items-center justify-center">
						<h2
							style={{WebkitTextStrokeColor: "white", WebkitTextStrokeWidth: "2px", WebkitTextFillColor: "rgba(0,0,0,0)"}}
							className=" hidden lg:block uppercase text-8xl font-extrabold absolute right-0 w-max z-10 top-28 ">
							Abou
						</h2>
						<div
							ref={talkBubble}
							className={` ${talkBubbleVisible && window.innerWidth > 1024 ? "slide-down" : ""} md:w-1/2 w-full lg:opacity-0 opacity-100 scale-110`}>
							<p className=" h-max lg:min-w-fit bg-sky-200 p-10 rounded-3xl font-normal text-xl relative block leading-6 text-sky-950">
								Hey! 😁
								<br />
								<br />
								I'm a full-stack developer with a passion for creation.
								<br />
								<br />
								I'm studying at{" "}
								<a className=" font-medium text-sky-600 underline" href="https://www.uia.no/studier/multimedieteknologi-og-design">
									UiA
								</a>{" "}
								and looking for a job where the team is as motivated and dedicated as I am! 🔥
								<br />
								<br /> Maybe you are my next employer?
								<br />
								{/*
							Du kan laste ned min CV som PDF her:
							<br />
							<br />
							
							<button
								onClick={handleDownload}
								className=" block m-auto p-5 bg-white text-sky-950 rounded-xl border-4 border-sky-100 hover:brightness-110 transition-all duration-200">
								📋 CV
							</button>
							*/}
							</p>
							<div className=" arrow-down ml-[50%] mr-10 lg:mb-0 md:mb-10 mb-0"></div>
						</div>
					</div>
					<div className=" flex flex-col justify-between h-third-screen w-screen lg:w-1/2 lg:h-auto relative bg-neutral-800 overflow-hidden">
						<h2 className={` hidden lg:block uppercase text-8xl h-min mt-0 font-extrabold absolute w-max z-10 top-28`} style={{color: "skyblue"}}>
							t me
						</h2>
						<h2 className={` lg:hidden block mt-12 uppercase text-6xl font-extrabold text-center z-10`} style={{color: "skyblue"}}>
							About Me
						</h2>
						<img src={progBg} className=" object-cover w-full h-full opacity-10 absolute" />
						<img src={portrait} className="  h-3/4  absolute bottom-0 left-1/2 -translate-x-1/2 object-scale-down -mb-5" />
					</div>
				</div>
			</div>
		</div>
	);
}
