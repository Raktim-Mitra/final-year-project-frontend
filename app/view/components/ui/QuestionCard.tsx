'use client';

import { Eye, EyeOff } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Question } from '@/types/Index';
import { difficultyColors, questionTypeColors, questionTypeLabels } from '@/constants';

interface QuestionCardProps {
  question: Question;
  index: number;
  showAnswer: boolean;
  onToggleAnswer: () => void;
}

export default function QuestionCard({ question, index, showAnswer, onToggleAnswer }: QuestionCardProps) {
  return (
    <Card className="border-2 border-brand-accent/30 hover:border-brand-primary/40 transition-all">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="size-9 rounded-lg bg-brand-bg flex items-center justify-center text-muted-foreground font-bold text-sm shrink-0">
            {index + 1}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`size-2 rounded-full ${questionTypeColors[question.type]}`} />
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                  {questionTypeLabels[question.type]}
                </span>
              </div>
              <Badge variant="outline" className={`text-[10px] font-bold ${difficultyColors[question.difficulty]}`}>
                {question.difficulty}
              </Badge>
            </div>

            <p className="text-foreground font-medium leading-relaxed mb-3">{question.question}</p>

            {question.options && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                {question.options.map((option, i) => (
                  <div
                    key={i}
                    className="px-3 py-2 bg-brand-bg/50 rounded-lg text-sm text-foreground/80 border border-transparent hover:border-brand-primary/30 cursor-pointer transition-colors"
                  >
                    <span className="font-bold text-brand-primary mr-2">
                      {String.fromCharCode(65 + i)}.
                    </span>
                    {option}
                  </div>
                ))}
              </div>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleAnswer}
              className="text-brand-primary hover:text-brand-primary/80 hover:bg-brand-secondary/10 font-bold px-0"
            >
              {showAnswer ? (
                <><EyeOff className="w-4 h-4 mr-2" /> Hide Solution</>
              ) : (
                <><Eye className="w-4 h-4 mr-2" /> Show Solution</>
              )}
            </Button>

            {showAnswer && question.answer && (
              <Card className="mt-3 border-green-200 bg-green-50">
                <CardContent className="p-3">
                  <p className="text-sm text-green-800">{question.answer}</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}