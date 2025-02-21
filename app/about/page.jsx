import React from "react";

export default function About() {
  return (
    <section className="relative z-10 p-8 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        <p className="text-xl mb-6">
          I am a passionate software engineer specializing in systems programming, cybersecurity, and web development. I have expertise in Python, C++, and web technologies such as React.js, TypeScript, and Tailwind CSS.
        </p>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Experience</h2>
        <ul className="list-none space-y-3 text-lg">
          <li>Software Developer - Company A (2023-Present)</li>
          <li>Intern - Company B (2022-2023)</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Skills</h2>
        <ul className="list-none space-y-3 text-lg">
          <li>Programming: Python, C++, TypeScript, JavaScript</li>
          <li>Frameworks: React.js, Next.js, Tailwind CSS</li>
          <li>Networking: Cisco CCNA</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-12 mb-4">Certifications</h2>
        <ul className="list-none space-y-3 text-lg">
          <li>Cisco CCNA</li>
          <li>Various online courses in cybersecurity and programming</li>
        </ul>
      </div>
    </section>
  );
}
