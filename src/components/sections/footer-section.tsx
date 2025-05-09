import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { XSocialIcon } from '@/components/icons/XSocialIcon'; // New import

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground mb-4 md:mb-0">
          &copy; {currentYear} Luis Wu. All rights reserved.
        </p>
        <div className="flex space-x-3">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/luishwu" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/luiswu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://x.com/LuisHWu" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter) Profile">
              <XSocialIcon className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:luishong.wu@gmail.com" aria-label="Email Luis Wu">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
