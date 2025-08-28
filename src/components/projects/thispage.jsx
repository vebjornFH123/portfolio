import thisPageMockup from "../../img/mockups/thispage.png";
import { useInView } from "react-intersection-observer";

import figmaLogo from "../../img/logos/figma.png";
import reactLogo from "../../img/logos/react.png";
import tailwindLogo from "../../img/logos/tailwind.png";
import photoshopLogo from "../../img/logos/photoshop.png";
import gitHubLogo from "../../img/logos/github.svg";
import eyeIcon from "../../img/logos/eye.svg";

export default function ThisPage() {
  const programs = [
    { link: "https://react.dev/", name: "React", image: reactLogo },
    { link: "https://tailwindcss.com/", name: "Tailwind", image: tailwindLogo },
    { link: "", name: "Figma", image: figmaLogo },
    { link: "https://www.adobe.com/no/products/photoshop.html", name: "Photoshop", image: photoshopLogo },
  ];

  const { ref: program, inView: programVisible } = useInView();
  const { ref: cont, inView: contVisible } = useInView();

  return (
    <div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center `}>
      <div className="m-auto max-w-[920px]  lg:min-w-[52vw] w-[75vw]  min-h-[65vh] p-8 lg:pl-28 lg:pr-28 rounded-3xl  hover:bg-neutral-800 transition-all duration-300 cursor-pointer">
        <h2 className=" text-4xl text-center pb-8 pt-2 text-white ">You are looking at it!</h2>
        <div className="h-2"></div>

        <img className=" w-auto max-h-[30vh] h-res-1 m-auto object-contain sm:-mt-4 -mt-20" src={thisPageMockup} />
        <p className="text-white lg:text-xl lg:font-light text-center md:text-left font-light text-sm leading-4 sm:mt-0 mt-4 ">
          I hope you like what you see! I've familiarized myself with React and Tailwind CSS, as these frameworks are widely used in the professional
          field.
        </p>
        <h3 className="text-neutral-500 text-center text-xl mt-5">Tools</h3>

        <div ref={program} className=" mt-2 m-auto flex gap-4 justify-center flex-wrap">
          {programs.map((program, index) => (
            <div
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              className={`${
                programVisible ? "slide-in" : ""
              } opacity-0 relative h-16 w-16 md:h-24 md:w-24 p-2 md:rounded-3xl rounded-lg  flex flex-col gap-2 justify-center transition-all duration-200 bg-neutral-700 bg-opacity-25`}>
              <img className=" md:scale-100 scale-75 object-scale-down h-12 hover:grayscale-0" src={program.image} alt={program.name} />
              <h4 className="text-center text-neutral-200 font-medium text-xss md:text-sm -mt-2 ">{program.name}</h4>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-row justify-center items-center gap-6 pt-10">
          <button className="flex flex-row gap-2 justify-center items-center text-[1rem] font-light text-center opacity-20 pointer-events-none text-white bg-black pl-8 pr-8 h-16 border-[#FF7300] border-2 rounded-xl">
            <img className="h-5 invert" src={eyeIcon} alt="" />
            View project
          </button>
          <a
            href="https://github.com/vebjornFH123/portfolio"
            target="_blank"
            className="flex flex-row gap-2 justify-center items-center text-[1rem] font-light text-center text-white bg-black pl-8 pr-8 h-16 border-[#FF7300] border-2 rounded-xl">
            <img className="h-7 invert" src={gitHubLogo} alt="" />
            Project code
          </a>
        </div>
      </div>
    </div>
  );
}
