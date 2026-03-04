"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
  useUser
} from "@clerk/nextjs";
import { useEffect } from "react";

export default function Navbar() {

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn) return;

    const syncUser = async () => {

      const token = await getToken();
      if (!token) return;

      // Decode Clerk JWT to get userId
      const payload = JSON.parse(atob(token.split(".")[1]));
      const clerkUserId = payload.sub;

      const storedUserId = localStorage.getItem("synced_user");

      // Prevent duplicate sync
      if (storedUserId === clerkUserId) return;

      try {
        await fetch("http://localhost:5001/api/user", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        localStorage.setItem("synced_user", clerkUserId);

      } catch {
        console.error("User sync failed");
      }
    };

    syncUser();

  }, [getToken, isSignedIn]);

  return (
    <nav className="w-full px-6 py-4 flex items-center justify-between bg-white/70 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/40">
      
      <Link href="/" className="text-2xl font-bold text-gray-800">
        Modu<span className="text-[#8fbbc7]">Learn</span>
      </Link>

      <div className="flex items-center gap-4">

        {/* Logged Out */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="text-gray-700 font-medium hover:text-[#8fbbc7] transition">
              Sign In
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="bg-[#8fbbc7] text-white px-5 py-2 rounded-lg shadow hover:bg-[#79A9B7] transition">
              Get Started
            </button>
          </SignUpButton>
        </SignedOut>

        {/* Logged In */}
        <SignedIn>
          <UserButton
            afterSignOutUrl="/home"
          />
        </SignedIn>

      </div>
    </nav>
  );
}