import React from "react";
import { ModeToggle } from "./ui/mode-toggle";

const FloatingNavbar = () => {
  return (
    <header
      className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md shadow-lg rounded-lg 
      px-4 h-10 flex items-center space-x-4 z-50"
    >
      <a
        href="#home"
        className="text-neutral-800 dark:text-white font-semibold hover:text-neutral-200 dark:hover:text-neutral-900 transition"
      >
        Home
      </a>
      <a
        href="#about"
        className="text-neutral-800 dark:text-white font-semibold hover:text-neutral-200 dark:hover:text-neutral-900 transition"
      >
        About
      </a>
      <a
        href="#services"
        className="text-neutral-800 dark:text-white font-semibold hover:text-neutral-200 dark:hover:text-neutral-900 transition"
      >
        Services
      </a>
      <a
        href="#projects"
        className="text-neutral-800 dark:text-white font-semibold hover:text-neutral-200 dark:hover:text-neutral-900 transition"
      >
        Projects
      </a>
      <a
        href="#contacts"
        className="text-neutral-800 dark:text-white font-semibold hover:text-neutral-200 dark:hover:text-neutral-900 transition"
      >
        Contact
      </a>
      <ModeToggle />
    </header>
  );
};

export default FloatingNavbar;
