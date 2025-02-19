"use client";

import { ContainerIcon, HomeIcon, InfoIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "./mode-toggle";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#services", icon: InfoIcon, label: "Services" },
    { href: "#projects", icon: ContainerIcon, label: "Projects" },
    { href: "#contacts", icon: PhoneIcon, label: "Contact" },
  ],
};

export const DockNavbar = React.memo(() => {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.div
                    whileHover={{ backgroundColor: "var(--tw-bg-gray-200)" }}
                    className="dark:hover:bg-gray-900 rounded-full transition-all"
                  >
                    <Link
                      href={item.href}
                      aria-label={item.label}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full flex items-center justify-center"
                      )}
                    >
                      <item.icon className="size-6" />
                    </Link>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
});
