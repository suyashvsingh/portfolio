import React from "react";
import projects from "../data/projects.json";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full md:h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-800">
            Projects
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8">
          {projects.map((project) => (
            <div
              style={{
                backgroundImage: `url(${project.backgroundImageUrl})`,
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              <div className="font-bold text-2xl opacity-0 group-hover:opacity-100 text-center duration-500">
                <span>{project.name}</span>
                <div className="pt-8 text-center">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="__blank">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                  )}
                  <a href={project.codeUrl} target="__blank">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
