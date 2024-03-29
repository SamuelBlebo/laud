import React from "react";
import HeroImage from "../Assets/HeroImage.png";

export default function Hero() {
  return (
    <div
      id="Hero"
      className="background h-auto px-[32px] pb-[60px] pt-[120px] md:py-[120px] md:h-[1200px] lg:h-[700px] xl:h-[800px] w-auto bg-[#000] lg:flex lg:items-center justify-between"
    >
      <div className="hero-info md:px-[72px]  lg:pl-[80px] xl:pl-[110px] 2xl:pl-[250px] ">
        <h1 className="text-[#fff] text-[40px] leading-[50px] text-center md:text-[52px] md:leading-[60px] lg:text-[70px] xl:text-[80px] lg:text-left font-bold lg:leading-[72px] xl:leading-[92px] lg:absolute lg:top-[260px] xl:absolute xl:top-[300px]">
          App & Software <br /> Developer
        </h1>
        <div className="laud-text p-0 m-0 flex justify-center items-center mt-[15px] md:mt-[40px] lg:absolute lg:top-[400px] xl:absolute xl:top-[500px]">
          <h5 className="text-[#fff] ">LAUD MILLER</h5>
          <hr className="hr border-[1px] border-[#fff] border-x-[20px] lg:border-x-[50px] mx-4 " />
        </div>
        <div className="flex justify-center lg:block">
          <button className="text-[#000] font-bold  bg-[#E5540A] my-[50px] px-[20px] py-[10px] lg:px-[40px] lg:py-[20px] lg:absolute lg:top-[500px] xl:absolute xl:top-[580px] transition ease-in-out delay-120 hover:-translate-y-1 hover:scale-110 duration-150">
            <a href="#Contact">Contact Me</a>
          </button>
        </div>
      </div>
      <div className="hero-image px-[18px] pt-[30px] md:px-[72px] lg:pr-[80px] xl:pr-[120px] 2xl:pr-[250px] lg:pt-[150px]  ">
        <div className="transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
          <img src={HeroImage} alt="Hero" className="h-auto w-[600px]" />
        </div>
      </div>
    </div>
  );
}
