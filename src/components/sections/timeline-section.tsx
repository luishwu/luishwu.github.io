
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { timelineData, type TimelineItem } from '@/data/timeline-data';
import { Milestone } from 'lucide-react';

export function TimelineSection() {
  const experienceAndProjectItems = timelineData.filter(item => item.type !== 'education');

  return (
    <section id="timeline" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Milestone className="h-8 w-8 text-primary" />
            My Journey
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A chronological overview of my professional experiences and projects.
          </p>
        </div>

        {experienceAndProjectItems.length > 0 ? (
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>

            {experienceAndProjectItems.map((item, index) => (
              <div
                key={item.id}
                className={`mb-8 flex md:items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:flex md:w-1/2"></div>
                <div className="hidden md:flex md:w-12 justify-center">
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:px-4">
                  {/* Mobile icon and connector */}
                  <div className="flex items-center gap-4 mb-2 md:hidden">
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-grow border-t-2 border-border"></div>
                  </div>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
                          {item.institution && (
                            <p className="text-sm text-muted-foreground">{item.institution}</p>
                          )}
                          {item.role && (
                            <p className="text-sm font-medium text-foreground">{item.role}</p>
                          )}
                        </div>
                        <Badge variant="secondary" className="whitespace-nowrap">{item.date}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-foreground/80 leading-relaxed">
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
                </div>
              </div>
            ))}
          </div>
        ) : (
           <p className="text-center text-muted-foreground">No professional experiences or projects available.</p>
        )}
      </div>
    </section>
  );
}
