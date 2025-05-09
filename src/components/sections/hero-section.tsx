import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-8">
          <Image
            src="/profile_web.png"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full mx-auto mb-6 border-4 border-primary shadow-lg"
            data-ai-hint="profile picture of Luis Wu"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Luis Wu
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
            Engineering Manager / Delivery Manager
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            Barcelona, Spain • luishong.wu@gmail.com • (+34) 669485084
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            <a href="https://www.linkedin.com/in/luiswu/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline" data-ai-hint="LinkedIn profile link">
              linkedin.com/in/luiswu
            </a>
          </p>
        </div>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Results-driven IT Delivery Manager with a strong ability to lead teams, drive project execution, and optimize delivery processes. Skilled in team building, leadership, and cross-functional collaboration, ensuring high-quality and timely delivery of IT initiatives. Adept at problem-solving, stakeholder management, and decision-making, with a focus on enhancing efficiency, mitigating risks, and aligning technology solutions with business goals. Dedicated to training, mentoring, and fostering a culture of continuous improvement to enhance team engagement and overall performance.
        </p>
        <Button asChild size="lg">
          <a href="#contact">
            Get In Touch <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
}
