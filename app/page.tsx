import { HeroHighlightBg } from "@/components/Hero";
import FloatingNavbar from "@/components/navbar";
import ProfileCard from "@/components/ProfileCard";
import TechStack from "@/components/TechStack";
import { Meteors } from "@/components/ui/meteors";

export default function Home() {
  return (
    <>
      <div className="min-h-screen rounded-md bg-neutral-400 dark:bg-neutral-950 relative items-center justify-center">
        <FloatingNavbar />
        <Meteors className="z-50" />
        <HeroHighlightBg />
      </div>
      <ProfileCard />
      <div className="flex items-center justify-center pb-10">
        <TechStack />
      </div>
    </>
  );
}
