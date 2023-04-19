import { VscGithub, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";
import { HiMoon, HiSun } from "react-icons/hi";
import { MdOutlineCancel } from "react-icons/md";
import "./Menu.css";
export default function Menu({ isDarkMode, toggleDarkMode }) {
  const hideMenu = () => {
    const menu = document.getElementsByClassName("mobile-menu");
    for (let i = 0; i < menu.length; i++) {
      menu[i].style.display = "none";
    }
  };

  return (
    <div className="mobile-menu">
      <div className="mobile-header">
        <div className=" mobile-theme icon">
          {isDarkMode ? (
            <HiSun className="mobile-sun" onClick={toggleDarkMode} />
          ) : (
            <HiMoon onClick={toggleDarkMode} />
          )}
        </div>
        <div>
          <MdOutlineCancel onClick={hideMenu} />
        </div>
      </div>
      <div className="menu-items">
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
      <div className="mobile-socials">
        <div>
          <VscGithub />
        </div>
        <div>
          <VscTwitter />
        </div>
        <div>
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
}
