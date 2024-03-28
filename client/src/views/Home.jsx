import React from "react";
import image from "../assets/inicio.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  const job = "<Full Stack Developer/>";
  return (
    <div className="h-screen flex items-center justify-around flex-col pt-28  " id="home">
      <div className= " flex items-start justify-around w-full ">
        <div className="">
          <h1 className="font-serif text-7xl font-bold pt-10">Hola, soy Brian</h1>
          <h3 className="pt-6 text-4xl font-medium text-Green">{job}</h3>
          <p className="pt-14 text-lg" >
            Disfruto creando diseños web y convertirlos en realidad con código
          </p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flex gap-8">
        <button className="text-lg  hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" >Descargar CV</button>
        <button className="text-3xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform"><FaGithub/></button>
        <button className="text-3xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform"><FaLinkedin/></button>
      </div>
    </div>
  );
}
