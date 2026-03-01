'use client';

import { Accordion } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { ModuleItem } from '@/types/Index';
import ModuleCard from '../ui/ModuleCard';

interface ModulesTabProps {
  modules: ModuleItem[];
}

export default function ModulesTab({ modules }: ModulesTabProps) {
  const totalHours = modules.reduce((acc, m) => acc + (m.hours || 0), 0);
  const totalTopics = modules.reduce((acc, m) => acc + m.topics.length, 0);

  return (
    <div>
      <Card className="mb-5 border-brand-accent/20 bg-brand-bg/40">
        <CardContent className="p-4">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="size-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold text-sm">
                {modules.length}
              </span>
              <span className="text-sm text-muted-foreground">Modules</span>
            </div>
            <div className="w-px h-6 bg-brand-accent/40" />
            <div className="flex items-center gap-2">
              <span className="size-8 rounded-lg bg-brand-secondary/20 flex items-center justify-center text-brand-primary font-bold text-sm">
                {totalTopics}
              </span>
              <span className="text-sm text-muted-foreground">Topics</span>
            </div>
            <div className="w-px h-6 bg-brand-accent/40" />
            <div className="flex items-center gap-2">
              <span className="size-8 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-text font-bold text-sm">
                {totalHours}
              </span>
              <span className="text-sm text-muted-foreground">Hours</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Accordion type="multiple" defaultValue={['M1']} className="space-y-4">
        {modules.map((module, index) => (
          <ModuleCard key={module.id} module={module} index={index} />
        ))}
      </Accordion>
    </div>
  );
}