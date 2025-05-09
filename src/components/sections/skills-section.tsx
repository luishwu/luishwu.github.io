import { Progress } from '@/components/ui/progress';
import { skillsData, skillCategories, type Skill } from '@/data/skills-data';
import { Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            A showcase of my technical abilities and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const categorySkills = skillsData.filter(skill => skill.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <Card key={category} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categorySkills.map((skill: Skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-3 [&>div]:bg-primary" aria-label={`${skill.name} proficiency ${skill.level}%`} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
