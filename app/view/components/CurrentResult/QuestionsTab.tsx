'use client';

import { Question } from '@/types/Index';
import QuestionCard from '../ui/QuestionCard';

interface QuestionsTabProps {
  questions: Question[];
  showAnswers: Set<string>;
  onToggleAnswer: (id: string) => void;
}

export default function QuestionsTab({ questions, showAnswers, onToggleAnswer }: QuestionsTabProps) {
  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          showAnswer={showAnswers.has(question.id)}
          onToggleAnswer={() => onToggleAnswer(question.id)}
        />
      ))}
    </div>
  );
}