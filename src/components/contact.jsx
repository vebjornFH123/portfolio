import React from "react";

export default function Contact() {
  return (
    <div className="">
      <div
        className="hidden md:block h-2/3 w-2/3 opacity-10 z-50 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,255,255,1) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
          filter: `hue-rotate(30deg) brightness(0.8)`,
        }}></div>
      <div className=" max-w-2xl lg:mt-0 ml-auto mr-auto text-neutral-300 text-xl text-center pt-[20vh] pb-[30vh]">
        <h2 className=" text-white text-4xl text-center pb-7">Did you really get this far?</h2>
        <p>
          Thank you som much for visiting my portifolio! Feel free to contact me at anytime. I'm always ready for a good conversation about potential
          collaboration opportunities. Thank you for taking the time to consider my work.
          <br />
          <br />
        </p>
        <p className=" w-max m-auto">
          Email: vebjorn.haugholt@outlook.com
          <br />
          Tlf: +47 94 05 62 67
          <br />
          or
          <a className=" underline text-sky-300 hover:text-sky-100 ml-2" href="https://www.linkedin.com/in/vebj%C3%B8rn-haugholt/">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}
