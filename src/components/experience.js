import React from "react";

export default function Experience() {
	const data = [
		{
			title: "Sony Music Norway",
			year: "(2016-2023)",
			subtitle: "Producer and Artist",
			content:
				"Signed Producer & Artist. My experience in the music industry has broadened my horizons beyond music. Through international networking and collaboration, I've developed skills in teamwork and problem-solving. The music industry is challenging, and I've learned to handle pressure and deadlines without sacrificing quality. This has made me more versatile and equipped for various professions and work environments. Some of my achievements in the Music Industry is: Over 45 million streams across platforms, 7 years with a record contract with Norway's largest record label. Several national radio listings, music production for Scandinavian films, and international commercials. ",
		},
		{
			title: "First Year Study Environmet",
			year: "(2023)",
			subtitle: "Student Mentor",
			content:
				"Through participation in the FYSE mentorship program, I have developed valuable insight in mentorship and learning environment enhancement. This has strengthened my collaboration and communication skills, as well as the ability to create supportive and productive surroundings.",
		},
	];

	return (
		<div className=" w-screen">
			<h2
				style={{
					WebkitTextStrokeColor: "skyblue",
					WebkitTextStrokeWidth: "2px",
					WebkitTextFillColor: "rgba(0,0,0,0)",
				}}
				className=" uppercase text-5xl lg:text-8xl font-extrabold text-center pt-10 lg:pb-16 pb-28">
				Other Experience
			</h2>

			<div className="m-auto w-[90%] md:w-full max-w-[756px] border-l-2 border-white">
				{data.map((item, index) => (
					<div key={index}>
						<div className="flex">
							<div className="h-1 sm:w-1/4 w-12 bg-white"></div>
							<div className="h-5 w-5 bg-white rounded-full -mt-2"></div>
							<div className="flex lg:sm:flex-row flex-col">
								<h3 className="text-white md:text-3xl text-2xl -mt-4 pl-4 pb-10 font-semibold">{item.title}</h3>
								<h4 className="text-neutral-400 text-md pl-3 md:-mt-2 -mt-8 sm:pb-0 pb-3">{item.year}</h4>
							</div>
						</div>
						<h5 className="pl-12 lg:pl-28 font-normal text-2xl text-neutral-200">{item.subtitle}</h5>
						<details>
							<summary className="text-neutral-500 pl-12 lg:pl-28 cursor-pointer hover:brightness-150 transition-all">
								<span className="text-neutral-500 mt-2">Read more</span>
							</summary>
							<p className="pl-12 lg:pl-28 text-neutral-400 text-xl sm:max-w-2xl max-w-md leading-8">{item.content}</p>
						</details>
						<div className="h-24"></div>
					</div>
				))}
			</div>
		</div>
	);
}
