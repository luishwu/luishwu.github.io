
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages } from 'lucide-react';
import type React from 'react';

// Import flag icons
import { SpainFlagIcon } from '@/components/icons/SpainFlagIcon';
import { CataloniaFlagIcon } from '@/components/icons/CataloniaFlagIcon';
import { UkFlagIcon } from '@/components/icons/UkFlagIcon';
import { ChinaFlagIcon } from '@/components/icons/ChinaFlagIcon';

interface LanguageSkill {
  id: string;
  name: string;
  level: 'Native' | 'Advanced';
  flagComponent: React.ElementType<{ className?: string }>;
}

const languageSkillsData: LanguageSkill[] = [
  { id: 'lang1', name: 'Spanish', level: 'Native', flagComponent: SpainFlagIcon },
  { id: 'lang2', name: 'Catalan', level: 'Native', flagComponent: CataloniaFlagIcon },
  { id: 'lang3', name: 'English', level: 'Advanced', flagComponent: UkFlagIcon },
  { id: 'lang4', name: 'Chinese (Mandarin)', level: 'Advanced', flagComponent: ChinaFlagIcon },
];

export function LanguageSkillsSection() {
  return (
    <section id="languages" className="py-16 md:py-24 bg-background"> {/* Changed to bg-background */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground flex items-center justify-center gap-3">
            <Languages className="h-8 w-8 text-primary" />
            Language Proficiency
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            My command of various languages, enabling effective communication.
          </p>
        </div>

        {languageSkillsData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {languageSkillsData.map((skill: LanguageSkill) => (
              <Card key={skill.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                <CardHeader className="items-center pb-2 pt-4"> {/* Adjusted padding */}
                  {/* Render the flag icon */}
                  <skill.flagComponent className="h-8 w-auto mb-3 rounded border border-border" /> {/* Adjusted size, margin, added rounded and border */}
                  <CardTitle className="text-xl font-semibold text-primary">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow pt-0 pb-4"> {/* Adjusted padding */}
                  <Badge variant={skill.level === 'Native' ? 'default' : 'secondary'} className="text-sm">
                    {skill.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No language skills information available.</p>
        )}
      </div>
    </section>
  );
}
