import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen z-10">
      <h1 className="text-6xl font-bold text-gray-950 z-10">404</h1>
      <p className="text-xl text-white mt-4 z-10">Page Not Found</p>
      <p className="text-lg text-white mt-2 z-10">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 opacity-55 bg-black text-white rounded hover:bg-gray-700 transition duration-300 z-10"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;