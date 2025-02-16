"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Web Applications",
    description:
      "I specialize in crafting high-performance, scalable web applications that seamlessly adapt to business needs. From dynamic frontend interfaces to robust backend systems, I ensure efficiency and reliability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Scalable Web Apps
      </div>
    ),
  },
  {
    title: "Seamless User Experience",
    description:
      "User experience is at the core of my development approach. I create intuitive, visually appealing, and accessible interfaces that provide users with a smooth and engaging interaction.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        UI/User Experience
      </div>
    ),
  },
  {
    title: "Optimized Performance",
    description:
      "Fast-loading, efficient, and optimized applications—performance is non-negotiable. I implement best practices in coding, caching, and database management to enhance speed and responsiveness.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Performance Optimization
      </div>
    ),
  },
];

export function StickyScrollReveal() {
  return (
    <div className="p-10">
      <h4 className="mt-4 text-2xl mb-4">Services 🚀</h4>
      <StickyScroll content={content} />
    </div>
  );
}
