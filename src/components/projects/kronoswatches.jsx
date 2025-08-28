import { useInView } from "react-intersection-observer";

import mockUp from "../../img/mockups/kronos.svg";

import tailwindLogo from "../../img/logos/tailwind.png";
import svelteLogo from "../../img/logos/SvelteLogo.png";
import logo from "../../img/logos/kronos.svg";
import figmaLogo from "../../img/logos/figma.png";
import gitHubLogo from "../../img/logos/github.svg";
import eyeIcon from "../../img/logos/eye.svg";
import blenderLogo from "../../img/logos/blender.png";
import threlteLogo from "../../img/logos/threlte.png";
import googleMapsLogo from "../../img/logos/googleMaps.webp";

export default function Kronoswatches() {
  const programs = [
    { link: "", name: "Svelte-kit", image: svelteLogo },
    { link: "", name: "Tailwind", image: tailwindLogo },
    { link: "", name: "Threlte", image: threlteLogo },
    { link: "", name: "Google Maps", image: googleMapsLogo },
    { link: "", name: "Figma", image: figmaLogo },
    { link: "", name: "Blender", image: blenderLogo },
  ];

  const goToPage = () => {
    return () => {
      window.open("https://scintillating-raindrop-e8e45d.netlify.app/"); // Redirect to the specified link
    };
  };

  const { ref: program, inView: programVisible } = useInView();
  const { cont, inView: contVisible } = useInView();

  return (
    <div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center `}>
      <div
        onClick={goToPage()}
        className=" max-w-[920px] w-[75vw]  lg:min-w-[52vw]  min-h-[65vh] p-8 rounded-3xl transition-all duration-300 cursor-pointer hover:bg-neutral-800">
        <span className="flex flex-row justify-center items-center gap-2 text-white text-3xl pb-2 ">
          <img className="max-h-[50px]" src={logo} />
          Kronøs
        </span>
        <div className="h-2"></div>

        <img className=" m-auto max-h-[28vh] object-contain sm:-mt-4 mt-0 " src={mockUp} />
        <p className="text-white lg:text-xl lg:font-light text-center md:text-left font-light text-sm leading-4 sm:mt-0 mt-4 ">
          This project involved designing and modeling a unique watch, as well as designing and implementing a website to showcase the product, by
          incorporating innovative and user-friendly solutions.
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
          <button className="flex flex-row gap-2 justify-center items-center text-[1rem] font-light text-center  text-white bg-black pl-8 pr-8 h-16 border-[#015930] border-2 rounded-xl">
            <img className="h-5 invert" src={eyeIcon} alt="" />
            View project
          </button>
          <a
            href="https://github.com/vebjornFH123/Kronoswatches"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row gap-2 justify-center items-center text-[1rem] font-light text-center text-white bg-black pl-8 pr-8 h-16 border-[#015930] border-2 rounded-xl">
            <img className="h-7 invert" src={gitHubLogo} alt="" />
            Project code
          </a>
        </div>
      </div>
    </div>
  );
}
