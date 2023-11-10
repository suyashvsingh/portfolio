import React from "react";
import skills from "../data/skills.json";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="my-4">
          <p className="text-4xl font-bold border-b-4 border-cyan-800 inline">
            Skills
          </p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center"
            >
              <img
                src={skill.imageUrl}
                className="w-20 mx-auto"
                alt={skill.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
