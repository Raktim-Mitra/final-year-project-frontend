import { Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[#D9C4B0]/30 bg-white/50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-gradient-to-br from-[#5da8bd] to-[#BBDCE5] flex items-center justify-center">
            <Award className="w-4 h-4 text-white" />
          </div>
          <p className="text-sm text-gray-600">
            Powered by <span className="text-[#5da8bd] font-bold">Academic AI</span>
          </p>
        </div>
        <p className="text-xs text-gray-400">AI-powered Learning Assistant</p>
      </div>
    </footer>
  );
}