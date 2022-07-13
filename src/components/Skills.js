import React from "react";

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
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/640px-C_Programming_Language.svg.png"
              className="w-20 mx-auto"
              alt="C"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"
              className="w-20 mx-auto"
              alt="C++"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png?w=360"
              className="w-20 mx-auto"
              alt="HTML"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              className="w-20 mx-auto"
              alt="CSS"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
              className="w-20 mx-auto"
              alt="Tailwind CSS"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              className="w-20 mx-auto"
              alt="CSS"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
              className="w-20 mx-auto"
              alt="NodeJS"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              className="w-20 mx-auto"
              alt="ReactJS"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://avatars.githubusercontent.com/u/13142323?v=4"
              className="w-20 mx-auto"
              alt="Redux Toolkit"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170943.png"
              className="w-20 mx-auto"
              alt="MongoDB"
            />
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://iconape.com/wp-content/png_logo_vector/linux-tux-logo.png"
              className="w-20 mx-auto"
              alt="Linux"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
