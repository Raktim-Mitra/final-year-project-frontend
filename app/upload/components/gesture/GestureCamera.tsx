"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

import { speak } from "./GestureVoice";
import { detectGesture } from "./GestureDetector";
import GestureStatus from "./GestureStatus";
import GestureControls from "./GestureControls";

export default function GestureCamera() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const router = useRouter();

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [gesture, setGesture] = useState("none");

  const lastGestureRef = useRef<string>("none");
  const lastUploadRef = useRef<boolean>(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      streamRef.current = stream;
      setIsCameraActive(true);
      speak("Camera started");
    }
  };

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach(track => track.stop());
    setIsCameraActive(false);
    speak("Camera stopped");
  };

  const captureAndSendFrame = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || !isCameraActive || isProcessing) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;

    ctx.drawImage(videoRef.current, 0, 0);
    const imageData = canvasRef.current.toDataURL("image/jpeg");

    setIsProcessing(true);

    try {
      const data = await detectGesture(imageData);
      setGesture(data.gesture);

      if (data.gesture && data.gesture !== lastGestureRef.current) {
        lastGestureRef.current = data.gesture;

        if (data.gesture === "open_palm") speak("Next file");
        else if (data.gesture === "fist") speak("Previous file");
        else if (data.gesture === "point") speak("File selected");
        else if (data.gesture === "thumbs_up") speak("Uploading file");
        else if (data.gesture === "thumbs_down") speak("Cancelled");
      }

      if (data.uploaded_file && !lastUploadRef.current) {
        lastUploadRef.current = true;
        speak("Upload successful");
        router.push(`/view/${data.file_id}`);
      }

    } catch {
      speak("Error detecting gesture");
    }

    setIsProcessing(false);
  }, [isCameraActive, isProcessing, router]);

  useEffect(() => {
    if (!isCameraActive) return;
    const interval = setInterval(captureAndSendFrame, 600);
    return () => clearInterval(interval);
  }, [isCameraActive, captureAndSendFrame]);

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow">

      <video ref={videoRef} autoPlay className="w-full rounded-lg" />
      <canvas ref={canvasRef} className="hidden" />

      <GestureControls
        isCameraActive={isCameraActive}
        startCamera={startCamera}
        stopCamera={stopCamera}
      />

      <GestureStatus gesture={gesture} />

      {isProcessing && (
        <Loader2 className="animate-spin mx-auto mt-4 text-[#8fbbc7]" />
      )}
    </div>
  );
}