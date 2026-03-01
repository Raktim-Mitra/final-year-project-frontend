"use client";

export default function GestureControls({
  isCameraActive,
  startCamera,
  stopCamera
}: {
  isCameraActive: boolean;
  startCamera: () => void;
  stopCamera: () => void;
}) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      {!isCameraActive ? (
        <button
          onClick={startCamera}
          className="bg-[#8fbbc7] text-white px-4 py-2 rounded-lg hover:bg-[#79A9B7]"
        >
          Start Camera
        </button>
      ) : (
        <button
          onClick={stopCamera}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Stop Camera
        </button>
      )}
    </div>
  );
}