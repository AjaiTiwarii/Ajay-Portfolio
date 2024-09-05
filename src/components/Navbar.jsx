
// import { FaLinkedin } from "react-icons/fa"
// import { FaGithub } from "react-icons/fa"
// import { SiLeetcode } from "react-icons/si";
// import { SiCodechef } from "react-icons/si";



// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex items-center justify-between py-6">
//       {/* Left side with navigation links */}
//       <div className="flex items-center gap-8">
//         <a href="#about" className="text-lg font-medium text-neutral-400 hover:text-white">About Me</a>
//         <a href="#education" className="text-lg font-medium text-neutral-400 hover:text-white">Education</a>
//         <a href="#skills" className="text-lg font-medium text-neutral-400 hover:text-white">Skills</a>
//         <a href="#projects" className="text-lg font-medium text-neutral-400 hover:text-white">Projects</a>
//         <a href="/resume.pdf" download className="text-lg font-medium text-neutral-400 hover:text-white">Download Resume</a>
//         <a href="#contact" className="text-lg font-medium text-neutral-400 hover:text-white">Contact Me</a>
//       </div>

//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <a href="https://www.linkedin.com/in/ajay-tiwari-140231248/" target="_blank" rel="noopener noreferrer">
//           <FaLinkedin className="cursor-pointer hover:text-blue-500" />
//         </a>
//         <a href="https://github.com/AjaiTiwarii" target="_blank" rel="noopener noreferrer">
//           <FaGithub className="cursor-pointer hover:text-gray-500" />
//         </a>
//         <a href="https://leetcode.com/u/Ajeyy/" target="_blank" rel="noopener noreferrer">
//           <SiLeetcode className="cursor-pointer hover:text-yellow-500" />
//         </a>
//         <a href="https://www.codechef.com/users/ajaitiwarii" target="_blank" rel="noopener noreferrer">
//           <SiCodechef className="cursor-pointer hover:text-orange-900" />
//         </a>
//       </div>

//     </nav>
//   )
// }

// export default Navbar


import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="flex items-center justify-between py-14 px-4 bg-transparent text-white">
      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden lg:flex items-center gap-8">
        <a href="#about" className="text-lg font-medium text-neutral-400 hover:text-white">About Me</a>
        <a href="#education" className="text-lg font-medium text-neutral-400 hover:text-white">Education</a>
        <a href="#skills" className="text-lg font-medium text-neutral-400 hover:text-white">Skills</a>
        <a href="#projects" className="text-lg font-medium text-neutral-400 hover:text-white">Projects</a>
        <a href="/resume.pdf" download className="text-lg font-medium text-neutral-400 hover:text-white">Download Resume</a>
        <a href="#contact" className="text-lg font-medium text-neutral-400 hover:text-white">Contact Me</a>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <a href="#about" className="text-lg font-medium text-neutral-400 hover:text-white" onClick={toggleMenu}>About Me</a>
        <a href="#education" className="text-lg font-medium text-neutral-400 hover:text-white" onClick={toggleMenu}>Education</a>
        <a href="#skills" className="text-lg font-medium text-neutral-400 hover:text-white" onClick={toggleMenu}>Skills</a>
        <a href="#projects" className="text-lg font-medium text-neutral-400 hover:text-white" onClick={toggleMenu}>Projects</a>
        <a href="/resume.pdf" download className="text-lg font-medium text-neutral-400 hover:text-white" onClick={toggleMenu}>Download Resume</a>
        <a href="#contact" className="text-lg font-medium text-neutral-400 hover:text-white" onClick={toggleMenu}>Contact Me</a>
      </div>

      {/* Social icons */}
      <div className="flex items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ajay-tiwari-140231248/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer hover:text-blue-500" />
        </a>
        <a href="https://github.com/AjaiTiwarii" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-gray-500" />
        </a>
        <a href="https://leetcode.com/u/Ajeyy/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="cursor-pointer hover:text-yellow-500" />
        </a>
        <a href="https://www.codechef.com/users/ajaitiwarii" target="_blank" rel="noopener noreferrer">
          <SiCodechef className="cursor-pointer hover:text-orange-900" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
