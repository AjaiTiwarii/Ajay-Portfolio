import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="border-b border-neutral-900 pb-10">

        {/* HEADING */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5 }}
          className="my-12 text-center text-4xl lg:text-5xl font-light tracking-tight"
        >
          Experience
        </motion.h1>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-neutral-800 hidden lg:block"></div>

          {EXPERIENCES.map((experience, index) => (
            <div
              key={index}
              className={`mb-16 flex flex-col lg:flex-row items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >

              {/* CARD */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 60 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-5/12"
              >
                <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:border-neutral-700 transition shadow-lg shadow-purple-900/10">

                  {/* YEAR (FIXED POSITION) */}
                  <p className="text-xs text-neutral-500 mb-2">
                    {experience.year}
                  </p>

                  {/* ROLE */}
                  <h3 className="text-xl font-semibold">
                    {experience.role}
                  </h3>

                  {/* COMPANY */}
                  <p className="text-sm text-purple-400 mb-4">
                    {experience.company}
                  </p>

                  {/* DESCRIPTION */}
                  <ul className="text-neutral-400 text-sm space-y-2 mb-4 list-disc pl-5">
                    {experience.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border border-neutral-700 bg-neutral-800 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* DOT */}
              <div className="hidden lg:flex w-2/12 justify-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full border-4 border-neutral-900"></div>
              </div>

              {/* EMPTY SPACE */}
              <div className="hidden lg:block w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience