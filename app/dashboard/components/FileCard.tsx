"use client";

import Link from "next/link";
import { FileText, Calendar } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FileCard({ file }: { file: any }) {
  return (
    <Link href={`/view/${file.id}`}>
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-xl transition border border-gray-100 hover:scale-[1.02] cursor-pointer">

        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-[#8fbbc7]" />
          <h3 className="font-semibold text-gray-800 truncate">
            {file.name}
          </h3>
        </div>

        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          Uploaded on {file.date}
        </div>

      </div>
    </Link>
  );
}