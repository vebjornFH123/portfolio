import educationSeparator from "../img/pageSeparators/education.svg";

export default function Education() {
  const data = [
    {
      title: "Bachelor at UiA",
      year: "(2021 - 2024)",
      subtitle: "Multimedia technology and design",
      content: `My time in the bachelor's program has provided me with diverse skills in project development, with a primary focus on programming. I have
				substantial knowledge in application development, programming, database management, along with experience in design,
				video, audio, and 3D. This makes me a valuable asset for a variety of projects.`,
    },
    {
      title: "Year course at HiØ",
      year: "(2020 - 2021)",
      subtitle: "Business economics",
      content: `Social Interaction competence has been beneficial in my student life and will continue to be valuable in the professional world. This subject
				has enhanced my interpersonal skills, including empathy and effective communication.`,
    },
    {
      title: "General Studies",
      year: "(2015 - 2018)",
      subtitle: "With a specialization in IT",
      content:
        "During my general studies, I focused on gaining foundational knowledge in web development, specifically in HTML, CSS, and JavaScript. I began with HTML, learning how to structure web pages using various tags and elements. This allowed me to create the basic framework of a website.",
    },
  ];

  return (
    <div className="w-screen pt-40">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <img className=" h-48 lg:h-60" src={educationSeparator} alt="" />
        <h2 className="text-4xl lg:text-6xl gradient-text-red">Education</h2>
      </div>
      <ul className="red-gradient">
        {data.map((item, index) => (
          <li className="mt-16">
            <div className="title red-gradient">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <h4 className="text-neutral-400 text-sm ml-4 md:ml-8 mt-2 md:mt-0">{item.year}</h4>
            </div>
            <h5 className="font-normal text-lg text-neutral-200">{item.subtitle}</h5>
            <details>
              <summary className="text-neutral-500 cursor-pointer hover:brightness-150 transition-all">
                <span className="text-neutral-500">Read more</span>
              </summary>
              <p className="text-neutral-400 text-xl sm:max-w-[300px] max-w-md leading-8">{item.content}</p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
