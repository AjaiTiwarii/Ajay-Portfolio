
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiDart } from "react-icons/si";
import { SiPowershell } from "react-icons/si";
import { MdOutlineTerminal } from "react-icons/md";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { SiLatex } from "react-icons/si";
import { motion } from "framer-motion";
import { SiVercel } from "react-icons/si";


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
});

const Technologies = () => {
    return (
        <section id="skills" className="py-20">
            <div className="border-b border-neutral-800 pb-24">
                <motion.h1
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl"
                >
                    Technologies
                </motion.h1>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {/* Existing Icons */}

                    <motion.div
                        variants={iconVariants(4.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <TbBrandCpp className="text-7xl text-blue-600" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <FaGolang className="text-7xl text-blue-300" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <FaJava className="text-7xl text-orange-400" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <RiReactjsLine className="text-7xl text-cyan-400" />
                    </motion.div>


                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiMongodb className="text-7xl text-green-700" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <DiRedis className="text-7xl text-red-700" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <IoLogoNodejs className="text-7xl text-green-500" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(3)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiMysql className="text-7xl text-blue-500" />
                    </motion.div>
                    

                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <RiTailwindCssFill className="text-7xl text-blue-400" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <FaBootstrap className="text-7xl text-purple-500" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiDart className="text-7xl text-blue-400" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiPowershell className="text-7xl text-blue-700" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(5.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <MdOutlineTerminal className="text-7xl text-gray-400" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(4.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <FaPython className="text-7xl text-yellow-400" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiDjango className="text-7xl text-green-600" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiFlask className="text-7xl text-gray-600" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <RiFlutterFill className="text-7xl text-blue-400" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <FaGitAlt className="text-7xl text-orange-600" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(3.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiFramer className="text-7xl text-blue-500" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiLatex className="text-7xl text-green-700" />
                    </motion.div>

                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        <SiVercel className="text-7xl text-white-700" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Technologies;