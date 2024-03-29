import React from "react";
import charlie from "../assets/charlie.png";
import rickmorty from "../assets/rickmorty.jpg";
import countries from "../assets/countries.png";
import { FaPlayCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <>
      <div
        className="flex items-center flex-col justify-around h-screen"
        id="projects"
      >
        <div className=" flex  items-start justify-start pl-28  mt-16 w-full">
          <h3 className="text-5xl font-semibold text-Green ">Proyectos</h3>
        </div>
        <div className="flex items-center justify-around  gap-28 px-28">
          <div>
            <img src={charlie} alt="" className="w-[500px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pr-8">
              <div>
                <h3 className="text-2xl text-Green">Charlie App</h3>
              </div>
              <div>
                <button>
                  <FaPlayCircle className="text-2xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm">
                Desarrollé un marketplace de comercios con franquicias
                independientes, pagos por MercadoPago, inicio de sesión con
                Google/Facebook/Email, visualización de productos mediante QR,
                reembolsos de compras y seguridad en las transacciones. Mejoré
                habilidades de trabajo en equipo y planificación
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around  gap-28 px-28">
          <div>
            <img src={countries} alt="" className="w-[500px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pr-8">
              <div>
                <h3 className="text-2xl text-Green">Bootcamp Project</h3>
              </div>
              <div className="flex gap-8">
                <button>
                  <FaGithub className="text-2xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" />
                </button>
                <button>
                  <FaExternalLinkAlt className="text-2xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm">
                Desarrollé un marketplace de comercios con franquicias
                independientes, pagos por MercadoPago, inicio de sesión con
                Google/Facebook/Email, visualización de productos mediante QR,
                reembolsos de compras y seguridad en las transacciones. Mejoré
                habilidades de trabajo en equipo y planificación
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around  gap-28 px-28">
          <div>
            <img src={rickmorty} alt="" className="w-[500px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pr-8">
              <div>
                <h3 className="text-2xl text-Green">Charlie App</h3>
              </div>
              <div className="flex gap-8">
                <button>
                  <FaGithub className="text-2xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" />
                </button>
                <button>
                  <FaExternalLinkAlt className="text-2xl hover:text-Green hover:scale-110 transition-transform duration-300 ease-in-out transform" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm">
                Desarrollé un marketplace de comercios con franquicias
                independientes, pagos por MercadoPago, inicio de sesión con
                Google/Facebook/Email, visualización de productos mediante QR,
                reembolsos de compras y seguridad en las transacciones. Mejoré
                habilidades de trabajo en equipo y planificación
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
