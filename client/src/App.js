import { useState } from "react";
import "normalize.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="App ">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Menu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}

export default App;
