import { ListChecks, Library, MessageSquareQuote, LayoutList } from 'lucide-react';
import { TabType } from '@/types/Index';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  moduleCount: number;
  resourceCount: number;
  questionCount: number;
}

export default function TabNavigation({
  activeTab,
  onTabChange,
  moduleCount,
  resourceCount,
  questionCount,
}: TabNavigationProps) {
  const tabs = [
    { id: 'modules' as TabType, label: 'Modules', icon: LayoutList, count: moduleCount },
    { id: 'outcomes' as TabType, label: 'Course Outcomes', icon: ListChecks },
    { id: 'resources' as TabType, label: 'Resources', icon: Library, count: resourceCount },
    { id: 'questions' as TabType, label: 'Question Bank', icon: MessageSquareQuote, count: questionCount },
  ];

  return (
    <div className="bg-white rounded-t-2xl border border-b-0 border-[#D9C4B0]/30 px-2 pt-2">
      <div className="flex gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold transition-all rounded-t-xl whitespace-nowrap ${
                isActive
                  ? 'bg-[#5da8bd] text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-[#ECEEDF]/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              {tab.label}
              {tab.count !== undefined && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-[#BBDCE5]/30 text-[#5da8bd]'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}