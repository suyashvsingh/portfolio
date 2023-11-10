import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-cyan-800">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>Hi, know more about me</p>
          </div>
          <div className="text-justify">
            As a web developer, I am passionate about creating innovative and
            user-friendly web applications using cutting-edge technologies. I am
            currently pursuing Integrated B.Tech and M.Tech in Information
            Technology from Indian Institute of Information Technology (IIIT
            Gwalior), where I have acquired strong skills in Web Development,
            Cloud Computing and Machine Learning.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
