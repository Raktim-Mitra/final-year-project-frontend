"use client";
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';
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
    <div className="min-h-screen flex bg-linear-to-br from-brand-bg via-white to-brand-secondary/30">
      {/* Left Side (Brand / Image) */}
      <div className="hidden md:flex w-1/2 relative overflow-hidden">
        <Image
          src="/home.png"
          alt="ModuLearn"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/70 via-brand-secondary/50 to-brand-bg/60" />
        {/* Text on top */}
        <div className="relative z-10 flex items-center justify-center w-full p-10">
          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-semibold text-white drop-shadow-md">
              ModuLearn
            </h1>
            <p className="text-white/90 drop-shadow-sm">
              Upload your syllabus, generate modules, outcomes, and curated resources automatically.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side (Auth Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}