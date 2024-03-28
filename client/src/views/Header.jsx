import React, { useState } from "react";
import Logo from "../assets/Logo-Blanco.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className="flex justify-between items-center w-full h-16 px-10 pt-4 pb-4 fixed bg-[#202335]">
    <div>
     <a href="#home"><img src={Logo} alt="" className="w-14 hover:scale-110 transition-transform duration-300 ease-in-out transform"/></a>
    </div>
    <div className="flex items-center justify-center gap-10 ">
      <a href="#home" className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform">Inicio</a>
      <a href="#about" className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform">Sobre mi</a>
      <a href="#projects" className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform">Proyectos</a>
      <a href="#skills" className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform">Habilidades</a>
      <a href="#contact" className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform">Contacto</a>
    </div>
    </div>
    </>
  );
}
