import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="border-b border-neutral-900 pb-10">

        {/* HEADING */}
        <h1 className="my-12 text-center text-4xl lg:text-5xl font-light tracking-tight">
          About <span className="text-neutral-500">Me</span>
        </h1>

        <div className="flex flex-wrap items-center">

          {/* IMAGE */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:p-8"
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-2xl w-72 md:w-96 shadow-lg shadow-purple-900/20"
                src={aboutImg}
                alt="Ajay Tiwari"
              />
            </div>
          </motion.div>

          {/* TEXT + CONTENT */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* MAIN TEXT */}
              <p className="my-4 max-w-xl text-neutral-400 leading-relaxed">
                {ABOUT_TEXT}
              </p>

              {/* HIGHLIGHTS (NEW 🔥) */}
              <div className="grid grid-cols-2 gap-4 mt-6 max-w-xl">

                <div className="p-4 border border-neutral-800 rounded-xl">
                  <h3 className="text-lg font-semibold">Current Company</h3>
                  <p className="text-sm text-neutral-400">
                    HashedIn by Deloitte (SDE Intern)
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 rounded-xl">
                  <h3 className="text-lg font-semibold">DSA</h3>
                  <p className="text-sm text-neutral-400">
                    800+ Problems • Top 8% LeetCode
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 rounded-xl">
                  <h3 className="text-lg font-semibold">Focus</h3>
                  <p className="text-sm text-neutral-400">
                    Backend Systems & Scalability
                  </p>
                </div>

                <div className="p-4 border border-neutral-800 rounded-xl">
                  <h3 className="text-lg font-semibold">Tech</h3>
                  <p className="text-sm text-neutral-400">
                    FASTApi • Node • Django • Springboot
                  </p>
                </div>

              </div>

              {/* OPTIONAL CTA (NEW 🔥🔥) */}
              <div className="mt-8">
                <a
                  href="/Ajay_Tiwari_SDE.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition text-sm"
                >
                  View Resume
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default About