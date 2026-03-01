'use client';

import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import CurrentResult from '../components/CurrentResult';
import { getResultById } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResultViewPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const resultData = getResultById(id);

  if (!resultData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-bg via-white to-brand-secondary/20">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <Card className="border-brand-accent/30 shadow-lg">
            <CardContent className="p-12">
              <div className="size-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h2 className="text-xl font-bold text-foreground mb-2">Result Not Found</h2>
              <p className="text-muted-foreground mb-6">The result you are looking for does not exist.</p>
              <Button
                onClick={() => router.push('/view')}
                className="bg-brand-primary hover:bg-brand-primary/90 text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Results
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-bg via-white to-brand-secondary/20">
      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Button
          variant="outline"
          onClick={() => router.push('/view')}
          className="mb-6 border-brand-accent/30 hover:border-brand-primary/40 hover:text-brand-primary"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Results
        </Button>

        <CurrentResult data={resultData} />
      </div>

      <Footer />
    </div>
  );
}