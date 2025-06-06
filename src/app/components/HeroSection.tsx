import React from "react";
import SplineParticles from "./SplineParticles";
import { HiArrowUpRight } from "react-icons/hi2";

function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-10 justify-center items-center">
      {/* <SplineParticles className="absolute p-10 lg:p-5 sm:p-0 h-full w-full" /> */}
      <h3 className="text-md text-neutral-300 py-1 px-6 bg-[#141414] border border-[#212121] rounded-full">
        👨‍💻 Software Engineer · 🎨 UI/UX Designer
      </h3>
      <h1 className="text-8xl font-semibold bg-gradient-to-r from-neutral-500 to-neutral-50 bg-clip-text text-transparent">
        Lim Weiqin Ian
      </h1>
      <h2 className="text-xl font-semibold bg-gradient-to-r from-neutral-500 to-neutral-50 bg-clip-text text-transparent">
        NP Student · Software Engineer @ RAiD AETHER
      </h2>
      <a className="flex flex-row gap-2 justify-center items-center py-3 px-6 bg-neutral-900 border border-[#212121] shadow-2xl rounded-full text-lg font-semibold text-neutral-50 cursor-pointer transition-all duration-300 active:inset-shadow-sm hover:bg-neutral-50 hover:text-neutral-950">
        Get started <HiArrowUpRight />
      </a>
    </section>
  );
}

export default HeroSection;
