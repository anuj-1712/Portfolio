import React from "react";

export default function Project() {

  const projects = [
    {
      id: 1,
      name: "Youtube Clone",
      description:
        "I built a Youtube-Clone using React, Tailwind CSS and Youtube api . Currently , This app allows the user to watch and enjoy videos , search particular videos and can also login by clicking on profile icon. New features will come soon... ",
      source: "https://github.com/anuj-1712/youtube-clone",
      url: "https://anuj-1712.github.io/youtube-clone/",
      imageUrl:
        "https://images.pexels.com/photos/6298412/pexels-photo-6298412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Resume Builder",
      description:
        "I built a Resume Builder site using React,Vite and Material Ui . This app helps user to build a professional resume on the basis of their experience .",
      source: "https://github.com/anuj-1712/Resume-Builder",
      url: "https://anuj-1712.github.io/Resume-Builder/",
      imageUrl:
        "https://designcuts.b-cdn.net/wp-content/uploads/2023/03/simple-resume-cv-template-editable.jpg",
    },
    {
      id: 3,
      name: "Todo App",
      description:
        "I built a common Todo app using React and Bootstrap. This app allows the users to add and keep a track of their to-do activities and also allows them to delete it . One key feature in this app is that user can also edit their todo list item , if they entered some wrong input.",
      source: "https://github.com/anuj-1712/Todo-app",
      url: "https://anuj-1712.github.io/Todo-app/",
      imageUrl:"https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <>
      <div className="w-11/12 md:w-9/12 md:mx-auto mx-4 h-screen" id="projects">
        <h2 className="text-white mb-8">// Personal Projects</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {projects.map((project,index) => {
            return (
              <div key={project.id} className="flex flex-col my-6 gap-6" style={{marginBottom:index === (projects.length - 1) ? "10rem" : ""}}>
                {/* project name and image */}
                <div className="flex flex-col gap-4 bg-[#020c18] border-[1px] border-[#4b4747] rounded-md px-4 py-4">
                  <h3 className="text-[#E7B10A] rubik">{project.name}</h3>
                  <div
                    className="w-full h-[350px] border-[1px] border-white opacity-80 rounded-lg"
                    style={{ backgroundImage: `url(${project.imageUrl})`,backgroundSize:"cover",backgroundRepeat:"no-repeat" }}
                  >
                    <a href={project.url} target="_blank" rel="noreferrer"><button className="bg-[#E7B10A] h-[30px] w-full relative top-[70%] font-bold hover:text-white">
                      See the project
                    </button></a>
                  </div>
                </div>

                {/* project description */}
                <p className="text-white text-sm montserrat">
                  {project.description}
                </p>
                <a href={project.source} target="_blank" rel="noreferrer"><button className="text-sky-300 h-12 w-40  border-[1px] border-[#4b4747] rounded-md hover:bg-sky-700 hover:text-white">View Source Code</button></a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
