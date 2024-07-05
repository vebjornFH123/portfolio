import aboutSeparator from "../img/pageSeparators/about.svg";
import aboutMeImg from "../img/about-me-img.jpeg";

import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref: talkBubble, inView: talkBubbleVisible } = useInView();

  let screenWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    screenWidth = window.innerWidth;
  });

  const handleDownload = () => {
    // Replace 'http://your-server.com/path-to-your-pdf.pdf' with the actual URL of your PDF file on the server.
    const pdfFileURL = "http://eivind.woien.com/CV/CV.pdf";

    // Open the PDF file in a new tab or window for download
    window.open(pdfFileURL, "_blank");
  };
  return (
    <div className="relative h-screen m-auto w-screen text-white bg-neutral-900">
      <div
        className="hidden md:block top-52 right-0 absolute h-2/3 w-2/3 opacity-10 z-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,0,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
          filter: `hue-rotate(90deg) brightness(0.8)`,
        }}></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <img className="h-50 lg:h-60" src={aboutSeparator} alt="" />
        <h2 className="text-4xl lg:text-6xl gradient-text-green">About</h2>
      </div>
      <div className="flex relative justify-center items-center pt-12 ">
        <img className="h-auto max-h-[400px] lg:max-h-[600px] rounded-[5rem] lg:mr-20" src={aboutMeImg} alt="" />
        <div
          ref={talkBubble}
          className={`${
            talkBubbleVisible && window.innerWidth > 1024 ? "slide-down" : ""
          } scale-75 lg:scale-100 md:w-1/2 w-min-[300px] lg:opacity-0 opacity-100 absolute -top-14 lg:top-2 lg:right-0`}>
          <p className="h-max w-full lg:w-[600px] bg-[#138425] lg:pl-24 p-8 rounded-[4rem] lg:rounded-[8rem] font-normal text-xs lg:text-lg relative block leading-6 text-start">
            Hei!!
            <br /> I'm a frontend developer with solid backend experience, passionate about creating meaningful solutions. <br />I recently completed
            my bachelor's degree at
            <a className="font-medium underline" href="https://www.uia.no/studier/multimedieteknologi-og-design">
              UiA
            </a>
            and I'm now seeking a role in a motivated team where I can contribute and grow.
            <br /> Interested in discussing opportunities?
          </p>
          <div className="arrow-down ml-[50%] lg:ml-[14%] lg:mb-0 md:mb-10 mb-0"></div>
        </div>
      </div>
    </div>
  );
}
