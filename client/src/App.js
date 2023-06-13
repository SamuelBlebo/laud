import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";

function App() {
  const [isActive, setIsActive] = useState(false);

  const handleToggleDarkMode = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="App">
      <Header isActive={isActive} onToggleDarkMode={handleToggleDarkMode} />
    </div>
  );
}

export default App;
