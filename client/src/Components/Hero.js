import React from "react";
import HeroImage from "../Assets/HeroImage.png";

export default function Hero() {
  return (
    <div className="background h-auto xl:h-[800px] w-auto bg-[#000] p-[25px] flex items-center justify-between">
      <div className="hero-info xl:pl-[160px] 2xl:pl-[250px] ">
        <h1 className="text-[#fff] text-[80px] font-bold leading-[92px] xl:absolute xl:top-[300px]">
          App & Software <br /> Developer
        </h1>
        <h5 className="text-[#fff] xl:absolute xl:top-[500px]">LAUD MILLER</h5>
        <button>Contact Me</button>
      </div>
      <div className="hero-image xl:pr-[160px] 2xl:pr-[250px]  ">
        <div className="">
          <img src={HeroImage} alt="Hero" className="h-auto w-[640px]" />
        </div>
      </div>
    </div>
  );
}
