import React from "react";
import {FaPython,FaJs,FaGithub,FaExternalLinkAlt,FaHtml5,FaCss3Alt,FaWordpress,FaReact} from "react-icons/fa";
import { SiPandas, SiYoast, SiFramer } from "react-icons/si";

const Projects = () => {
  return (
<div className="flex flex-wrap justify-center gap-x-8 gap-y-10 px-6 py-40">

      {/* Project 0 - My Portfolio */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[500px] flex flex-col hover:scale-105 transition-transform duration-300">
        <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Portfolio Preview" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center">My Portfolio</h2>
        <p className="mb-4 text-center flex-grow">
          Personal portfolio built to showcase my skills, projects, and contact information. Fully responsive and made with React.
        </p>
        <div className="flex justify-center gap-4 mb-4 border-b p-2">
          <a
            href="https://github.com/Doikson/joseangel-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 flex items-center"
          >
            <FaGithub className="mr-2" />
            GitHub Repo
          </a>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaHtml5 className="mr-2" />HTML</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaCss3Alt className="mr-2" />CSS</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaJs className="mr-2" />JavaScript</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaReact className="mr-2" />React</span>
        </div>
      </div>

      {/* Project 1 - InstaFollowListPy */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[500px] flex flex-col hover:scale-105 transition-transform duration-300">
        <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Instagram Automation Preview" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
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
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaPython className="mr-2" />Python</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><SiPandas className="mr-2" />Pandas</span>
        </div>
      </div>

      {/* Project 2 - InstaFollowListJS */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[500px] flex flex-col hover:scale-105 transition-transform duration-300">
        <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Web Interface Preview" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
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
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaJs className="mr-2" />JavaScript</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaHtml5 className="mr-2" />HTML</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaCss3Alt className="mr-2" />CSS</span>
        </div>
      </div>

      {/* Project 3 - NUOBRA */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[500px] flex flex-col hover:scale-105 transition-transform duration-300">
        <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="NUOBRA Website Preview" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center">NUOBRA</h2>
        <p className="mb-4 text-center flex-grow">
          A high-performance landing page showcasing NUOBRA's projects, with custom code for enhanced interactivity and SEO optimization.
        </p>
        <div className="flex justify-center gap-4 mb-4 border-b p-2">
          <a
            href="https://nuobra.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Website
          </a>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaWordpress className="mr-2" />WordPress</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><SiYoast className="mr-2" />Yoast SEO</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaHtml5 className="mr-2" />HTML</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaCss3Alt className="mr-2" />CSS</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaJs className="mr-2" />JavaScript</span>
        </div>
      </div>

      {/* Project 4 - Real Rosario FC */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[500px] flex flex-col hover:scale-105 transition-transform duration-300">
        <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Football Club Website Preview" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center">Real Rosario FC</h2>
        <p className="mb-4 text-center flex-grow">
          Landing page for a youth football club (U17) that highlights the team's philosophy, training, and achievements.
        </p>
        <div className="flex justify-center gap-4 mb-4 border-b p-2">
          <a
            href="https://realrosariofc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live View
          </a>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><SiFramer className="mr-2" />Framer</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaHtml5 className="mr-2" />HTML</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaCss3Alt className="mr-2" />CSS</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaJs className="mr-2" />JavaScript</span>
        </div>
      </div>
      {/* Project 5 - Xury */}
      <div className="bg-black bg-opacity-55 p-6 rounded-lg text-white z-10 w-80 h-[500px] flex flex-col hover:scale-105 transition-transform duration-300">
        <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400" 
            alt="Xury Website Preview" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="text-2xl font-semibold mb-2 text-center">Xury</h2>
        <p className="mb-4 text-center flex-grow">
         Developed to build client trust, this website combines a premium aesthetic with a user-focused design, making it simple to schedule services and manage appointments efficiently.
        </p>
        <div className="flex justify-center gap-4 mb-4 border-b p-2">
          <a
            href="https://xury.com.mx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700 flex items-center"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Website
          </a>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><SiFramer className="mr-2" />Framer</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaHtml5 className="mr-2" />HTML</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaCss3Alt className="mr-2" />CSS</span>
          <span className="bg-purple-500 text-white py-1 px-3 rounded-xl flex items-center"><FaJs className="mr-2" />JavaScript</span>
        </div>
      </div>

    </div>
  );
};

export default Projects;
