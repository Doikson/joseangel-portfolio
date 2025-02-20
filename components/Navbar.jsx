"use client";

import React, { useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { IoMenu, IoClose } from "react-icons/io5";
import Link from "next/link"; // Importar Link

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-black z-50 shadow-md">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-white hover:text-[#0084ff]">./~</h1>

        <ul className="hidden md:flex">
          <li className="p-4 text-white hover:text-[#0084ff]">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-white hover:text-[#0084ff]">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 text-white hover:text-[#0084ff]">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-4 text-white hover:text-[#0084ff]">
            <Link href="/contact">Contact</Link>
          </li>
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

        <div onClick={handleNav} className="block md:hidden cursor-pointer text-white">
          {nav ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>

        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black transition-all duration-300 z-50" : "fixed left-[-100%] transition-all duration-300"}>
          <h1 className="fixed left-5 text-3xl font-bold text-white">./~</h1>
          <ul className="uppercase p-10">
            <li className="p-4 text-white hover:text-[#0084ff] border-b" onClick={handleNav}>
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-white hover:text-[#0084ff] border-b" onClick={handleNav}>
              <Link href="/about">About</Link>
            </li>
            <li className="p-4 text-white hover:text-[#0084ff] border-b" onClick={handleNav}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className="p-4 text-white hover:text-[#0084ff] border-b" onClick={handleNav}>
              <Link href="/contact">Contact</Link>
            </li>
            <li className="p-4">
              <a
                href="https://github.com/Doikson/joseangel-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,132,255,0.8)]"
                onClick={handleNav}
              >
                <VscGithub className="w-10 h-10 text-white" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
