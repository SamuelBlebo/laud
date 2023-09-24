import React from "react";
import SmartPhoneIcon from "../Assets/smartphone 1.png";
import Joystick from "../Assets/joystick 1.png";
import Devops from "../Assets/devops 1.png";

export default function WhatIDo() {
  return (
    <div className="w-[100vw] h-auto bg-[#000] px-[18%] py-[90px] lg:px-[90px] xl:px-[160px] 2xl:px-[500px] lg:py-[150px]">
      <div>
        <div className="pb-[30px] flex items-center">
          <div className="about-me-text border-2 border-[#E5540A] w-[50px] h-[40px] "></div>
          <h3 className="text-[#fff] bg-[#000] m-[-40px] p-[2.5px]">
            What I Do
          </h3>
        </div>
        <div>
          <h3 className="font-bold text-[#c1c1c1] text-[24px] lg:w-[500px] mb-[30px]">
            I have the capability to provide these Services.
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row ">
          <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-4 p-[25px]">
            <img src={SmartPhoneIcon} alt="Smart Phone Icon" />
            <h4 className="text-[20px] font-bold text-[#e5540a] mt-[20px]">
              Mobile <br /> Development
            </h4>
            <p className="text-[#dcdcdc] text-[16.5px] mt-[18px] mb-[15px] leading-[26px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
              quis pariatur rem unde quod praesentium iure, ullam quam nostrum
              labore tempora dicta error
            </p>
            <a href="/contact" className="text-[#e5540a] underline mt-[20px]">
              Contact me
            </a>
          </div>
          <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-4 p-[25px]">
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
            <a href="/contact" className="text-[#e5540a] underline mt-[20px]">
              Contact me
            </a>
          </div>
          <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-4 p-[25px]">
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
            <a href="/contact" className="text-[#e5540a] underline mt-[20px]">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
