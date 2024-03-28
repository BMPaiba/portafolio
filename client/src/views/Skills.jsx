import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSequelize } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { DiIllustrator } from "react-icons/di";
import { FaGitSquare } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { RiNpmjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { RiSettings3Fill } from "react-icons/ri";
import { SiMusicbrainz } from "react-icons/si";
import { GiSpiralBottle } from "react-icons/gi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiToolsFill } from "react-icons/ri";
import { MdPublishedWithChanges } from "react-icons/md";

export default function Skills() {
  const back = [
    { name: "Node.js", icon: <IoLogoNodejs className="text-Green" /> },
    { name: "Express", icon: <SiExpress className="" /> },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql className="text-[#5fabee]" />,
    },
    { name: "Sequelize", icon: <SiSequelize className="text-[#03aae8]" /> },
  ];

  const front = [
    { name: "HTML", icon: <FaHtml5 className="text-[#f75421]" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#2091eb]" /> },
    { name: "JavaScript", icon: <FaJs className="text-[#f7f700]" /> },
    { name: "React", icon: <RiReactjsLine className="text-[#50bbd7]" /> },
    { name: "Redux", icon: <TbBrandRedux className="text-[#7248b6]" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#15b8c5]" /> },
  ];
  const tool = [
    { name: "Figma", icon: <FaFigma className="" /> },
    { name: "Git", icon: <FaGitSquare className="text-[#e84e31]" /> },
    {
      name: "Visual Studio Code",
      icon: <TbBrandVscode className="text-[#1e97e8]" />,
    },
    { name: "npm", icon: <RiNpmjsFill className="text-[#bb2026]" /> },
  ];

  const soft = [
    { name: "Comunicación efectiva", icon: <MdMessage /> },
    { name: "Trabajo en equipo", icon: <AiOutlineTeam /> },
    {
      name: "Resolución de problemas", icon: <RiToolsFill />,
    },
    { name: "Creatividad", icon: <HiOutlineLightBulb /> },
    { name: "Adaptabilidad", icon: <MdPublishedWithChanges /> },
    { name: "Gestión del tiemp", icon: <AiOutlineClockCircle /> },
  ];

  return (
    <>
      <div className="flex items-center justify-center w-full ">
        <div></div>
        <div
          id="skills"
          className="h-screen flex flex-col items-start justify-around w-full  "
        >
          <div className=" flex  items-end justify-end pl-28  mt-16">
            <h3 className="text-5xl font-semibold text-Green ">Habilidades</h3>
          </div>
          <div className=" flex w-full  justify-around">
            <div className="">
              <h3 className="text-center  text-3xl ">Front</h3>
              <div className="grid grid-cols-3 gap-2">
                {front.map((s, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center  h-24 w-24"
                  >
                    <span className="text-4xl">{s.icon}</span>
                    <span className="mt-2 text-xs text-center">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-center  text-3xl ">Back</h3>
              <div className="grid grid-cols-3 gap-2">
                {back.map((s, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center  h-24 w-24"
                  >
                    <span className="text-4xl">{s.icon}</span>
                    <span className="mt-2 text-xs text-center">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full  justify-around">
            <div>
              <h3 className="text-center  text-3xl ">Soft</h3>
              <div className="grid grid-cols-3 gap-2">
                {soft.map((s, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center   h-24 w-24"
                  >
                    <span className="text-4xl">{s.icon}</span>
                    <span className="mt-2 text-xs text-center">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-center  text-3xl">Tools</h3>
              <div className="grid grid-cols-3 gap-2">
                {tool.map((s, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center  rounded-lg h-24 w-24"
                  >
                    <span className="text-4xl">{s.icon}</span>
                    <span className="mt-2 text-xs text-center">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
