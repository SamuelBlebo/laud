import React from "react";
import Logo from "../Assets/LogoLaud.png";

export default function Header() {
  return (
    <div className="header w-auto h-[70px] bg-slate-500 flex flex-row items-center justify-between ">
      <div className="logo">
        <img src={Logo} alt="Logo" className="h-[60px] w-[60px] ml-[25px]" />
      </div>
      <div className="navigation ">
        <ul className="flex">
          <li className="mr-[34px]">Home</li>
          <li className="mr-[34px]">About</li>
          <li className="mr-[34px]">Services</li>
          <li className="mr-[34px]">Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="email-me mr-[25px]">Email Me Button</div>
    </div>
  );
}
