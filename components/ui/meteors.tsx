import { cn } from "@/lib/utils";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);

  return (
    <>
      {meteors.map((_, idx) => {
        const randomTop = Math.random() * 100; // Random top percentage
        const randomLeft = Math.random() * 100; // Random left percentage

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className
            )}
            style={{
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              animationDelay: `${Math.random() * (0.5 - 0.1) + 0.1}s`, // Shorter delay for more frequent meteors
              animationDuration: `${Math.random() * (2 - 0.5) + 0.8}s`, // Faster movement (0.5s - 2s)
            }}
          ></span>
        );
      })}
    </>
  );
};
