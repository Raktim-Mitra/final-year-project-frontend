import { ChevronRight } from 'lucide-react';

interface ResultHeaderProps {
  syllabusName: string;
  courseName: string;
}

export default function ResultHeader({ syllabusName, courseName }: ResultHeaderProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#D9C4B0]/30 p-6 mb-6">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
        <span>Current Result</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-gray-600">{syllabusName}</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-[#5da8bd] font-semibold">{courseName}</span>
      </div>
      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{courseName}</h2>
      <p className="text-gray-500">AI-generated course outcomes, curated resources, and practice questions</p>
    </div>
  );
}