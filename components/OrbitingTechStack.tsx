import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { MarqueeTechStack } from "./marque-techstack";

export function OrbitingTechStack() {
  return (
    <>
      <div className="flex flex-col mt-6 text-center max-w-sm">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          {/* <OrbitingCircles iconSize={40}>
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
          </OrbitingCircles> */}
        </div>
      </div>
    </>
  );
}
