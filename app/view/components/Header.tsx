'use client';

import Link from 'next/link';
import { Home, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-brand-accent/30 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">ModuLearn</h1>
              <p className="text-xs text-brand-primary font-semibold uppercase tracking-wider">Results</p>
            </div>
          </div>

          <Button asChild size="sm" className="bg-brand-primary hover:bg-brand-primary/90 text-white shadow-lg shadow-brand-primary/30">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">New Upload</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}