
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Left side with navigation links */}
      <div className="flex items-center gap-8">
        <a href="#about" className="text-lg font-medium text-neutral-400 hover:text-white">About Me</a>
        <a href="#education" className="text-lg font-medium text-neutral-400 hover:text-white">Education</a>
        <a href="#skills" className="text-lg font-medium text-neutral-400 hover:text-white">Skills</a>
        {/* <a href="#experience" className="text-lg font-medium text-neutral-400 hover:text-white">Experience</a> */}
        <a href="#projects" className="text-lg font-medium text-neutral-400 hover:text-white">Projects</a>
        <a href="/resume.pdf" download className="text-lg font-medium text-neutral-400 hover:text-white">Download Resume</a>
        <a href="#contact" className="text-lg font-medium text-neutral-400 hover:text-white">Contact Me</a>
      </div>

      {/* Right side with social media icons */}
      {/* <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin className="cursor-pointer hover:text-blue-500" />
        <FaGithub className="cursor-pointer hover:text-gray-500" />
        <FaTwitterSquare className="cursor-pointer hover:text-blue-400" />
        <SiLeetcode className="cursor-pointer hover:text-yellow-500" />
        <SiCodechef className="cursor-pointer hover:text-orange-900" />
      </div> */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ajay-tiwari-140231248/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="cursor-pointer hover:text-blue-500" />
        </a>
        <a href="https://github.com/AjaiTiwarii" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer hover:text-gray-500" />
        </a>
        {/* <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className="cursor-pointer hover:text-blue-400" />
        </a> */}
        <a href="https://leetcode.com/u/Ajeyy/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="cursor-pointer hover:text-yellow-500" />
        </a>
        <a href="https://www.codechef.com/users/ajaitiwarii" target="_blank" rel="noopener noreferrer">
          <SiCodechef className="cursor-pointer hover:text-orange-900" />
        </a>
      </div>

    </nav>
  )
}

export default Navbar


