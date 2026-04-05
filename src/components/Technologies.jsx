import { motion } from "framer-motion"

// Frontend
import { RiReactjsLine, RiTailwindCssFill, RiFlutterFill } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { FaBootstrap } from "react-icons/fa"

// Backend
import { IoLogoNodejs } from "react-icons/io"
import { SiDjango, SiFlask, SiExpress, SiSpringboot, SiFastapi } from "react-icons/si"

// Databases / Infra
import { SiMongodb, SiMysql, SiPostgresql, SiSnowflake } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { SiDocker } from "react-icons/si"

// Languages
import { TbBrandCpp } from "react-icons/tb"
import { FaPython, FaJava } from "react-icons/fa"
import { FaGolang } from "react-icons/fa6"
import { SiDart } from "react-icons/si"

// Tools / Others
import { FaGitAlt } from "react-icons/fa"
import { SiFramer, SiLatex, SiPowershell, SiVercel, SiOpencv } from "react-icons/si"
import { MdOutlineTerminal } from "react-icons/md"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const TechCard = ({ children }) => (
  <motion.div
    variants={iconVariants(3)}
    initial="initial"
    animate="animate"
    className="rounded-2xl border border-neutral-800 p-4 hover:border-neutral-600 transition"
  >
    {children}
  </motion.div>
)

const Technologies = () => {
  return (
    <section id="skills" className="py-24">
      <div className="border-b border-neutral-900 pb-12">

        {/* HEADING */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl lg:text-5xl font-light tracking-tight mb-16"
        >
          Skills & Technologies
        </motion.h1>

        <div className="max-w-6xl mx-auto space-y-12">

          {/* LANGUAGES */}
          <div>
            <h3 className="text-sm text-neutral-500 mb-4">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <TechCard><TbBrandCpp className="text-6xl text-blue-600" /></TechCard>
              <TechCard><FaPython className="text-6xl text-yellow-400" /></TechCard>
              <TechCard><FaJava className="text-6xl text-orange-400" /></TechCard>
              <TechCard><FaGolang className="text-6xl text-blue-300" /></TechCard>
              <TechCard><SiDart className="text-6xl text-blue-400" /></TechCard>
            </div>
          </div>

          {/* FRONTEND */}
          <div>
            <h3 className="text-sm text-neutral-500 mb-4">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <TechCard><RiReactjsLine className="text-6xl text-cyan-400" /></TechCard>
              <TechCard><TbBrandNextjs className="text-6xl text-white" /></TechCard>
              <TechCard><RiTailwindCssFill className="text-6xl text-blue-400" /></TechCard>
              <TechCard><FaBootstrap className="text-6xl text-purple-500" /></TechCard>
              <TechCard><RiFlutterFill className="text-6xl text-blue-400" /></TechCard>
            </div>
          </div>

          {/* BACKEND */}
          <div>
            <h3 className="text-sm text-neutral-500 mb-4">Backend & Systems</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <TechCard><IoLogoNodejs className="text-6xl text-green-500" /></TechCard>
              <TechCard><SiExpress className="text-6xl text-gray-400" /></TechCard>
              <TechCard><SiDjango className="text-6xl text-green-600" /></TechCard>
              <TechCard><SiFlask className="text-6xl text-gray-500" /></TechCard>
              <TechCard><SiSpringboot className="text-6xl text-green-500" /></TechCard>
              <TechCard><SiFastapi className="text-6xl text-green-400" /></TechCard>
            </div>
          </div>

          {/* DATABASES & INFRA */}
          <div>
            <h3 className="text-sm text-neutral-500 mb-4">Databases & Infrastructure</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <TechCard><SiPostgresql className="text-6xl text-blue-400" /></TechCard>
              <TechCard><SiMysql className="text-6xl text-blue-500" /></TechCard>
              <TechCard><SiMongodb className="text-6xl text-green-700" /></TechCard>
              <TechCard><DiRedis className="text-6xl text-red-600" /></TechCard>
              <TechCard><SiDocker className="text-6xl text-blue-500" /></TechCard>
              <TechCard><SiSnowflake className="text-6xl text-blue-300" /></TechCard>
            </div>
          </div>

          {/* TOOLS */}
          <div>
            <h3 className="text-sm text-neutral-500 mb-4">Tools & Others</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <TechCard><FaGitAlt className="text-6xl text-orange-600" /></TechCard>
              <TechCard><SiFramer className="text-6xl text-blue-500" /></TechCard>
              <TechCard><SiLatex className="text-6xl text-green-700" /></TechCard>
              <TechCard><SiPowershell className="text-6xl text-blue-700" /></TechCard>
              <TechCard><MdOutlineTerminal className="text-6xl text-gray-400" /></TechCard>
              <TechCard><SiVercel className="text-6xl text-white" /></TechCard>
              <TechCard><SiOpencv className="text-6xl text-red-400" /></TechCard>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Technologies