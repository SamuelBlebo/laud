import React from "react";
import HeroImage from "../Assets/HeroImage.png";

export default function Hero() {
  return (
    <div className="background h-auto lg:h-[700px] xl:h-[800px] w-auto bg-[#000] p-[25px] lg:flex items-center justify-between">
      <div className="hero-info px-[32px] lg:pl-[80px] xl:pl-[110px] 2xl:pl-[250px] ">
        <h1 className="text-[#fff] text-[34px] lg:text-[70px] xl:text-[80px] font-bold lg:leading-[72px] xl:leading-[92px] lg:absolute lg:top-[260px] xl:absolute xl:top-[300px]">
          App & Software <br /> Developer
        </h1>
        <h5 className="text-[#fff] lg:absolute lg:top-[430px] xl:absolute xl:top-[500px]">
          LAUD MILLER
        </h5>
        <button>Contact Me</button>
      </div>
      <div className="hero-image lg:pr-[80px] xl:pr-[120px] 2xl:pr-[250px]  ">
        <div className="">
          <img src={HeroImage} alt="Hero" className="h-auto w-[600px]" />
        </div>
      </div>
    </div>
  );
}
