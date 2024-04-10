import React from "react";
import image from "../assets/inicio.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CV from "../assets/CV.pdf";

export default function Home() {
  const cvDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
    link.download = 'Brian Paiba';
    link.click();
  };
  const linkedin  = "https://www.linkedin.com/in/brian-m-paiba"
  const github = "https://github.com/BMPaiba"
  const handleClick = (linkedInUrl) => {
    window.open(linkedInUrl, '_blank');
  };
  const job = "<Full Stack Developer/>";
  return (
    <div className=" sm:h-screen flex justify-start items-center sm:justify-around flex-col pt-16 " id="home">
      <div className= " flex items-start justify-around w-full ">
        <div className="flex flex-col items-center sm:items-start justify-center">
          <h1 className="font-serif xl:text-7xl text-5xl font-bold pt-10 text-center sm:text-start">Hola, soy Brian</h1>
          <h3 className="pt-6 xl:text-4xl text-3xl font-medium text-Green text-center sm:text-start">{job}</h3>
          <p className="pt-14 text-lg text-center sm:text-start" >
            Disfruto creando diseños web y convertirlos en realidad con código
          </p>
          <img src={image} alt="" className="flex items-center justify-center sm:hidden py-10"/>
        </div>
        <div className=" items-center justify-center h-full hidden sm:flex">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flex gap-8">
        <button className="text-lg  hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" onClick={cvDownload}>Descargar CV</button>
        <button className="text-3xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" onClick={() => handleClick(github)}><FaGithub/></button>
        <button className="text-3xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" onClick={() => handleClick(linkedin)}><FaLinkedin/></button>
      </div>
    </div>
  );
}
