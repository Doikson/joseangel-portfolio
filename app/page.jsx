"use client";
import { FaReact, FaNodeJs, FaLinux, FaGithub, FaGitAlt, FaWindows } from "react-icons/fa";
import { SiTypescript, SiPython, SiCplusplus, SiNextdotjs, SiJavascript, SiMysql, SiCisco, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { DiDatabase, DiPostgresql } from "react-icons/di";
import { RiScrollToBottomLine } from "react-icons/ri";
import { BsTerminalFill } from "react-icons/bs";
import { SiApple } from "react-icons/si";
import Link from "next/link";
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 mt-32">
      <h1 className="text-4xl font-bold text-white mb-4 z-10 animate-slide">Welcome to My Portfolio</h1>

      <p className="text-lg text-white text-center max-w-2xl z-10 animate-slide">
        I'm <span className="font-semibold text-blue-900">Jose Angel Cortes Baillet</span>, a Computer Systems Engineering student with a strong focus on <span className="font-semibold text-blue-900">cybersecurity</span>, <span className="font-semibold text-blue-900">software development</span>, and <span className="font-semibold text-blue-900">Linux</span>. I work on both <span className="font-semibold text-blue-900">front-end</span> and <span className="font-semibold text-blue-900">back-end</span> development, building efficient and scalable applications while solving complex technical challenges.
      </p>

      {/* Tech Stack Section */}
      <div className="bg-black bg-opacity-55 text-white rounded-xl shadow-lg p-6 mt-6 w-full max-w-3xl hover:scale-105 transition-transform duration-300 relative">
        <div className="flex flex-wrap justify-center gap-3 z-10">
          {[
            { icon: <FaReact />, name: "React.js", url: "https://reactjs.org/" },
            { icon: <SiNextdotjs />, name: "Next.js", url: "https://nextjs.org/" },
            { icon: <SiTypescript />, name: "TypeScript", url: "https://www.typescriptlang.org/" },
            { icon: <SiJavascript />, name: "JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
            { icon: <SiCplusplus />, name: "C++", url: "https://en.cppreference.com/w/" },
            { icon: <FaNodeJs />, name: "Node.js", url: "https://nodejs.org/" },
            { icon: <SiExpress />, name: "Express.js", url: "https://expressjs.com/" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS", url: "https://tailwindcss.com/" },
            { icon: <SiPython />, name: "Python", url: "https://www.python.org/" },
            { icon: <FaWindows />, name: "Windows", url: "https://www.microsoft.com/en-us/windows" },
            { icon: <SiApple />, name: "macOS", url: "https://www.apple.com/macos/" },
            { icon: <FaLinux />, name: "Linux", url: "https://www.linux.org/" },
            { icon: <BsTerminalFill />, name: "Bash", url: "https://www.gnu.org/software/bash/" },
            { icon: <FaGitAlt />, name: "Git", url: "https://git-scm.com/" },
            { icon: <SiMysql />, name: "MySQL", url: "https://www.mysql.com/" },
            { icon: <DiDatabase />, name: "SQL Server", url: "https://www.microsoft.com/en-us/sql-server" },
            { icon: <DiPostgresql />, name: "PostgreSQL", url: "https://www.postgresql.org/" },
            { icon: <SiMongodb />, name: "MongoDB", url: "https://www.mongodb.com/" },
            { icon: <SiCisco />, name: "Cisco", url: "https://www.cisco.com/" },
          ].map((tech, index) => (
            <Link
              href={tech.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-gray-800 rounded-lg text-xl cursor-pointer"
            >
              {tech.icon} {tech.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-4 mt-6 z-10 mb-24">
        <a
          href="https://github.com/Doikson/joseangel-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#0084ff] text-white rounded-lg text-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          <FaGithub className="text-2xl" /> Portfolio Repository
        </a>

        <a
          href="/Resume_JoseAngel.pdf"
          download
          className="px-6 py-3 bg-gray-500 text-white rounded-lg text-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          Download Resume
        </a>
      </div>

      {/* Scroll Down Icon */}
      <div className="animate-pulse">
        <RiScrollToBottomLine className="text-4xl text-white" />
      </div>

      {/* Sections with Scroll Animations */}
      <ScrollAnimation animationClass="animate-slide">
        <div className="mt-64 w-full max-w-3xl bg-black bg-opacity-55 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Book Recommendations</h2>
          <p className="text-lg mb-4">
            Reading has been an essential part of my personal and professional journey. Here are some of the books that have shaped my approach to personal development and life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src="book1.jpg" alt="Book 1" className="h-60 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 text-center">How Champions Think</h3>
              <p className="text-sm text-gray-400 mt-2 text-center">Dr. Bob Rotella</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
              <img src="book2.jpg" alt="Book 2" className="h-60 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4 text-center">My Philosophy of Triumph</h3>
              <p className="text-sm text-gray-400 mt-2 text-center">Michael Jordan</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      <ScrollAnimation animationClass="animate-slide-left">
        <div className="mt-8 w-full max-w-3xl bg-black bg-opacity-55 text-white rounded-xl shadow-lg p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-center">Inspiration & Thought Leaders</h2>
          <p className="text-lg mb-6 text-center">
            Throughout my journey in life, I have been inspired by individuals whose ideas, mindset, and dedication have shaped my approach to learning and growth. Their work challenges me to stay curious, and continuously improve.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Kobe Bryant", img: "inspiration1.jpg" },
              { name: "Michael Jackson", img: "inspiration2.jpg" },
              { name: "Jason Thor Hall", img: "inspiration3.jpg" },
              { name: "Canserbero", img: "inspiration4.jpg" },
            ].map((person, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden relative">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-semibold">{person.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animationClass="animate-slide-right">
        <div className="mt-8 w-full max-w-3xl bg-black bg-opacity-55 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">My Philosophy on Problem Solving</h2>
          <p className="text-lg mb-4">
            I approach coding challenges with a mindset of continuous improvement, always refining my solutions for both efficiency and readability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src="problem-solving1.jpg" alt="Problem Solving 1" className="w-20 h-20 object-cover rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Analytical Approach</h3>
                <p className="text-sm text-gray-400">I break down problems into smaller, more manageable components, focusing on one step at a time.</p>
              </div>
            </div>
            <div className="flex items-center bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src="problem-solving2.jpg" alt="Problem Solving 2" className="w-20 h-20 object-cover rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Optimization</h3>
                <p className="text-sm text-gray-400">I focus on optimizing code for both performance and maintainability, ensuring it scales well in production environments.</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation animationClass="animate-slide">
        <div className="mt-8 w-full max-w-3xl bg-black bg-opacity-55 text-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Personal Interests</h2>
          <p className="text-lg mb-4">
            Beyond coding, I enjoy gaming, exploring software, and staying active in sports. These interests help me stay curious, improve problem-solving skills, and maintain a balanced lifestyle.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src="gaming.jpg" alt="Gaming" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Gaming</h3>
              <p className="text-sm text-gray-400 mt-2">Gaming has been a lifelong passion, offering a mix of competition, strategy, and storytelling.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src="software.jpg" alt="Software" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Software</h3>
              <p className="text-sm text-gray-400 mt-2">I enjoy exploring different software tools and technologies, constantly learning how they enhance efficiency and problem-solving.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img src="sports.jpg" alt="Sports" className="w-full h-48 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold mt-4">Sports</h3>
              <p className="text-sm text-gray-400 mt-2">Staying active through sports helps me maintain discipline, resilience, and a strong mindset both physically and mentally.</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

    </div>
  );
}
