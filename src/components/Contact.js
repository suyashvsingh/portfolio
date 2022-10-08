import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/f8bffb17-ff88-4a30-85b1-e48fd6288857"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-800 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          cols="30"
          rows="7"
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-900 hover:border-cyan-900 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
      <div className="font-bold text-sm max-w-[600px] w-full text-gray-300 grid grid-cols-3 gap-4 mt-6">
        <a href="https://twitter.com/suyashvsingh" target="__blank">
          <div className="cursor-pointer shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
              className="h-14 mx-auto"
              alt="twitter"
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/suyashvsingh" target="__blank">
          <div className="cursor-pointer shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
              className="h-14 mx-auto"
              alt="linkedin"
            />
          </div>
        </a>
        <a href="https://github.com/suyashvsingh" target="__blank">
          <div className="cursor-pointer shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center">
            <img
              src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg"
              className="h-14 mx-auto"
              alt="github"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
