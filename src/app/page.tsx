import { HeroSection } from '@/components/sections/hero-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { EducationSection } from '@/components/sections/education-section'; // New import
import { AiFeedbackSection } from '@/components/sections/ai-feedback-section';
import { ContactSection } from '@/components/sections/contact-section';
import { FooterSection } from '@/components/sections/footer-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/mode-toggle';

// Navigation Links data
const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#timeline', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' }, // Changed from Projects to Education
  { href: '#ai-feedback', label: 'AI Analyzer' },
  { href: '#contact', label: 'Contact' },
];


// Simple Nav component for reuse in Header and MobileSheet
function NavigationLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <Button key={link.label} variant="ghost" asChild onClick={onClick}>
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </>
  );
}


function PageHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#hero" className="text-xl font-bold text-primary">
          Profile Pulse
        </Link>
        <nav className="hidden items-center space-x-2 md:flex">
          <NavigationLinks />
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 py-6">
                <NavigationLinks onClick={() => {
                  // This is a bit of a hack to close the sheet.
                  // A more robust solution might involve managing sheet open state.
                  const closeButton = document.querySelector('[data-radix-dialog-default-open="false"] > button');
                  if (closeButton instanceof HTMLElement) {
                    closeButton.click();
                  }
                }} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHeader />
      <HeroSection />
      <TimelineSection />
      <SkillsSection />
      <EducationSection /> {/* Replaced ProjectGallerySection */}
      <AiFeedbackSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
