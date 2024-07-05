import { useInView } from "react-intersection-observer";

import mockUp from "../../img/mockups/sjomannskirken-mockup.png";

import dndKitLogo from "../../img/logos/dnd-kit.png";
import tailwindLogo from "../../img/logos/tailwind.png";
import reactLogo from "../../img/logos/react.png";
import logo from "../../img/mockups/sjomannskirken_full.png";

import gitHubLogo from "../../img/logos/github.svg";
import eyeIcon from "../../img/logos/eye.svg";

export default function Kirke() {
  const programs = [
    { link: "", name: "Rreact.js", image: reactLogo },
    { link: "", name: "dnd-Kit", image: dndKitLogo },
    { link: "", name: "Tailwind", image: tailwindLogo },
  ];

  const goToPage = () => {
    return () => {
      window.open("https://www.sjomannskirken.no/"); // Redirect to the specified link
    };
  };

  const { ref: program, inView: programVisible } = useInView();
  const { cont, inView: contVisible } = useInView();

  return (
    <div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center `}>
      <div
        onClick={goToPage()}
        className=" max-w-[920px] w-[75vw]  lg:min-w-[52vw]  min-h-[65vh] p-8 rounded-3xl  transition-all duration-300 cursor-pointer hover:bg-neutral-800">
        <img className=" w-auto m-auto max-h-[50px] pb-2" src={logo} />

        <img className=" m-auto max-h-[30vh] object-contain sm:-mt-4 mt-0 " src={mockUp} />
        <p className="text-white lg:text-xl lg:font-light text-center md:text-left font-light text-sm leading-4 sm:mt-0 mt-4 ">
          My classmate and I undertook a paid project were we developed two simple games to be part of a teaching exercise. With a tight deadline from
          the client, we delivered beyond expectations within a short timeframe.
        </p>
        <h3 className="text-neutral-500 text-center text-xl mt-5">Tools</h3>

        <div ref={program} className=" mt-2 m-auto flex gap-4 justify-center flex-wrap">
          {programs.map((program, index) => (
            <div
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              className={`${
                programVisible ? "slide-in" : ""
              } opacity-0 relative h-14 w-14 md:h-24 md:w-24 p-2 md:rounded-3xl rounded-lg  flex flex-col gap-2 justify-center transition-all duration-200 bg-neutral-700 bg-opacity-25`}>
              <img className=" object-scale-down h-6 sm:h-12 hover:grayscale-0" src={program.image} alt={program.name} />
              <h4 className="text-center text-neutral-200 font-medium text-xss md:text-sm -mt-2 ">{program.name}</h4>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-6 pt-10">
          <a
            href="https://nettkonfirmant-game-project.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 justify-center items-center text-[1rem] font-light text-center  text-white bg-black pl-8 pr-8 h-16 border-[#f15c55] border-2 rounded-xl">
            <img className="h-5 invert" src={eyeIcon} alt="" />
            View project
          </a>
          <a
            href="https://github.com/vebjornFH123/nettkonfirmant_game_project"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 justify-center items-center text-[1rem] font-light text-center text-white bg-black pl-8 pr-8 h-16 border-[#f15c55] border-2 rounded-xl">
            <img className="h-7 invert" src={gitHubLogo} alt="" />
            Project code
          </a>
        </div>
      </div>
    </div>
  );
}
