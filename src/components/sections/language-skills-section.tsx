
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages, Star, CheckCircle } from 'lucide-react'; // Using Languages, Star, CheckCircle icons

interface LanguageSkill {
  id: string;
  name: string;
  level: 'Native' | 'Advanced';
  icon: React.ElementType; // For specific icons per language if needed, e.g. country flags (not used yet)
}

const languageSkillsData: LanguageSkill[] = [
  { id: 'lang1', name: 'Spanish', level: 'Native', icon: Star },
  { id: 'lang2', name: 'Catalan', level: 'Native', icon: Star },
  { id: 'lang3', name: 'English', level: 'Advanced', icon: CheckCircle },
  { id: 'lang4', name: 'Chinese (Mandarin)', level: 'Advanced', icon: CheckCircle },
];

export function LanguageSkillsSection() {
  return (
    <section id="languages" className="py-16 md:py-24 bg-secondary">
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
                <CardHeader className="items-center">
                  <skill.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl font-semibold text-primary">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
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
