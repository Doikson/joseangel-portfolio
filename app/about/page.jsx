import { AiOutlineMail, AiOutlineEnvironment } from 'react-icons/ai';
import { FaLaptopCode, FaShieldAlt, FaGamepad, FaBasketballBall } from 'react-icons/fa';

export default function Resume() {
  return (
    <div className="bg-green-900 text-white min-h-screen pt-24 pb-5 sm:pt-28 sm:pb-10 md:pt-32 md:pb-20 z-10">
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 z-10">

        {/* Profile Section */}
        <div className="bg-black p-6 rounded-lg flex flex-col items-center text-center bg-opacity-55 z-10 space-y-6 animate-slide-right">
          <img src="./pfp.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-green-700 mb-4 object-cover z-10" />
          <h2 className="text-2xl font-bold z-10">José Angel Cortés Baillet</h2>
          <span className="bg-green-700 text-sm px-4 py-1 rounded-full mt-2 z-10">Computer Systems Engineer</span>
          <div className="mt-4 text-sm space-y-1 z-10">
            <p className="flex items-center">
              <AiOutlineMail className="mr-2" />
              <a href="mailto:joseangelcortesbaillet@gmail.com" className="hover:underline">joseangelcortesbaillet@gmail.com</a>
            </p>
            <p className="flex items-center">
              <AiOutlineEnvironment className="mr-2" />
              Estado de Mexico
            </p>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-black bg-opacity-55 p-6 rounded-lg row-span-2 bg-opacity-50 z-10 animate-slide-left">
          <h1 className="text-3xl font-bold border-b-2 border-green-500 pb-2 z-10">Resume</h1>

          {/* Experience Section */}
          <div className="mt-6 z-10">
            <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-4 z-10">Experience</h2>
            <div className="mt-3 text-sm space-y-3 z-10">
              <div className="z-10">
                <p className="font-semibold text-lg z-10">Bilingual Telephone Agent</p>
                <p className="italic z-10">Do it Right S.A. de C.V., Naucalpan de Juárez, México (Oct 2020 – Mar 2021)</p>
                <ul className="list-disc list-inside mt-2 space-y-1 z-10">
                  <li>Provided customer service in English and Spanish, demonstrating effective communication, technical support, and problem-solving skills.</li>
                  <li>Resolved software and hardware related issues for clients.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-6 z-10">
  <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-4 z-10">
    Education
  </h2>
  <div className="mt-3 text-sm space-y-2 z-10">
    <p className="font-semibold text-lg z-10">Universidad Tecnológica de México</p>
    <p className="italic z-10">
      Computer Systems Engineering (Estimated Graduation, Dec 2026)
    </p>
    <p className="z-10">
      <strong>Focus:</strong> Programming / Cybersecurity / IT
    </p>
    <p className="z-10">
      <strong>Relevant Subjects:</strong> Data Structures and Object-Oriented Programming (C++), Databases (SQL Server - Microsoft Access - SSMS), Network Support and Security, Network Protocols and Routing
    </p>

    <p className="font-semibold text-lg z-10">Tecnológico Nacional de México</p>
    <p className="italic z-10">Ciudad López Mateos, México</p>
    <p className="italic z-10">Data Science Diploma (Apr 2024 - Sep 2024)</p>
    <p className="z-10">
      <strong>Skills:</strong> R, SQL, Python, Pandas, NumPy, Matplotlib, Scikit-learn
    </p>
  </div>
</div>


          {/* Skills Section */}
          <div className="mt-6 z-10">
            <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-4 z-10">Certifications</h2>
            <div className="mt-3 text-sm z-10">
              <ul className="list-disc list-inside space-y-1 z-10">
                <li>CISCO Certification CCNA: Introduction to Networks (IP Routing, VLAN) Certification</li>
                <li>Network Support and Security Systems Management (Network Security, Network Architecture) Certification</li>
                <li>Python Essentials Certification</li>
                <li>Data Science Certification</li>
                <li>HTML5 & CSS3 Certification</li>
                <li>Java JRE & JDK Certification</li>
                <li>Git & GitHub Certification (Version Control)</li>
              </ul>
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mt-6 z-10">
            <h2 className="text-2xl font-semibold border-l-4 border-green-500 pl-4 z-10">Skills</h2>
            <div className="mt-3 text-sm space-y-3 z-10">
              <p><strong>Languages:</strong> Spanish (Native), English (Fluent)</p>
              <p><strong>Soft Skills:</strong> Effective communicator, problem-solving, teamwork, adaptability, and customer service-oriented.</p>
              <p><strong><li>Updates and OS management</li></strong></p>
              <p><strong><li>Computer Hardware and Assembly Experience</li></strong></p>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-black p-6 rounded-lg flex flex-col items-center text-center bg-opacity-55 z-10 space-y-6 animate-slide-right">
          <h3 className="text-2xl font-bold mb-4">About Me</h3>
          <p className="text-lg text-white">
            <span className="font-semibold"><FaLaptopCode className="inline-block mr-2 text-green-500" /> Software Development</span>: I have a strong passion for software development, especially in front-end technologies. I love creating engaging user interfaces that bring ideas to life and make an impact.
            <br />
            <span className="font-semibold"><FaShieldAlt className="inline-block mr-2 text-green-500" /> Cybersecurity</span>: As a cybersecurity enthusiast, I'm committed to finding and applying ways to secure systems and networks to protect users and data.
            <br />
            <span className="font-semibold"><FaGamepad className="inline-block mr-2 text-green-500" /> Video Games</span>: I've been playing video games since I was a kid. For me, it's more than just fun; it's a lifelong passion that has helped me build connections with others and be part of a global community.
            <br />
            <span className="font-semibold"><FaBasketballBall className="inline-block mr-2 text-green-500" /> Basketball</span>: When I’m not coding or gaming, you’ll probably find me on the basketball court. The sport drives my competitive nature, teaches me teamwork, and keeps me active while also connecting me with others who share the same passion.
          </p>
        </div>
      </div>
    </div>
  );
}
