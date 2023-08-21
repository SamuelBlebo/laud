import React from "react";
import Levels from "../Assets/levels.png";
import CSharp from "../Assets/c-sharp.png";

export default function Skills() {
  return (
    <div className="p-[40px] lg:flex  md:px-[110px] lg:px-[60px] xl:px-[150px] 2xl:px-[300px]">
      <div className="lg:flex-1 lg:pr-[80px]">
        <h2 className="text-[32px] font-bold leading-[40px]  pb-[30px]">
          My development skills includes these technologies.{" "}
        </h2>
        <p className="font-[16px] leading-[30px] pb-[30px] opacity-80">
          On teada-tuntud fakt, et lehe kujunduse vaatamisel juhib selle loetav
          sisu lugeja tähelepanu kõrvale.
        </p>
        <img src={Levels} alt="Levels" clas />
      </div>
      <div className="flex justify-center mt-[50px] lg:flex-1 lg:mt-0">
        <div className="flex-1">
          <div className="lg:flex-1 mt-[20px] lg:mt-0 ">
            <div className="flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl lg:h-[200px] lg:w-[200px]">
              <img
                src={CSharp}
                alt=" C-sharp logo"
                className="w-auto h-[76px] lg:h-[130px]"
              />
            </div>
          </div>
          <div className="lg:flex-1  mt-[20px] lg:mt-[40px]">
            <div className=" flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl  lg:h-[200px] lg:w-[200px]">
              <img
                src={CSharp}
                alt=" C-sharp logo"
                className="w-auto h-[76px]"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 mt-7 ">
          <div className="lg:flex-1 mt-[20px]">
            <div className="flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl  lg:h-[200px] lg:w-[200px]">
              <img
                src={CSharp}
                alt=" C-sharp logo"
                className="w-auto h-[76px]"
              />
            </div>
          </div>
          <div className="lg:flex-1 mt-[20px] lg:mt-[40px]">
            <div className="flex justify-center items-center bg-[#F7F7F7] hover:bg-[#E5540A] rounded-[20px] h-[120px] w-[120px] drop-shadow-2xl  lg:h-[200px] lg:w-[200px]">
              <img
                src={CSharp}
                alt=" C-sharp logo"
                className="w-auto h-[76px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
