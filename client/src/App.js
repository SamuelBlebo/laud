import "./App.css";

// Components
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import WhatIDo from "./Components/WhatIDo";
import Portfolio from "./Components/Portfolio";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <WhatIDo />
      <Portfolio />
      <ContactMe />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
