import { useInView } from "react-intersection-observer";

import estructionsMockup from "../../img/mockups/nyeveier-mockup-blur.png";

import threejsLogo from "../../img/logos/threejs.png";
import figmaLogo from "../../img/logos/figma.png";
import tailwindLogo from "../../img/logos/tailwind.png";
import reactLogo from "../../img/logos/react.png";
import nyeVeierLogo from "../../img/mockups/logo-color.png";
import mapboxLogo from "../../img/logos/Mapbox.png";
import gitHubLogo from "../../img/logos/github.svg";
import eyeIcon from "../../img/logos/eye.svg";

export default function Nyeveier() {
  const programs = [
    { link: "", name: "Rreact.js", image: reactLogo },
    { link: "", name: "Three.js", image: threejsLogo },
    { link: "", name: "Tailwind", image: tailwindLogo },
    { link: "", name: "Mapbox", image: mapboxLogo },
  ];

  const goToPage = () => {
    return () => {
      window.open("https://nyeveier.no"); // Redirect to the specified link
    };
  };

  const { ref: program, inView: programVisible } = useInView();
  const { cont, inView: contVisible } = useInView();

  return (
    <div ref={cont} className={` h-auto pt-10 pb-12 flex flex-col items-center `}>
      <div
        onClick={goToPage()}
        className=" max-w-[920px] cursor-default lg:min-w-[52vw] w-[75vw] min-h-[65vh] p-8 rounded-3xl  transition-all duration-300 cursor-pointer hover:bg-neutral-800">
        <img className=" w-auto m-auto max-h-[50px] pb-2" src={nyeVeierLogo} />

        <img className=" m-auto max-h-[30vh] object-contain pt-2 sm:-mt-4 mt-0" src={estructionsMockup} />
        <div className="flex justify-center items-center w-full">
          <p className="text-white lg:text-xl lg:font-light md:text-left font-light text-sm leading-4 sm:mt-0 mt-4">
            My two classmates and I are currently engaged in creating our bachelor's degree thesis at Nye Veier. Our focus is on the creation of a
            modern visual system tailored to the organization's requirements. The system incorporates navigational 360-degree photos, images, maps,
            and incorporates 3D visualization elements.
          </p>
        </div>

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
          <button className="flex flex-row gap-2 justify-center items-center text-[1rem] font-light text-center opacity-20 pointer-events-none text-white bg-black pl-8 pr-8 h-16 border-[#00969D] border-2 rounded-xl">
            <img className="h-5 invert" src={eyeIcon} alt="" />
            View project
          </button>
          <button className="flex flex-row gap-2 justify-center items-center text-[1rem]  font-light text-center opacity-20  text-white bg-black pl-8 pr-8 h-16 border-[#00969D] border-2 rounded-xl">
            <img className="h-7 invert" src={gitHubLogo} alt="" />
            Project code
          </button>
        </div>
      </div>
    </div>
  );
}
