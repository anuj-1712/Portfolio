import React, { useState } from "react";
import { IconContext } from "react-icons";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { ImFilesEmpty } from "react-icons/im";
import Skills from "./Skills";
import Interests from "./Interests";
import Education from "./Education";

export default function Explorer({ closeExplorer }) {
  const [showArrow, setShowArrow] = useState(new Array(3).fill(true));

  const toggleArrowForward = (position) => {
    const updateArrowArr = showArrow.map((element, index) =>
      index === position ? !element : element
    );
    setShowArrow(updateArrowArr);
  };

  return (
    <div
      className=" hidden md:flex flex-col fixed top-[32px] right-0 bg-[#00001a] w-full sm:w-1/4 px-4 gap-4 h-full z-10"
      id="explorer"
    >
      <IconContext.Provider value={{ className: "file-icon" }}>
        <ImFilesEmpty onClick={closeExplorer} />
      </IconContext.Provider>
      <h2 className="text-white">Explorer</h2>

      {/* skills section */}
      <section className="flex flex-col">
        <div className="flex gap-2 items-center ">
          {showArrow[0] && (
            <IconContext.Provider value={{ className: "arrow-icon" }}>
              <button onClick={() => toggleArrowForward(0)}>
                <IoIosArrowForward />
              </button>
            </IconContext.Provider>
          )}

          {!showArrow[0] && (
            <IconContext.Provider value={{ className: "arrow-icon" }}>
              <button>
                <IoIosArrowDown onClick={() => toggleArrowForward(0)} />
              </button>
            </IconContext.Provider>
          )}

          <IconContext.Provider value={{ className: "skills-folder" }}>
            <GoFileDirectoryFill />
          </IconContext.Provider>
          <div className="flex flex-col gap-2">
            <p className="text-white">My Skills</p>
          </div>
        </div>
        {!showArrow[0] && <Skills />}
      </section>

      {/* education section */}
      <section className="flex flex-col">
        <div className="flex gap-2 items-center">
          {showArrow[1] && (
            <IconContext.Provider value={{ className: "arrow-icon" }}>
              <button onClick={() => toggleArrowForward(1)}>
                {" "}
                <IoIosArrowForward />
              </button>
            </IconContext.Provider>
          )}
          {!showArrow[1] && (
            <IconContext.Provider value={{ className: "arrow-icon" }}>
              <button>
                <IoIosArrowDown onClick={() => toggleArrowForward(1)} />
              </button>
            </IconContext.Provider>
          )}

          <IconContext.Provider value={{ className: "edu-folder" }}>
            <GoFileDirectoryFill />
          </IconContext.Provider>
          <p className="text-white">My Education</p>
        </div>
        {!showArrow[1] && <Education />}
      </section>

      {/* interests section */}
      <section className="flex flex-col">
        <div className="flex gap-2 items-center">
          {showArrow[2] && (
            <IconContext.Provider value={{ className: "arrow-icon" }}>
              <button onClick={() => toggleArrowForward(2)}>
                <IoIosArrowForward />
              </button>
            </IconContext.Provider>
          )}
          {!showArrow[2] && (
            <IconContext.Provider value={{ className: "arrow-icon" }}>
              <button>
                <IoIosArrowDown onClick={() => toggleArrowForward(2)} />
              </button>
            </IconContext.Provider>
          )}

          <IconContext.Provider value={{ className: "interests-folder" }}>
            <GoFileDirectoryFill />
          </IconContext.Provider>
          <p className="text-white">My Interests</p>
        </div>
        {!showArrow[2] && <Interests/>}
      </section>
    </div>
  );
}
