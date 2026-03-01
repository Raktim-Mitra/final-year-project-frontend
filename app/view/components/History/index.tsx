import { FolderOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SyllabusResult } from '@/types/Index';
import HistoryCard from './HistoryCard';

interface HistorySectionProps {
  results: SyllabusResult[];
}

export default function HistorySection({ results }: HistorySectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-brand-accent/30 flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-brand-text" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Previous Results</h3>
            <p className="text-sm text-muted-foreground">Your uploaded syllabus history</p>
          </div>
        </div>
        <Badge variant="secondary" className="bg-brand-accent/20 text-brand-text font-bold">
          {results.length} results
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((result) => (
          <HistoryCard key={result.id} result={result} />
        ))}
      </div>
    </section>
  );
}