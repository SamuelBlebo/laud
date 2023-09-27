import React from "react";
import { BsTelephoneFill } from "react-icons/bs";

export default function ContactMe() {
  return (
    <div className="bg-[#000] px-[16%] py-[50px] ">
      <div className="">
        <div className="pb-[30px] flex items-center">
          <div className="about-me-text border-2 border-[#E5540A] w-[50px] h-[40px] "></div>
          <h3 className="text-[#fff] bg-[#000] m-[-40px] p-[2.5px]">
            Contact Me
          </h3>
        </div>
        <div className="bg-[#1E1E1E] w-[60vw] rounded-[20px] flex justify-between items-center px-[25px] py-[10px]">
          <div className="bg-[#E5540A] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <BsTelephoneFill />
          </div>
          <div>
            <h3 className="font-bold text-[22px] text-[#FFF]">
              +233 (0) 50 00 000
            </h3>
          </div>
        </div>
        <div className="bg-[#1E1E1E] w-[60vw] rounded-[20px] mt-[20px] flex justify-between items-center px-[25px] py-[10px]">
          <div className="bg-[#E5540A] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center">
            <BsTelephoneFill />
          </div>
          <div>
            <h3 className="font-bold text-[22px] text-[#FFF]">
              email@gmail.com
            </h3>
          </div>
        </div>
        <div className="mt-[20px]">
          <h2 className="text-[#fff] font-bold text-[30px]">
            Send Me an Email
          </h2>
        </div>
      </div>
      <div>Image</div>
    </div>
  );
}
