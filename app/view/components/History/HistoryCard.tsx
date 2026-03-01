'use client';

import { useRouter } from 'next/navigation';
import { ChevronRight, Calendar, ListChecks, MessageSquareQuote, LayoutList } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SyllabusResult } from '@/types/Index';

interface HistoryCardProps {
  result: SyllabusResult;
}

export default function HistoryCard({ result }: HistoryCardProps) {
  const router = useRouter();

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <Card
      onClick={() => router.push(`/view/${result.id}`)}
      className="cursor-pointer border-2 border-brand-accent/30 hover:border-brand-primary/40 hover:shadow-lg transition-all group"
    >
      <CardContent className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">{result.syllabusName}</p>
            <h4 className="font-bold text-foreground group-hover:text-brand-primary transition-colors">
              {result.courseName}
            </h4>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-brand-primary group-hover:translate-x-1 transition-all shrink-0" />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline" className="text-[11px] border-brand-accent/40 text-muted-foreground gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(result.uploadedAt)}
          </Badge>
          <Badge variant="outline" className="text-[11px] border-brand-accent/40 text-muted-foreground gap-1">
            <LayoutList className="w-3 h-3" />
            {result.moduleCount} modules
          </Badge>
          <Badge variant="outline" className="text-[11px] border-brand-accent/40 text-muted-foreground gap-1">
            <ListChecks className="w-3 h-3" />
            {result.outcomeCount} outcomes
          </Badge>
          <Badge variant="outline" className="text-[11px] border-brand-accent/40 text-muted-foreground gap-1">
            <MessageSquareQuote className="w-3 h-3" />
            {result.questionCount} Qs
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}