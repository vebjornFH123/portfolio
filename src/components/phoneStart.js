import phone3D from "../img/3d-phone.png";

export default function PhoneStart() {
	return (
		<div className=" md:hidden flex flex-col items-center justify-evenly w-screen h-screen p-10">
			<div className=" w-screen -mt-10">
				<h2 className=" uppercase text-center font-extrabold text-white text-6xl ">Fullstack</h2>
				<h2
					style={{
						WebkitTextStrokeColor: "skyblue",
						WebkitTextStrokeWidth: "2px",
						WebkitTextFillColor: "rgba(0, 0, 0, 0)",
					}}
					className=" uppercase text-center font-extrabold text-6xl ">
					Utvikler
				</h2>
			</div>
			<img className=" object-contain" src={phone3D} />
			<div>
				<h3 className=" text-center text-white text-lg max-w-md">
					Dette er mitt setup i 3D. Her skapes koder, ideer og prosjekter. Velkommen til mitt kreative rom!{" "}
				</h3>
				<h4 className=" text-center text-neutral-500 pt-3">Se nettsiden på pc for stilig interaktiv 3D!</h4>
			</div>
		</div>
	);
}
