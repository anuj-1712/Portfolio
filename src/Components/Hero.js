import React from "react";
import heroImg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <div className="flex sm:flex-row flex-col-reverse mt-8 justify-around px-4 sm:px-20 pb-8 items-center">
      <div className="flex flex-col gap-4 justify-start">
        <h2 className="font-bold font-serif text-3xl sm:text-2xl lg:text-5xl text-white">
          Hello!
        </h2>
        <h2 className="font-bold font-serif text-3xl sm:text-2xl lg:text-5xl text-white">
          I am a Frontend Developer
        </h2>
        <p className="font-serif font-medium lg:text3xl text-white">
        Well versed in creating Responsive
            Designs . Also i have build some small personal projects using Html
            , CSS , Java script and Reactjs
        </p>
        <button className=" w-28 font-bold md:w-1/4 bg-white lg:text-2xl rounded-lg py-2 hover:bg-red-400 hover:text-white">
          Resume
        </button>
      </div>
      <div>
        <img
          src={heroImg}
          alt="animated developer"
          className="w-60 sm:w-full"
          style={{ height: "60vh", minHeight: "550px", minWidth: "250px" }}
        ></img>
      </div>
    </div>
  );
}
