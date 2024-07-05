import React, { useEffect, useRef, useState } from "react";

import homeIcon from "../img/icons/home.svg";
import aboutIcon from "../img/icons/about.svg";
import skillsIcon from "../img/icons/skills.svg";
import workIcon from "../img/icons/projects.svg";
import experienceIcon from "../img/icons/experience.svg";
import educationIcon from "../img/icons/education.svg";
import linkedinIcon from "../img/icons/linkedin.svg";
import githubIcon from "../img/icons/github.svg";

import { Link, animateScroll as scroll } from "react-scroll";

export default function Menubar() {
  // Define an array of link names
  const [links, setLinks] = useState([
    { header: "Home", img: homeIcon, width: null, height: null, move: null },
    { header: "About", img: aboutIcon, width: null, height: null, move: null },
    { header: "Skills", img: skillsIcon, width: null, height: null, move: null },
    { header: "Work", img: workIcon, width: null, height: null, move: null },
    { header: "Experience", img: experienceIcon, width: null, height: null, move: null },
    { header: "Education", img: educationIcon, line: true, width: null, height: null, move: null },
    { header: "Contact", img: homeIcon, width: null, height: null, move: null, hidden: true },
    {
      header: "Linkedin",
      url: "https://www.linkedin.com/in/vebj%C3%B8rn-haugholt/",
      img: linkedinIcon,
      width: null,
      height: null,
      move: null,
      hidden: true,
    },
    { header: "GitHub", url: "https://github.com/vebjornFH123", img: githubIcon, width: null, height: null, move: null, hidden: true },
  ]);

  const [tipWidths, setTipWidths] = useState({});

  const [activeIndex, setActiveIndex] = useState(false);

  const setTooltipRef = (index) => (el) => {
    if (el) {
      const width = el.getBoundingClientRect().width;
      setTipWidths((prev) => {
        if (prev[index] !== width) {
          return {
            ...prev,
            [index]: width,
          };
        }
        return prev;
      });
    }
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const updateLinksScale = () => {
    const updatedLinks = links.map((link, index) => {
      const scaleFactor = 0.8;

      let newWidth = 3.5;
      let newHeight = 3.5;
      let newMove = 0;

      if (activeIndex === index) {
        newWidth = 3.9 + scaleFactor;
        newHeight = 3.9 + scaleFactor;
        newMove = 15;
      } else if (activeIndex === index + 1) {
        newWidth = 3.7 + scaleFactor;
        newHeight = 3.7 + scaleFactor;
        newMove = 10;
      } else if (activeIndex === index - 1) {
        newWidth = 3.7 + scaleFactor;
        newHeight = 3.7 + scaleFactor;
        newMove = 10;
      } else if (activeIndex === index + 2) {
        newWidth = 3.6 + scaleFactor;
        newHeight = 3.6 + scaleFactor;
        newMove = 5;
      } else if (activeIndex === index - 2) {
        newWidth = 3.6 + scaleFactor;
        newHeight = 3.6 + scaleFactor;
        newMove = 5;
      }

      return { ...link, width: newWidth, height: newHeight, move: newMove };
    });

    // Assuming you have a way to set the new state with updatedLinks
    setLinks(updatedLinks);
  };

  useEffect(() => {
    if (links) {
      updateLinksScale();
    }
  }, [activeIndex]);

  return (
    <div className="left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 bottom-8 lg:right-8 z-50 lg:w-max h-20 lg:h-fit flex flex-row lg:flex-col fixed first-letter:z-50 text-white items-center shadow-sm shadow-[#6d6d6d] bg-[#00000020] bg-opacity-50 rounded-full backdrop-blur-md sm:tracking-wider scale-75 lg:scale-100">
      <div className={`flex flex-row p-8 lg:flex-col sm:pl-4 sm:pr-4 justify-center items-center ${width < 1080 ? "w-full" : "w-20"}`}>
        {links.map((link, index) => (
          <>
            <div
              className={`${width < 1080 ? (link.hidden ? "hidden" : "block") : "block"} p-2`}
              onMouseEnter={() => {
                setActiveIndex(index);
              }}
              onMouseLeave={() => {
                setActiveIndex(null);
              }}>
              <Link
                key={index}
                to={link.header.toLowerCase()}
                onClick={() => {
                  if (link.url) {
                    window.open(link.url, "_blank");
                  }
                }}
                smooth={true}
                duration={1000}
                onMouseEnter={() => {
                  setActiveIndex(index);
                }}
                onMouseLeave={() => {
                  setActiveIndex(null);
                }}
                style={{
                  width: `${link.width}rem`,
                  height: `${link.height}rem`,
                  transform: `${width < 1080 ? `translateY(-${link.move}px)` : `translateX(-${link.move}px)`}`,
                  transition: "width 0.2s ease-in-out, height 0.2s ease-in-out, transform 0.2s ease-in-out",
                }}
                className={`relative text-sm sm:text-lg text-neutral-300 shadow-sm shadow-[#504f4f] bg-[#12120f] rounded-full decoration-2 cursor-pointer font-light hover:text-white hover:font-normal transition-all duration-300 flex items-center justify-center`}>
                <img className={`h-8`} src={link.img} alt="" />
                <span
                  ref={setTooltipRef(index)}
                  style={{
                    left: width > 1080 ? (activeIndex === index ? `-${tipWidths[index] + 30}px` : "0px") : "",
                    opacity: activeIndex === index ? 1 : 0,
                    pointerEvents: "none",
                    top: width < 1080 ? (activeIndex === index ? "-50px" : "0px") : "",
                    transition: "opacity 0.2s ease-in-out, top 0.2s ease-in-out, left 0.2s ease-in-out",
                  }}
                  className={`absolute  z-10 shadow-sm shadow-[#6d6d6d] bg-[#00000020] p-1 pl-4 pr-4 rounded-lg`}>
                  {link.header}
                </span>
              </Link>
            </div>
            <div
              className={`${
                width > 1080 ? (link.line ? "block" : "hidden") : "hidden"
              } h-14 lg:h-[1px] bg-[#2a2929] rounded-full w-[1px] lg:w-[130%]`}></div>
          </>
        ))}
      </div>
    </div>
  );
}
