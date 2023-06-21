import { useState } from "react";
import "./App.css";

// Components
import Theme from "./Components/Theme";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleDarkMode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header isActive={isActive} onToggleDarkMode={handleToggleDarkMode} />
      <Hero isActive={isActive} />
      <About isActive={isActive} />
      <Theme isActive={isActive} onToggleDarkMode={handleToggleDarkMode} />
    </div>
  );
}

export default App;
