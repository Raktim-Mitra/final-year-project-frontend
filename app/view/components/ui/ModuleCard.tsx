'use client';

import { ChevronDown, Clock, BookOpen, Hash } from 'lucide-react';
import { ModuleItem } from '@/types/Index';

interface ModuleCardProps {
  module: ModuleItem;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ModuleCard({ module, index, isExpanded, onToggle }: ModuleCardProps) {
  return (
    <div className="border-2 border-[#D9C4B0]/30 rounded-xl overflow-hidden hover:border-[#5da8bd]/40 transition-all">
      {/* Module Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 hover:bg-[#ECEEDF]/30 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="size-11 rounded-xl bg-gradient-to-br from-[#5da8bd] to-[#BBDCE5] flex items-center justify-center text-white font-bold text-sm shadow-md">
            M{index + 1}
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900">{module.title}</h4>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-xs text-gray-500">
                <Hash className="w-3 h-3" />
                {module.topics.length} topics
              </span>
              {module.hours && (
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  {module.hours} hours
                </span>
              )}
            </div>
          </div>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-5 pb-5 border-t border-[#D9C4B0]/30">
          {/* Module Content */}
          <div className="pt-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-[#5da8bd]" />
              <span className="text-sm font-bold text-gray-700">Content</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm bg-[#ECEEDF]/40 rounded-lg p-4 border border-[#D9C4B0]/20">
              {module.content}
            </p>
          </div>

          {/* Topics List */}
          <div>
            <span className="text-sm font-bold text-gray-700 mb-2 block">Topics Covered</span>
            <div className="flex flex-wrap gap-2">
              {module.topics.map((topic, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-[#BBDCE5]/15 text-[#5da8bd] border border-[#BBDCE5]/40 rounded-lg text-xs font-semibold"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}