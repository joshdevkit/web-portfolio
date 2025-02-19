import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { FaLaravel, FaPhp, FaNodeJs, FaReact } from "react-icons/fa";

export function OrbitingTechStack() {
  return (
    <>
      <div className="flex flex-col mt-6 text-center max-w-sm">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Passionate Full-Stack Developer 🚀
          </h4>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-justify">
            I specialize in building dynamic, high-performance web applications
            using the latest technologies. With a strong foundation in{" "}
            <strong>Laravel, PHP, React, and Node.js</strong>, I create
            efficient, scalable, and user-friendly solutions. Whether it's
            backend logic, frontend interactivity, or full-stack development, I
            enjoy crafting seamless digital experiences.
          </p>
        </div>
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <OrbitingCircles iconSize={40}>
            <FaLaravel className="w-12 h-12 text-red-600" />
            <FaPhp className="w-12 h-12 text-blue-600" />
            <FaNodeJs className="w-12 h-12 text-green-600" />
            <FaReact className="w-12 h-12 text-cyan-600" />
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
            <FaLaravel className="w-12 h-12 text-red-600" />
            <FaPhp className="w-12 h-12 text-blue-600" />
            <FaNodeJs className="w-12 h-12 text-green-600" />
            <FaReact className="w-12 h-12 text-cyan-600" />
          </OrbitingCircles>
        </div>
      </div>
    </>
  );
}
