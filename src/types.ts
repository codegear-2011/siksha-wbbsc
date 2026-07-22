export interface Question {
  id: string;
  text: string;
  options: [string, string, string, string];
  correctOption: number; // 0, 1, 2, or 3
  explanation?: string;
}

export interface Quiz {
  id: string;
  classId: string;
  className: string; // e.g. "ক্লাস ৯"
  subjectId: string;
  subjectName: string; // e.g. "ইতিহাস" or "বাংলা"
  chapterNumber?: string; // e.g. "২"
  chapterTitle: string; // e.g. "ধীবর-বৃত্তান্ত" or "ভিয়েনা সম্মেলন"
  questions: Question[];
  timeLimitMinutes?: number;
  createdAt: string;
}

export interface Subject {
  id: string;
  name: string; // e.g. "বাংলা", "ইতিহাস", "ভূগোল"
  icon?: string;
  color?: string;
}

export interface ClassItem {
  id: string;
  number: number;
  name: string; // e.g. "ক্লাস ৫"
  titlePrefix: string; // e.g. "১. "
  subtitle: string; // e.g. "অধ্যায়ভিত্তিক মক টেস্ট"
  bgColor: string; // e.g. "bg-blue-50"
  borderColor: string; // e.g. "border-blue-300"
  textColor: string; // e.g. "text-blue-700"
  badgeColor: string; // e.g. "bg-blue-600"
}

export interface UserAnswer {
  questionIndex: number;
  selectedOption: number;
  isCorrect: boolean;
}

export interface QuizResultData {
  quizId: string;
  quizTitle: string;
  className: string;
  subjectName: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  skippedCount: number;
  score: number;
  timeSpentSeconds: number;
  answers: Record<number, number>; // questionIndex -> selectedOption
}
