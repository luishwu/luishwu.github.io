import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-8">
          <Image
            src="https://picsum.photos/seed/profile/200/200"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
            data-ai-hint="profile professional"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            John Doe
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            Creative Full-Stack Developer & AI Enthusiast
          </p>
        </div>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Welcome to Profile Pulse, my personal space to showcase my journey, skills, and projects.
          I build intuitive, robust, and scalable web applications with a passion for cutting-edge technologies.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <a href="#contact">
            Get In Touch <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
