import { Code } from "@/components/Code";
import ContactForm from "@/components/ContactForm";
import { HeroHighlightBg } from "@/components/Hero";
import FloatingNavbar from "@/components/navbar";
import { OrbitingTechStack } from "@/components/OrbitingTechStack";
import ProfileCard from "@/components/ProfileCard";
import { Projects } from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";
import TechStack from "@/components/TechStack";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <>
      <div
        id="home"
        className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden z-10"
      >
        <Meteors />
      </div>
      <div className="min-h-screen rounded-md dark:bg-neutral-950 relative items-center justify-center">
        <FloatingNavbar />
        <HeroHighlightBg />

        <ProfileCard />
        <div className="flex items-center justify-center pb-10">
          <OrbitingTechStack />
        </div>
        <div
          id="services"
          className="flex items-center justify-center pb-10 w-full"
        >
          <StickyScrollReveal />
        </div>
        <div
          id="projects"
          className="flex items-center justify-center pb-10 w-full"
        >
          <Projects />
        </div>
        <div className="flex items-center justify-center pb-10">
          <Code />
        </div>
        <div id="contacts" className="flex items-center justify-center w-full">
          <ContactForm />
        </div>
        <div className="flex items-center justify-center pb-10">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
