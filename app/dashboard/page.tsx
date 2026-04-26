"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FileGrid from "./components/FileGrid";
import { useAuthStore } from "@/store/authStore";

const API_BASE_URL = "http://localhost:5001";

export default function Dashboard() {
  const [files, setFiles] = useState([]);
  const router = useRouter();

  const { token, hasHydrated } = useAuthStore();

  useEffect(() => {
    if (!hasHydrated) return;
    if (!token) {
      router.push("/auth/signin");
      return;
    }

    const fetchFiles = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/user/files`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.success) {
          setFiles(data.files);
        }
      } catch {
        setFiles([]);
      }
    };

    fetchFiles();
  }, [token, hasHydrated]);

  if (!hasHydrated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navbar />

      <main className="p-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Your Learning Space
            </h1>
            <p className="text-gray-500 mt-2">
              All your uploaded syllabi in one place
            </p>
          </div>

          <button
            onClick={() => router.push("/upload")}
            className="bg-[#42a8c5] text-white px-5 py-2 rounded-lg shadow hover:bg-[#44879c] transition"
          >
            + Upload
          </button>
        </div>

        {/* Empty State */}
        {files.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border shadow-sm">
            <p className="text-gray-500 mb-4">
              No syllabi uploaded yet
            </p>
            <button
              onClick={() => router.push("/upload")}
              className="bg-[#8fbbc7] text-white px-6 py-2 rounded-lg"
            >
              Upload your first syllabus
            </button>
          </div>
        )}

        {/* Grid */}
        {files.length > 0 && <FileGrid files={files} />}
      </main>

      <Footer />
    </div>
  );
}