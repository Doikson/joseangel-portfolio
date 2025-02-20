import { FaReact, FaNodeJs, FaLinux, FaGithub, FaGitAlt, FaWindows } from "react-icons/fa";
import { SiTypescript, SiPython, SiCplusplus, SiNextdotjs, SiJavascript, SiMysql, SiCisco, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { DiDatabase, DiPostgresql } from "react-icons/di";
import { BsTerminalFill } from "react-icons/bs";
import { SiApple } from "react-icons/si";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-white mb-4 z-10">Welcome to My Portfolio</h1>

      <p className="text-lg text-white text-center max-w-2xl z-10">
        I'm <span className="font-semibold text-blue-900">Jose Angel Cortes Baillet</span>, a Computer Systems Engineering student with a strong focus on <span className="font-semibold text-blue-900">cybersecurity</span>, <span className="font-semibold text-blue-900">software development</span>, and <span className="font-semibold text-blue-900">Linux</span>. I work on both <span className="font-semibold text-blue-900">front-end</span> and <span className="font-semibold text-blue-900">back-end</span> development, building efficient and scalable applications while solving complex technical challenges.
      </p>

      {/* Contenedor del rectángulo con hover aplicado al contenedor completo */}
      <div className="bg-black bg-opacity-55 text-white rounded-xl shadow-lg p-6 mt-6 w-full max-w-3xl hover:scale-105 transition-transform duration-300 relative">
        <div className="flex flex-wrap justify-center gap-3 z-10">
          {[
            { icon: <FaReact />, name: "React.js" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiTypescript />, name: "TypeScript" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <SiCplusplus />, name: "C++" },
            { icon: <FaNodeJs />, name: "Node.js" },
            { icon: <SiExpress />, name: "Express.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiPython />, name: "Python" },
            { icon: <FaWindows />, name: "Windows" },
            { icon: <SiApple />, name: "macOS" },
            { icon: <FaLinux />, name: "Linux" },
            { icon: <BsTerminalFill />, name: "Bash" },
            { icon: <FaGitAlt />, name: "Git" },
            { icon: <SiMysql />, name: "MySQL" },
            { icon: <DiDatabase />, name: "SQL Server" },
            { icon: <DiPostgresql />, name: "PostgreSQL" },
            { icon: <SiMongodb />, name: "MongoDB" },
            { icon: <SiCisco />, name: "Cisco" },
          ].map((tech, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-2 bg-gray-800 rounded-lg text-xl"
            >
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
        {/* Box-shadow blur effect */}
      </div>

      <div className="flex gap-4 mt-6 z-10">
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