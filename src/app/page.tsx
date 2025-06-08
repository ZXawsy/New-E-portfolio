"use client";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Tabbar from "./components/Tabbar";
import useMousePosition from "./utils/useMousePosition";
import { useEffect, useState } from "react";
import useLenisScroll from "./utils/useLenisScroll";

export default function Home() {
  useLenisScroll(); 
  const { x, y } = useMousePosition();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const clampedX = Math.min(Math.max(x - 6, 0), windowSize.width - 24);
  const clampedY = Math.min(Math.max(y - 6, 0), windowSize.height - 24);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] box-border bg-black">
      <motion.div
        className="absolute w-3 h-3 bg-neutral-50 rounded-full pointer-events-none z-[999]"
        animate={{
          x: clampedX,
          y: clampedY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          overshootClamping: true,
        }}
      />

      <div className="max-w-[1440px] w-full mx-auto sm:px-6 flex flex-col justify-center items-center">
        <Tabbar className="my-6 fixed top-0 z-[999]" />
        <HeroSection />
      </div>
    </div>
  );
}
