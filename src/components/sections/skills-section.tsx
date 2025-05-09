
import { skillsData, skillCategories, type Skill } from '@/data/skills-data';
import { Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Wrench className="h-8 w-8 text-primary" />
            Skills & Expertise
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            A showcase of my technical abilities and professional competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const categorySkills = skillsData.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <Card key={category} className="shadow-lg bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill: Skill) => (
                      <Badge key={skill.id} variant="secondary" className="text-sm py-1 px-3">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

