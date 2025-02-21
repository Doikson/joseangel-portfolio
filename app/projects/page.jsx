import React from "react";
import { FaPython, FaJs, FaGithub, FaExternalLinkAlt, FaHtml5, FaCss3Alt } from "react-icons/fa"; // React Icons for tech icons
import { SiPandas } from "react-icons/si"; // Pandas icon from react-icons

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-6 min-h-screen mt-24 animate-slide">
      {/* Project 1 - InstaFollowListPy */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[400px] flex flex-col hover:scale-105 transition-transform duration-300 ">
        <h2 className="text-2xl font-semibold mb-2 text-center">InstaFollowListPy</h2>
        <p className="mb-4 text-center flex-grow">
          Automation of Instagram follower extraction, reducing manual analysis time by 90% using the Pandas library.
        </p>
        <div className="flex justify-center gap-4 mb-4 border-b p-3">
          <a
            href="https://github.com/Doikson/InstaFollowListPy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub Repo
          </a>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center">
            <FaPython className="mr-2" />
            Python
          </span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center">
            <SiPandas className="mr-2" />
            Pandas
          </span>
        </div>
      </div>

      {/* Project 2 - InstaFollowListJS */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[400px] flex flex-col hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-2 text-center">InstaFollowListJS</h2>
        <p className="mb-4 text-center flex-grow">
          Development of interactive web interface made with JavaScript, HTML, and CSS to facilitate the use of the program, allowing a more accessible experience for non-technical users.
        </p>
        <div className="flex justify-center gap-4 mb-4 border-b p-2">
          <a
            href="https://github.com/Doikson/InstaFollowListJS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub Repo
          </a>
          <a
            href="https://doikson.github.io/InstaFollowListJS/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live View
          </a>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center">
            <FaJs className="mr-2" />
            JavaScript
          </span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center">
            <FaHtml5 className="mr-2" />
            HTML
          </span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center">
            <FaCss3Alt className="mr-2" />
            CSS
          </span>
        </div>
      </div>

      {/* Other projects go here */}
    </div>
  );
};

export default Projects;
