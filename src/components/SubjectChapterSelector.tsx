import React, { useState } from 'react';
import { ClassItem, Subject, Quiz } from '../types';
import { ArrowLeft, BookOpen, Clock, HelpCircle, Play, ChevronRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface SubjectChapterSelectorProps {
  selectedClass: ClassItem;
  subjects: Subject[];
  quizzes: Quiz[];
  onBack: () => void;
  onSelectQuiz: (quiz: Quiz) => void;
}

export const SubjectChapterSelector: React.FC<SubjectChapterSelectorProps> = ({
  selectedClass,
  subjects,
  quizzes,
  onBack,
  onSelectQuiz,
}) => {
  const [activeSubjectId, setActiveSubjectId] = useState<string>(subjects[0]?.id || 'bangla');

  // Filter quizzes for this class and selected subject
  const currentQuizzes = quizzes.filter(
    q => q.classId === selectedClass.id && q.subjectId === activeSubjectId
  );

  const activeSubject = subjects.find(s => s.id === activeSubjectId);

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 space-y-5">
      {/* Top Banner Header Card */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#21434c] rounded-[28px] p-6 text-white shadow-xl relative overflow-hidden border border-teal-800/40"
      >
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 bg-slate-800/90 hover:bg-slate-700 text-slate-100 px-4 py-1.5 rounded-full text-sm font-semibold border border-slate-600/80 transition cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>আগের</span>
          </button>

          <span className="bg-amber-400 text-slate-950 font-bold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider">
            {selectedClass.name}
          </span>
        </div>

        <div className="text-center pt-1 pb-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            বিষয় ও অধ্যায় নির্বাচন
          </h1>
          <p className="text-amber-400 font-medium text-sm mt-1">
            siksha wb মক টেস্ট
          </p>
        </div>
      </motion.div>

      {/* Subject Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {subjects.map(sub => {
          const isActive = sub.id === activeSubjectId;
          const count = quizzes.filter(q => q.classId === selectedClass.id && q.subjectId === sub.id).length;
          return (
            <button
              key={sub.id}
              onClick={() => setActiveSubjectId(sub.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-bold text-sm sm:text-base whitespace-nowrap transition cursor-pointer border ${
                isActive
                  ? 'bg-teal-700 text-white border-teal-800 shadow-md scale-105'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{sub.name}</span>
              {count > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-amber-400 text-slate-900 font-extrabold' : 'bg-slate-100 text-slate-600'}`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Chapter Quiz Cards List */}
      <div className="space-y-3.5 pt-1">
        <div className="flex items-center justify-between text-slate-600 px-1 font-semibold text-sm">
          <span className="flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-teal-700" />
            {activeSubject?.name} - উপলব্ধ অধ্যায়সমূহ:
          </span>
          <span className="text-xs text-slate-500 font-normal">
            মোট: {currentQuizzes.length} টি কুইজ
          </span>
        </div>

        {currentQuizzes.length > 0 ? (
          currentQuizzes.map((quiz, idx) => (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-[22px] p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <span className="inline-block bg-teal-50 text-teal-800 font-bold text-xs px-2.5 py-1 rounded-md border border-teal-200">
                    অধ্যায় {quiz.chapterNumber || (idx + 1)}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                    {quiz.chapterTitle}
                  </h3>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <HelpCircle className="w-4 h-4 text-teal-600" />
                    {quiz.questions.length} টি প্রশ্ন
                  </span>
                  <span className="flex items-center gap-1 font-medium text-slate-700">
                    <Clock className="w-4 h-4 text-amber-600" />
                    {quiz.timeLimitMinutes || 10} মিনিট
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onSelectQuiz(quiz)}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 text-sm shadow-sm transition cursor-pointer"
                >
                  <span>মক টেস্ট দিন</span>
                  <Play className="w-4 h-4 fill-current" />
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="bg-white rounded-[22px] p-8 text-center border border-dashed border-slate-300 space-y-3">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">
              এই বিষয়টির জন্য এখনো কোনো কুইজ যুক্ত করা হয়নি
            </h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              প্রশাসন ড্যাশবোর্ড (Admin Panel) থেকে নতুন কুইজ যুক্ত করা হলে তা এখানে দেখাবে।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
