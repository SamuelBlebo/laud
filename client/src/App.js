import { useState, useEffect } from "react";
import "normalize.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Hero from "./components/Hero";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  //Toggle Dark mode for Header
  useEffect(() => {
    const header = document.getElementsByClassName("header")[0];
    if (header) {
      if (isDarkMode) {
        header.style.backgroundColor = "#151515";
      } else {
        header.style.backgroundColor = "#fff";
      }
    } else {
      console.error("Header element not found.");
    }
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="App ">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Hero />
      </div>
    </div>
  );
}

export default App;
