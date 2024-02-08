import React from "react";

export default function Contact() {
	return (
		<div className=" h-quarter-screen lg:h-screen flex justify-center items-center relative">
			<div
				className="hidden md:block top-52 right-0 absolute h-2/3 w-2/3 opacity-10 z-50 pointer-events-none"
				style={{
					background: "radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
					filter: `hue-rotate(30deg) brightness(0.8)`,
				}}></div>
			<div className=" lg:scale-100 scale-75 max-w-2xl  pt-10 lg:mt-0 -mt-44 ml-auto mr-auto text-neutral-300 text-xl text-center">
				<h2 className=" text-white text-4xl text-center pb-7">Did you really get this far?</h2>
				<p>
					Feel free to contact me anytime. I'm always ready for a good conversation about potential collaboration opportunities. Thank you for taking
					the time to consider my work.
					<br />
					<br />
				</p>
				<p className=" w-max m-auto">
					Email: woieneivind@gmail.com
					<br />
					Tlf: 45 88 88 24
				</p>
			</div>
		</div>
	);
}
