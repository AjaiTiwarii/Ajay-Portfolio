import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <section id="projects" className="py-24">
            <div className="border-b border-neutral-900 pb-12">

                {/* HEADER */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-light tracking-tight">
                        Projects
                    </h1>
                    <p className="text-neutral-500 mt-3 text-sm">
                        Systems I’ve built across backend, full-stack, and AI
                    </p>
                </motion.div>

                {/* STACKED PROJECTS */}
                <div className="max-w-4xl mx-auto space-y-10">

                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 60 }}
                            transition={{ duration: 0.5 }}
                        >

                            <div className="group p-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1 shadow-sm">

                                {/* TOP ROW */}
                                <div className="flex justify-between items-start mb-3">

                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {project.title}
                                        </h2>

                                        {/* subtle index */}
                                        <span className="text-xs text-neutral-600">
                                            Project {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    {project.deployed_link ? (
                                    <a
                                        href={project.deployed_link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-neutral-500 hover:text-white transition"
                                    >
                                        ↗
                                    </a>
                                    ) : null}
                                </div>

                                {/* DESCRIPTION */}
                                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* TECH STACK */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full border border-neutral-700 bg-neutral-800 text-neutral-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* BOTTOM LINE */}
                                <div className="mt-5 pt-3 border-t border-neutral-800 flex justify-between items-center">

                                    <span className="text-xs text-neutral-600">
                                        {project.technologies[0]} • {project.technologies[1]}
                                    </span>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-purple-400 hover:text-purple-300 transition"
                                    >
                                        View Code →
                                    </a>

                                </div>

                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Projects