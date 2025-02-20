"use client";

import { useEffect, useState } from "react";

const BackgroundEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      {/* Mouse-following radial gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-60 backdrop-blur-lg z-10"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.6), rgba(0, 0, 139, 0.8))`,
        }}
      ></div>

      {/* Aurora Borealis Animation (when no mouse movement detected) */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 animate-aurora backdrop-blur-lg z-0"></div>
    </div>
  );
};

export default BackgroundEffect;
