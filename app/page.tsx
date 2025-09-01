import { Encryption } from "@/components/main/encryption";
import Hero from "@/components/main/hero";
import Projects from "@/components/main/projects";
import Skills from "@/components/main/skills";
import ExperienceSection from "@/components/main/experience";
import CertificationsSection from "@/components/main/certifications";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <ExperienceSection />
        <Encryption />
        <Projects />
        <CertificationsSection />
      </div>
    </main>
  );
}