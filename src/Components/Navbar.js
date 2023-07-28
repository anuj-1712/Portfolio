import React from "react";
import { IconContext } from "react-icons";
import { ImFilesEmpty } from "react-icons/im";

export default function Navbar({openExplorer}) {
  return (
    <>
      <div className="flex w-full bg-black border-0 border-t-[1px] border-b-[1px] border-[#4b4747] fixed top-8 z-10">
        <a
          href="home"
          className="sm:text-sm text-xs text-slate-400 opacity-90 text-center sm:w-[120px] w-1/4 py-2 nav-links montserrat"
        >
          _hello
        </a>
        <a
          href="#about"
          className="sm:text-sm text-xs text-slate-400 opacity-90 text-center sm:w-[120px] w-1/4 py-2 border-r-[1px] border-l-[1px] border-[#4b4747] nav-links montserrat"
        >
          _about_me
        </a>
        <a
          href="#projects"
          className="sm:text-sm text-xs text-slate-400 opacity-90 text-center sm:w-[120px] w-1/4 py-2 border-r-[1px] border-[#4b4747] nav-links montserrat"
        >
          _projects
        </a>
        <IconContext.Provider value={{className:"file-icon"}}>
          <ImFilesEmpty onClick={openExplorer}/>
        </IconContext.Provider>
      </div>
    </>
  );
}
