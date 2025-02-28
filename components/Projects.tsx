"use client";

import { useEffect, useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const projects = [
    {
      quote:
        "A social media platform built with nextjs14. Implementing Google oAuth and github.",
      name: "Real Time Social Media App",
      designation: "Developed for TechFlow Inc.",
      src: "/assets/projects/1.PNG",
      url: "#",
    },
    {
      quote:
        "A robust PHP MVC framework API designed for scalability and maintainability. Implements a clean architectural pattern for building modern web applications efficiently.",
      name: "MVC - Core PHP",
      designation: "Lightweight & Scalable Framework",
      src: "/assets/projects/mvc.PNG",
      url: "#",
    },
    {
      quote:
        "A cloud infrastructure management system, built with laravel 10. Ensuring seamless deployment and monitoring of school inventory such as Supplies and Equipment.",
      name: "School Assets and Inventory",
      designation: "Created for Tuguegarao University Capstone project.",
      src: "/assets/projects/inventory.PNG",
      url: "#",
    },
    {
      quote:
        "A seamless and efficient platform designed for Solane gas stove vendors, streamlining order management, inventory tracking, and customer interactions. With real-time updates, automated invoicing, and an intuitive interface, this web app optimizes business operations, ensuring fast and hassle-free transactions for both vendors and customers.",
      name: "GUFC SOLANE",
      designation: "Engineered for GUFC Solane Makati.",
      src: "/assets/projects/forecasting.PNG",
      url: "#",
    },
    {
      quote:
        "A comprehensive online health center platform designed to manage and streamline vaccination records, appointment scheduling, and patient tracking. With real-time updates, secure data management, and automated reminders, this web app ensures an efficient and accessible vaccination process for both healthcare providers and patients.",
      name: "VaxTrack: Online Health Center Vaccination Management",
      designation: "Developed for Carmen Bagong Silang.",
      src: "/assets/projects/health.PNG",
      url: "#",
    },
    {
      quote:
        "The Meeting App is a fast, modern, and intuitive web application designed for seamless video conferencing, team collaboration, and virtual meetings. Built using React and Vite, it leverages ZegoCloud for high-quality real-time communication.",
      name: "One-Talk",
      designation: "Meeting App - Built with React & Vite.",
      src: "/assets/projects/one-talk.PNG",
      url: "https://open-talk-one.vercel.app/",
    },
  ];

  return isClient ? (
    <div>
      <h4 className="mt-4 text-2xl mb-4">Projects 🚀</h4>
      <AnimatedTestimonials testimonials={projects} />
    </div>
  ) : null;
}
