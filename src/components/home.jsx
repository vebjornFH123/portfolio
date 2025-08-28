import React from "react";
import { useInView } from "react-intersection-observer";

import linkedinLogo from "../img/logos/linkedin.png";
import githubLogo from "../img/logos/github.svg";

import meImg from "../img/vebjorn-Web.jpeg";

import { Link, animateScroll as scroll } from "react-scroll";

import pdf from "../img/CV.pdf";

export default function Home() {
  const { ref: program, inView: programVisible } = useInView();
  const { ref: faceRef, inView: faceVisible } = useInView();

  return (
    <div className="relative m-auto w-screen h-screen text-white bg-neutral-900 overflow-hidden flex justify-center">
      <div
        className="hidden md:block top-52 -left-40 absolute h-2/3 w-2/3 opacity-10 z-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,165,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
          filter: `hue-rotate(30deg) brightness(0.8)`,
        }}></div>
      <div className=" lg:scale-100 scale-75 flex flex-col m-auto md:h-screen md:flex-row">
        <div className=" sm:scale-100 scale-90 flex flex-col lg:m-auto items-center">
          <div className=" flex flex-col gap-6 justify-center items-center">
            <img className="h-28 w-28 rounded-full object-cover	border-[3px] border-orange-400	" src={meImg} alt="" />
            <h2 className=" text-white text-4xl  lg:text-7xl font-extrabold text-center">
              Experienced frontend developer <br /> specializing in <span className="gradient-text-orange">ReactJS</span> ,{" "}
              <span className="gradient-text-svelte-red">Svelte</span>
            </h2>
            <p className="text-3xl font-sm text-center">
              I have a strong foundation in HTML CSS and JavaScript, and i am skilled in creating interactive and <br /> visually appealing websites
            </p>
            <div className="flex flex-row gap-6">
              <Link
                key={"contact"}
                to={"contact"}
                smooth={true}
                duration={1000}
                className="cursor-pointer text-2xl font-light text-center bg-black pl-8 pr-8 h-16 border-orange-400 border-2 rounded-xl flex justify-center items-center">
                Contact me
              </Link>

              <a
                href={pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white font-light text-center bg-black pl-8 pr-8 h-16 border-[red] border-2 rounded-xl flex justify-center items-center no-underline">
                Download CV
              </a>
              <a
                href="https://no.linkedin.com/in/vebj%C3%B8rn-haugholt"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16 flex  justify-center items-center bg-white rounded-xl">
                <img className="h-7 invert" src={linkedinLogo} alt="" />
              </a>
              <a
                href="https://github.com/vebjornFH123"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 w-16 flex justify-center items-center bg-white rounded-xl">
                <img className="h-7" src={githubLogo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
