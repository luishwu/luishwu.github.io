import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { timelineData, type TimelineItem } from '@/data/timeline-data';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  const educationItems = timelineData.filter(item => item.type === 'education');

  return (
    <section id="education" className="py-16 md:py-24 bg-secondary"> {/* Changed to bg-secondary */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Educational Background
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            My academic qualifications and achievements.
          </p>
        </div>

        {educationItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationItems.map((item: TimelineItem) => (
              <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card text-card-foreground"> {/* Ensure card has contrasting background */}
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
                    <Badge variant="outline" className="whitespace-nowrap bg-background text-foreground">{item.date}</Badge> {/* Ensure badge is visible */}
                  </div>
                  {item.institution && (
                    <p className="text-md text-muted-foreground">{item.institution}</p>
                  )}
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-foreground/80 leading-relaxed mb-4">
                    {item.description}
                  </CardDescription>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No education information available.</p>
        )}
      </div>
    </section>
  );
}
