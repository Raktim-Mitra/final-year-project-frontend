export interface CourseOutcome {
  id: string;
  title: string;
  description: string;
  bloomLevel: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'video' | 'article' | 'book' | 'interactive';
  source: string;
  url: string;
  duration?: string;
  rating: number;
  isFeatured?: boolean;
}

export interface Question {
  id: string;
  question: string;
  type: 'mcq' | 'short' | 'calculation' | 'descriptive';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  options?: string[];
  answer?: string;
}

export interface ModuleItem {
  id: string;
  title: string;
  content: string;
  topics: string[];
  hours?: number;
}

export interface CurrentResultData {
  syllabusName: string;
  courseName: string;
  processedAt: string;
  modules: ModuleItem[];
  outcomes: CourseOutcome[];
  resources: Resource[];
  questions: Question[];
}

export interface SyllabusResult {
  id: string;
  syllabusName: string;
  courseName: string;
  uploadedAt: string;
  moduleCount: number;
  outcomeCount: number;
  questionCount: number;
}

export type TabType = 'modules' | 'outcomes' | 'resources' | 'questions';