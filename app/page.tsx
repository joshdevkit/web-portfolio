import { Code } from "@/components/Code";
import ContactForm from "@/components/ContactForm";
import { HeroHighlightBg } from "@/components/Hero";
import { MarqueeTechStack } from "@/components/marque-techstack";
import ProfileCard from "@/components/ProfileCard";
import { Projects } from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";
import { DockNavbar } from "@/components/ui/DockNav";
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
      <div
        className="fixed top-2 left-1/2 transform -translate-x-1/2  
      px-4 h-12 flex items-center space-x-3 z-50"
      >
        <DockNavbar />
      </div>

      <div className="min-h-screen rounded-md dark:bg-neutral-950 relative items-center justify-center">
        {/* <FloatingNavbar /> */}

        <HeroHighlightBg />

        <ProfileCard />
        <div className="flex items-center justify-center pb-10 mt-4">
          <MarqueeTechStack />
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
