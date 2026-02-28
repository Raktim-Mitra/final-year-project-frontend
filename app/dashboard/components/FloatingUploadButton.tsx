"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FloatingUploadButton() {

  const [show, setShow] = useState(false);

  return (
    <div
      className="fixed bottom-8 right-8 z-50 flex items-center gap-3"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
    >

      {show && (
        <span className="bg-white text-gray-700 px-3 py-2 rounded-lg shadow text-sm">
          Upload Syllabus
        </span>
      )}

      <Link
        href="/upload"
        className="bg-[#8fbbc7] text-white p-4 rounded-full shadow-xl hover:bg-[#79A9B7] transition"
      >
        <Plus className="w-6 h-6" />
      </Link>

    </div>
  );
}