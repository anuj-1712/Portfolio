import React from "react";
import burgerIcon from "../assets/burgericon.png";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const openNav = () =>{
    document.getElementById("sidenav").style.width = "200px"
  }
  const closeNav = () =>{
    document.getElementById("sidenav").style.width = "0px"
  }
  return (
    <>
      <div className="flex w-full justify-between">
        <nav className="flex w-screen justify-between pt-6 mb-6 items-center h-1/2">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-white ml-8 lg:ml-28 xl:ml-40">
            Anuj
          </h1>
          <ul className="sm:flex justify-evenly gap-4 w-1/2 items-center hidden ">
            <li>
              <a href="#home" className="font-sans lg:text-2xl text-white hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="font-sans lg:text-2xl text-white hover:text-green-400">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="font-sans lg:text-2xl text-white hover:text-green-400">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="font-sans lg:text-2xl text-white hover:text-green-400">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={openNav}>
          <img
            src={burgerIcon}
            alt="burger icon"
            className="sm:hidden block h-6 mr-20"
          />
        </button>
      </div>
      <Sidebar closeNav={closeNav}/>
    </>
  );
}
