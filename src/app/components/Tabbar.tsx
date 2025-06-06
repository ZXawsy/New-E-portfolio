"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import { HiMiniInboxStack } from "react-icons/hi2";
import { HiMail } from "react-icons/hi";
import { IconType } from "react-icons";

type TabBarOption = {
  title: string;
  icon: IconType;
};

type SliderPosition = {
  left: number;
  width: number;
};

function Tabbar({ className }: { className?: string }) {
  const tabBarOptions: TabBarOption[] = [
    { title: "Home", icon: HiHome },
    { title: "Projects", icon: HiMiniInboxStack },
    { title: "Contact", icon: HiMail },
  ];

  const [activeTab, setActiveTab] = useState<TabBarOption>(tabBarOptions[0]);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);
  const [sliderPosition, setSliderPosition] = useState<SliderPosition>({
    left: 0,
    width: 0,
  });
  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  useEffect(() => {
    const currentRef = tabRefs.current[activeTab.title];
    if (currentRef) {
      setSliderPosition({
        left: currentRef.offsetLeft,
        width: currentRef.offsetWidth,
      });
    }
  }, [activeTab]);

  // Navbar background #080808
  // Navbar border #212121
  //

  return (
    <>
      {/* min-w-2xs 288px at small mobile views */}
      <nav
        className={`flex flex-row gap-2 px-2 py-1.5 rounded-full border border-[#212121] bg-transparent backdrop-blur-2xl w-min max-w-md ${className}`}
      >
        <motion.div
          className={`absolute rounded-full bg-[#212121] aspect-square`}
          initial={{
            left: 0,
            width: sliderPosition.width,
          }}
          animate={{
            left: sliderPosition.left,
            width: sliderPosition.width,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
            duration: 300,
          }}
        />
        {tabBarOptions.map((tab) => {
          const isActive = tab.title === activeTab.title;
          const IconComponent = tab.icon;

          return (
            <a
              key={tab.title}
              ref={(el) => {
                tabRefs.current[tab.title] = el;
              }}
              className={`flex justify-center items-center px-3 py-1.5 rounded cursor-pointer aspect-square z-[1] bg-transparent transition-colors duration-300 ${
                isActive
                  ? "text-neutral-50"
                  : "text-neutral-900 hover:text-neutral-300"
              }`}
              onClick={() => setActiveTab(tab)}
              type="button"
            >
              <IconComponent
                size={20}
                className={`transition-colors duration-300 ${isActive ? "text-neutral-50" : "text-neutral-400 hover:text-neutral-200"}`}
              />
              {/* <span className="text-xs text-white">{tab.title}</span> */}
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default Tabbar;
