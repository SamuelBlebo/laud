import { useState } from "react";
import "./App.css";

// Components
import Header from "./Components/Header";
import Hero from "./Components/Hero";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleDarkMode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header isActive={isActive} onToggleDarkMode={handleToggleDarkMode} />
      <Hero />
    </div>
  );
}

export default App;
