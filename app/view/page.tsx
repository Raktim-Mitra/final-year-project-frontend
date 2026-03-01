'use client';

import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

import HistorySection from './components/History';
import { currentResultId, historyResults } from '@/data/historyMockData';
import { getResultById } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResultsPage() {
  const router = useRouter();
  const currentData = getResultById(currentResultId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-bg via-white to-brand-secondary/20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Latest Result Banner */}
        {currentData && (
          <button
            onClick={() => router.push(`/view/${currentResultId}`)}
            className="w-full mb-10 text-left group"
          >
            <div className="relative overflow-hidden bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-20 w-24 h-24 bg-white/5 rounded-full translate-y-1/2" />

              <div className="relative flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-white/80" />
                    <span className="text-white/80 text-xs font-bold uppercase tracking-wider">Latest Result</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-1">{currentData.courseName}</h2>
                  <p className="text-white/70 text-sm">{currentData.syllabusName}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <Badge className="bg-white/20 text-white border-0 hover:bg-white/30">
                      {currentData.modules.length} Modules
                    </Badge>
                    <Badge className="bg-white/20 text-white border-0 hover:bg-white/30">
                      {currentData.outcomes.length} Outcomes
                    </Badge>
                    <Badge className="bg-white/20 text-white border-0 hover:bg-white/30">
                      {currentData.questions.length} Questions
                    </Badge>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-white text-brand-primary rounded-xl text-sm font-bold group-hover:bg-brand-bg transition-colors">
                  View Details →
                </div>
              </div>
            </div>
          </button>
        )}

        <HistorySection results={historyResults} />
      </div>

      <Footer />
    </div>
  );
}