import "./Header.css";
import logo from "../assets/logo.svg";
import { VscGithub, VscTwitter } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="socials">
        <div className="social icon">
          <VscGithub />
        </div>
        <div className="social icon">
          <VscTwitter />
        </div>
        <div className="social icon">
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
}
