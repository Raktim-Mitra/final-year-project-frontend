"use client";
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const token = useAuthStore((state) => state.token);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const router = useRouter();

  useEffect(() => {
      if (!hasHydrated) return;
  
      if (token) {
        router.push("/dashboard");
      }
    }, [token, hasHydrated,router]);
  if(!hasHydrated) return null; // or a loading spinner
  // or redirect to dashboard
  return (
    <div className="min-h-screen flex">
      {/* Left Side (Brand / Info) */}
      <div className="hidden md:flex w-1/2 bg-slate-900 text-white items-center justify-center p-10">
        <div className="max-w-md space-y-4">
          <h1 className="text-3xl font-semibold">
            Syllabus Analyzer
          </h1>
          <p className="text-slate-300">
            Upload your syllabus, generate modules, outcomes, and curated resources automatically.
          </p>
        </div>
      </div>

      {/* Right Side (Auth Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-50">
        {children}
      </div>
    </div>
  );
}