import React from "react";
import img from "../assets/contact.png";
import ClipboardJS from "clipboard";
import { FaCopy } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Contact() {
  const clipboard = new ClipboardJS(".btn");

  clipboard.on("success", function (e) {
    console.info("Texto copiado: ", e.text);
    e.clearSelection();
  });

  clipboard.on("error", function (e) {
    console.error("Error al intentar copiar el texto: ", e.action);
  });

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-around  pt-16 w-full" id="contact" >
        <div className="flex w-full  pl-28">
          <h3 className="text-Green text-5xl font-semibold ">Contáctame</h3>
        </div>
        <div className=" flex items-center justify-around  w-full">
          <div className="flex flex-col items-center gap-6 ">
            <img
              src={img}
              alt=""
              className="w-[323px] h-[323px] object-cover"
            />
            <div className="flex justify-center gap-3 ">
              <p className="border-[#B1E392] border-b">
                brianmanuelpaiba@outlook.es
              </p>
              <button
                class="btn"
                data-clipboard-text="brianmanuelpaiba@outlook.es"
              >
                <FaCopy />
              </button>
            </div>
          </div>
          <div>
            <form class="w-96 px-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_email"
                  id="floating_email"
                  class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-Green focus:outline-none focus:ring-0 focus:border-Green peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-Green peer-focus:dark:text-Green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nombre
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_password"
                  id="floating_password"
                  class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-Green focus:outline-none focus:ring-0 focus:border-Green peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Green peer-focus:dark:text-Green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div class="grid md:grid-cols-1 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-Green focus:outline-none focus:ring-0 focus:border-Green peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_first_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Green peer-focus:dark:text-Green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Asunto
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <textarea
                    name="floating_last_name"
                    id="floating_last_name"
                    rows="4" // Establece la altura a 4 líneas
                    class="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-Green focus:outline-none focus:ring-0 focus:border-Green peer resize-none"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    for="floating_last_name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-Green peer-focus:dark:text-Green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Mensaje
                  </label>
                </div>
              </div>

              <div class="w-1/2 mx-auto mt-2">
                {" "}
                {/* Contenedor para el botón */}
                <button
                  type="submit"
                  class=" border-2 border-gray-300 hover:border-Green text-white hover:text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center hover:scale-110 transition-transform duration-300 ease-in-out transform "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div>
        <p className="text-xs">© Brian Paiba. Todos los derechos reservados.</p>

        </div>
      </div>
    </>
  );
}