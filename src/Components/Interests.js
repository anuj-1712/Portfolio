import React from "react";
import { IconContext } from "react-icons";
import { PiFileTextDuotone} from "react-icons/pi"

export default function Interests() {
  return (
    <>
      <IconContext.Provider value={{ className: "interest-icons" }}>
        <div className="flex flex-col gap-2 ml-6 mt-2">
          <div className="flex gap-1">
            <PiFileTextDuotone />
            <p className="text-sky-300">FootBall.md</p>
          </div>
          <div className="flex gap-1">
            <PiFileTextDuotone />
            <p className="text-sky-300">Gaming.md</p>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
