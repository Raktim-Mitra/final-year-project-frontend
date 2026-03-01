'use client';

import { Badge } from '@/components/ui/badge';
import { AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { CourseOutcome } from '@/types/Index';

interface OutcomeCardProps {
  outcome: CourseOutcome;
  index: number;
}

const bloomColors: Record<string, string> = {
  Remembering: 'bg-gray-100 text-gray-700 border-gray-200',
  Understanding: 'bg-blue-100 text-blue-700 border-blue-200',
  Applying: 'bg-green-100 text-green-700 border-green-200',
  Analyzing: 'bg-amber-100 text-amber-700 border-amber-200',
  Evaluating: 'bg-purple-100 text-purple-700 border-purple-200',
  Creating: 'bg-red-100 text-red-700 border-red-200',
};

export default function OutcomeCard({ outcome, index }: OutcomeCardProps) {
  const gradients = [
    'bg-gradient-to-br from-brand-primary to-brand-secondary',
    'bg-gradient-to-br from-brand-secondary to-brand-accent',
    'bg-gradient-to-br from-brand-accent to-brand-primary',
  ];

  return (
    <AccordionItem
      value={outcome.id}
      className="border-2 border-brand-accent/30 rounded-xl overflow-hidden hover:border-brand-primary/40 transition-all data-[state=open]:border-brand-primary/40"
    >
      <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-brand-bg/30 [&>svg]:text-brand-primary">
        <div className="flex items-center gap-4">
          <div className={`size-11 rounded-xl flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0 ${gradients[index % 3]}`}>
            CO-{index + 1}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-foreground text-sm">{outcome.title}</h4>
            <Badge
              variant="outline"
              className={`mt-1 text-[10px] ${bloomColors[outcome.bloomLevel] || 'bg-gray-100 text-gray-700 border-gray-200'}`}
            >
              {outcome.bloomLevel}
            </Badge>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-5 pb-5">
        <p className="text-sm text-muted-foreground leading-relaxed">{outcome.description}</p>
      </AccordionContent>
    </AccordionItem>
  );
}