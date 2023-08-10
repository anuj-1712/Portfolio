import React from "react";
import myImg from "../assets/FaceApp_1690984665910~2.jpg";

export default function Hero() {
  return (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-4 w-full h-screen max-h-[800px]  mt-20 items-center justify-center px-4" id="home">
        <section className="flex flex-col sm:gap-4 gap-0 md:w-[490px]">
          <p className="text-[#EEEDED] md:text-xl text-sm montserrat montserrat">
            Hello! I am
          </p>
          <h2 className="text-white md:text-5xl text-3xl ml-4  rubik">
            Anuj Choudhary
          </h2>
          <p className="text-[#69c1ed] md:text-xl text-sm montserrat">
            Front-end Developer
          </p>
          <div className="mt-4">
            <div>
              <p className="text-slate-400 sm:text-sm text-xs">/**</p>
            </div>
            <div className="flex items-start ml-2 gap-1">
              <p className="text-slate-400 sm:text-sm text-xs">*</p>
              <p className="text-slate-400 sm:text-sm text-xs">
                A passionate and creative frontend developer 
              </p>
            </div>
            <div className="flex items-start ml-2 gap-1">
              <p className="text-slate-400 sm:text-sm text-xs">*</p>
              <p className="text-slate-400 sm:text-sm text-xs">
              excited to embark on a journey of continuous learning 
              </p>
            </div>
            <div className="flex items-start ml-2 gap-1">
              <p className="text-slate-400 sm:text-sm text-xs">*</p>
              <p className="text-slate-400 sm:text-sm text-xs">
              and growth in the dynamic world of Front-end development.
              </p>
            </div>
            <div className="flex items-start ml-2 gap-1">
              <p className="text-slate-400 sm:text-sm text-xs">*/</p>
            </div>
          </div>
        </section>
        <img
          src={myImg}
          alt="anuj"
          className="w-8/12 sm:w-[40%] rounded-[10%] min-w-[280px] max-w-[350px] max-h-[400px]"
        />
      </div>
    </>
  );
}
