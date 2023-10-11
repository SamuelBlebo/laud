import React from "react";
import logo from "../Assets/LogoLaud.png";
import { RiTwitterXFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div>
      <div className="bg-black flex items-center justify-between py-[10px]  px-[30px] lg:px-[120px] border-t-2 border-[#E5540A] text-[#fff]">
        <div>
          <img src={logo} alt="" className="w-[45px] lg:w-[60px]" />
        </div>
        <div>
          <h4>Copyright©2023</h4>
        </div>
        <div className="flex text-black text-[20px]  ">
          <div className="w-[35px]    m/+h-[35px] bg-[#E5540A] rounded-[50%] flex justify-center items-center mr-[10px] transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
            <RiTwitterXFill />
          </div>
          <div className="w-[35px] h-[35px] bg-[#E5540A] rounded-[50%] flex justify-center items-center mr-[10px] transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
            <SiLinkedin />
          </div>
          <div className="w-[35px] h-[35px] bg-[#E5540A] rounded-[50%] flex justify-center items-center transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
