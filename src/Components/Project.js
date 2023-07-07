import React from "react";
import weatherApp from "../assets/Weather App.png";
import todoApp from "../assets/WebTick.png";
import calculator from "../assets/Calculator.png";

export default function Project() {
  return (
    <div className="bg-slate-200 py-8 " id="projects">
      <h2
        className="text-5xl font-mono font-medium text-blue-500 text-center"
      >
        Projects
      </h2>
      <div className="my-6 flex flex-row flex-wrap px-4 justify-evenly gap-6">
        <div className="flex flex-col justify-center items-center border-2 border-blue-200 shadow-md py-4 w-3/4 md:w-2/4 bg-blue-200 rounded-lg" style={{minWidth:"250px"}}>
          <img src={weatherApp} alt="weather app" className=" object-contain w-11/12" style={{aspectRatio:"4/2" , minHeight:"180px" , minWidth:"200px"}} />
          <a href="https://anuj-1712.github.io/Weather-App/" target="_blank" rel="noreferrer" className="text-2xl sm:text-3xl mt-4 text-black font-bold">Weather App <i className="fa-solid fa-up-right-from-square text-red-500"></i></a>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-blue-200 shadow-md py-4 w-3/4 md:w-2/4 bg-blue-200 rounded-lg" style={{minWidth:"250px"}}>
          <img src={todoApp} alt="Todo App"  className=" object-contain w-11/12" style={{aspectRatio:"4/2" , minHeight:"180px" , minWidth:"200px"}}/>
          <a href="https://anuj-1712.github.io/Todo-app/" target="_blank" rel="noreferrer" className="text-2xl sm:text-3xl mt-4 text-black font-bold">Todo App <i className="fa-solid fa-up-right-from-square text-red-500"></i></a>
        </div>
        <div className="flex flex-col justify-center items-center border-2 border-blue-200 shadow-md py-4 w-3/4 md:w-2/4 bg-blue-200 rounded-lg" style={{minWidth:"250px"}}>
          <img src={calculator} alt="Calculator"  className=" object-contain w-11/12" style={{aspectRatio:"4/2" , minHeight:"180px" , minWidth:"200px"}}/>
          <a href="https://anuj-1712.github.io/Calculator/" target="_blank" rel="noreferrer" className="text-2xl sm:text-3xl mt-4 text-black font-bold">Calculator <i className="fa-solid fa-up-right-from-square text-red-500"></i></a>
        </div>
      </div>
    </div>
  );
}
