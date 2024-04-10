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
    links: [
      {
        type: "demo",
        url: "https://www.youtube.com/watch?v=LbkMOQ-xVGk&feature=youtu.be",
        button: <FaPlayCircle />,
      },
    ],
  };
  const bootcampProject = {
    name: "Bootcamp Project",
    image: countries,
    description:
      "Desarrollé una aplicación web que muestra datos de países y sus actividades turísticas, permitiendo la agregación de nuevas actividades. Implementé una Landing Page y un Home con tarjetas de países, botón de detalle y paginación, además de la vista detallada de países con información como población, continente y actividades turísticas. Utilicé tecnologías como HTML, CSS, JavaScript, React y Node.js para crear una interfaz intuitiva y funcional que mejora la experiencia del usuario y brinda información relevante sobre los países.",
    links: [
      {
        type: "github",
        url: "https://github.com/BMPaiba/PI-Countries-",
        button: <FaGithub />,
      },
      {
        type: "deploy",
        url: "https://countries-wzre.onrender.com/",
        button: <FaExternalLinkAlt />,
      },
    ],
  };
  const rickmortyProject = {
    name: "Rick & Morty App",
    image: rickmorty,
    description: `Desarrollé una aplicación web basada en la serie de televisión "Rick & Morty" que tenía como objetivo proporcionar información detallada sobre los personajes, episodios y ubicaciones de la serie. La aplicación utilizaba una API pública de "Rick & Morty" para obtener los datos necesarios y mostrarlos de manera interactiva y atractiva para los usuarios.`,
    links: [
      {
        type: "github",
        url: "https://github.com/BMPaiba/rick-and-morty-ft45a",
        button: <FaGithub />,
      },
      {
        type: "deploy",
        url: "https://rickandmorty-i825.onrender.com/",
        button: <FaExternalLinkAlt />,
      },
    ],
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center flex-col justify-around  pt-16"
        id="projects"
      >
        <div className=" flex  items-start justify-start pl-14 w-full">
          <h3 className="text-5xl font-semibold text-Green pb-10">Proyectos</h3>
        </div>
        <div className="md:flex flex-col gap-12">
          <Project {...charlieProject} />
          <Project {...bootcampProject} />
          <Project {...rickmortyProject} />
        </div>
      </div>
    </>
  );
}
