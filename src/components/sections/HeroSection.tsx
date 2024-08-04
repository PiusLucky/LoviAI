import React from "react";
import AnimatedHeroSection from "./AnimatedHeroSection";
import BubbleText from "../common/BubbleText";

function HeroSection() {
  return (
    <section className="flex flex-col justify-center items-center">
      <BubbleText />

      <p className="text-headerMobile font-bold md:font-normal md:text-header text-primary  text-center md:leading-[3rem] mt-[12px]">
        Science-backed <br /> AI Cosmetologist <br /> you can trust
      </p>

      <p className="text-primary font-medium mt-[24px] mb-16">
        Focused around you and your health
      </p>
      <AnimatedHeroSection />
    </section>
  );
}

export default HeroSection;
