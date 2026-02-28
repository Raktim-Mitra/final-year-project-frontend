'use client';

import { ModuleItem } from '@/types/Index';
import ModuleCard from '../ui/ModuleCard';

interface ModulesTabProps {
  modules: ModuleItem[];
  expandedModules: Set<string>;
  onToggleModule: (id: string) => void;
}

export default function ModulesTab({ modules, expandedModules, onToggleModule }: ModulesTabProps) {
  // Calculate total hours
  const totalHours = modules.reduce((acc, m) => acc + (m.hours || 0), 0);
  const totalTopics = modules.reduce((acc, m) => acc + m.topics.length, 0);

  return (
    <div>
      {/* Summary Bar */}
      <div className="flex items-center gap-6 mb-5 p-4 bg-[#ECEEDF]/40 rounded-xl border border-[#D9C4B0]/20">
        <div className="flex items-center gap-2">
          <span className="size-8 rounded-lg bg-[#5da8bd]/10 flex items-center justify-center">
            <span className="text-[#5da8bd] font-bold text-sm">{modules.length}</span>
          </span>
          <span className="text-sm text-gray-600">Modules</span>
        </div>
        <div className="w-px h-6 bg-[#D9C4B0]/40"></div>
        <div className="flex items-center gap-2">
          <span className="size-8 rounded-lg bg-[#BBDCE5]/20 flex items-center justify-center">
            <span className="text-[#5da8bd] font-bold text-sm">{totalTopics}</span>
          </span>
          <span className="text-sm text-gray-600">Topics</span>
        </div>
        <div className="w-px h-6 bg-[#D9C4B0]/40"></div>
        <div className="flex items-center gap-2">
          <span className="size-8 rounded-lg bg-[#D9C4B0]/20 flex items-center justify-center">
            <span className="text-[#b8a18c] font-bold text-sm">{totalHours}</span>
          </span>
          <span className="text-sm text-gray-600">Total Hours</span>
        </div>
      </div>

      {/* Module Cards */}
      <div className="space-y-4">
        {modules.map((module, index) => (
          <ModuleCard
            key={module.id}
            module={module}
            index={index}
            isExpanded={expandedModules.has(module.id)}
            onToggle={() => onToggleModule(module.id)}
          />
        ))}
      </div>
    </div>
  );
}