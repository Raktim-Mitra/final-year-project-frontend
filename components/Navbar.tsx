"use client";

import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const token = useAuthStore((state) => state.token);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const clearSession = useAuthStore((state) => state.clearSession);

  if (!hasHydrated) return null;

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/40">
      
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Modu<span className="text-[#8fbbc7]">Learn</span>
      </Link>

      <div className="flex items-center gap-4">
        {token ? (
          <Button onClick={clearSession}>Logout</Button>
        ) : (
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/auth/signin">Sign In</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/auth/signup">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}