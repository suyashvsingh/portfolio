import React from "react";
import links from "../data/links.json";

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
          className="bg-[#ccd6f6] p-2 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2 rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          cols="30"
          rows="7"
          className="bg-[#ccd6f6] p-2 rounded"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-cyan-900 hover:border-cyan-900 px-4 py-3 my-8 mx-auto flex items-center rounded">
          Let's Collaborate
        </button>
      </form>
      <div className="font-bold text-sm max-w-[600px] w-full text-gray-300 grid grid-cols-3 gap-4 mt-6">
        {links.map((link) => (
          <a href={link.profileUrl} target="__blank">
            <div className="cursor-pointer shadow-md shadow-[#040c16] hover:scale-110 duration-500 flex justify-center items-center rounded py-2">
              <img
                src={link.imageUrl}
                className="h-14 mx-auto"
                alt={link.platform}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
