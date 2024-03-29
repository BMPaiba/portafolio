import React, { useState } from "react";
import Logo from "../assets/Logo-Blanco.png";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full h-16 px-10 pt-4 pb-4 fixed bg-[#202335] z-10">
        <div>
          <a href="#home">
            <img
              src={Logo}
              alt=""
              className="w-14 hover:scale-110 transition-transform duration-300 ease-in-out transform"
            />
          </a>
        </div>
        <div className="flex items-center justify-center gap-10 ">
          <a
            href="#home"
            className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform hidden md:block "
          >
            Inicio
          </a>
          <a
            href="#about"
            className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform hidden md:block"
          >
            Sobre mi
          </a>
          <a
            href="#projects"
            className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform hidden md:block"
          >
            Proyectos
          </a>
          <a
            href="#skills"
            className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform hidden md:block"
          >
            Habilidades
          </a>
          <a
            href="#contact"
            className="hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform hidden md:block"
          >
            Contacto
          </a>
          <button
            className={`md:hidden ${
              isMenuOpen
                ? "border-2 border-Green p-2 rounded-lg"
                : "border-2 border-gray-500 p-2 rounded-lg"
            }`}
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-y-0 mt-11 bg-pastel w-[50%] md:w-auto transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? "translate-x-full" : "translate-x-[2000%]"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="h-[50%] w-full bg-[#202335] top-4 relative right-0 z-10 flex flex-col items-center justify-center gap-4">
          <ul className=" w-3/5 h-4/5 flex flex-col items-center justify-around">
            <li>
              <a href="#home" onClick={closeMenu} >
                Inicio
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                Sobre mi
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
