import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { PiFileTextDuotone } from "react-icons/pi";

export default function Education() {
  const [showEduArrow, setShowEduArrow] = useState(new Array(2).fill(true));

  const toggleArrowForward = (position) => {
    const updateArrowArr = showEduArrow.map((element, index) =>
      index === position ? !element : element
    );
    setShowEduArrow(updateArrowArr);
  };
  return (
    <>
      <div className="flex flex-col gap-2 ml-6 mt-2">
        {/* college section */}
        <div  className="flex flex-col">
          <div className="flex gap-2 items-center">
            {showEduArrow[0] && (
              <IconContext.Provider value={{ className: "arrow-icon" }}>
                <IoIosArrowForward onClick={() => toggleArrowForward(0)} />
              </IconContext.Provider>
            )}
            {!showEduArrow[0] && (
              <IconContext.Provider value={{ className: "arrow-icon" }}>
                <IoIosArrowDown onClick={() => toggleArrowForward(0)} />
              </IconContext.Provider>
            )}

            <IconContext.Provider value={{ className: "edu-sub-folder" }}>
              <GoFileDirectoryFill />
            </IconContext.Provider>
            <p className="text-white">University_of_Delhi</p>
          </div>
          {!showEduArrow[0] && (
            <IconContext.Provider value={{ className: "edu-icons" }}>
              <div className="flex flex-col gap-2 ml-6 mt-2">
                <div className="flex gap-1">
                  <PiFileTextDuotone />
                  <p className="text-sky-300">Bcom_hons.md</p>
                </div>
              </div>
            </IconContext.Provider>
          )}
        </div>

        {/* school section */}
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            {showEduArrow[1] && (
              <IconContext.Provider value={{ className: "arrow-icon" }}>
                <IoIosArrowForward onClick={() => toggleArrowForward(1)} />
              </IconContext.Provider>
            )}
            {!showEduArrow[1] && (
              <IconContext.Provider value={{ className: "arrow-icon" }}>
                <IoIosArrowDown onClick={() => toggleArrowForward(1)} />
              </IconContext.Provider>
            )}

            <IconContext.Provider value={{ className: "edu-sub-folder" }}>
              <GoFileDirectoryFill />
            </IconContext.Provider>
            <p className="text-white">Aadharshila_Vidyapeeth</p>
          </div>
          {!showEduArrow[1] && (
            <IconContext.Provider value={{ className: "edu-icons" }}>
              <div className="flex flex-col gap-2 ml-6 mt-2">
                <div className="flex gap-1">
                  <PiFileTextDuotone />
                  <p className="text-sky-300">XII.md</p>
                </div>
                <div className="flex gap-1">
                  <PiFileTextDuotone />
                  <p className="text-sky-300">X.md</p>
                </div>
              </div>
            </IconContext.Provider>
          )}
        </div>
      </div>
    </>
  );
}
