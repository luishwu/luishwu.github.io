import { HeroSection } from '@/components/sections/hero-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { EducationSection } from '@/components/sections/education-section';
import { AiFeedbackSection } from '@/components/sections/ai-feedback-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FooterSection } from '@/components/sections/footer-section';
import { PageHeader } from '@/components/page-header'; // Import PageHeader

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
      <EducationSection />
      <AiFeedbackSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
