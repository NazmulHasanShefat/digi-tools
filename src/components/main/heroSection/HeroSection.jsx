import React from "react";
import ButtonPrimary from "../../ui/ButtonPrimary";
import banarImage from "../../../assets/banner.png"
import PlayIcon from "../../ui/PlayIcon";
const HeroSection = ({ className }) => {
  return (
    <section className={`hero_section ${className}`}>
      <div className="hero lg:py-15 py-6">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banarImage}
            className="max-w-xs"
          />
          <div>
            <h1 className="text-[12vw] lg:text-[72px] lg:leading-22 md:text-[72px] md:leading-22 font-extrabold">
              Supercharge Your Digital Workflow{" "}
            </h1>
            <p className="py-6 text-[16px] w-full">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center flex-col lg:flex-row md:flex-row gap-3">
            <ButtonPrimary type="default" className={`ml-0`}>Explore Products</ButtonPrimary>
            <ButtonPrimary type="border"><span className="flex items-center gap-2"><span><PlayIcon /></span> <span>Watch Demo</span></span></ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
