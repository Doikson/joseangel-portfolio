export default function About() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-black mb-4">About Me</h1>
        
        <p className="text-lg text-gray-700 text-center max-w-2xl">
          I'm <span className="font-semibold text-black">Jose Angel Cortes Baillet</span>, a 
          Computer Systems Engineering student at UNITEC Atizapán. I'm passionate about 
          <span className="font-semibold text-black"> cybersecurity</span>, development with 
          <span className="font-semibold text-black"> React.js</span>, and Linux system administration.
        </p>
  
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <span className="px-4 py-2 bg-black text-white rounded-lg">React.js</span>
          <span className="px-4 py-2 bg-black text-white rounded-lg">TypeScript</span>
          <span className="px-4 py-2 bg-black text-white rounded-lg">Python</span>
          <span className="px-4 py-2 bg-black text-white rounded-lg">C++</span>
          <span className="px-4 py-2 bg-black text-white rounded-lg">Cybersecurity</span>
          <span className="px-4 py-2 bg-black text-white rounded-lg">Linux</span>
        </div>
  
        <a 
          href="https://github.com/Doikson"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-6 py-3 bg-[#0084ff] text-white rounded-lg text-lg font-semibold hover:scale-105 transition"
        >
          View my GitHub
        </a>
      </div>
    );
  }
  