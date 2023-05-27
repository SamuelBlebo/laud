import "./Hero.css";
import profile from "../assets/Profile.jpeg";
export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-item hero-section-text">
          <div className="hero-text-title">
            <h1>App & Software Developer</h1>
          </div>
          <div className="hero-sub-text">
            <p>Laud Miller</p>
          </div>
          <div className="contact-button">
            <button className="button">Contact Me</button>
          </div>
        </div>
        <div className="hero-item hero-section-image">
          <img src={profile} alt="Profile" className="profile-image" />
        </div>
      </div>
    </div>
  );
}
