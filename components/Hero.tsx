"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Mail, Download } from "lucide-react";
import { Button } from "./ui/moving-border";

export function HeroHighlightBg() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="flex flex-col items-center text-center"
      >
        <div className="mb-4">
          <img
            className="rounded-full object-cover h-72 w-full"
            src={"/me.jpg"}
            alt="avatar"
          />
        </div>
        <h1
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold 
          text-neutral-700 dark:text-white max-w-4xl leading-relaxed 
          lg:leading-snug text-center"
        >
          Elevate your digital presence with clean, efficient, and
          high-performance web applications. Let's build something amazing
          together.{" "}
          <Highlight className="text-black dark:text-white">
            @JoshDev.
          </Highlight>
        </h1>

        <div className="flex justify-between p-4 m-3">
          <Button
            className="bg-neutral-600 text-white px-6 py-2 rounded-lg shadow-md 
              flex items-center gap-2 hover:bg-neutral-700 transition-all"
            onClick={() => window.open("/RESUME.pdf", "_blank")}
          >
            <Download size={20} /> Download CV
          </Button>

          <Button
            className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md 
              flex items-center gap-2 hover:bg-gray-900 transition-all"
            onClick={() =>
              (window.location.href = "mailto:jshpch1996@gmail.com")
            }
          >
            <Mail size={20} /> Email Me
          </Button>
        </div>
      </motion.div>
    </HeroHighlight>
  );
}
