// src/components/sections/contact-section.tsx
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function ContactSection() {
  const emailAddress = "luishong.wu@gmail.com";

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Mail className="h-8 w-8 text-primary" />
            Get In Touch
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Have a question or want to work together? The best way to reach me is via email.
          </p>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg rounded-md">
            <a href={`mailto:${emailAddress}`}>
              <Mail className="mr-2 h-5 w-5" />
              Send an Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
