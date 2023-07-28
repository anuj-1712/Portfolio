import React from "react";
import { IconContext } from "react-icons";
import { GoDotFill } from "react-icons/go";

export default function Header() {
  return (
    <div className="flex items-center w-full h-8 bg-[#000000] fixed top-0 z-10">
      <div className="flex gap-2 ml-2">
        <IconContext.Provider value={{color:"#EF6262"}}>
          <GoDotFill />
        </IconContext.Provider>
        <IconContext.Provider value={{color:"#FFE5AD"}}>
          <GoDotFill />
        </IconContext.Provider>
        <IconContext.Provider value={{color:"#93db8c"}}>
          <GoDotFill />
        </IconContext.Provider>
      </div>
      <div className="flex justify-center w-10/12">
      <p className="text-sm text-slate-400 opacity-70 rubik">Anuj_Choudhary</p>
      </div>
    </div>
  );
}
