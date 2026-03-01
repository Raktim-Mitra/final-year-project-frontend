'use client';

import { useState } from 'react';
import { Question } from '@/types/Index';
import QuestionCard from '../ui/QuestionCard';

interface QuestionsTabProps {
  questions: Question[];
}

export default function QuestionsTab({ questions }: QuestionsTabProps) {
  const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set());

  const toggleAnswer = (id: string) => {
    const next = new Set(showAnswers);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setShowAnswers(next);
  };

  return (
    <div className="space-y-4">
      {questions.map((question, index) => (
        <QuestionCard
          key={question.id}
          question={question}
          index={index}
          showAnswer={showAnswers.has(question.id)}
          onToggleAnswer={() => toggleAnswer(question.id)}
        />
      ))}
    </div>
  );
}