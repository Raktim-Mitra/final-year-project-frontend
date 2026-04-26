"use client";

import Link from "next/link";
import {
  FileText,
  Calendar,
  Loader2,
  Trash,
} from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import DeleteDialog from "./DeleteDialog";

export default function FileCard({ file }: { file: any }) {
  const isProcessing = file.status === "PROCESSING";
  const { token } = useAuthStore();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5001/api/syllabus/${file.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      // close dialog
      setOpen(false);

      // refresh page (simple approach)
      window.location.reload();

    } catch (err) {
      console.error(err);
      alert("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border">

        <Link href={`/dashboard/${file.id}`}>
          <div className="cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FileText className="text-[#8fbbc7]" />
                <h3 className="font-semibold text-gray-800 truncate">
                  {file.title}
                </h3>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  isProcessing
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {isProcessing ? "Processing" : "Ready"}
              </span>
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(file.created_at).toLocaleDateString()}
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-2 mt-4">
          {isProcessing ? (
            <div className="flex items-center gap-2 text-sm text-yellow-600">
              <Loader2 className="w-4 h-4 animate-spin" />
              Generating modules...
            </div>
          ) : (
            <>
              <Link href={`/dashboard/${file.id}`}>
                <button className="w-full bg-[#8fbbc7]/20 text-[#5f9eab] py-2 rounded-lg hover:bg-[#8fbbc7]/30">
                  See Details
                </button>
              </Link>

              <button
                onClick={() => setOpen(true)}
                className="w-full bg-[#CFAB8D]/20 text-[#a67e63] py-2 rounded-lg hover:bg-[#CFAB8D]/30"
              >
                <Trash className="w-4 h-4 inline-block mr-2" />
                Delete File
              </button>
            </>
          )}
        </div>
      </div>

      {/* Dialog */}
      <DeleteDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
        loading={loading}
      />
    </>
  );
}