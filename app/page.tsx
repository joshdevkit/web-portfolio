import ContactForm from "@/components/ContactForm";
import { HeroHighlightBg } from "@/components/Hero";
import FloatingNavbar from "@/components/navbar";
import ProfileCard from "@/components/ProfileCard";
import { Projects } from "@/components/Projects";
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
          <TechStack />
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
        <div
          id="contacts"
          className="flex items-center justify-center pb-10 w-full"
        >
          <ContactForm />
        </div>
      </div>
    </>
  );
}
