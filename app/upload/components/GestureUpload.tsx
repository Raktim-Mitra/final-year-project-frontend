"use client";

import GestureCamera from "./gesture/GestureCamera";

export default function GestureUpload() {
  return (
    <div className="bg-white/80 p-10 rounded-xl shadow text-center">
      <p className="text-gray-600 mb-6 font-medium">
        Use hand gestures to browse and upload syllabus
      </p>

      <GestureCamera />
    </div>
  );
}