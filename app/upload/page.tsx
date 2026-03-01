"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

import UploadToggle from "../upload/components/UploadToggle";
import ManualUpload from "../upload/components/ManualUpload";
import GestureUpload from "../upload/components/GestureUpload";

export default function UploadPage() {

  const [mode, setMode] = useState("manual");

  return (
    <div className="min-h-screen bg-linear-to-br from-brand-bg via-white to-brand-secondary/30">

      <Navbar />

      <main className="p-10 max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Upload Syllabus
          </h1>
          <p className="text-gray-500 mt-2">
            Upload your academic syllabus to generate modules, COs & resources
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <UploadToggle mode={mode} setMode={setMode} />
        </div>

        {/* Upload Card */}
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow border">

          {mode === "manual" ? <ManualUpload /> : <GestureUpload />}

        </div>

        {/* Tips Section */}
        <div className="mt-10 grid md:grid-cols-3 gap-4 text-center">

          <div className="bg-white/60 p-4 rounded-lg shadow">
            <p className="font-medium text-gray-700">Supported Formats</p>
            <p className="text-sm text-gray-500">
              PDF, DOCX, TXT, Images
            </p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg shadow">
            <p className="font-medium text-gray-700">Max File Size</p>
            <p className="text-sm text-gray-500">
              Up to 16MB
            </p>
          </div>

          <div className="bg-white/60 p-4 rounded-lg shadow">
            <p className="font-medium text-gray-700">AI Processing</p>
            <p className="text-sm text-gray-500">
              Modules + CO + Resources
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}