import { HeroSection } from '@/components/sections/hero-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { CertificationsSection } from '@/components/sections/certifications-section'; // New import
import { EducationSection } from '@/components/sections/education-section';
import { LanguageSkillsSection } from '@/components/sections/language-skills-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FooterSection } from '@/components/sections/footer-section';
import { PageHeader } from '@/components/page-header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
      <CertificationsSection /> {/* Added new section */}
      <EducationSection />
      <LanguageSkillsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
