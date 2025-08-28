import aboutSeparator from "../img/pageSeparators/about.svg";
import aboutMeImg from "../img/about-me-img.jpeg";

export default function About() {
  return (
    <div className="relative h-full m-auto w-screen text-white bg-neutral-900">
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
      <div className="flex flex-col lg:flex-row relative justify-center items-center lg:items-center pt-2 lg:pt-12 px-8 lg:px-20 gap-4 lg:gap-0 ">
        <div className="lg:w-1/2 flex justify-center lg:justify-center">
          <img
            className="h-auto max-h-[350px] lg:max-h-[600px] w-auto max-w-[300px] lg:max-w-[400px] rounded-[1rem] lg:rounded-[2rem] object-cover aspect-[3/4]"
            src={aboutMeImg}
            alt=""
          />
        </div>
        <div className="flex-1 lg:max-w-[600px] flex flex-col justify-center">
          <div className="bg-[#1a2e1a] rounded-[1rem] lg:rounded-[2rem] p-6 lg:p-10">
            <h3 className="text-2xl lg:text-4xl font-bold text-[#4ade80] mb-4 lg:mb-6">Hi!</h3>
            <p className="text-sm lg:text-lg leading-6 lg:leading-8 mb-4 lg:mb-6">
              I'm a frontend developer with solid backend experience, passionate about creating meaningful solutions.
            </p>
            <p className="text-sm lg:text-lg leading-6 lg:leading-8 mb-6 lg:mb-8">
              I recently completed my bachelor's degree at{" "}
              <a
                className="font-medium underline text-[#4ade80] hover:text-[#22c55e] transition-colors"
                href="https://www.uia.no/studier/multimedieteknologi-og-design">
                UiA
              </a>{" "}
              and am now pursuing a master's in Multimedia and Game Technologies while seeking a role in a motivated team where I can contribute and
              grow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
