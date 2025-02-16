"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const projects = [
  {
    title: "Blood Donation System",
    description:
      "A web-based platform for managing blood donations and requests with real-time analytics. Built with Laravel, PHP, and React to enhance efficiency in blood bank operations.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--rose-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },
  {
    title: "Attendance Tracker with QR Code",
    description:
      "A student attendance system that leverages QR code scanning to automate check-ins. Developed using Laravel, React, and Tailwind CSS for seamless tracking and reporting.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },
  {
    title: "Real-time Chat Application",
    description:
      "A modern, real-time chat app with a responsive UI, powered by Node.js, Socket.io, and React. Features include message encryption, online status indicators, and file sharing.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },
  {
    title: "School Assets and Inventory",
    description:
      "A Laravel 10-based school inventory management system that helps track and manage assets efficiently. Features include asset categorization, real-time tracking, and automated reporting.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },
  {
    title: "Veterinary Management System",
    description:
      "A complete veterinary clinic management system built with Laravel 10. It streamlines appointment scheduling, patient records, billing, and inventory management for veterinary clinics.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--cyan-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },
  {
    title: "Dental Management System",
    description:
      "A Laravel 10-powered dental clinic management system designed for seamless patient record management, appointment scheduling, and treatment tracking, ensuring efficient clinic operations.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--rose-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },
  {
    title: "Smart Access Control",
    description:
      "A Laravel 10-powered smart access control system using QR codes for seamless attendance tracking in classrooms, exams, quizzes, and subject-based sessions. Ensures accurate logging and real-time monitoring.",
    content: (
      <div className="h-full w-full bg-[linear_gradient(to_bottom_right,var(--purple-500),var(--violet-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },

  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--rose-500))] flex items-center justify-center text-white font-semibold text-lg">
        Image not available
      </div>
    ),
  },
];

export function Projects() {
  return (
    <div className="p-10">
      <h4 className="mt-4 text-2xl mb-4 font-bold text-gray-800 dark:text-gray-200 ">
        My Projects 🚀
      </h4>
      <StickyScroll content={projects} />
    </div>
  );
}
