import { Award } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="mt-12">
      <Separator className="bg-brand-accent/30" />
      <div className="bg-white/50">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
              <Award className="w-4 h-4 text-white" />
            </div>
            <p className="text-sm text-gray-600">
              Powered by <span className="text-brand-primary font-bold">ModuLearn</span>
            </p>
          </div>
          <p className="text-xs text-muted-foreground">AI-powered Learning Assistant</p>
        </div>
      </div>
    </footer>
  );
}