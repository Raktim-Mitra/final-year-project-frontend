"use client";

import { useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { FileText, FileImage, FileType } from "lucide-react";

export default function ManualUpload() {

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const { getToken } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const token = await getToken();

    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5001/api/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    setUploading(false);
  };

  const getFileIcon = () => {
    if (!file) return null;

    if (file.type.includes("pdf")) return <FileText className="text-red-500 w-6 h-6" />;
    if (file.type.includes("image")) return <FileImage className="text-blue-500 w-6 h-6" />;
    if (file.name.endsWith(".doc") || file.name.endsWith(".docx"))
      return <FileType className="text-indigo-500 w-6 h-6" />;
    if (file.type.includes("text"))
      return <FileText className="text-green-500 w-6 h-6" />;

    return <FileText className="text-gray-500 w-6 h-6" />;
  };

  return (
    <div className="border-2 border-dashed border-[#8fbbc7] rounded-xl p-10 text-center bg-white/60">

      <p className="text-gray-700 mb-4 font-medium">
        Upload your syllabus file manually
      </p>

      <p className="text-sm text-gray-500 mb-6">
        Supported formats: PDF, DOC, DOCX, TXT, PNG, JPG
      </p>

      <input
        type="file"
        id="fileUpload"
        className="hidden"
        accept=".pdf,.doc,.docx,.txt,image/*"
        onChange={handleChange}
      />

      <label
        htmlFor="fileUpload"
        className="bg-[#8fbbc7] text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-[#79A9B7] transition inline-block"
      >
        Choose File
      </label>

      {file && (
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-700">
          {getFileIcon()}
          <span>{file.name}</span>
        </div>
      )}

      {file && (
        <button
          onClick={handleUpload}
          className="mt-4 bg-[#CFAB8D] text-white px-6 py-2 rounded-lg hover:bg-[#B89579] transition"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      )}

    </div>
  );
}