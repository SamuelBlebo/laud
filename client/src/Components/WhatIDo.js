import React from 'react'
import SmartPhoneIcon from "../Assets/smartphone 1.png";

export default function WhatIDo() {
  return (
    <div className="w-[100vw] h-auto bg-[#000] px-[34px] py-[62px] lg:px-[80px] xl:px-[160px] 2xl:px-[300px]">
        <div className="pb-[30px] flex items-center">
            <div className="about-me-text border-2 border-[#E5540A] w-[50px] h-[40px] "></div>
            <h3 className="text-[#fff] bg-[#000] m-[-40px] p-[2.5px]">What I Do</h3>
        </div>
        <div>
            <h3 className="font-bold text-[#c1c1c1] text-[24px] lg:w-[500px] mb-[30px]">
            I have the capability to provide these Services.
            </h3>
        </div>

        <div className="flex flex-col lg:flex-row">
            <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-4 p-[25px]">
              <img src={SmartPhoneIcon} alt="Smart Phone Icon" />
              <h4>Mobile Development</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quis pariatur rem unde quod praesentium iure, ullam quam nostrum labore tempora dicta error, laborum assumenda quas doloribus. Delectus, quas asperiores.</p>
              
            </div>
            <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mr-2">
            </div>
            <div className="w-[300px] h-[400px] bg-[#1e1e1e] my-6 lg:mx-2">
            </div>
        </div>
    </div>
  )
}