import { ListChecks, Library, MessageSquareQuote, LayoutList } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
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
    { id: 'outcomes' as TabType, label: 'Outcomes', icon: ListChecks },
    { id: 'resources' as TabType, label: 'Resources', icon: Library, count: resourceCount },
    { id: 'questions' as TabType, label: 'Questions', icon: MessageSquareQuote, count: questionCount },
  ];

  return (
    <Tabs value={activeTab} onValueChange={(v) => onTabChange(v as TabType)}>
      <TabsList className="w-full h-auto bg-white border border-brand-accent/30 border-b-0 rounded-t-xl rounded-b-none p-1.5 gap-1 justify-start">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className="flex items-center gap-2 px-5 py-4.5 text-sm font-semibold rounded-lg data-[state=active]:bg-brand-primary data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
              {tab.count !== undefined && (
                <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">
                  {tab.count}
                </Badge>
              )}
            </TabsTrigger>
          );
        })}
      </TabsList>
    </Tabs>
  );
}