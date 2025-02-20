import { FaReact, FaNodeJs, FaLinux, FaGithub } from "react-icons/fa";
import { SiTypescript, SiPython, SiCplusplus, SiNextdotjs, SiJavascript, SiMysql, SiSap, SiCisco } from "react-icons/si";
import { DiDatabase, DiPostgresql } from "react-icons/di";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-black mb-4">Welcome to My Portfolio</h1>
      
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Hi, I'm <span className="font-semibold text-black">Jose Angel Cortes Baillet</span>, a Computer Systems Engineering student passionate about <span className="font-semibold text-black">cybersecurity</span>, <span className="font-semibold text-black">software development</span>, and <span className="font-semibold text-black">Linux</span>. I build scalable applications using <span className="font-semibold text-black">React.js</span> and enjoy solving complex tech challenges.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <FaReact /> React.js
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiTypescript /> TypeScript
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiPython /> Python
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiCplusplus /> C++
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <FaLinux /> Linux
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiNextdotjs /> Next.js
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <FaNodeJs /> Node.js
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiJavascript /> JavaScript
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiMysql /> MySQL
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <DiDatabase /> SQL Server
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <DiPostgresql /> PostgreSQL
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiSap /> SAP
  </span>
  <span className="flex items-center gap-2 px-4 py-2 bg-black bg-opacity-70 text-white rounded-lg text-2xl">
    <SiCisco /> Cisco
  </span>
</div>


      <div className="flex gap-4 mt-6">
        <a 
          href="https://github.com/Doikson"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#0084ff] text-white rounded-lg text-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          <FaGithub className="text-2xl" /> View my GitHub
        </a>
        
        <a 
          href="/Resume_JoseAngel.pdf"
          download
          className="px-6 py-3 bg-gray-500 text-white rounded-lg text-lg font-semibold hover:scale-105 transition flex items-center gap-2"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
