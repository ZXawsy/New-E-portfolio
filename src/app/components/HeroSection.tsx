import React from "react";
import AnimatedBtn from "./AnimatedBtn";

function HeroSection() {
  return (
    <>
      <div className="min-h-screen h-screen max-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
        <section className="w-full max-w-screen flex flex-col gap-10 justify-center items-center overflow-hidden">
          <h3 className="text-md text-neutral-300 py-1 px-6 bg-[#141414] border border-[#212121] rounded-full">
            👨‍💻 Software Engineer · 🎨 UI/UX Designer
          </h3>
          <h1 className="text-8xl font-semibold bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Lim Weiqin Ian
          </h1>
          <h2 className="text-xl font-semibold text-center bg-gradient-to-r from-neutral-400 via-neutral-50 to-neutral-400 bg-clip-text text-transparent">
            &quot;Life is a Do It Yourself Project&quot;
          </h2>
          <AnimatedBtn />
        </section>
        <div className="absolute flex justify-center w-full max-w-screen max-h-screen h-full overflow-hidden pointer-events-none top-180">
          <div className="absolute h-[995px] w-[2100px] rounded-[50%] bg-white" />
          <div className="absolute mt-[5px] h-[995px] w-[2242px] rounded-[50%] bg-black shadow-[inset_0_0_20px_6px_rgba(255,255,255,0.3)]" />
        </div>
        <div className="absolute pointer-events-none left-0 top-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black" />
      </div>
    </>
  );
}

export default HeroSection;
