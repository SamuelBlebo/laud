import React from "react";
import Logo from "../Assets/LogoLaud.png";
import MobileMenuIcon from "../Assets/MobileMenuIcon.png";

export default function Header() {
  return (
    <div className="header w-auto h-[58px] lg:h-[70px] px-[25px] bg-[#000000] text-[#fff]  border-[#E5540A] border-b-2 flex flex-row items-center justify-between ">
      <div className="logo">
        <img
          src={Logo}
          alt="Logo"
          className=" w-[40px] h-[40px] lg:h-[60px]  lg:w-[60px] "
        />
      </div>
      <div className="navigation hidden lg:block ">
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
      <div className="email-me hidden lg:block mr-[25px] px-5 py-[6px] bg-[#000] border-[#fff] border-2">
        Email Me
      </div>
      <div className="mobile-menu-icon lg:hidden">
        <img src={MobileMenuIcon} alt="" className="h-[30px]" />
      </div>
    </div>
  );
}
