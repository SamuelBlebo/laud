import React from "react";
import GomSoftware from "../Assets/GomSoftware.png";
import JkayApp from "../Assets/JKay Mobile App.png";
import { BsArrowRight } from "react-icons/bs";

export default function Portfolio() {
  return (
    <div>
      <div className=" w-[90vw] h-[auto] mx-[15%] py-[80px] lg:flex lg:flex-row-reverse justify-end ">
        <div className="div-with-text">
          <div className="pb-[30px] flex items-center lg:mt-[40px]">
            <div className="about-me-text border-2 border-[#E5540A] w-[50px] h-[40px] "></div>
            <h3 className="bg-[#fff] m-[-40px] p-[3px]">Portfolio</h3>
          </div>
          <div className="">
            <h3 className="text-[33px] font-bold w-[300px] leading-[40px]">
              Browse through my stunning projects
            </h3>
          </div>
          <div className="apps mt-[40px] lg:flex  lg:mt-[0px]">
            <div className="mr-[40px]">
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] mt-[20px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={GomSoftware} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[140px] text-[18px]">Gom Software</h3>
                  <BsArrowRight />
                </div>
              </div>
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] mt-[30px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={GomSoftware} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[140px] text-[18px]">Gom Software</h3>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div>
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] mt-[30px] lg:mt-[20px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={GomSoftware} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[140px] text-[18px]">Gom Software</h3>
                  <BsArrowRight />
                </div>
              </div>
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] mt-[30px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={GomSoftware} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[140px] text-[18px]">Gom Software</h3>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-without-tex mr-[30px]">
          <div className="w-[330px] h-[330px] bg-[#d1d1d1] mt-[30px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
            <img src={GomSoftware} alt="" />
            <div className="flex flex-row items-center align-middle mt-[20px]">
              <h3 className="mr-[140px] text-[18px]">Gom Software</h3>
              <BsArrowRight />
            </div>
          </div>
          <div className="w-[330px] h-[auto] bg-[#d1d1d1] mt-[42px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
            <img src={JkayApp} alt="" />
            <div className="flex flex-row items-center align-middle mt-[20px]">
              <h3 className="mr-[140px] text-[18px]">JkayApp</h3>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
