import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 z-10">
      <div className="bg-black bg-opacity-55 p-8 rounded-2xl shadow-lg w-full max-w-lg z-10 animate-slide">
        <h2 className="text-3xl font-bold text-white text-center mb-6 z-10">Contact Me</h2>
        <form
          action="https://formspree.io/f/xgvoqwnj"
          method="POST"
          className="space-y-4 z-10"
        >
          <label className="block text-white z-10">
            Your email:
            <input
              type="email"
              name="email"
              required
              className="w-full p-2 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 z-10"
            />
          </label>
          <label className="block text-white z-10">
            Your message:
            <textarea
              name="message"
              required
              className="w-full p-2 mt-1 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 z-10 h-32 resize-none"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full p-3 bg-purple-500 text-white font-bold rounded-lg hover:bg-purple-600 transition z-10"
          >
            Send
          </button>
        </form>
      </div>
      <div className="flex space-x-6 mt-6 text-white z-10 animate-slide">
        <a
          href="https://github.com/Doikson"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-purple-500 transition z-10"
        >
          <FaGithub size={24} />
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/joseangelcortes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-purple-500 transition z-10"
        >
          <FaLinkedin size={24} />
          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:joseangelcortesbaillet@gmail.com"
          className="flex items-center space-x-2 hover:text-purple-500 transition z-10"
        >
          <FaEnvelope size={24} />
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}