"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

// Assuming you have these in your project like the dashboard
import Navbar from "../../../components/Navbar"; 
import Footer from "../../../components/Footer";

import Tabs from "./components/Tabs";
import ModulesTab from "./components/ModulesTab";
import OutcomesTab from "./components/OutcomesTab";
import ResourcesTab from "./components/ResourcesTab";
import QuestionsTab from "./components/QuestionsTab";

const API = "http://localhost:5001";

export default function SyllabusPage() {
  const { id } = useParams();
  const router = useRouter();
  const { token, hasHydrated } = useAuthStore();

  const [tab, setTab] = useState("modules");
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!hasHydrated || !token) return;

    const fetchModules = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/api/syllabus/${id}/modules`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (data.success) setModules(data.modules);
      } catch {
        setModules([]);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, [id, token, hasHydrated]);

  if (!hasHydrated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      <Navbar />

      <main className="p-8 max-w-6xl mx-auto w-full flex-grow">
        {/* Header matching Dashboard style */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Syllabus Details
            </h1>
            <p className="text-gray-500 mt-2">
              Explore modules, outcomes, and resources
            </p>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="bg-white border text-gray-600 px-5 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition"
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Content Container */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl border p-6 shadow-sm min-h-[500px]">
          <Tabs tab={tab} setTab={setTab} />

          <div className="mt-6">
            {loading && <p className="text-gray-500 animate-pulse py-10 text-center">Loading syllabus data...</p>}

            {!loading && tab === "modules" && <ModulesTab modules={modules} />}
            {!loading && tab === "co" && <OutcomesTab syllabusId={id as string} />}
            {!loading && tab === "resources" && <ResourcesTab modules={modules} />}
            {!loading && tab === "questions" && <QuestionsTab />}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}