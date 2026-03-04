"use client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UploadToggle({ mode, setMode }: any) {
  return (
    <div className="flex bg-gray-100 rounded-full p-1 w-fit">

      <button
        onClick={() => setMode("manual")}
        className={`px-5 py-2 rounded-full transition ${
          mode === "manual"
            ? "bg-[#8fbbc7] text-white"
            : "text-gray-600"
        }`}
      >
        Manual Upload
      </button>

      <button
        onClick={() => setMode("gesture")}
        className={`px-5 py-2 rounded-full transition ${
          mode === "gesture"
            ? "bg-[#8fbbc7] text-white"
            : "text-gray-600"
        }`}
      >
        Gesture Upload
      </button>

    </div>
  );
}