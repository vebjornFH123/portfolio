export default function Education() {
	const data = [
		{
			title: "Bachelor at UiA",
			year: "(2021-2024)",
			subtitle: "Fullstack Development",
			content: `My time in the bachelor's program has provided me with diverse skills in project development, with a primary focus on programming. I have
				substantial knowledge in application development, programming, database management, along with experience in graphic design, images,
				video, audio, and 3D. This makes me a valuable asset for a variety of projects.`,
		},
		{
			title: "Social Interaction competence",
			year: "(2023)",
			subtitle: "Extra Subject",
			content: `Social Interaction competence has been beneficial in my student life and will continue to be valuable in the professional world. This subject
				has enhanced my interpersonal skills, including empathy and effective communication.`,
		},
		{
			title: "Lillehammer Institute of Music Production Industries",
			year: "(2019-2020)",
			subtitle: "Full scholarship student",
			content: `My time at LIMPI has developed skills that extend beyond music. Teamwork and entrepreneurship have become valuable assets in my current
			technology career.`,
		},
		{
			title: "General Studies",
			year: "(2014-2017)",
			subtitle: "With a specialization in IT & Natural Sciences",
			content: `My passion for programming and technology began early when I built and programmed LEGO NXT robots as a child. Later, I explored
		block-based coding through Scratch. However, it was in high school that my passion for IT subjects truly flourished.`,
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
				Education
			</h2>

			<div className="m-auto w-[90%] md:w-full max-w-[756px] border-l-2 border-white">
				{data.map((item, index) => (
					<div key={index}>
						<div className="flex">
							<div className="h-1 sm:w-1/4 w-12 bg-white"></div>
							<div className="h-5 w-5 bg-white rounded-full -mt-2"></div>
							<div className="flex lg:sm:flex-row flex-col">
								<h3 className="text-white md:text-3xl text-2xl -mt-4 pl-4 pb-10 font-semibold">{item.title}</h3>
								<h4 className="text-neutral-400 w-max text-md pl-3 md:-mt-2 -mt-8 sm:pb-0 pb-3">{item.year}</h4>
							</div>
						</div>
						<h5 className="pl-12 lg:pl-28 font-normal text-2xl text-neutral-200">{item.subtitle}</h5>
						<details>
							<summary className="text-neutral-500 pl-12 lg:pl-28 cursor-pointer hover:brightness-150 transition-all">
								<span className="text-neutral-500 mt-2">Read more</span>
							</summary>
							<p className="pl-12 lg:pl-28 text-neutral-400 text-xl sm:max-w-2xl max-w-md leading-8">{item.content}</p>
						</details>
						<div className="h-20"></div>
					</div>
				))}
			</div>
		</div>
	);
}
