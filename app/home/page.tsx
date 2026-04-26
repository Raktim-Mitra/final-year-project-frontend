"use client";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

import { Zap, CheckCircle, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';

export default function Home() {
  
    const token = useAuthStore((state) => state.token);
    // const hasHydrated = useAuthStore((state) => state.hasHydrated);
    const clearSession = useAuthStore((state) => state.clearSession);
  return (
    <div className="min-h-screen bg-linear-to-br from-brand-bg via-white to-brand-secondary/30 overflow-hidden relative">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Navbar />

      <main className="relative z-10 py-16 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* HERO */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transform <span className="text-brand-secondary">Academic Content</span>
                <br />
                Into Smart <span className="text-[#CFAB8D]">Learning Modules</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Turn academic content into structured learning modules with 
                AI-powered course outcomes and curated resources.
              </p>

              {/* AUTH CTA */}
              <div className="flex items-center gap-4 mb-10">
            
        {token ?(
          <Button >
            <Link href="/dashboard" className="w-full h-full">Go to Dashboard</Link>
          </Button>
        ): (
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button  asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        )}
     
              </div>

              {/* BADGES */}
              <div className="flex flex-wrap gap-4">
                {[Zap, CheckCircle, Users].map((Icon, i) => (
                  <div key={i} className="flex items-center px-4 py-2 bg-white/50 rounded-full">
                    <Icon className="w-4 h-4 mr-2 text-gray-700" />
                    <span className="text-sm font-medium text-gray-700">
                      {i === 0 && "Fast Processing"}
                      {i === 1 && "Accurate AI"}
                      {i === 2 && "Educator Friendly"}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* HERO IMAGE */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/home.png" alt="AI Learning" fill sizes="(max-width: 768px) 100vw, 50vw" priority className="object-cover" />
            </div>
          </div>

          {/* FEATURES */}
          <section className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Powerful <span className="text-[#8fbbc7]">Features</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Smart Module Creation",
                  desc: "AI intelligently structures academic content into meaningful modules."
                },
                {
                  icon: CheckCircle,
                  title: "Course Outcome Mapping",
                  desc: "Automatically align modules with measurable learning outcomes."
                },
                {
                  icon: Users,
                  title: "Resource Discovery",
                  desc: "Find relevant study materials for each learning module."
                }
              ].map((f, i) => (
                <div key={i} className="bg-white/80 p-6 rounded-xl shadow hover:shadow-lg transition">
                  <f.icon className="w-8 h-8 text-[#8fbbc7] mb-3" />
                  <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                How It <span className="text-[#CFAB8D]">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  step: "1",
                  title: "AI Analysis",
                  desc: "System analyzes academic content structure."
                },
                {
                  step: "2",
                  title: "Module Structuring",
                  desc: "Content is divided into learning modules."
                },
                {
                  step: "3",
                  title: "Outcome & Resources",
                  desc: "Course outcomes and study resources are generated."
                }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white/80 rounded-xl shadow">
                  <div className="w-12 h-12 mx-auto mb-3 bg-[#8fbbc7] text-white flex items-center justify-center rounded-full">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}