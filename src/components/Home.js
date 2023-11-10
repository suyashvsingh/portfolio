import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-bold text-cyan-800">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Suyash Vikram Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Web Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>
        <div className="flex">
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-800 hover:border-cyan-800 group">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1xUivw3KWIKcYSBzenlkIKKMarwtGvYDn/view?usp=sharing"
            target="__blank"
          >
            <button className="text-white border-2 px-6 py-3 my-2 ml-4 flex items-center hover:bg-cyan-800 hover:border-cyan-800 group">
              View Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
