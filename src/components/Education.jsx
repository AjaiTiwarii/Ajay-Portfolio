import { motion } from "framer-motion"

const educationData = [
  {
    institution: "Indian Institute of Information Technology, Kalyani",
    degree: "B. Tech. in Computer Science Engineering",
    year: "2022 - 2026",
    cgpa: "CGPA: 8.91",
  },
  {
    institution: "Sri Ram Education Centre, Kanpur",
    degree: "Intermediate",
    year: "2019 - 2021",
    percentage: "94.8%",
  },
  {
    institution: "Sri Ram Education Centre, Kanpur",
    degree: "High School",
    year: "2018 - 2019",
    percentage: "96.6%",
  },
]

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="border-b border-neutral-900 pb-10">

        {/* HEADING */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.5 }}
          className="my-12 text-center text-4xl lg:text-5xl font-light tracking-tight"
        >
          Education
        </motion.h1>

        {/* TIMELINE */}
        <div className="relative max-w-4xl mx-auto">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-neutral-800 hidden lg:block"></div>

          {educationData.map((edu, index) => (
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

                  {/* YEAR */}
                  <p className="text-xs text-neutral-500 mb-2">
                    {edu.year}
                  </p>

                  {/* DEGREE */}
                  <h3 className="text-lg font-semibold leading-snug">
                    {edu.degree}
                  </h3>

                  {/* INSTITUTION */}
                  <p className="text-sm text-purple-400 mb-3">
                    {edu.institution}
                  </p>

                  {/* SCORE */}
                  <div className="inline-block px-3 py-1 text-xs rounded-full bg-purple-900/30 border border-purple-800 text-purple-300">
                    {edu.cgpa || edu.percentage}
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

export default Education