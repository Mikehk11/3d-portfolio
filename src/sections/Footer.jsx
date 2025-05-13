import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 px-6 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Mike Kanyatsi. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/mikekanyatsi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mikehk11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;