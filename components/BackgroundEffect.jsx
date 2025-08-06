"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const BackgroundEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const pathname = usePathname();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Define different background effects for each page
  let auroraAnimation = "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 animate-aurora";
  let gradientColor = "rgba(0, 255, 255, 0.6), rgba(0, 0, 139, 0.8)";

  if (pathname === "/about") {
    auroraAnimation = "bg-gradient-to-r from-green-500 via-teal-400 to-blue-500 animate-aurora";
    gradientColor = "rgba(173, 255, 47, 0.6), rgba(34, 139, 34, 0.8)";
  } else if (pathname === "/projects") {
    auroraAnimation = "bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 animate-aurora";
    gradientColor = "rgba(255, 165, 0, 0.6), rgba(165, 0, 0, 0.8)";
  } else if (pathname === "/contact") {
    auroraAnimation = "bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-aurora";
    gradientColor = "rgba(255, 105, 180, 0.6), rgba(139, 0, 139, 0.8)";
  } else if (pathname === "/404") {
    auroraAnimation = "bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 animate-aurora";
    gradientColor = "rgba(40, 40, 40, 0.7), rgba(10, 10, 10, 0.9)";;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden transition-all duration-1000 ease-in-out">
      {/* Mouse-following radial gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-70 backdrop-blur-lg z-10 transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${gradientColor})`,
        }}
      ></div>

      {/* Aurora Borealis Animation with dynamic movement */}
      <div
        className={`absolute top-0 left-0 w-full h-full ${auroraAnimation} backdrop-blur-lg z-0 animate-aurora`}
        style={{
          backgroundSize: "200% 200%",
          filter: "blur(20px)",
        }}
      ></div>
    </div>
  );
};

export default BackgroundEffect;
