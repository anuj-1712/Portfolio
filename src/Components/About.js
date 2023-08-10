import React from "react";

export default function About() {
  const numbers=[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]
  return (
    <>
      <div className="mx-4 h-[500px] lg:h-[700px]" id="about">
        <section className="flex justify-center items-center gap-4">
          <div className="px-2 border-r-2 border-[#0E2954] opacity-70">
            {
              numbers.map((num,index)=>{
                return(
                  <p key={index} className="text-[#FFF0F5] lg:text-xl sm:text-sm text-xs">{num}</p>
                )
              })
            }
          </div>
          <div>
            <div className="mb-1">
              <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                /**
              </p>
            </div>
            <div className="pl-2 border-l-2 border-[#0E2954] border-opacity-70 ">
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  About Me
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  Proficient in HTML, CSS, and JavaScript, and
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  familiar with modern frameworks like React
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  Knowledge of responsive design principles to
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  ensure seamless user experiences
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  across various devices.
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  Comfortable with version control systems like
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  *
                </p>
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  git for collaborative development.
                </p>
              </div>
              <div className="flex items-start gap-1">
                <p className="text-slate-400 lg:text-xl sm:text-sm text-xs">
                  */
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
