'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import CurrentResult from './components/CurrentResult';
import HistorySection from './components/History';
import { currentResult, historyResults } from '@/data/mockData';

export default function ResultsPage() {
  const handleHistoryClick = (id: string) => {
    // TODO: Navigate to history result or expand it
    console.log('Clicked history result:', id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ECEEDF] via-white to-[#BBDCE5]/20">
      <Header />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <CurrentResult data={currentResult} />
        <HistorySection results={historyResults} onResultClick={handleHistoryClick} />
      </div>

      <Footer />
    </div>
  );
}