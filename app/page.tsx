'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import Header from '@/components/Layout/Header';
import AboutSection from '@/components/Sections/AboutSection';
import ExperienceSection from '@/components/Sections/ExperienceSection';
import ProjectsSection from '@/components/Sections/ProjectsSection';
import SkillsSection from '@/components/Sections/SkillsSection';
import EducationSection from '@/components/Sections/EducationSection';
import TestimonialsSection from '@/components/Sections/TestimonialsSection';
import ContactSection from '@/components/Sections/ContactSection';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Footer from '@/components/Layout/Footer';

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header activeSection={activeSection} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}