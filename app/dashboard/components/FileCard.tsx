"use client";

import Link from "next/link";
import { FileText, Calendar, Target, BookOpen, HelpCircle } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FileCard({ file }: { file: any }) {
  return (
    <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow hover:shadow-xl transition border border-gray-100 hover:scale-[1.02]">

      <Link href={`/view/${file.id}`}>
        <div className="cursor-pointer">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-[#8fbbc7]" />
            <h3 className="font-semibold text-gray-800 truncate">
              {file.name}
            </h3>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            Uploaded on {file.date}
          </div>
        </div>
      </Link>

      {/* Quick Actions */}
      <div className="flex flex-col gap-3 mt-4">
      <Link href={`/view/${file.id}?tab=co`}>
          <button className="w-full flex items-center gap-2 text-sm bg-[#8fbbc7]/20 text-[#5f9eab] px-3 py-2 rounded-lg hover:bg-[#8fbbc7]/30 transition font-medium">
      <Target className="w-4 h-4 text-[#5f9eab]" />
         Course Outcomes
       </button>
      </Link>
      <Link href={`/view/${file.id}?tab=resources`}>
     <button className="w-full flex items-center gap-2 text-sm bg-[#CFAB8D]/20 text-[#a67e63] px-3 py-2 rounded-lg hover:bg-[#CFAB8D]/30 transition font-medium">
       <BookOpen className="w-4 h-4 text-[#a67e63]" />
      Resources
     </button>
     </Link>
      <Link href={`/view/${file.id}?tab=questions`}>
      <button className="w-full flex items-center gap-2 text-sm bg-brand-accent/30 text-[#8fbbc7] px-3 py-2 rounded-lg hover:bg-brand-accent/40 transition font-medium">
      <HelpCircle className="w-4 h-4 text-[#8fbbc7]" />
      Questions
      </button>
      </Link>
     </div>
    </div>
  );
}