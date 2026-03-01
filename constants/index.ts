import { Video, BookOpen, Globe, Gamepad2 } from "lucide-react";

export const resourceTypeIcons = {
  video: Video,
  book: BookOpen,
  article: Globe,
  interactive: Gamepad2,
};

export const resourceTypeColors = {
  video: "bg-red-50 text-red-600 border-red-200",
  book: "bg-blue-50 text-blue-600 border-blue-200",
  article: "bg-emerald-50 text-emerald-600 border-emerald-200",
  interactive: "bg-purple-50 text-purple-600 border-purple-200",
};

export const difficultyColors = {
  Easy: "bg-green-50 text-green-700 border-green-200",
  Medium: "bg-amber-50 text-amber-700 border-amber-200",
  Hard: "bg-red-50 text-red-700 border-red-200",
};

export const questionTypeColors = {
  mcq: "bg-brand-primary",
  short: "bg-emerald-500",
  calculation: "bg-amber-500",
  descriptive: "bg-purple-500",
};

export const questionTypeLabels = {
  mcq: "Multiple Choice",
  short: "Short Answer",
  calculation: "Calculation",
  descriptive: "Descriptive",
};
