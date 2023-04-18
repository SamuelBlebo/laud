import "./Header.css";
import logo from "../assets/logo.svg";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { HiMenuAlt3, HiMoon, HiSun } from "react-icons/hi";

export default function Header({ isDarkMode, toggleDarkMode }) {
  const showMenu = () => {
    const menu = document.getElementsByClassName("mobile-menu");
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.display = "block";
    }
  };
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="portfolio">Portfolio</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="icons">
        <div className="social icon">
          <VscGithub />
        </div>
        <div className="social icon">
          <VscTwitter />
        </div>
        <div className="social icon">
          <BsLinkedin />
        </div>
        <div className=" theme icon">
          {isDarkMode ? (
            <HiSun className="sun" onClick={toggleDarkMode} />
          ) : (
            <HiMoon onClick={toggleDarkMode} />
          )}
        </div>

        <div className="menu-icon icon">
          <HiMenuAlt3 onClick={showMenu} />
        </div>
      </div>
    </div>
  );
}
