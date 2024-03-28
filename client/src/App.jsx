import { useState } from "react";
import Header from "./views/Header";
import Contact from "./views/Contact";
import About from "./views/About";
import Home from "./views/Home";
import Skills from "./views/Skills";
import Projects from "./views/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="w-[80%] max-w-[1240px] m-auto">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
