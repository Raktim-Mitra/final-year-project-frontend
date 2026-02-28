import { ChevronRight, Calendar, ListChecks, MessageSquareQuote } from 'lucide-react';
import { SyllabusResult } from '@/types/Index';

interface HistoryCardProps {
  result: SyllabusResult;
  onClick?: () => void;
}

export default function HistoryCard({ result, onClick }: HistoryCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <button
      onClick={onClick}
      className="w-full text-left p-5 bg-white rounded-xl border-2 border-[#D9C4B0]/30 hover:border-[#5da8bd]/40 hover:shadow-lg transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs text-gray-400 mb-1">{result.syllabusName}</p>
          <h4 className="font-bold text-gray-900 group-hover:text-[#5da8bd] transition-colors">
            {result.courseName}
          </h4>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#5da8bd] group-hover:translate-x-1 transition-all" />
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Calendar className="w-3.5 h-3.5" />
          {formatDate(result.uploadedAt)}
        </span>
        <span className="flex items-center gap-1">
          <ListChecks className="w-3.5 h-3.5" />
          {result.outcomeCount} outcomes
        </span>
        <span className="flex items-center gap-1">
          <MessageSquareQuote className="w-3.5 h-3.5" />
          {result.questionCount} questions
        </span>
      </div>
    </button>
  );
}