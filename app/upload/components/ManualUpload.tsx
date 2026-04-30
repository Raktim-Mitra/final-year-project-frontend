"use client";

import { useState } from "react";
import { FileText, FileImage, FileType, X } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function ManualUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const router = useRouter();
  const token = useAuthStore((state) => state.token);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleRemove = () => {
    setFile(null);
  };

  const handleUpload = async () => {
    if (!file || !token) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5001/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Upload failed");

      // Pass the new file ID so dashboard only polls for this file
      router.push(`/dashboard?pending=${data.syllabus_id}`);
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const getFileIcon = () => {
    if (!file) return null;

    if (file.type.includes("pdf"))
      return <FileText className="text-red-500 w-6 h-6" />;
    if (file.type.includes("image"))
      return <FileImage className="text-blue-500 w-6 h-6" />;
    if (file.name.endsWith(".doc") || file.name.endsWith(".docx"))
      return <FileType className="text-indigo-500 w-6 h-6" />;
    if (file.type.includes("text"))
      return <FileText className="text-green-500 w-6 h-6" />;

    return <FileText className="text-gray-500 w-6 h-6" />;
  };

  return (
    <div className="border-2 border-dashed border-[#8fbbc7] rounded-xl p-10 text-center bg-white/60 max-w-xl mx-auto">

      <p className="text-gray-700 mb-2 font-semibold text-lg">
        Upload your syllabus
      </p>

      <p className="text-sm text-gray-500 mb-6">
        PDF, DOC, DOCX, TXT, PNG, JPG
      </p>

      {/* File Input */}
      <input
        type="file"
        id="fileUpload"
        className="hidden"
        accept=".pdf,.doc,.docx,.txt,image/*"
        onChange={handleChange}
        disabled={!!file} // ✅ disable after select
      />

      {!file && (
        <label
          htmlFor="fileUpload"
          className="bg-[#8fbbc7] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#79A9B7] transition inline-block"
        >
          Choose File
        </label>
      )}

      {/* Selected File UI */}
      {file && (
        <div className="mt-6 bg-white border rounded-lg p-4 flex items-center justify-between shadow-sm">

          <div className="flex items-center gap-3">
            {getFileIcon()}
            <div className="text-left">
              <p className="text-sm font-medium text-gray-800">
                {file.name}
              </p>
              <p className="text-xs text-gray-400">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>

          {/* Cancel Button */}
          <button
            onClick={handleRemove}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* Upload Button */}
      {file && (
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="mt-6 w-full bg-[#CFAB8D] text-white py-3 rounded-lg hover:bg-[#B89579] transition"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      )}
    </div>
  );
}