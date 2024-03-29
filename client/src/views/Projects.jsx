import React from "react";
import charlie from "../assets/charlie.png";
import rickmorty from "../assets/rickmorty.jpg";
import countries from "../assets/countries.png";
import { FaPlayCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Project from "./Project";

export default function Projects() {
  const charlieProject = {
    name: "Charlie App",
    image: charlie,
    description:
      "Desarrollé un marketplace de comercios con franquicias independientes, pagos por MercadoPago, inicio de sesión con Google/Facebook/Email, visualización de productos mediante QR,reembolsos de compras y seguridad en las transacciones. Mejoré habilidades de trabajo en equipo y planificación",
    buttons: [<FaPlayCircle />],
  };
  const bootcampProject = {
    name: "Bootcamp Project",
    image: countries,
    description:
      "Desarrollé un marketplace de comercios con franquicias independientes, pagos por MercadoPago, inicio de sesión con Google/Facebook/Email, visualización de productos mediante QR,reembolsos de compras y seguridad en las transacciones. Mejoré habilidades de trabajo en equipo y planificación",
    buttons: [<FaGithub />, <FaExternalLinkAlt />],
  };
  const rickmortyProject = {
    name: "Rick & Morty App",
    image: rickmorty,
    description:
      "Desarrollé un marketplace de comercios con franquicias independientes, pagos por MercadoPago, inicio de sesión con Google/Facebook/Email, visualización de productos mediante QR,reembolsos de compras y seguridad en las transacciones. Mejoré habilidades de trabajo en equipo y planificación",
    buttons: [<FaGithub />, <FaExternalLinkAlt />],
  };

  return (
    <>
      <div
        className="flex items-center flex-col justify-around h-screen pt-16"
        id="projects"
      >
        <div className=" flex  items-start justify-start pl-14 w-full">
          <h3 className="text-5xl font-semibold text-Green pb-10">Proyectos</h3>
        </div>
        <div className="md:flex flex-col gap-12">
          <Project
            name={charlieProject.name}
            image={charlieProject.image}
            description={charlieProject.description}
            buttons={charlieProject.buttons}
          />
          <Project
            name={bootcampProject.name}
            image={bootcampProject.image}
            description={bootcampProject.description}
            buttons={bootcampProject.buttons}
          />
          <Project
            name={rickmortyProject.name}
            image={rickmortyProject.image}
            description={rickmortyProject.description}
            buttons={rickmortyProject.buttons}
          />
        </div>
      </div>
    </>
  );
}
