'use client';

import { Accordion } from '@/components/ui/accordion';
import { CourseOutcome } from '@/types/Index';
import OutcomeCard from '../ui/OutcomeCard';

interface OutcomesTabProps {
  outcomes: CourseOutcome[];
}

export default function OutcomesTab({ outcomes }: OutcomesTabProps) {
  return (
    <Accordion type="multiple" defaultValue={['LO1']} className="space-y-4">
      {outcomes.map((outcome, index) => (
        <OutcomeCard key={outcome.id} outcome={outcome} index={index} />
      ))}
    </Accordion>
  );
}