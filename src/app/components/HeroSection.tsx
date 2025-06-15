import React from "react";
import AnimatedBtn from "./AnimatedBtn";
import GlareHover from "./GlareHover";
import ShinyText from "./ShinyText";
import BackgroundParticles from "./BackgroundParticles";
import Earth3D from "./Earth3D";

function HeroSection() {
  return (
    <>
      <div className="min-h-screen h-screen max-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background Particles - lowest layer */}
        <BackgroundParticles />

        {/* Background circles */}
        <div className="min-h-screen h-screen max-h-screen w-full flex flex-col justify-center items-center absolute overflow-hidden">
          <div className="absolute flex justify-center w-full max-w-screen max-h-screen h-full overflow-hidden pointer-events-none top-180 lg:top-170 md:top-180 sm:top-200 z-0">
            <div className="absolute h-[995px] w-[2100px] rounded-[50%] bg-white" />
            <div className="absolute mt-[5px] h-[995px] w-[2242px] rounded-[50%] bg-black shadow-[inset_0_0_20px_6px_rgba(255,255,255,0.3)]" />
          </div>

          {/* Gradient overlay - above background but below content */}
          <div className="absolute pointer-events-none left-0 top-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10" />
        </div>

        {/* Main content - highest layer */}
        <section className="w-full max-w-screen flex flex-col gap-10 justify-center items-center overflow-hidden z-20 relative">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={900}
            playOnce={false}
            style={{
              background: "#141414",
              border: "1px solid #212121",
              borderRadius: "1000px",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            <h3 className="text-md text-neutral-300 py-1 px-6">
              👨‍💻 Software Engineer · 🎨 UI/UX Designer
            </h3>
          </GlareHover>
          <ShinyText
            text="Lim Weiqin Ian"
            disabled={false}
            speed={3}
            className="text-8xl font-semibold text-center"
          />
          <h2 className="text-xl font-medium text-center text-[#ffffffa4]">
            &quot;Life is a Do It Yourself Project&quot;
          </h2>
          <AnimatedBtn />
        </section>
        <Earth3D />
      </div>
    </>
  );
}

export default HeroSection;
