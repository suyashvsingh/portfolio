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
          <div>
            I'm pursuing my Integrated B.Tech and M.Tech at the Indian Institute
            of Information Technology, Gwalior, from 2020-2025. I have a deep
            interest in Web development and Competitive Programming. I primarily
            work with the MERN stack. I'm also familiar with Redux Toolkit,
            Tailwind CSS and Docker.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
