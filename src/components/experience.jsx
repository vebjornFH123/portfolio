import React from "react";

import experienceSeparator from "../img/pageSeparators/experience.svg";

export default function Experience() {
  const data = [
    {
      title: "Developer at Nye Veier",
      year: "(2024 - Present)",
      subtitle: "Full Stack Developer (Part-time)",
      content:
        "What started as a summer job has transitioned into an ongoing part-time role at Nye Veier. In my position, I have worked on a wide range of tasks — from creating automated views with Playwright, to data retrieval, and developing new IT solutions.",
    },
    {
      title: "Summer Job at Nye Veier",
      year: "(2024 - 2024)",
      subtitle: "Full Stack Developer",
      content:
        "As a developer at Nye Veier, I have been tasked with implementing our bachelor's thesis into their systems. In addition to this, I will also contribute to the development of other projects they may have.",
    },
    {
      title: "Notodden Kommune",
      year: "(2019 - 2023)",
      subtitle: "Personal Assistant",
      content:
        "As a personal assistant in Notodden Municipality, I was responsible for providing care and support to an individual with a disability.",
    },
    {
      title: "Royal Norwegian Air Force",
      year: "(2018 - 2019)",
      subtitle: "Terminal Soldier",
      content: `During my service as a Terminal Soldier in the Royal Norwegian Air Force at Kjevik and Gardermoen, I gained valuable experience in teamwork and handling stressful and challenging tasks under pressured conditions.`,
    },
  ];

  return (
    <div className="w-screen relative">
      <div className="flex flex-col gap-4 justify-center items-center ">
        <img className="h-48 lg:h-60" src={experienceSeparator} alt="" />
        <h2 className="text-4xl lg:text-6xl gradient-text-yellow">Experience</h2>
      </div>
      <ul className="yellow-gradient">
        {data.map((item, index) => (
          <li className="mt-16">
            <div className="title yellow-gradient">
              <h3 className="text-white md:text-lg text-xl font-semibold">{item.title}</h3>
              <h4 className="text-neutral-400 text-sm ml-4 md:ml-8 mt-2 md:mt-0">{item.year}</h4>
            </div>
            <h5 className="font-normal text-lg text-neutral-200">{item.subtitle}</h5>
            <details>
              <summary className="text-neutral-500 cursor-pointer hover:brightness-150 transition-all">
                <span className="text-neutral-500">Read more</span>
              </summary>
              <p className="text-neutral-400 text-xl sm:max-w-[250px] max-w-md leading-8">{item.content}</p>
            </details>
          </li>
        ))}
      </ul>
    </div>
  );
}
