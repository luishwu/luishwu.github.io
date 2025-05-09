// src/components/page-header.tsx
'use client';

import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/mode-toggle';

// Navigation Links data
const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#timeline', label: 'Journey' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' }, // Added Certifications link
  { href: '#education', label: 'Education' },
  { href: '#languages', label: 'Languages' },
  { href: '#contact', label: 'Contact' },
];

// Simple Nav component for reuse in Header and MobileSheet
function NavigationLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {navLinks.map((link) => (
        <Button key={link.label} variant="ghost" asChild onClick={onClick}>
          <a href={link.href}>{link.label}</a>
        </Button>
      ))}
    </>
  );
}

export function PageHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <a href="#hero" className="text-xl font-bold text-primary">
          Luis Wu
        </a>
        <nav className="hidden items-center space-x-1 md:flex"> {/* Reduced space-x-2 to space-x-1 for more items */}
          <NavigationLinks />
          <ModeToggle />
        </nav>
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4 py-6">
                <NavigationLinks onClick={closeMobileMenu} />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
