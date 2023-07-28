import React from "react";
import { IconContext } from "react-icons";
import { PiFileTextDuotone } from "react-icons/pi";

export default function Skills() {
  return (
    <>
      <IconContext.Provider value={{ className: "skill-icons" }}>
        <div className="flex flex-col gap-2 ml-6 mt-2">
          <div className="flex gap-1">
            <PiFileTextDuotone />
            <p className="text-sky-300">Html.md</p>
          </div>
          <div className="flex gap-1">
            <PiFileTextDuotone />
            <p className="text-sky-300">Css.MD</p>
          </div>
          <div className="flex gap-1">
            <PiFileTextDuotone />
            <p className="text-sky-300">JavaScript.md</p>
          </div>
          <div className="flex gap-1">
            <PiFileTextDuotone />
            <p className="text-sky-300">ReactJs.md</p>
          </div>
          <div className="flex gap-1">
            <PiFileTextDuotone />
            <p className="text-sky-300">TailwindCss.md</p>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
