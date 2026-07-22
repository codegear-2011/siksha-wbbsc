import React from 'react';
import { QuizResultData, Quiz } from '../types';
import { Trophy, CheckCircle2, XCircle, RotateCcw, Home, Check, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface QuizResultProps {
  result: QuizResultData;
  quiz: Quiz;
  onRetry: () => void;
  onGoHome: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, quiz, onRetry, onGoHome }) => {
  const percentage = Math.round((result.correctCount / result.totalQuestions) * 100) || 0;

  let gradeMessage = 'খুব ভালো চেষ্টা!';
  if (percentage >= 80) gradeMessage = 'চমৎকার! দারুণ ফলাফল!';
  else if (percentage >= 50) gradeMessage = 'বেশ ভালো! আরও একটু প্র্যাকটিস করুন।';

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 space-y-6">
      {/* Result Card Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#21434c] rounded-[28px] p-6 text-white text-center shadow-xl border border-teal-800/40 space-y-4"
      >
        <div className="w-16 h-16 bg-amber-400 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-lg">
          <Trophy className="w-9 h-9" />
        </div>

        <div className="space-y-1">
          <span className="text-amber-400 text-sm font-semibold tracking-wide">
            {result.className} • {result.subjectName}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            মক টেস্ট ফলাফল
          </h1>
          <p className="text-slate-200 text-sm font-medium">
            {result.quizTitle}
          </p>
        </div>

        {/* Score Circle */}
        <div className="bg-slate-900/40 border border-teal-700/60 rounded-2xl p-4 max-w-xs mx-auto space-y-1">
          <div className="text-4xl sm:text-5xl font-black text-amber-400">
            {percentage}%
          </div>
          <div className="text-sm text-slate-200 font-semibold">
            {gradeMessage}
          </div>
        </div>

        {/* Stats breakdown */}
        <div className="grid grid-cols-3 gap-2 pt-2 text-slate-100">
          <div className="bg-emerald-900/40 border border-emerald-600/40 rounded-xl p-3 text-center">
            <span className="block text-2xl font-bold text-emerald-300">{result.correctCount}</span>
            <span className="text-xs font-semibold text-emerald-200">সঠিক</span>
          </div>

          <div className="bg-rose-900/40 border border-rose-600/40 rounded-xl p-3 text-center">
            <span className="block text-2xl font-bold text-rose-300">{result.wrongCount}</span>
            <span className="text-xs font-semibold text-rose-200">ভুল</span>
          </div>

          <div className="bg-slate-800/60 border border-slate-600/40 rounded-xl p-3 text-center">
            <span className="block text-2xl font-bold text-amber-300">{result.skippedCount}</span>
            <span className="text-xs font-semibold text-slate-300">অনুত্তরিত</span>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onRetry}
          className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 text-base shadow-sm transition cursor-pointer"
        >
          <RotateCcw className="w-5 h-5" />
          <span>পুনরায় পরীক্ষা দিন</span>
        </button>

        <button
          onClick={onGoHome}
          className="bg-white hover:bg-slate-50 text-slate-800 font-bold py-3.5 px-5 rounded-xl border border-slate-300 flex items-center justify-center gap-2 text-base shadow-sm transition cursor-pointer"
        >
          <Home className="w-5 h-5 text-teal-700" />
          <span>মূল পাতা</span>
        </button>
      </div>

      {/* Question Answer Review */}
      <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-200 space-y-5">
        <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
          প্রশ্নোত্তর পর্যালোচনা (Answer Review):
        </h3>

        <div className="space-y-6">
          {quiz.questions.map((q, idx) => {
            const userSelected = result.answers[idx];
            const isCorrect = userSelected === q.correctOption;
            const isSkipped = userSelected === undefined;

            return (
              <div key={q.id} className="space-y-2 border-b border-slate-100 pb-4 last:border-0">
                <div className="flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : isSkipped ? (
                      <Info className="w-5 h-5 text-amber-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-rose-600" />
                    )}
                  </span>
                  <p className="font-bold text-slate-900 text-base leading-snug">
                    {idx + 1}. {q.text}
                  </p>
                </div>

                <div className="ml-7 space-y-1 text-sm">
                  <div className="text-slate-600">
                    <span className="font-semibold text-slate-700">আপনার উত্তর: </span>
                    {isSkipped ? (
                      <span className="text-amber-700 font-semibold">কোনো উত্তর দেওয়া হয়নি</span>
                    ) : (
                      <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                        {q.options[userSelected]}
                      </span>
                    )}
                  </div>

                  {!isCorrect && (
                    <div className="text-emerald-800 font-semibold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                      সঠিক উত্তর: {q.options[q.correctOption]}
                    </div>
                  )}

                  {q.explanation && (
                    <div className="text-slate-600 bg-slate-50 p-2.5 rounded-lg text-xs leading-relaxed border border-slate-200/80 mt-1">
                      <strong className="text-slate-700">ব্যাখ্যা:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
