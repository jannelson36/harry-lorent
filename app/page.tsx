'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import Header from '@/components/Layout/Header';
import ExperienceSection from '@/components/Sections/ExperienceSection';
import SkillsSection from '@/components/Sections/SkillsSection';
import EducationSection from '@/components/Sections/EducationSection';
import ContactSection from '@/components/Sections/ContactSection';
import ScrollProgress from '@/components/ui/ScrollProgress';

export default function Home() {
  const activeSection = useActiveSection();

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header activeSection={activeSection} />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}