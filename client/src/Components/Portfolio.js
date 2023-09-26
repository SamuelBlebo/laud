import React from "react";
import GomSoftware from "../Assets/GomSoftware.png";
import JkayApp from "../Assets/JKay Mobile App.png";
import AdidasRetro from "../Assets/AdidasRetro.png";
import Piyee from "../Assets/Piyee.png";
import DPLeeroy from "../Assets/DeepLeeroy.png";
import Task from "../Assets/Task.io.png";
import { BsArrowRight } from "react-icons/bs";

export default function Portfolio() {
  return (
    <div>
      <div className="w-[90vw] h-[auto] px-[90px] py-[80px] flex flex-col lg:flex-row-reverse justify-end lg:px-[190px]  2xl:px-[400px]  ">
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
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] hover:bg-[#e5540a] mt-[20px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={AdidasRetro} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[140px] text-[18px]">Adidas Retro</h3>
                  <BsArrowRight />
                </div>
              </div>
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] hover:bg-[#e5540a] mt-[30px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={Piyee} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[190px] text-[18px]">Piyee</h3>
                  <BsArrowRight />
                </div>
              </div>
            </div>
            <div>
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] hover:bg-[#e5540a] mt-[30px] lg:mt-[20px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={DPLeeroy} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[140px] text-[18px]">DP Leeroy</h3>
                  <BsArrowRight />
                </div>
              </div>
              <div className="w-[330px] h-[330px] bg-[#d1d1d1] hover:bg-[#e5540a] mt-[30px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
                <img src={Task} alt="" />
                <div className="flex flex-row items-center align-middle mt-[20px]">
                  <h3 className="mr-[190px] text-[18px]">Task.io</h3>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-without-tex mr-[30px]">
          <div className="w-[330px] h-[330px] bg-[#d1d1d1] hover:bg-[#e5540a] mt-[30px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
            <img src={GomSoftware} alt="" />
            <div className="flex flex-row items-center align-middle mt-[20px]">
              <h3 className="mr-[140px] text-[18px]">Gom Software</h3>
              <BsArrowRight />
            </div>
          </div>
          <div className="w-[330px] h-[auto] bg-[#d1d1d1] hover:bg-[#e5540a] mt-[42px] flex flex-col items-center justify-center rounded-[24px] px-[18px] py-[18px]">
            <img src={JkayApp} alt="" />
            <div className="flex flex-row items-center align-middle mt-[20px]">
              <h3 className="mr-[190px] text-[18px]">JkayApp</h3>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
