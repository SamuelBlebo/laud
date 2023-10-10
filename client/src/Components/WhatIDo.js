import React from "react";
import SmartPhoneIcon from "../Assets/smartphone 1.png";
import Joystick from "../Assets/joystick 1.png";
import Devops from "../Assets/devops 1.png";

export default function WhatIDo() {
  return (
    <div
      id="Services"
      className="bg-[#000] flex flex-col px-[50%] py-[50px] lg:py-[100px] items-center justify-center lg:items-start lg:justify-start lg:px-[15%] 2xl:px-[22%] "
    >
      <div className="w-[300px] mb-[30px]">
        <div className="pb-[30px] flex items-center">
          <div className="about-me-text border-2 border-[#E5540A] w-[50px] h-[40px] "></div>
          <h3 className="text-[#fff] bg-[#000] m-[-40px] p-[2.5px]">
            What I Do
          </h3>
        </div>
        <h3 className="font-bold text-[#c1c1c1] text-[24px] ">
          I have the capability to provide these Services.
        </h3>
      </div>
      <div className="lg:flex lg:flex-row">
        <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-[50px] p-[25px] transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
          <img src={SmartPhoneIcon} alt="Smart Phone Icon" />
          <h4 className="text-[20px] font-bold text-[#e5540a] mt-[20px]">
            Mobile <br /> Development
          </h4>
          <p className="text-[#dcdcdc] text-[16.5px] mt-[18px] mb-[15px] leading-[26px] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            quis pariatur rem unde quod praesentium iure, ullam quam nostrum
            labore tempora dicta error
          </p>
          <a href="#Contact" className="text-[#e5540a] underline mt-[20px]">
            Contact me
          </a>
        </div>
        <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-[50px] p-[25px] transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
          <img src={Joystick} alt="Joystick Icon" />
          <h4 className="text-[20px] font-bold text-[#e5540a] mt-[20px]">
            Game Development
          </h4>
          <p className="text-[#dcdcdc] text-[16.5px] mt-[18px] mb-[15px] leading-[26px] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            quis pariatur rem unde quod praesentium iure, ullam quam nostrum
            labore tempora dicta error, laborum assumenda quas doloribus.
            Delectus, quas asperiores.
          </p>
          <a href="#Contact" className="text-[#e5540a] underline mt-[20px]">
            Contact me
          </a>
        </div>
        <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-4 p-[25px] transition ease-in-out delay-70 hover:-translate-y-1 hover:scale-110 duration-100">
          <img src={Devops} alt="Devops Icon" />
          <h4 className="text-[20px] font-bold text-[#e5540a] mt-[20px]">
            Software Development
          </h4>
          <p className="text-[#dcdcdc] text-[16.5px] mt-[18px] mb-[15px] leading-[26px] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            quis pariatur rem unde quod praesentium iure, ullam quam nostrum
            labore tempora dicta error, laborum assumenda quas doloribus.
            Delectus, quas asperiores.
          </p>
          <a href="#Contact" className="text-[#e5540a] underline mt-[20px]">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
}
