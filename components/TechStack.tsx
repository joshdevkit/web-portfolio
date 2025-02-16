"use client";

import { motion } from "framer-motion";
import { FaLaravel, FaPhp, FaReact, FaNodeJs } from "react-icons/fa";

const technologies = [
  { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
  { icon: FaPhp, name: "PHP", color: "#777BB4" },
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
];

const TechStack = () => {
  return (
    <div className="mt-6 text-center max-w-sm">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Passionate Full-Stack Developer 🚀
        </h4>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-justify">
          I specialize in building dynamic, high-performance web applications
          using the latest technologies. With a strong foundation in{" "}
          <strong>Laravel, PHP, React, and Node.js</strong>, I create efficient,
          scalable, and user-friendly solutions. Whether it's backend logic,
          frontend interactivity, or full-stack development, I enjoy crafting
          seamless digital experiences.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-4 md:p-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            className="flex flex-col items-center"
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                rotate: [0, 15, -15, 0],
                transition: { duration: 0.4 },
              }}
            >
              <tech.icon
                className="w-14 h-14 md:w-16 md:h-16 mb-2"
                style={{ color: tech.color }}
              />
            </motion.div>
            <span className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-200">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
