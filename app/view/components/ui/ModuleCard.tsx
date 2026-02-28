'use client';

import { Clock, BookOpen, Hash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { ModuleItem } from '@/types/Index';

interface ModuleCardProps {
  module: ModuleItem;
  index: number;
}

export default function ModuleCard({ module, index }: ModuleCardProps) {
  return (
    <AccordionItem
      value={module.id}
      className="border-2 border-brand-accent/30 rounded-xl overflow-hidden hover:border-brand-primary/40 transition-all data-[state=open]:border-brand-primary/40"
    >
      <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-brand-bg/30 [&>svg]:text-brand-primary">
        <div className="flex items-center gap-4">
          <div className="size-11 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
            M{index + 1}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-foreground text-sm">{module.title}</h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Hash className="w-3 h-3" />
                {module.topics.length} topics
              </span>
              {module.hours && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {module.hours} hrs
                </span>
              )}
            </div>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-5 pb-5">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-brand-primary" />
            <span className="text-sm font-bold text-foreground">Content</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed bg-brand-bg/40 rounded-lg p-4 border border-brand-accent/20">
            {module.content}
          </p>
        </div>

        <div>
          <span className="text-sm font-bold text-foreground mb-2 block">Topics Covered</span>
          <div className="flex flex-wrap gap-2">
            {module.topics.map((topic, i) => (
              <Badge
                key={i}
                variant="outline"
                className="bg-brand-secondary/15 text-brand-primary border-brand-secondary/40 font-semibold"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}