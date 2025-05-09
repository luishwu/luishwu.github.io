import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { certificationsData } from '@/data/certifications-data';
import { Award } from 'lucide-react';

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            My Certifications
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A list of my professional certifications and accreditations.
          </p>
        </div>

        {certificationsData.length > 0 ? (
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">Professional Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 list-disc list-inside text-foreground/80 pl-4">
                {certificationsData.map((cert) => (
                  <li key={cert.id} className="text-base">
                    {cert.name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ) : (
          <p className="text-center text-muted-foreground">No certifications to display.</p>
        )}
      </div>
    </section>
  );
}
