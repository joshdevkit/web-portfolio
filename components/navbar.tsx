"use client";

import React from "react";
import { motion } from "framer-motion";
import { ModeToggle } from "./ui/mode-toggle";
import {
  CodeXmlIcon,
  ContainerIcon,
  HomeIcon,
  InfoIcon,
  PhoneIcon,
} from "lucide-react";

const FloatingNavbar = () => {
  return (
    <header
      className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md shadow-lg rounded-lg 
      px-4 h-12 flex items-center space-x-6 z-50"
    >
      {[
        { href: "#home", icon: <HomeIcon />, key: "home" },
        { href: "#about", icon: <InfoIcon />, key: "about" },
        { href: "#services", icon: <CodeXmlIcon />, key: "services" },
        { href: "#projects", icon: <ContainerIcon />, key: "projects" },
        { href: "#contacts", icon: <PhoneIcon />, key: "contacts" },
      ].map(({ href, icon, key }) => (
        <motion.a
          key={key}
          href={href}
          whileHover={{ scale: 2 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="text-neutral-800 dark:text-white font-semibold transition"
        >
          {icon}
        </motion.a>
      ))}
      <ModeToggle />
    </header>
  );
};

export default FloatingNavbar;
