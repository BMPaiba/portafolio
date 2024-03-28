import React from "react";
import image from "./../assets/saludo.png";

export default function About() {
  const aboutOne =
    "Soy Brian, un apasionado desarrollador web con una sólida formación en tecnologías como JavaScript, React, Redux, Node.js, Express, Sequelize y PostgreSQL.";
  const aboutTwo =
    "Me destaco por mi enfoque centrado en la calidad y la eficiencia en cada proyecto en el que me involucro. Estoy siempre buscando nuevas oportunidades para aplicar y expandir mis habilidades en el desarrollo web.";
  return (
    <>
      <div className="flex items-center justify-around ">
        <div
          id="about"
          className="flex flex-col items-start justify-center h-screen w-[30%] max-w-[50%] "
        >
          <h2 className="text-5xl font-semibold text-Green dark:text-white mb-4 pb-10">
            Quién Soy?
          </h2>
          <p className="pb-6 text-lg">{aboutOne}</p>
          <p className="text-lg">{aboutTwo}</p>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}
