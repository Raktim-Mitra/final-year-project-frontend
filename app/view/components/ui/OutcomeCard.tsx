'use client';

import { ChevronDown } from 'lucide-react';
import { CourseOutcome } from '@/types/Index';

interface OutcomeCardProps {
  outcome: CourseOutcome;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function OutcomeCard({ outcome, index, isExpanded, onToggle }: OutcomeCardProps) {
  const gradients = [
    'bg-gradient-to-br from-[#5da8bd] to-[#BBDCE5]',
    'bg-gradient-to-br from-[#BBDCE5] to-[#D9C4B0]',
    'bg-gradient-to-br from-[#D9C4B0] to-[#5da8bd]',
  ];

  return (
    <div className="border-2 border-[#D9C4B0]/30 rounded-xl overflow-hidden hover:border-[#5da8bd]/40 transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 hover:bg-[#ECEEDF]/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`size-11 rounded-xl flex items-center justify-center text-white font-bold shadow-md ${gradients[index % 3]}`}>
            CO-{index + 1}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900">{outcome.title}</h4>
            <span className="text-xs text-[#5da8bd] font-medium">{outcome.bloomLevel}</span>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-[#D9C4B0]/30">
          <p className="pt-4 text-gray-600 leading-relaxed">{outcome.description}</p>
        </div>
      )}
    </div>
  );
}