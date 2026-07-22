import React, { useState, useEffect } from 'react';
import { ClassItem, Subject, Quiz, QuizResultData } from './types';
import { storageService } from './services/storageService';
import { LandingPage } from './components/LandingPage';
import { ClassSelector } from './components/ClassSelector';
import { SubjectChapterSelector } from './components/SubjectChapterSelector';
import { QuizPlay } from './components/QuizPlay';
import { QuizResult } from './components/QuizResult';
import { HiddenAdminDashboard } from './components/HiddenAdminDashboard';

export default function App() {
  // App View States
  const [currentView, setCurrentView] = useState<'landing' | 'class-select' | 'chapter-select' | 'quiz-play' | 'quiz-result' | 'admin'>('landing');

  // Loaded Data from Storage
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  // Selection States
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [quizResult, setQuizResult] = useState<QuizResultData | null>(null);

  // Load storage data
  const loadData = () => {
    storageService.initStorage();
    setClasses(storageService.getClasses());
    setSubjects(storageService.getSubjects());
    setQuizzes(storageService.getQuizzes());
  };

  useEffect(() => {
    loadData();

    // Check URL location for hidden admin trigger (#admin, /admin, or ?admin=true)
    const checkUrlForAdmin = () => {
      const hash = window.location.hash.toLowerCase();
      const pathname = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();

      if (hash.includes('admin') || pathname.endsWith('/admin') || search.includes('admin=true') || search.includes('admin')) {
        setCurrentView('admin');
      }
    };

    checkUrlForAdmin();
    window.addEventListener('hashchange', checkUrlForAdmin);
    window.addEventListener('popstate', checkUrlForAdmin);

    // Keyboard shortcut trigger: Ctrl + Shift + A
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        window.location.hash = 'admin';
        setCurrentView('admin');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('hashchange', checkUrlForAdmin);
      window.removeEventListener('popstate', checkUrlForAdmin);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Class Selection Handler
  const handleSelectClass = (cls: ClassItem) => {
    setSelectedClass(cls);
    setCurrentView('chapter-select');
  };

  // Start Quiz Handler
  const handleSelectQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentView('quiz-play');
  };

  // Finish Quiz Handler
  const handleFinishQuiz = (result: QuizResultData) => {
    storageService.saveAttempt(result);
    setQuizResult(result);
    setCurrentView('quiz-result');
  };

  // Retry Quiz
  const handleRetryQuiz = () => {
    if (selectedQuiz) {
      setCurrentView('quiz-play');
    }
  };

  // Go to Home
  const handleGoHome = () => {
    setSelectedClass(null);
    setSelectedQuiz(null);
    setQuizResult(null);
    setCurrentView('landing');
  };

  // Close Admin
  const handleCloseAdmin = () => {
    if (window.location.hash.includes('admin')) {
      window.location.hash = '';
    }
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 antialiased font-['Hind_Siliguri','Noto_Sans_Bengali',sans-serif] selection:bg-amber-200">
      {/* HIDDEN ADMIN DASHBOARD VIEW */}
      {currentView === 'admin' && (
        <HiddenAdminDashboard
          classes={classes}
          subjects={subjects}
          quizzes={quizzes}
          onRefreshData={loadData}
          onCloseAdmin={handleCloseAdmin}
        />
      )}

      {/* PUBLIC APP VIEWS */}
      {currentView !== 'admin' && (
        <main className="py-2 sm:py-6">
          {/* View 0: Landing Page (প্রথম পাতা) */}
          {currentView === 'landing' && (
            <LandingPage
              onStartQuiz={() => setCurrentView('class-select')}
            />
          )}

          {/* View 1: Class Selector (শ্রেণি নির্বাচন) */}
          {currentView === 'class-select' && (
            <ClassSelector
              classes={classes}
              onSelectClass={handleSelectClass}
              onBackToLanding={() => setCurrentView('landing')}
            />
          )}

          {/* View 2: Subject & Chapter Selector */}
          {currentView === 'chapter-select' && selectedClass && (
            <SubjectChapterSelector
              selectedClass={selectedClass}
              subjects={subjects}
              quizzes={quizzes}
              onBack={() => setCurrentView('class-select')}
              onSelectQuiz={handleSelectQuiz}
            />
          )}

          {/* View 3: Active Quiz Play (Screenshot 2) */}
          {currentView === 'quiz-play' && selectedQuiz && (
            <QuizPlay
              quiz={selectedQuiz}
              onBack={() => setCurrentView('chapter-select')}
              onFinishQuiz={handleFinishQuiz}
            />
          )}

          {/* View 4: Quiz Result Summary */}
          {currentView === 'quiz-result' && quizResult && selectedQuiz && (
            <QuizResult
              result={quizResult}
              quiz={selectedQuiz}
              onRetry={handleRetryQuiz}
              onGoHome={handleGoHome}
            />
          )}
        </main>
      )}
    </div>
  );
}
