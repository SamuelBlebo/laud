import React from "react";
import Levels from "../Assets/levels.png";
import CSharp from "../Assets/c-sharp.png";
import Java from "../Assets/java.png";
import Python from "../Assets/python.png";
import Ruby from "../Assets/ruby.png";

export default function Skills() {
  return (
    <div className="px-[70px] lg:flex  md:px-[110px] lg:px-[60px] xl:px-[150px] 2xl:px-[300px] xl:pb-[140px]">
      <div className="flex flex-col items-center lg:flex-1 lg:pr-[80px]">
        <h2 className="text-[26px] font-bold leading-[40px]  pb-[30px] lg:text-[32px]">
          My development skills includes these technologies.
        </h2>
        <p className="font-[16px] leading-[30px] pb-[30px] opacity-80">
          On teada-tuntud fakt, et lehe kujunduse vaatamisel juhib selle loetav
          sisu lugeja tähelepanu kõrvale.
        </p>
        <img src={Levels} alt="Levels" className="lg:w-[350px] lg:h-auto" />
      </div>
      <div className="flex flex-row justify-center my-[50px] mr-[50px] ml-[20px] lg:flex-1 lg:mt-0">
        <div className="flex-1 pr-[10px]">
          <div className="lg:flex lg:flex-1 mt-[20px] lg:mt-0 lg:justify-center">
            <div className="flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl lg:h-[180px] lg:w-[180px]">
              <img
                src={CSharp}
                alt=" C-sharp logo"
                className="w-auto h-[76px] lg:h-[130px]"
              />
            </div>
          </div>
          <div className="lg:flex lg:flex-1  mt-[20px] lg:mt-[40px] lg:justify-center">
            <div className=" flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl  lg:h-[180px] lg:w-[180px]">
              <img
                src={Java}
                alt="Ruby Logo"
                className="w-auto h-[76px] lg:h-[130px]"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 pt-7 ml-[20px] ">
          <div className="lg:flex lg:flex-1 mt-[20px] lg:justify-start">
            <div className="flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl  lg:h-[180px] lg:w-[180px]">
              <img
                src={Python}
                alt="Python logo"
                className="w-auto h-[76px] lg:h-[130px]"
              />
            </div>
          </div>
          <div className="lg:flex lg:flex-1 mt-[20px] lg:mt-[40px] lg:justify-start">
            <div className="flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl  lg:h-[180px] lg:w-[180px]">
              <img
                src={Ruby}
                alt=" Ruby logo"
                className="w-auto h-[70px] lg:h-[120px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
