'use client';

import { Eye, EyeOff } from 'lucide-react';
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
    <div className="p-5 border-2 border-[#D9C4B0]/30 rounded-xl hover:border-[#5da8bd]/40 transition-all">
      <div className="flex items-start gap-4">
        <div className="size-9 rounded-lg bg-[#ECEEDF] flex items-center justify-center text-gray-600 font-bold text-sm shrink-0">
          {index + 1}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className={`size-2 rounded-full ${questionTypeColors[question.type]}`}></span>
              <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
                {questionTypeLabels[question.type]}
              </span>
            </div>
            <span className={`px-2.5 py-1 text-[10px] font-bold rounded-full border ${difficultyColors[question.difficulty]}`}>
              {question.difficulty}
            </span>
          </div>
          <p className="text-gray-800 font-medium leading-relaxed mb-3">{question.question}</p>

          {/* MCQ Options */}
          {question.options && (
            <div className="grid grid-cols-2 gap-2 mb-3">
              {question.options.map((option, i) => (
                <div
                  key={i}
                  className="px-3 py-2 bg-[#ECEEDF]/50 rounded-lg text-sm text-gray-700 border border-transparent hover:border-[#5da8bd]/30 cursor-pointer transition-colors"
                >
                  <span className="font-bold text-[#5da8bd] mr-2">{String.fromCharCode(65 + i)}.</span>
                  {option}
                </div>
              ))}
            </div>
          )}

          {/* Show/Hide Answer */}
          <button
            onClick={onToggleAnswer}
            className="flex items-center gap-2 text-[#5da8bd] text-sm font-bold hover:underline"
          >
            {showAnswer ? (
              <>
                <EyeOff className="w-4 h-4" />
                Hide Solution
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Show Solution
              </>
            )}
          </button>

          {/* Answer Section */}
          {showAnswer && question.answer && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">{question.answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}