import React from "react";

export default function Sidebar({closeNav}) {
  return (
    <>
      <div
        className="w-0 bg-white min-h-screen fixed top-0 left-0 z-10 overflow-hidden transition-all ease-out duration-150"
        id="sidenav"
        style={{ background: "linear-gradient(#0E2954, #0079FF)" }}
      >
        <button onClick={closeNav}>
          <i className="fa-solid fa-x fa-2x absolute text-white right-4 "></i>
        </button>
        <ul className="flex flex-col gap-8 mt-20 justify-center items-center">
          <li>
            <a href="#home" className="font-sans lg:text-2xl text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-sans lg:text-2xl text-white">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="font-sans lg:text-2xl text-white">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="font-sans lg:text-2xl text-white">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
