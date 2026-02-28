'use client';

import { useState } from 'react';
import { TabType, CurrentResultData } from '@/types/Index';
import ResultHeader from './ResultHeader';
import TabNavigation from './TabNavigation';
import ModulesTab from './ModulesTab';
import OutcomesTab from './OutcomesTab';
import ResourcesTab from './ResourcesTab';
import QuestionsTab from './QuestionsTab';

interface CurrentResultProps {
  data: CurrentResultData;
}

export default function CurrentResult({ data }: CurrentResultProps) {
  const [activeTab, setActiveTab] = useState<TabType>('modules');
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set(['M1']));
  const [expandedOutcomes, setExpandedOutcomes] = useState<Set<string>>(new Set(['LO1']));
  const [showAnswers, setShowAnswers] = useState<Set<string>>(new Set());

  const toggleModule = (id: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedModules(newExpanded);
  };

  const toggleOutcome = (id: string) => {
    const newExpanded = new Set(expandedOutcomes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedOutcomes(newExpanded);
  };

  const toggleAnswer = (id: string) => {
    const newAnswers = new Set(showAnswers);
    if (newAnswers.has(id)) {
      newAnswers.delete(id);
    } else {
      newAnswers.add(id);
    }
    setShowAnswers(newAnswers);
  };

  return (
    <section className="mb-12">
      <ResultHeader syllabusName={data.syllabusName} courseName={data.courseName} />

      <TabNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        moduleCount={data.modules.length}
        resourceCount={data.resources.length}
        questionCount={data.questions.length}
      />

      <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-lg border border-[#D9C4B0]/30 border-t-0 p-6">
        {activeTab === 'modules' && (
          <ModulesTab
            modules={data.modules}
            expandedModules={expandedModules}
            onToggleModule={toggleModule}
          />
        )}

        {activeTab === 'outcomes' && (
          <OutcomesTab
            outcomes={data.outcomes}
            expandedOutcomes={expandedOutcomes}
            onToggleOutcome={toggleOutcome}
          />
        )}

        {activeTab === 'resources' && (
          <ResourcesTab resources={data.resources} />
        )}

        {activeTab === 'questions' && (
          <QuestionsTab
            questions={data.questions}
            showAnswers={showAnswers}
            onToggleAnswer={toggleAnswer}
          />
        )}
      </div>
    </section>
  );
}