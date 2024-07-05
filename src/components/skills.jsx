import React from "react";
import { useInView } from "react-intersection-observer";

import reactLogo from "../img/logos/react.png";
import jsLogo from "../img/logos/js.png";
import nodeLogo from "../img/logos/nodejs.png";
import tailwindLogo from "../img/logos/tailwind.png";
import cssLogo from "../img/logos/css.png";
import html5Logo from "../img/logos/html5.png";
import gitLogo from "../img/logos/git.png";
import svelteLogo from "../img/logos/SvelteLogo.png";
import skillsSeparators from "../img/pageSeparators/skills.svg";

import Knowledge from "./knowledge";

export default function Skills() {
  const skills = [
    { link: "https://react.dev/", name: "React", image: reactLogo },
    { link: "https://svelte.dev/", name: "Svelte", image: svelteLogo },
    { link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", name: "Javascript", image: jsLogo },
    { link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", name: "HTML5", image: html5Logo },
    { link: "https://developer.mozilla.org/en-US/docs/Web/CSS", name: "CSS3", image: cssLogo },
    { link: "https://tailwindcss.com/", name: "Tailwind", image: tailwindLogo },
    { link: "https://nodejs.org/en", name: "Node.js", image: nodeLogo },
    { link: "https://git-scm.com/", name: "Git", image: gitLogo },
  ];

  const { ref: program, inView: programVisible } = useInView();
  const { ref: ballRef, inView: ballVisible } = useInView();

  return (
    <div className=" relative w-screen text-white bg-neutral-900 ">
      <div
        className="hidden md:block top-52 left-0 absolute h-2/3 w-2/3 opacity-10 z-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
          filter: `hue-rotate(90deg) brightness(0.8)`,
        }}></div>
      <div className="flex flex-col m-auto md:h-screen md:flex-row">
        <div className="flex flex-col lg:m-auto items-center">
          <div className="flex flex-col gap-4 ">
            <img className="h-48 lg:h-60" src={skillsSeparators} alt="" />
            <h2 className=" text-4xl lg:text-6xl gradient-text-orange"> My Skills</h2>
          </div>
          <div className="h-8"></div>
          <p className="  lg:text-2xl italic max-w-md text-center">"Cooperative, hardworking, innovative, creative, and joyful."</p>
          <div className="h-16"></div>

          <div className=" m-auto flex items-center gap-2 overflow-x-hidden">
            <div className=" flex flex-col items-center gap-2">
              <div className="h-6 lg:h-10 w-6 lg:w-10 border-2 rounded-full "></div>
              <span>Backend</span>
            </div>

            <div className="h-0.5 lg:w-80 w-56 bg-white -mt-7 pointer-events-none">
              <div
                style={{ background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)" }}
                ref={ballRef}
                className={`${ballVisible ? "basic-slide" : ""} absolute h-16 w-16 rounded-full ml-32 lg:ml-48 -mt-8 `}></div>
              <div className="absolute h-3 w-0.5 bg-white translate-x-1/2 left-1/2 -mt-1 -z-10"></div>
            </div>

            <div className=" flex flex-col items-center gap-2">
              <div className="h-6 lg:h-10 w-6 lg:w-10 border-2 rounded-full "></div>
              <span>Frontend</span>
            </div>
          </div>
          <div
            style={{
              height: "1px",
            }}
            className=" w-full bg-neutral-500 mt-8"></div>
          <div ref={program} className={`flex gap-5 m-auto mt-8 flex-wrap justify-center`}>
            {skills.map((skill, index) => (
              <a
                href={skill.link}
                target="_blank"
                key={index}
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
                className={`${
                  programVisible ? "slide-in" : ""
                } opacity-0 relative h-20 lg:h-24 w-20 lg:w-24  p-2 rounded-3xl flex flex-col gap-2 justify-center bg-[#926219] bg-opacity-40 transition-all duration-200`}>
                <img className=" object-scale-down h-6 lg:h-12 grayscale" src={skill.image} alt={skill.name} />
                <h4 className="text-center text-white font-medium text-xs lg:text-sm ">{skill.name}</h4>
              </a>
            ))}
          </div>
          <div
            style={{
              height: "1px",
            }}
            className=" w-full bg-neutral-500 mt-8"></div>
          <Knowledge />
        </div>
      </div>
    </div>
  );
}
