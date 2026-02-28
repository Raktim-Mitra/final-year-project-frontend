import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResultHeaderProps {
  syllabusName: string;
  courseName: string;
}

export default function ResultHeader({ syllabusName, courseName }: ResultHeaderProps) {
  return (
    <Card className="mb-6 border-brand-accent/30 shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 flex-wrap">
          <Badge variant="outline" className="border-brand-accent/40">Result</Badge>
          <ChevronRight className="w-4 h-4" />
          <span>{syllabusName}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-primary font-semibold">{courseName}</span>
        </div>
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{courseName}</h2>
        <p className="text-muted-foreground">
          AI-generated modules, course outcomes, curated resources, and practice questions
        </p>
      </CardContent>
    </Card>
  );
}