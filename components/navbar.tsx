"use client";

import React, { useState } from "react";
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
  const [active, setActive] = useState<string | null>("");

  return (
    <header
      className="fixed top-2 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md shadow-lg rounded-lg 
      px-4 h-12 flex items-center space-x-3 z-50"
    >
      {[
        { href: "#home", icon: <HomeIcon />, key: "home", label: "Home" },
        { href: "#about", icon: <InfoIcon />, key: "about", label: "About" },
        {
          href: "#services",
          icon: <CodeXmlIcon />,
          key: "services",
          label: "Services",
        },
        {
          href: "#projects",
          icon: <ContainerIcon />,
          key: "projects",
          label: "Projects",
        },
        {
          href: "#contacts",
          icon: <PhoneIcon />,
          key: "contacts",
          label: "Contact",
        },
      ].map(({ href, icon, key, label }) => (
        <motion.a
          key={key}
          href={href}
          onClick={() => setActive(key)}
          transition={{ type: "spring", stiffness: 250 }}
          className={`relative group text-neutral-800 dark:text-white font-semibold transition 
            hover:bg-gray-200 hover:dark:bg-gray-900 rounded-full p-2 ${
              active === key ? "bg-gray-300 dark:bg-gray-800" : ""
            }`}
        >
          {icon}

          {/* Tooltip stays visible when active */}
          <span
            className={`absolute left-1/2 -translate-x-1/2 top-12 bg-gray-800 text-white text-xs px-2 py-1 rounded 
              transition-opacity duration-300 whitespace-nowrap ${
                active === key
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
          >
            {label}
          </span>
        </motion.a>
      ))}
      <ModeToggle />
    </header>
  );
};

export default FloatingNavbar;
