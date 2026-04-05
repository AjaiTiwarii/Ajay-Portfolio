import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/new_ajay_img.jpeg"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-6 mt-16 lg:mb-36">
      <div className="flex flex-wrap items-center">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* NAME */}
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-6 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Ajay Tiwari
            </motion.h1>

            {/* ROLE (UPGRADED) */}
            <motion.span
              variants={container(0.4)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-slate-400 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tight text-transparent font-medium"
            >
              Full Stack Engineer • Backend Systems • GenAI
            </motion.span>

            {/* QUICK HIGHLIGHTS (NEW 🔥) */}
            <motion.div
              variants={container(0.7)}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4"
            >
              <span className="px-3 py-1 text-sm border border-neutral-700 rounded-full">
                HashedIn (Deloitte)
              </span>
              <span className="px-3 py-1 text-sm border border-neutral-700 rounded-full">
                LeetCode Top 8% (1806)
              </span>
              <span className="px-3 py-1 text-sm border border-neutral-700 rounded-full">
                800+ Problems Solved
              </span>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-4 font-light text-neutral-400"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* CTA BUTTONS (NEW 🔥🔥) */}
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="flex gap-4 mt-4"
            >
              <a
                href="#projects"
                className="px-6 py-2 rounded-xl bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
              >
                View Projects
              </a>

              <a
                href="https://github.com/AjaiTiwarii"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 rounded-xl border border-neutral-700 text-sm hover:bg-neutral-800 transition"
              >
                GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SECTION (IMAGE) */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-10 lg:mt-0">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-lg shadow-purple-900/20"
              src={profilePic}
              alt="Ajay Tiwari"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero