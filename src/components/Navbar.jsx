import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa"
import { SiLeetcode, SiCodechef } from "react-icons/si"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO / NAME */}
          <h1 className="text-lg font-semibold tracking-wide">
            Ajay<span className="text-purple-400">.</span>
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8 text-sm">

            <a href="#about" className="text-neutral-400 hover:text-white transition">
              About
            </a>

            <a href="#experience" className="text-neutral-400 hover:text-white transition">
              Experience
            </a>

            <a href="#education" className="text-neutral-400 hover:text-white transition">
              Education
            </a>

            <a href="#skills" className="text-neutral-400 hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="text-neutral-400 hover:text-white transition">
              Projects
            </a>

            <a
              href="/Ajay_Tiwari_SDE.pdf"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 rounded-lg border border-neutral-700 hover:bg-neutral-800 transition text-white"
            >
              Resume
            </a>

            <a href="#contact" className="text-neutral-400 hover:text-white transition">
              Contact
            </a>

          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4">

            {/* SOCIAL ICONS */}
            <div className="hidden md:flex items-center gap-4 text-lg">
              <a href="https://www.linkedin.com/in/ajay-tiwari-140231248/" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-blue-500 transition" />
              </a>
              <a href="https://github.com/AjaiTiwarii" target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-gray-400 transition" />
              </a>
              <a href="https://leetcode.com/u/Ajeyy/" target="_blank" rel="noreferrer">
                <SiLeetcode className="hover:text-yellow-500 transition" />
              </a>
              <a href="https://www.youtube.com/@user-ajai95988" target="_blank" rel="noreferrer">
                <FaYoutube className="hover:text-red-500 transition" />
              </a>
              <a href="https://www.codechef.com/users/ajaitiwarii" target="_blank" rel="noreferrer">
                <SiCodechef className="hover:text-orange-700 transition" />
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white focus:outline-none"
            >
              <div className="space-y-1">
                <span className="block w-6 h-[2px] bg-white"></span>
                <span className="block w-6 h-[2px] bg-white"></span>
                <span className="block w-6 h-[2px] bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU (ANIMATED) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg z-40"
          >

            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#experience" onClick={toggleMenu}>Experience</a>
            <a href="#education" onClick={toggleMenu}>Education</a>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
            <a href="#projects" onClick={toggleMenu}>Projects</a>

            <a
              href="/Ajay_Tiwari_SDE.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={toggleMenu}
              className="px-6 py-2 border border-neutral-700 rounded-lg"
            >
              Resume
            </a>

            <a href="#contact" onClick={toggleMenu}>Contact</a>

            {/* SOCIALS (MOBILE) */}
            <div className="flex gap-6 text-2xl mt-6">
              <FaLinkedin />
              <FaGithub />
              <SiLeetcode />
              <FaYoutube />
              <SiCodechef />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar