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
    <div className="mt-6 text-center">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
        Tech Stack
      </h2>
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
