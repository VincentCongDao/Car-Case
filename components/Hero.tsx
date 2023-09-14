"use client";
import Image from "next/image";
import { CustomButton } from ".";

function Hero() {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="hero mix-blend-multiply">
      <div className="flex-1/2 pt-36 padding-x ">
        <h1 className="hero__title capitalize">Find your car today</h1>
        <p className="hero__subtitle">
          Knowledge is important so as speed, that's why we tried to give you
          fast information.
        </p>

        <CustomButton
          title="Explore Our Cars"
          containerStyles={`bg-primary-blue text-white rounded-full mt-10`}
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image-overlay invisible md:visible " />
      </div>
    </div>
  );
}

export default Hero;
