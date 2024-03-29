import React from "react";
import charlie from "../assets/charlie.png";
import { FaPlayCircle } from "react-icons/fa";

export default function Project({name, image, description,buttons}) {
  return (
    <>
      {" "}
      <div className="md:flex md:justify-around md:items-center md:gap-14">
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="w-[350px] md:max-w-[250px] m-auto"
          />
        </div>
        <div className="py-4 md:max-w-[600px]">
          <div className="flex  items-center  justify-around">
            <div>
              <h3 className="text-4xl py-4  text-Green">{name}</h3>
            </div>
            <div className="flex items-center justify-around gap-8">
                {
                  buttons.map((button, index) => (
                    <button key={index} className="text-3xl sm:text-4xl">{button}</button>
                  ))
                }
            </div>
          </div>
          <div>
            <p className="sm:text-lg ">{description} </p>
          </div>
        </div>
      </div>
    </>
  );
}
