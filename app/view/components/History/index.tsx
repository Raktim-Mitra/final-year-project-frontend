import { FolderOpen } from 'lucide-react';
import { SyllabusResult } from '@/types/Index';
import HistoryCard from './HistoryCard';

interface HistorySectionProps {
  results: SyllabusResult[];
  onResultClick?: (id: string) => void;
}

export default function HistorySection({ results, onResultClick }: HistorySectionProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-[#D9C4B0]/30 flex items-center justify-center">
            <FolderOpen className="w-5 h-5 text-[#b8a18c]" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Previous Results</h3>
            <p className="text-sm text-gray-500">Your uploaded syllabus history</p>
          </div>
        </div>
        <span className="px-3 py-1.5 bg-[#D9C4B0]/30 text-[#b8a18c] text-sm font-bold rounded-full">
          {results.length} results
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((result) => (
          <HistoryCard
            key={result.id}
            result={result}
            onClick={() => onResultClick?.(result.id)}
          />
        ))}
      </div>
    </section>
  );
}