import React, { useState } from 'react';
import { ClassItem, Subject, Quiz, Question } from '../types';
import { storageService } from '../services/storageService';
import { Plus, Trash2, Edit3, Save, Lock, LogOut, Download, Upload, RefreshCw, CheckCircle, PlusCircle, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface HiddenAdminDashboardProps {
  classes: ClassItem[];
  subjects: Subject[];
  quizzes: Quiz[];
  onRefreshData: () => void;
  onCloseAdmin: () => void;
}

export const HiddenAdminDashboard: React.FC<HiddenAdminDashboardProps> = ({
  classes,
  subjects,
  quizzes,
  onRefreshData,
  onCloseAdmin,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(storageService.isAdminLoggedIn());
  const [usernameInput, setUsernameInput] = useState<string>('');
  const [pinInput, setPinInput] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  const [activeTab, setActiveTab] = useState<'create' | 'list' | 'settings' | 'json'>('create');

  // Change Admin Credentials state
  const [newUsername, setNewUsername] = useState<string>('');
  const [newPin, setNewPin] = useState<string>('');
  const [credMessage, setCredMessage] = useState<string>('');

  // Form State for New Quiz
  const [selectedClassId, setSelectedClassId] = useState<string>(classes[0]?.id || 'class-9');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>(subjects[0]?.id || 'bangla');
  const [chapterNumber, setChapterNumber] = useState<string>('১');
  const [chapterTitle, setChapterTitle] = useState<string>('');
  const [timeLimitMinutes, setTimeLimitMinutes] = useState<number>(10);

  // Editing quiz ID if editing
  const [editingQuizId, setEditingQuizId] = useState<string | null>(null);

  // Dynamic Questions List
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 'q-init-1',
      text: '',
      options: ['', '', '', ''],
      correctOption: 0,
      explanation: ''
    }
  ]);

  const [successMessage, setSuccessMessage] = useState<string>('');
  const [jsonText, setJsonText] = useState<string>('');

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (storageService.verifyAdminCredentials(usernameInput, pinInput)) {
      storageService.setAdminLoggedIn(true);
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('ভুল ইউজারনেম অথবা সিকিউরিটি পিন! সঠিক তথ্য দিয়ে চেষ্টা করুন।');
    }
  };

  const handleChangeCredentials = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername.trim() || !newPin.trim()) {
      alert('নতুন ইউজারনেম এবং পিন উভয়ই প্রদান করুন!');
      return;
    }
    storageService.setAdminCredentials(newUsername, newPin);
    setCredMessage('ইউজারনেম ও সিকিউরিটি পিন সফলভাবে আপডেট করা হয়েছে!');
    setNewUsername('');
    setNewPin('');
    setTimeout(() => setCredMessage(''), 4000);
  };

  const handleLogout = () => {
    storageService.setAdminLoggedIn(false);
    setIsAuthenticated(false);
  };

  // Add new question row
  const handleAddQuestionRow = () => {
    setQuestions(prev => [
      ...prev,
      {
        id: `q-${Date.now()}-${prev.length + 1}`,
        text: '',
        options: ['', '', '', ''],
        correctOption: 0,
        explanation: ''
      }
    ]);
  };

  // Remove question row
  const handleRemoveQuestionRow = (index: number) => {
    if (questions.length === 1) return;
    setQuestions(prev => prev.filter((_, i) => i !== index));
  };

  // Update question field
  const handleUpdateQuestion = (index: number, field: keyof Question, value: any) => {
    setQuestions(prev => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  // Update option text
  const handleUpdateOption = (qIndex: number, optIndex: number, value: string) => {
    setQuestions(prev => {
      const updated = [...prev];
      const opts = [...updated[qIndex].options] as [string, string, string, string];
      opts[optIndex] = value;
      updated[qIndex].options = opts;
      return updated;
    });
  };

  // Save Quiz Handler
  const handleSaveQuiz = (e: React.FormEvent) => {
    e.preventDefault();

    if (!chapterTitle.trim()) {
      alert('অধ্যায়ের শিরোনাম লিখুন!');
      return;
    }

    // Validate questions
    const validQuestions = questions.filter(q => q.text.trim() && q.options.some(o => o.trim()));
    if (validQuestions.length === 0) {
      alert('কমপক্ষে একটি সঠিক প্রশ্ন ও অপশন লিখুন!');
      return;
    }

    const cls = classes.find(c => c.id === selectedClassId);
    const sub = subjects.find(s => s.id === selectedSubjectId);

    const quizToSave: Quiz = {
      id: editingQuizId || `quiz-${Date.now()}`,
      classId: selectedClassId,
      className: cls?.name || 'ক্লাস ৯',
      subjectId: selectedSubjectId,
      subjectName: sub?.name || 'বাংলা',
      chapterNumber,
      chapterTitle: chapterTitle.trim(),
      timeLimitMinutes,
      createdAt: new Date().toISOString(),
      questions: validQuestions.map((q, idx) => ({
        id: q.id || `q-${idx + 1}`,
        text: q.text,
        options: q.options,
        correctOption: q.correctOption,
        explanation: q.explanation || ''
      }))
    };

    storageService.saveQuiz(quizToSave);
    onRefreshData();

    setSuccessMessage('কুইজ সফলভাবে সেভ ও ডাটাবেসে যুক্ত হয়েছে!');
    setTimeout(() => setSuccessMessage(''), 4000);

    // Reset Form
    setEditingQuizId(null);
    setChapterTitle('');
    setQuestions([
      {
        id: 'q-init-1',
        text: '',
        options: ['', '', '', ''],
        correctOption: 0,
        explanation: ''
      }
    ]);
  };

  // Edit existing quiz
  const handleEditQuiz = (quiz: Quiz) => {
    setEditingQuizId(quiz.id);
    setSelectedClassId(quiz.classId);
    setSelectedSubjectId(quiz.subjectId);
    setChapterNumber(quiz.chapterNumber || '১');
    setChapterTitle(quiz.chapterTitle);
    setTimeLimitMinutes(quiz.timeLimitMinutes || 10);
    setQuestions(quiz.questions);
    setActiveTab('create');
  };

  // Delete quiz
  const handleDeleteQuiz = (quizId: string) => {
    if (confirm('আপনি কি সত্যিই এই কুইজটি মুছে ফেলতে চান?')) {
      storageService.deleteQuiz(quizId);
      onRefreshData();
    }
  };

  // Import JSON
  const handleImportJSON = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (Array.isArray(parsed)) {
        parsed.forEach(q => storageService.saveQuiz(q));
      } else if (parsed.id && parsed.questions) {
        storageService.saveQuiz(parsed);
      } else {
        alert('অকার্যকর কুইজ JSON বিন্যাস!');
        return;
      }
      onRefreshData();
      alert('JSON সফলভাবে ইমপোর্ট করা হয়েছে!');
      setJsonText('');
    } catch (e) {
      alert('JSON পার্স করতে ব্যর্থ হয়েছে। বিন্যাস পরীক্ষা করুন।');
    }
  };

  // Export JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(quizzes, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `siksha_wb_quizzes_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Reset database
  const handleResetFactory = () => {
    if (confirm('আপনি কি পূর্বনির্ধারিত ডেমো কুইজ ডাটাবেসে ফিরে যেতে চান? আপনার তৈরি সব কুইজ মুছে যেতে পারে।')) {
      storageService.resetToDefaultData();
      onRefreshData();
      alert('ডাটাবেস সফলভাবে রিসেট করা হয়েছে।');
    }
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 font-['Hind_Siliguri',sans-serif]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-800 border border-slate-700 rounded-3xl p-8 max-w-md w-full shadow-2xl text-white space-y-6 relative"
        >
          <button
            onClick={onCloseAdmin}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-700/60 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto border border-amber-500/30">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-white">প্রশাসন প্যানেল লগইন</h2>
            <p className="text-slate-400 text-sm">
              সিক্রেট অ্যাডমিন ড্যাশবোর্ডে প্রবেশ করতে ইউজারনেম এবং পিন দিন
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                অ্যাডমিন ইউজারনেম (Username):
              </label>
              <input
                type="text"
                value={usernameInput}
                onChange={e => setUsernameInput(e.target.value)}
                placeholder="ডিফল্ট ইউজারনেম: admin"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-medium text-base"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                সিকিউরিটি পিন / পাসওয়ার্ড (PIN):
              </label>
              <input
                type="password"
                value={pinInput}
                onChange={e => setPinInput(e.target.value)}
                placeholder="ডিফল্ট পিন: admin123"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-mono text-base"
              />
            </div>

            {authError && (
              <p className="text-rose-400 text-xs font-semibold text-center bg-rose-950/50 p-2.5 rounded-lg border border-rose-800">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg transition text-base cursor-pointer"
            >
              ড্যাশবোর্ডে প্রবেশ করুন
            </button>
          </form>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/60 text-xs text-slate-400 text-center space-y-1">
            <div>ডিফল্ট ইউজারনেম: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-400 font-bold">admin</code></div>
            <div>ডিফল্ট সিকিউরিটি পিন: <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-400 font-bold">admin123</code></div>
          </div>
        </motion.div>
      </div>
    );
  }

  // LOGGED IN ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-6 font-['Hind_Siliguri',sans-serif]">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Admin Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-teal-500/10 border border-teal-500/30 rounded-xl text-teal-400">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
                গোপন কুইজ ব্যবস্থাপনা ড্যাশবোর্ড (Admin Panel)
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm">
                নতুন কুইজ তৈরি, শ্রেণি/বিষয় পরিচালনা ও ডাটাবেস আপডেট সেন্টার
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCloseAdmin}
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-sm font-semibold transition cursor-pointer flex items-center gap-1.5 border border-slate-700"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>মূল অ্যাপে ফিরুন</span>
            </button>

            <button
              onClick={handleLogout}
              className="bg-rose-950/80 hover:bg-rose-900 text-rose-300 px-3.5 py-2 rounded-xl text-sm font-semibold transition cursor-pointer border border-rose-800 flex items-center gap-1.5"
            >
              <LogOut className="w-4 h-4" />
              <span>লগআউট</span>
            </button>
          </div>
        </div>

        {/* Success Alert Banner */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-emerald-950/90 border border-emerald-600 text-emerald-200 p-4 rounded-xl flex items-center gap-2 shadow-lg"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="font-semibold text-sm">{successMessage}</span>
          </motion.div>
        )}

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'create'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <PlusCircle className="w-4 h-4" />
            <span>{editingQuizId ? 'কুইজ এডিট করুন' : 'নতুন কুইজ তৈরি করুন'}</span>
          </button>

          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'list'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Edit3 className="w-4 h-4" />
            <span>কুইজ তালিকা ({quizzes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'json'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>JSON ইমপোর্ট / ব্যাকআপ</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition cursor-pointer flex items-center gap-2 ${
              activeTab === 'settings'
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>অ্যাডমিন সিকিউরিটি পিন</span>
          </button>
        </div>

        {/* TAB 1: CREATE / EDIT QUIZ FORM */}
        {activeTab === 'create' && (
          <form onSubmit={handleSaveQuiz} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-amber-400 border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>{editingQuizId ? 'কুইজ আপডেট করুন' : 'নতুন কুইজ তৈরি ও প্রকাশ করুন'}</span>
              {editingQuizId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingQuizId(null);
                    setChapterTitle('');
                  }}
                  className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-lg hover:bg-slate-700"
                >
                  নতুন ফর্ম রিসেট
                </button>
              )}
            </h2>

            {/* Class & Subject Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">শ্রেণি নির্বাচন করুন:</label>
                <select
                  value={selectedClassId}
                  onChange={e => setSelectedClassId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-amber-400 focus:outline-none"
                >
                  {classes.map(cls => (
                    <option key={cls.id} value={cls.id}>{cls.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">বিষয় নির্বাচন করুন:</label>
                <select
                  value={selectedSubjectId}
                  onChange={e => setSelectedSubjectId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-amber-400 focus:outline-none"
                >
                  {subjects.map(sub => (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">সময় সীমা (মিনিট):</label>
                <input
                  type="number"
                  min={1}
                  max={60}
                  value={timeLimitMinutes}
                  onChange={e => setTimeLimitMinutes(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Chapter Details */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">অধ্যায় নম্বর:</label>
                <input
                  type="text"
                  placeholder="যেমন: ১, ২, ৩"
                  value={chapterNumber}
                  onChange={e => setChapterNumber(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-3">
                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">অধ্যায় / কুইজ শিরোনাম (Title):</label>
                <input
                  type="text"
                  placeholder="যেমন: ২. ধীবর-বৃত্তান্ত অথবা ১৭৮৯ খ্রিস্টাব্দের পরবর্তী ইউরোপ"
                  value={chapterTitle}
                  onChange={e => setChapterTitle(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-amber-400 focus:outline-none font-semibold"
                />
              </div>
            </div>

            {/* Dynamic Questions Builder */}
            <div className="space-y-6 pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-200">
                  প্রশ্নসমূহ (Questions List - {questions.length} টি)
                </h3>

                <button
                  type="button"
                  onClick={handleAddQuestionRow}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>আরও প্রশ্ন যোগ করুন</span>
                </button>
              </div>

              {questions.map((q, qIdx) => (
                <div key={qIdx} className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-4 relative">
                  <div className="flex items-center justify-between border-b border-slate-900 pb-2">
                    <span className="font-extrabold text-amber-400 text-sm">
                      প্রশ্ন নম্বর {qIdx + 1}:
                    </span>

                    {questions.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveQuestionRow(qIdx)}
                        className="text-rose-400 hover:text-rose-300 text-xs flex items-center gap-1 bg-rose-950/50 px-2.5 py-1 rounded-lg border border-rose-900"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>মুছে ফেলুন</span>
                      </button>
                    )}
                  </div>

                  {/* Question Text Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">প্রশ্ন (Bengali Question):</label>
                    <textarea
                      rows={2}
                      placeholder="প্রশ্নটি এখানে লিখুন..."
                      value={q.text}
                      onChange={e => handleUpdateQuestion(qIdx, 'text', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white text-sm focus:border-amber-400 focus:outline-none font-medium"
                    />
                  </div>

                  {/* 4 Option Inputs + Radio Selector */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-slate-400">
                      অপশনসমূহ (৪টি অপশন লিখুন এবং সঠিক উত্তরের পাশের রেডিও বোতাম নির্বাচন করুন):
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => (
                        <div key={optIdx} className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-2.5">
                          <input
                            type="radio"
                            name={`correct-${qIdx}`}
                            checked={q.correctOption === optIdx}
                            onChange={() => handleUpdateQuestion(qIdx, 'correctOption', optIdx)}
                            className="w-4 h-4 accent-amber-400 cursor-pointer"
                          />
                          <span className="text-xs font-bold text-slate-400 w-5">
                            {['ক', 'খ', 'গ', 'ঘ'][optIdx]}.
                          </span>
                          <input
                            type="text"
                            placeholder={`অপশন ${optIdx + 1}`}
                            value={opt}
                            onChange={e => handleUpdateOption(qIdx, optIdx, e.target.value)}
                            className="w-full bg-transparent text-white text-sm focus:outline-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explanation Input */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">ব্যাখ্যা / হিন্ট (Explanation):</label>
                    <input
                      type="text"
                      placeholder="সঠিক উত্তরের সংক্ষিপ্ত ব্যাখ্যা লিখুন (ঐচ্ছিক)"
                      value={q.explanation || ''}
                      onChange={e => handleUpdateQuestion(qIdx, 'explanation', e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-white text-xs focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Save Button */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2 text-base cursor-pointer"
              >
                <Save className="w-5 h-5" />
                <span>{editingQuizId ? 'পরিবর্তন সংরক্ষণ করুন' : 'ডাটাবেসে কুইজটি সেভ ও প্রকাশ করুন'}</span>
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: MANAGE ALL QUIZZES */}
        {activeTab === 'list' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
            <h2 className="text-xl font-bold text-amber-400 border-b border-slate-800 pb-3 flex items-center justify-between">
              <span>সংরক্ষিত কুইজসমূহ ({quizzes.length} টি)</span>
              <button
                onClick={handleResetFactory}
                className="text-xs bg-rose-950/80 text-rose-300 border border-rose-800 px-3 py-1.5 rounded-lg hover:bg-rose-900 transition flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>ডিফল্ট ডাটা রিসেট</span>
              </button>
            </h2>

            <div className="space-y-3">
              {quizzes.map(q => (
                <div
                  key={q.id}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="bg-teal-950 text-teal-300 px-2.5 py-0.5 rounded border border-teal-800 font-bold">
                        {q.className}
                      </span>
                      <span className="bg-amber-950 text-amber-300 px-2.5 py-0.5 rounded border border-amber-800 font-bold">
                        {q.subjectName}
                      </span>
                    </div>

                    <h3 className="font-bold text-white text-base">
                      {q.chapterTitle}
                    </h3>

                    <p className="text-slate-400 text-xs">
                      প্রশ্ন সংখ্যা: {q.questions.length} টি • সময়: {q.timeLimitMinutes || 10} মিনিট
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEditQuiz(q)}
                      className="bg-slate-800 hover:bg-slate-700 text-amber-400 p-2.5 rounded-lg text-xs font-semibold transition border border-slate-700 cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeleteQuiz(q.id)}
                      className="bg-rose-950 hover:bg-rose-900 text-rose-300 p-2.5 rounded-lg text-xs font-semibold transition border border-rose-800 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: JSON IMPORT / EXPORT */}
        {activeTab === 'json' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5 shadow-xl">
            <h2 className="text-xl font-bold text-amber-400 border-b border-slate-800 pb-3">
              JSON বাল্ক ইমপোর্ট ও ব্যাকআপ (Backup / Restore)
            </h2>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-400">
                JSON ডাটা পেস্ট করুন (Paste Quiz Object or Array of Quizzes):
              </label>
              <textarea
                rows={8}
                value={jsonText}
                onChange={e => setJsonText(e.target.value)}
                placeholder='[ { "id": "custom-1", "classId": "class-9", "className": "ক্লাস ৯", ... } ]'
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs font-mono text-teal-300 focus:outline-none"
              />

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleImportJSON}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-sm transition cursor-pointer flex items-center gap-1.5"
                >
                  <Upload className="w-4 h-4" />
                  <span>JSON ইমপোর্ট করুন</span>
                </button>

                <button
                  onClick={handleExportJSON}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm transition cursor-pointer flex items-center gap-1.5 border border-slate-700"
                >
                  <Download className="w-4 h-4" />
                  <span>বর্তমান কুইজসমূহ ডাউনলোড করুন (Export JSON)</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ADMIN SECURITY SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl max-w-xl">
            <h2 className="text-xl font-bold text-amber-400 border-b border-slate-800 pb-3 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span>অ্যাডমিন লগইন ইউজারনেম ও সিকিউরিটি পিন পরিবর্তন</span>
            </h2>

            <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <div>বর্তমান ইউজারনেম: <code className="text-amber-400 font-bold">{storageService.getAdminCredentials().username}</code></div>
              <div>বর্তমান সিকিউরিটি পিন: <code className="text-amber-400 font-bold">{storageService.getAdminCredentials().pin}</code></div>
            </div>

            {credMessage && (
              <div className="bg-emerald-950/80 border border-emerald-600 text-emerald-200 p-3.5 rounded-xl text-sm font-bold flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{credMessage}</span>
              </div>
            )}

            <form onSubmit={handleChangeCredentials} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  নতুন ইউজারনেম (New Username):
                </label>
                <input
                  type="text"
                  value={newUsername}
                  onChange={e => setNewUsername(e.target.value)}
                  placeholder="যেমন: admin_wb"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  নতুন সিকিউরিটি পিন / পাসওয়ার্ড (New PIN):
                </label>
                <input
                  type="text"
                  value={newPin}
                  onChange={e => setNewPin(e.target.value)}
                  placeholder="যেমন: 987654"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>

              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition cursor-pointer flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>পরিবর্তন সংরক্ষণ করুন</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
