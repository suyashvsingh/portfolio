import React from "react";

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
          <div
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="font-bold text-2xl opacity-0 group-hover:opacity-100 text-center">
              <span>WeatherApp</span>
              <div className="pt-8 text-center">
                <a href="https://svs-weather.herokuapp.com/" target="__blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/suyashvsingh/weather"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://www.smartship.com/sites/default/files/smartship/get-delivery.png)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="font-bold text-2xl opacity-0 group-hover:opacity-100 text-center">
              <span>Amazon-clone</span>
              <div className="pt-8 text-center">
                <a
                  href="https://svs-amazon-clone.herokuapp.com/"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/suyashvsingh/amazon-clone"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(https://static.vecteezy.com/system/resources/thumbnails/007/343/533/small/yellow-quiz-time-banner-with-comic-style-background-suitable-for-use-for-promotional-designs-vector.jpg)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="font-bold text-2xl opacity-0 group-hover:opacity-100 text-center">
              <span>Quizzical</span>
              <div className="pt-8 text-center">
                <a href="https://svs-quizzical.netlify.app/" target="__blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/suyashvsingh/quizzical"
                  target="__blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
