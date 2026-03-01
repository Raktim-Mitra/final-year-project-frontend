"use client";

export default function GestureStatus({ gesture }: { gesture: string }) {
  const getLabel = () => {
    switch (gesture) {
      case "open_palm": return "Next File ✋";
      case "fist": return "Previous File ✊";
      case "point": return "Selected ☝️";
      case "thumbs_up": return "Uploading 👍";
      case "thumbs_down": return "Cancelled 👎";
      default: return "Waiting...";
    }
  };

  return (
    <div className="mt-4 text-center bg-brand-bg p-3 rounded-lg text-gray-700 font-medium">
      Gesture: {getLabel()}
    </div>
  );
}