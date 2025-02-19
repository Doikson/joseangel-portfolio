// los archivos de React son tratados como componentes de servidor por defecto. Como useState es un hook de cliente, se usa "use client";
"use client";
//Se inporta el use state con react para darle funcionalidad

import React, { useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  // se declara una constante que recibe 2 valores
  // el valor 1 es nav y el valor 2 es una funcion
  // se declara un booleano en falso
  const [nav, setNav] = useState(false)

  //Se declara una funcion que hace que se niegue el valor nav
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center p-4">
      {/* Logo de texto */}
      <h1 className="text-2xl font-bold text-white hover:text-[#0084ff]">./~</h1>

      {/* Menú de navegación */}
      <ul className="hidden md:flex">
        <li className="p-4 text-white hover:text-[#0084ff]">Home</li>
        <li className="p-4 text-white hover:text-[#0084ff]">About</li>
        <li className="p-4 text-white hover:text-[#0084ff]">Projects</li>
        <li className="p-4 text-white hover:text-[#0084ff]">Contact</li>
        {/* Icono de GitHub con enlace */}
        <li className="p-4">
          <a
            href="https://github.com/Doikson/joseangel-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,132,255,0.8)]"
          >
            <VscGithub className="w-10 h-10 text-white" />
          </a>
        </li>
      </ul>
      {/* Se hace la siguiente funcion para la longitud en la que aparecera el menu*/}
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <IoClose size={30} /> : <IoMenu size={30} />}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000]" : "fixed left-[-100%]"}>
        <h1 className="fixed left-5 text-3xl font-bold text-white ">./~</h1>
        <ul className="uppercase p-10 ">
          <li className="p-4 text-white hover:text-[#0084ff] border-b ">Home</li>
          <li className="p-4 text-white hover:text-[#0084ff] border-b ">About</li>
          <li className="p-4 text-white hover:text-[#0084ff] border-b ">Projects</li>
          <li className="p-4 text-white hover:text-[#0084ff] border-b ">Contact</li>
          <li className="p-4"><a
            href="https://github.com/Doikson/joseangel-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,132,255,0.8)]"
          >
            <VscGithub className="w-10 h-10 text-white" />
          </a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
