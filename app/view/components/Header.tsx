'use client';

import Link from 'next/link';
import { Home, Award } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-[#D9C4B0]/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#5da8bd] to-[#BBDCE5] flex items-center justify-center shadow-lg shadow-[#5da8bd]/20">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">Module Learn</h1>
              <p className="text-xs text-[#5da8bd] font-semibold uppercase tracking-wider">Results</p>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#5da8bd] to-[#71a9b8] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#5da8bd]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">New Upload</span>
          </Link>
        </div>
      </div>
    </header>
  );
}