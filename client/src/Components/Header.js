import React from "react";
import Logo from "../Assets/LogoLaud.png";

export default function Header() {
  return (
    <div className="header w-auto h-[70px] bg-[#000000] text-[#fff]  border-[#E5540A] border-b-2 flex flex-row items-center justify-between ">
      <div className="logo">
        <img src={Logo} alt="Logo" className="h-[60px] w-[60px] ml-[25px]" />
      </div>
      <div className="navigation hidden xl:block ">
        <ul className="flex">
          <li className="mr-[34px]">
            <a href="/" className="text-[#E5540A] hover:text-[#E5540A]">
              Home
            </a>
          </li>
          <li className="mr-[34px]">
            <a href="/" className=" hover:text-[#E5540A]">
              About
            </a>
          </li>
          <li className="mr-[34px]">
            <a href="/" className=" hover:text-[#E5540A]">
              Services
            </a>
          </li>
          <li className="mr-[34px]">
            <a href="/" className=" hover:text-[#E5540A]">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/" className=" hover:text-[#E5540A]">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="email-me mr-[25px] px-5 py-[6px] bg-[#000] border-[#fff] border-2">
        Email Me
      </div>
    </div>
  );
}
