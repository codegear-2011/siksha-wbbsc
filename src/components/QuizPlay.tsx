import React, { useState, useEffect } from 'react';
import { Quiz, QuizResultData } from '../types';
import { ArrowLeft, CheckCircle2, XCircle, Info, ChevronRight, ChevronLeft, Award, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizPlayProps {
  quiz: Quiz;
  onBack: () => void;
  onFinishQuiz: (result: QuizResultData) => void;
}

export const QuizPlay: React.FC<QuizPlayProps> = ({ quiz, onBack, onFinishQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(
    (quiz.timeLimitMinutes || 10) * 60
  );

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;

  // Countdown timer
  useEffect(() => {
    if (timeRemainingSeconds <= 0) {
      handleCompleteQuiz();
      return;
    }
    const timer = setInterval(() => {
      setTimeRemainingSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeRemainingSeconds]);

  // Recalculate score on answer
  const handleSelectOption = (optionIndex: number) => {
    if (userAnswers[currentQuestionIndex] !== undefined) return; // Already answered

    const updatedAnswers = { ...userAnswers, [currentQuestionIndex]: optionIndex };
    setUserAnswers(updatedAnswers);
    setShowExplanation(true);

    if (optionIndex === currentQuestion.correctOption) {
      setScore(prev => prev + 10); // 10 points per correct answer
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      handleCompleteQuiz();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowExplanation(userAnswers[currentQuestionIndex + 1] !== undefined);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setShowExplanation(userAnswers[currentQuestionIndex - 1] !== undefined);
    }
  };

  const handleCompleteQuiz = () => {
    let correctCount = 0;
    let wrongCount = 0;
    let skippedCount = 0;

    quiz.questions.forEach((q, idx) => {
      const selected = userAnswers[idx];
      if (selected === undefined) {
        skippedCount++;
      } else if (selected === q.correctOption) {
        correctCount++;
      } else {
        wrongCount++;
      }
    });

    const resultData: QuizResultData = {
      quizId: quiz.id,
      quizTitle: quiz.chapterTitle,
      className: quiz.className,
      subjectName: quiz.subjectName,
      totalQuestions: quiz.questions.length,
      correctCount,
      wrongCount,
      skippedCount,
      score: correctCount * 10,
      timeSpentSeconds: (quiz.timeLimitMinutes || 10) * 60 - timeRemainingSeconds,
      answers: userAnswers
    };

    onFinishQuiz(resultData);
  };

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 space-y-5">
      {/* Header Card - Replica of Image 2 Top Banner */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#21434c] rounded-[28px] p-5 sm:p-6 text-white shadow-xl relative overflow-hidden border border-teal-800/40"
      >
        <div className="flex items-center justify-between mb-3">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 bg-slate-800/90 hover:bg-slate-700 text-slate-100 px-4 py-1.5 rounded-full text-sm font-semibold border border-slate-600/80 transition cursor-pointer shadow-sm"
          >
            <span className="text-xs">◄</span>
            <span>আগের</span>
          </button>

          {/* Badge - Replica of Orange Pill "196" from Image 2 */}
          <div className="bg-amber-500 text-white font-extrabold px-4 py-1.5 rounded-full text-base sm:text-lg shadow-md tracking-wider flex items-center gap-1">
            <span>{score || 100 + score}</span>
          </div>
        </div>

        {/* Center Chapter Details - Replica of Image 2 */}
        <div className="text-center pt-1 pb-1 space-y-1">
          <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
            {quiz.chapterTitle}
          </h1>
          <p className="text-slate-200 font-medium text-xs sm:text-sm">
            {quiz.className}
          </p>
          <p className="text-amber-400 font-semibold text-xs sm:text-sm tracking-wide">
            siksha wb মক টেস্ট
          </p>
        </div>
      </motion.div>

      {/* Timer & Question Counter bar */}
      <div className="flex items-center justify-between px-2 text-xs sm:text-sm font-semibold text-slate-600">
        <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-slate-200">
          <HelpCircle className="w-4 h-4 text-teal-600" />
          প্রশ্ন {currentQuestionIndex + 1} / {quiz.questions.length}
        </span>

        <span className="flex items-center gap-1.5 bg-amber-50 text-amber-800 px-3.5 py-1.5 rounded-full shadow-xs border border-amber-200 font-bold">
          সময় অবশিষ্ট: {formatTime(timeRemainingSeconds)}
        </span>
      </div>

      {/* Main Question Card - Exact Replica of Image 2 */}
      {currentQuestion && (
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            className="bg-white rounded-[24px] p-6 shadow-md border-l-4 border-blue-600 space-y-6"
          >
            {/* Question Text */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-relaxed">
                {currentQuestionIndex + 1}. {currentQuestion.text}
              </h2>
            </div>

            {/* 4 Option Buttons */}
            <div className="space-y-3">
              {currentQuestion.options.map((optionText, optIdx) => {
                const userSelected = userAnswers[currentQuestionIndex];
                const hasAnswered = userSelected !== undefined;
                const isThisSelected = userSelected === optIdx;
                const isThisCorrect = currentQuestion.correctOption === optIdx;

                let btnStyle = 'bg-slate-100 hover:bg-slate-200/80 text-slate-800 border-slate-200/80';
                if (hasAnswered) {
                  if (isThisCorrect) {
                    btnStyle = 'bg-emerald-50 border-2 border-emerald-500 text-emerald-950 font-bold shadow-xs';
                  } else if (isThisSelected) {
                    btnStyle = 'bg-rose-50 border-2 border-rose-500 text-rose-950 font-bold shadow-xs';
                  } else {
                    btnStyle = 'bg-slate-50 opacity-60 border-slate-200 text-slate-500';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    disabled={hasAnswered}
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-base sm:text-lg flex items-center justify-between cursor-pointer font-medium leading-relaxed ${btnStyle}`}
                  >
                    <span>{optionText}</span>

                    {hasAnswered && (
                      <span className="shrink-0 ml-2">
                        {isThisCorrect && (
                          <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                        )}
                        {!isThisCorrect && isThisSelected && (
                          <XCircle className="w-6 h-6 text-rose-600 fill-rose-100" />
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box if answered */}
            {userAnswers[currentQuestionIndex] !== undefined && currentQuestion.explanation && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-amber-50 border border-amber-200/90 rounded-xl p-4 text-amber-900 text-sm space-y-1"
              >
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <Info className="w-4 h-4 text-amber-700" />
                  <span>ব্যাখ্যা (Explanation):</span>
                </div>
                <p className="leading-relaxed">{currentQuestion.explanation}</p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Navigation Controls */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <button
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
          className={`flex items-center gap-1 px-4 py-2.5 rounded-xl font-bold text-sm transition cursor-pointer ${
            currentQuestionIndex === 0
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
              : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>পূর্ববর্তী</span>
        </button>

        <button
          onClick={handleNext}
          className="flex-1 bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 text-base shadow-md transition cursor-pointer"
        >
          <span>{isLastQuestion ? 'ফলাফল জমা দিন' : 'পরবর্তী প্রশ্ন'}</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Question Jumper Grid */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 space-y-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          প্রশ্ন নেভিগেশন (Question Palette):
        </span>
        <div className="flex flex-wrap gap-2">
          {quiz.questions.map((_, idx) => {
            const isAnswered = userAnswers[idx] !== undefined;
            const isCurrent = idx === currentQuestionIndex;
            return (
              <button
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-9 h-9 rounded-lg font-bold text-xs flex items-center justify-center transition cursor-pointer ${
                  isCurrent
                    ? 'ring-2 ring-teal-600 bg-teal-700 text-white shadow-sm'
                    : isAnswered
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
