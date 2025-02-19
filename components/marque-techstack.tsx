import { Marquee } from "@/components/magicui/marquee";
import { FaLaravel, FaPhp, FaNodeJs, FaReact, FaGit } from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { Icon: FaLaravel, name: "Laravel", color: "text-red-500" },
  { Icon: FaPhp, name: "PHP", color: "text-blue-500" },
  { Icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
  { Icon: FaReact, name: "React", color: "text-cyan-500" },
];

const tools = [
  { Icon: FaGit, name: "Git", color: "text-orange-500" },
  { Icon: SiTailwindcss, name: "Tailwind CSS", color: "text-blue-400" },
  { Icon: SiVercel, name: "Vercel", color: "text-black" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "text-indigo-600" },
];

const TechIcon = ({
  Icon,
  name,
  color,
}: {
  Icon: any;
  name: string;
  color: string;
}) => (
  <div className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md p-2">
    <Icon className={`text-4xl sm:text-5xl ${color}`} />
    <p className="mt-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
      {name}
    </p>
  </div>
);

export function MarqueeTechStack() {
  return (
    <div className="flex flex-col items-center text-center max-w-sm lg:max-w-lg mx-auto">
      <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200">
        Passionate Full-Stack Developer 🚀
      </h4>
      <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base text-justify">
        I specialize in building dynamic, high-performance web applications
        using modern technologies. With a strong foundation in{" "}
        <strong>Laravel, PHP, React, and Node.js</strong>, I create efficient,
        scalable, and user-friendly solutions.
      </p>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
        <Marquee pauseOnHover className="[--duration:15s]">
          {techStack.map(({ Icon, name, color }, index) => (
            <TechIcon key={index} Icon={Icon} name={name} color={color} />
          ))}
        </Marquee>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-2">
        <Marquee reverse pauseOnHover className="[--duration:15s]">
          {tools.map(({ Icon, name, color }, index) => (
            <TechIcon key={index} Icon={Icon} name={name} color={color} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
