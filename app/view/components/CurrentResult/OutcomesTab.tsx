'use client';

import { CourseOutcome } from '@/types/Index';
import OutcomeCard from '../ui/OutcomeCard';

interface OutcomesTabProps {
  outcomes: CourseOutcome[];
  expandedOutcomes: Set<string>;
  onToggleOutcome: (id: string) => void;
}

export default function OutcomesTab({ outcomes, expandedOutcomes, onToggleOutcome }: OutcomesTabProps) {
  return (
    <div className="space-y-4">
      {outcomes.map((outcome, index) => (
        <OutcomeCard
          key={outcome.id}
          outcome={outcome}
          index={index}
          isExpanded={expandedOutcomes.has(outcome.id)}
          onToggle={() => onToggleOutcome(outcome.id)}
        />
      ))}
    </div>
  );
}