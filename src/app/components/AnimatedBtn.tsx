import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

function AnimatedBtn() {
  return (
    <a className="btn-wrapper w-[180px] h-[60px]">
      <div className="btn-content flex flex-row gap-2 items-center justify-center py-3 px-6 text-neutral-50 cursor-pointer transition-all duration-300 hover:text-neutral-950">
        <p className="font-semibold">Get Started</p>
        <HiArrowUpRight />
      </div>
    </a>
  );
}

      // <a className="flex flex-row gap-2 justify-center items-center py-3 px-6 bg-neutral-900 border border-[#212121] shadow-2xl rounded-full text-lg font-semibold text-neutral-50 cursor-pointer transition-all duration-300 active:inset-shadow-sm hover:bg-neutral-50 hover:text-neutral-950">
      //   Get started <HiArrowUpRight />
      // </a>

export default AnimatedBtn;
