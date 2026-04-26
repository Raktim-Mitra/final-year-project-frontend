"use client";

import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAuthStore((state) => state.token);
  const hasHydrated = useAuthStore((state) => state.hasHydrated);
  const router = useRouter();

  useEffect(() => {
    if (!hasHydrated) return;

    if (!token) {
      router.push("/auth/signin");
    }
  }, [token, hasHydrated,router]);


  if (!hasHydrated) return null;


  if (!token) return null;

  return <div>{children}</div>;
}