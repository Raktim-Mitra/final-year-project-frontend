'use client';

import { useState } from 'react';
import { TabType, CurrentResultData } from '@/types/Index';
import { Card, CardContent } from '@/components/ui/card';
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

      <Card className="rounded-t-none border-t-0 border-brand-accent/30 shadow-lg">
        <CardContent className="p-6">
          {activeTab === 'modules' && <ModulesTab modules={data.modules} />}
          {activeTab === 'outcomes' && <OutcomesTab outcomes={data.outcomes} />}
          {activeTab === 'resources' && <ResourcesTab resources={data.resources} />}
          {activeTab === 'questions' && <QuestionsTab questions={data.questions} />}
        </CardContent>
      </Card>
    </section>
  );
}