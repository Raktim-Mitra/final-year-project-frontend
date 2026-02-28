import { Video, FileText, BookMarked, MousePointerClick } from "lucide-react";

export const difficultyColors = {
  Easy: "bg-green-100 text-green-700 border-green-200",
  Medium: "bg-amber-100 text-amber-700 border-amber-200",
  Hard: "bg-red-100 text-red-700 border-red-200",
} as const;

export const resourceTypeIcons = {
  video: Video,
  article: FileText,
  book: BookMarked,
  interactive: MousePointerClick,
} as const;

export const resourceTypeColors = {
  video: "bg-red-100 text-red-600 border-red-200",
  article: "bg-blue-100 text-blue-600 border-blue-200",
  book: "bg-amber-100 text-amber-700 border-amber-200",
  interactive: "bg-purple-100 text-purple-600 border-purple-200",
} as const;

export const questionTypeColors = {
  mcq: "bg-[#BBDCE5]",
  short: "bg-[#D9C4B0]",
  calculation: "bg-red-400",
  descriptive: "bg-[#5da8bd]",
} as const;

export const questionTypeLabels = {
  mcq: "Multiple Choice",
  short: "Short Answer",
  calculation: "Calculation",
  descriptive: "Descriptive",
} as const;
