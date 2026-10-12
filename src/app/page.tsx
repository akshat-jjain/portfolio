import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ExpertiseSection } from "@/components/sections/expertise-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { ProfilesSection } from "@/components/sections/profiles-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-background focus:px-3 focus:py-2 focus:text-sm">
        Skip to content
      </a>
      <Header />
      <main id="main-content" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <HeroSection />
        <ExpertiseSection />
        <ProjectsSection />
        <ExperienceSection />
        <PrinciplesSection />
        <ProfilesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
