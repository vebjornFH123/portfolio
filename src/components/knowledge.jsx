import "../Animations.css";
import { useInView } from "react-intersection-observer";

import chatgptLogo from "../img/logos/chatgpt.png";
import dndKitLogo from "../img/logos/dnd-kit.png";
import vscodeLogo from "../img/logos/vscode.png";

import photoshopLogo from "../img/logos/photoshop.png";
import blenderLogo from "../img/logos/blender.png";
import lightroomLogo from "../img/logos/lightroom.png";
import figmaLogo from "../img/logos/figma.png";
import mapboxLogo from "../img/logos/Mapbox.png";
import threejsLogo from "../img/logos/threejs.png";
import postgresqlLogo from "../img/logos/postgresql.png";

export default function Knowledge() {
  const programs = [
    { link: "https://www.postgresql.org/", name: "PostgreSQL", image: postgresqlLogo },
    { link: "https://www.mapbox.com", name: "Mapbox GL", image: mapboxLogo },
    { link: "https://threejs.org/", name: "Three.js", image: threejsLogo },
    { link: "https://figma.com", name: "Figma", image: figmaLogo },
    { link: "https://dndkit.com/", name: "Dnd-Kit", image: dndKitLogo },
    { link: "https://code.visualstudio.com/", name: "VSCode", image: vscodeLogo },
    { link: "https://www.blender.org/", name: "Blender", image: blenderLogo },
    { link: "https://www.adobe.com/no/products/photoshop.html", name: "Photoshop", image: photoshopLogo },
    { link: "https://www.adobe.com/products/photoshop-lightroom.html", name: "Lightroom", image: lightroomLogo },
  ];

  const { ref: program, inView: programVisible } = useInView();

  return (
    <div className="relative flex bg-neutral-900 p-10">
      <div className=" flex flex-col lg:gap-7">
        <div ref={program} className="relative flex flex-wrap w-screen lg:max-w-xl m-auto gap-3 scale-75 justify-center xl:scale-100">
          {programs.map((program, index) => (
            <a
              href={program.link}
              key={index}
              target="_blank"
              className={`${
                programVisible ? "scale-up" : ""
              } scale-0 relative h-20 w-20  bg-[#926219] bg-opacity-40 flex flex-col gap-3  justify-center items-center rounded-xl cursor-pointer transition-all duration-200 hover:brightness-150 p-2`}
              style={{ animationDelay: `${0.025 * (index + 1)}s` }}>
              <img className="h-10 w-10 m-auto mt-3 grayscale" src={program.image} alt={program.name} />
              <h4 className="text-center text-gray-400 text-[0.8rem] -mt-1">{program.name}</h4>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
