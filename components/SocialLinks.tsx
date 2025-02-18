"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaEnvelope, FaTiktok } from "react-icons/fa";

const SocialLinks = () => {
  const socialLinks = [
    {
      href: "https://github.com/joshdevkit",
      label: "GitHub",
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      href: "https://www.facebook.com/JoshDevIlokano/",
      label: "Facebook",
      icon: <FaFacebook className="w-6 h-6" />,
    },
    {
      href: "https://www.tiktok.com/@pachocolate",
      label: "TikTok",
      icon: <FaTiktok className="w-6 h-6" />,
    },
  ];

  return (
    <div className="flex justify-center space-x-8 mt-10">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-all"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="p-4 bg-gray-800 rounded-full hover:bg-blue-500 transition duration-300">
            {social.icon}
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
