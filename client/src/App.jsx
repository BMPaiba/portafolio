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
      <div className="fixed inset-x-0 top-0 z-10">
        <Header />
      </div>
      <div className="w-[90%] md:w-[80%] max-w-[1240px] m-auto ">
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
