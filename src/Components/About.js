import React from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

export default function About() {
  return (
    <>
      <div
        className="flex flex-wrap sm:flex-row flex-col py-12 bg-slate-200"
        id="about"
      >
        <div className="flex sm:justify-end justify-center sm:w-1/2 w-full sm:pr-8">
          <img
            src="https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="anuj"
            className="sm:w-10/12 lg:w-8/12 w-9/12"
            style={{
              minWidth: "250px",
              height: "48vh",
              minHeight: "350px",
              maxHeight: "550px",
            }}
          ></img>
        </div>
        <div className="flex flex-col gap-4 sm:w-1/2 w-full px-8 mt-8 sm:mt-0  sm:items-start items-center">
          <h3 className="xl:text-4xl lg:text-3xl text-2xl text-black font-mono ">
            Hi , My Name is <b className="text-blue-500">Anuj</b>
          </h3>
          <p className="font-sans xl:text-2xl lg:text-1xl sm:text-sm">
            I am an aspiring Front-end Developer and currently seeking for
            internship and freelance oppurtunities to furnish my skills and gain
            extensive knowledge in front end development thorugh working on real
            time projects.
          </p>
          <div className="flex flex-col mt-2 lg:mt-4 w-full gap-4">
            <p className="xl:text-3xl lg:text-2xl sm:text-1xl font-sans">
              <b className="text-blue-500">Name</b> : Anuj Choudhary
            </p>
            <p className="xl:text-3xl lg:text-2xl sm:text-1xl font-sans">
              <b className="text-blue-500">Age</b> : 19
            </p>
            <p className="xl:text-3xl lg:text-2xl sm:text-1xl font-sans">
              <b className="text-blue-500">Location</b> : Delhi,India
            </p>
            <p className="xl:text-3xl lg:text-2xl sm:text-1xl font-sans">
              <b className="text-blue-500">Email</b> : Anuj00000010@gmail.com
            </p>
          </div>
          <div className="flex gap-4 self-start items-center">
            <h4 className="xl:text-3xl lg:text-2xl text-1xl font-sans text-blue-500 font-bold">
              Find me on :
            </h4>
            <button className="w-12 rounded-lg hover:bg-red-500 hover:text-white">
              <a
                href="https://www.linkedin.com/in/anuj-choudhary-a5403223b/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={linkedin}
                  className="sm:h-8 sm:w-8 xl:h-12 xl:w-12 object-cover"
                  alt="linkedin profile"
                />
              </a>
            </button>
            <button className="w-12 rounded-lg hover:bg-red-500 hover:text-white">
              <a
                href="https://github.com/anuj-1712"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={github}
                  className="sm:h-8 sm:w-8 xl:h-12 xl:w-12 object-cover"
                  alt="github profile"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
