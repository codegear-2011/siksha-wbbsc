import React, { useState, useRef } from 'react';
import { QuizResultData } from '../types';
import { Award, Download, Sparkles, CheckCircle2, Loader2, User, FileText, Eye, EyeOff } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { storageService } from '../services/storageService';
import { motion } from 'motion/react';

interface CertificateGeneratorProps {
  result: QuizResultData;
  percentage: number;
  gradeMessage: string;
}

export const CertificateGenerator: React.FC<CertificateGeneratorProps> = ({
  result,
  percentage,
  gradeMessage,
}) => {
  const [studentName, setStudentName] = useState<string>(result.studentName || '');
  const [saveStatus, setSaveStatus] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const certificateRef = useRef<HTMLDivElement>(null);

  const formattedDate = new Date().toLocaleDateString('bn-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const certificateId = useRef(`SWB-${Math.random().toString(36).substring(2, 8).toUpperCase()}`).current;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setStudentName(newName);
    if (newName.trim()) {
      storageService.saveOrUpdateStudentScore(result, newName.trim());
      setSaveStatus('✅ আপনার নাম ও স্কোর ডাটাবেজে সঙ্গে সঙ্গে সংরক্ষিত হয়েছে!');
    } else {
      setSaveStatus('');
    }
  };

  const handleDownloadPdf = async () => {
    if (!certificateRef.current) return;

    try {
      setIsGenerating(true);
      // Wait slightly for DOM styling/fonts to settle
      await new Promise(resolve => setTimeout(resolve, 200));

      const element = certificateRef.current;
      const canvas = await html2canvas(element, {
        scale: 2, // High resolution for clear PDF printing
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 1050,
        height: 742,
      });

      const imgData = canvas.toDataURL('image/png');
      
      // Create PDF in A4 landscape mode (297mm x 210mm)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);

      const safeName = (studentName.trim() || 'student').replace(/[^a-zA-Z0-9\u0980-\u09FF]/g, '_');
      const safeQuizTitle = result.quizTitle.replace(/[^a-zA-Z0-9\u0980-\u09FF]/g, '_');
      pdf.save(`safal_wb_certificate_${safeName}_${safeQuizTitle}.pdf`);
    } catch (error) {
      console.error('Error generating PDF certificate:', error);
      alert('সার্টিফিকেট তৈরি করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।');
    } finally {
      setIsGenerating(false);
    }
  };

  // Rule 1: ১ টা বা তার কম সঠিক জবাব হলে সার্টিফিকেট হবে না
  if (result.correctCount <= 1) {
    return (
      <div className="bg-gradient-to-br from-rose-500/10 via-amber-500/5 to-slate-900/40 border-2 border-rose-500/40 rounded-[24px] p-6 text-white space-y-4 shadow-lg relative overflow-hidden">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-rose-500/20 text-rose-400 border border-rose-500/40 rounded-2xl flex items-center justify-center shrink-0">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>সনদপত্র (Certificate) শর্তাবলি</span>
            </h3>
            <p className="text-xs sm:text-sm text-rose-200 font-medium">
              সার্টিফিকেট অর্জনের জন্য ন্যূনতম মানদণ্ড পূরণ হয়নি
            </p>
          </div>
        </div>
        <div className="bg-slate-900/80 border border-rose-500/30 rounded-xl p-4 text-sm text-slate-200 leading-relaxed space-y-2">
          <p className="font-semibold text-amber-300">
            ⚠️ সার্টিফিকেট পাওয়ার নিয়ম: কুইজে অন্তত ২টি প্রশ্নের সঠিক উত্তর দেওয়া আবশ্যক।
          </p>
          <p className="text-xs text-slate-300 leading-relaxed">
            আপনি এই মক টেস্টে <strong>{result.correctCount}টি</strong> সঠিক উত্তর দিয়েছেন (১টি বা তার কম হলে সার্টিফিকেট তৈরি হয় না)। অনুগ্রহ করে বিষয়বস্তু ভালো করে পড়ে পুনরায় মক টেস্টে অংশগ্রহণ করুন এবং সাফল্য অর্জন করে আপনার সনদপত্রটি ডাউনলোড করুন!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-amber-500/10 via-teal-500/5 to-slate-900/40 border-2 border-amber-400/60 rounded-[24px] p-6 text-white space-y-5 shadow-lg relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-700/60 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-400 text-slate-950 rounded-2xl flex items-center justify-center shadow-md shrink-0">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
              <span>সাফল্যের সনদপত্র (Certificate)</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              আপনার মক টেস্টের ফলাফল ও কৃতিত্বের একটি আকর্ষণীয় PDF সার্টিফিকেট ডাউনলোড করুন
            </p>
          </div>
        </div>

        <button
          onClick={() => setShowPreview(!showPreview)}
          className="self-start sm:self-center bg-slate-800/80 hover:bg-slate-800 text-amber-300 border border-amber-400/40 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
        >
          {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          <span>{showPreview ? 'প্রিভিউ বন্ধ করুন' : 'সার্টিফিকেট প্রিভিউ দেখুন'}</span>
        </button>
      </div>

      {/* Input section for student name */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
          <User className="w-4 h-4 text-amber-400" />
          <span>সার্টিফিকেটের জন্য আপনার নাম লিখুন (নাম দিলে সঙ্গে সঙ্গে ডাটাবেজে স্কোর উঠবে):</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={studentName}
            onChange={handleNameChange}
            placeholder="আপনার পুরো নাম লিখুন (যেমন: রাহুল শর্মা / Rahul Sharma)"
            className="flex-1 bg-slate-900/90 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 font-medium text-base shadow-inner"
          />
          <button
            onClick={handleDownloadPdf}
            disabled={isGenerating}
            className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 disabled:opacity-70 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-amber-400/20 transition flex items-center justify-center gap-2.5 cursor-pointer shrink-0 text-base"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                <span>PDF তৈরি হচ্ছে...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5 text-slate-950 stroke-[2.5]" />
                <span>PDF সার্টিফিকেট ডাউনলোড</span>
              </>
            )}
          </button>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="text-xs text-slate-400 italic">
            * নাম না লিখলে ডিফল্টভাবে "কৃতী শিক্ষার্থী" হিসেবে সনদপত্র তৈরি হবে।
          </p>
          {saveStatus && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1 rounded-lg inline-flex items-center gap-1.5 shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{saveStatus}</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Live On-Screen Preview Modal / Section */}
      {showPreview && (
        <div className="pt-2">
          <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-700/80 overflow-x-auto">
            <div className="text-center text-xs text-amber-400 font-bold mb-2 flex items-center justify-center gap-1">
              <FileText className="w-3.5 h-3.5" />
              <span>সার্টিফিকেটের লাইভ নমুনা (PDF-এ আরও স্পষ্ট ও বড় আকারে ডাউনলোড হবে)</span>
            </div>
            
            {/* Scaled down container for visual preview */}
            <div className="w-[680px] sm:w-[800px] mx-auto bg-white text-slate-900 rounded-xl p-4 shadow-2xl border-4 border-[#21434c] scale-90 sm:scale-100 origin-top">
              <div className="border-2 border-[#d97706] p-5 rounded-lg text-center space-y-3 bg-[#fdfbf7] relative">
                <div className="flex justify-center items-center gap-2 text-[#21434c] font-bold text-xs tracking-widest uppercase">
                  <span>★ পশ্চিমবঙ্গ অনলাইন মক টেস্ট পোর্টাল ★</span>
                </div>
                <h4 className="text-2xl font-black text-[#21434c]">কৃতিত্বের সনদপত্র (CERTIFICATE)</h4>
                <p className="text-xs text-slate-600">এই মর্মে সগৌরবে প্রত্যয়ন করা যাচ্ছে যে,</p>
                <div className="text-xl font-black text-[#d97706] border-b-2 border-[#d97706] inline-block px-6 py-1">
                  {studentName.trim() || 'কৃতী শিক্ষার্থী'}
                </div>
                <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed font-medium">
                  তিনি <strong>{result.className}</strong> এর <strong>{result.subjectName}</strong> বিষয়ের <strong>"{result.quizTitle}"</strong> মক টেস্টে অত্যন্ত সাফল্যের সাথে অংশগ্রহণ করেছেন।
                </p>
                <div className="flex justify-center gap-4 text-xs font-bold text-slate-800 bg-amber-50/80 py-2 px-4 rounded-lg border border-amber-200 inline-flex mx-auto">
                  <span>মোট প্রশ্ন: {result.totalQuestions}</span>
                  <span>•</span>
                  <span className="text-emerald-700">সঠিক: {result.correctCount}</span>
                  <span>•</span>
                  <span className="text-[#21434c]">স্কোর: {percentage}%</span>
                </div>
                <div className="flex justify-between items-end pt-3 text-[11px] text-slate-500 font-semibold border-t border-slate-200 mt-2">
                  <div className="text-left">
                    <div>তারিখ: {formattedDate}</div>
                    <div>আইডি: {certificateId}</div>
                  </div>
                  <div className="w-14 h-14 rounded-full border-2 border-[#d97706] bg-white flex flex-col items-center justify-center text-[8px] font-bold text-[#d97706] shadow-sm">
                    <span>100%</span>
                    <span>VERIFIED</span>
                  </div>
                  <div className="text-right">
                    <div className="font-['Georgia',serif] italic font-bold text-slate-800 text-sm">সফল wb</div>
                    <div className="border-t border-slate-400 pt-0.5">পোর্টাল কর্তৃপক্ষ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OFF-SCREEN HIGH-RESOLUTION CERTIFICATE FOR HTML2CANVAS & JSPDF */}
      <div className="fixed -left-[9999px] top-0 pointer-events-none z-[-1000] overflow-hidden">
        <div
          ref={certificateRef}
          style={{
            width: '1050px',
            height: '742px',
            fontFamily: "'Hind Siliguri', 'Bangla', sans-serif",
          }}
          className="bg-white text-slate-900 p-6 box-border flex flex-col justify-between"
        >
          {/* Outer Border */}
          <div className="border-[14px] border-[#21434c] rounded-[24px] p-4 bg-[#fdfbf7] w-full h-full flex flex-col justify-between box-border relative shadow-2xl">
            {/* Inner Gold Border */}
            <div className="border-[4px] border-[#d97706] rounded-[16px] p-8 w-full h-full flex flex-col justify-between box-border relative">
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-4 border-l-4 border-[#d97706]"></div>
              <div className="absolute top-3 right-3 w-6 h-6 border-t-4 border-r-4 border-[#d97706]"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-4 border-l-4 border-[#d97706]"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-4 border-r-4 border-[#d97706]"></div>

              {/* Header Section */}
              <div className="text-center space-y-2 mt-2">
                <div className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#0d9488] uppercase bg-teal-50 px-5 py-1.5 rounded-full border border-teal-200">
                  <span>★ পশ্চিমবঙ্গ অনলাইন শিক্ষা ও মূল্যায়ন পোর্টাল ★</span>
                </div>
                <div className="flex items-center justify-center gap-3 pt-2">
                  <Award className="w-12 h-12 text-[#d97706]" />
                  <h1 className="text-4xl font-black text-[#21434c] tracking-tight">
                    সফল wb মক টেস্ট পোর্টাল
                  </h1>
                </div>
                <h2 className="text-3xl font-extrabold text-[#d97706] tracking-wide uppercase pt-2">
                  কৃতিত্বের সনদপত্র (CERTIFICATE OF ACHIEVEMENT)
                </h2>
              </div>

              {/* Body Section */}
              <div className="text-center space-y-4 my-auto px-10">
                <p className="text-lg text-slate-600 font-medium">
                  এই মর্মে সগৌরবে ও আনন্দের সাথে প্রত্যয়ন করা যাচ্ছে যে,
                </p>

                <div className="py-2">
                  <span className="text-4xl font-black text-[#21434c] border-b-4 border-[#d97706] px-10 py-2 inline-block">
                    {studentName.trim() || 'কৃতী শিক্ষার্থী'}
                  </span>
                </div>

                <p className="text-xl text-slate-700 leading-relaxed font-semibold max-w-3xl mx-auto pt-2">
                  তিনি <span className="text-[#0d9488] font-bold">{result.className}</span> এর{' '}
                  <span className="text-[#0d9488] font-bold">{result.subjectName}</span> বিষয়ের{' '}
                  <span className="text-[#21434c] font-bold">"{result.quizTitle}"</span> মক টেস্টে অংশগ্রহণ করে নিজের অসাধারণ মেধা ও প্রস্তুতির প্রমাণ রেখেছেন।
                </p>

                {/* Score Summary Box */}
                <div className="bg-white border-2 border-[#21434c]/20 rounded-2xl p-4 max-w-2xl mx-auto shadow-sm grid grid-cols-4 gap-4 mt-4 text-center">
                  <div className="border-r border-slate-200">
                    <span className="block text-xs font-bold text-slate-500 uppercase">মোট প্রশ্ন</span>
                    <span className="text-xl font-extrabold text-[#21434c]">{result.totalQuestions} টি</span>
                  </div>
                  <div className="border-r border-slate-200">
                    <span className="block text-xs font-bold text-slate-500 uppercase">সঠিক উত্তর</span>
                    <span className="text-xl font-extrabold text-emerald-600">{result.correctCount} টি</span>
                  </div>
                  <div className="border-r border-slate-200">
                    <span className="block text-xs font-bold text-slate-500 uppercase">শতকরা স্কোর</span>
                    <span className="text-xl font-extrabold text-[#d97706]">{percentage}%</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase">মূল্যায়ন গ্রেড</span>
                    <span className="text-base font-bold text-teal-700 leading-tight block pt-0.5">
                      {percentage >= 80 ? 'চমৎকার' : percentage >= 50 ? 'উত্তম' : 'সফল'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer Section */}
              <div className="flex items-end justify-between px-6 pb-2 pt-6 border-t-2 border-slate-200/80">
                {/* Left: Date & ID */}
                <div className="text-left space-y-1 text-slate-600 font-semibold text-sm">
                  <div><strong className="text-slate-800">প্রদানের তারিখ (Date):</strong> {formattedDate}</div>
                  <div><strong className="text-slate-800">সনদ আইডি (ID):</strong> <code className="bg-slate-100 px-2 py-0.5 rounded text-xs text-[#21434c] font-mono font-bold">{certificateId}</code></div>
                  <div className="text-xs text-slate-400 font-normal pt-1">ওয়েবসাইট: সফল wb অনলাইন পোর্টাল</div>
                </div>

                {/* Center: Gold Emblem / Badge */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-24 h-24 rounded-full border-[5px] border-[#d97706] bg-gradient-to-br from-amber-100 to-amber-200 flex flex-col items-center justify-center text-center shadow-md relative">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 mb-0.5" />
                    <span className="text-[10px] font-black text-[#21434c] leading-none uppercase">100% Verified</span>
                    <span className="text-[8px] font-bold text-[#d97706] tracking-wider pt-0.5">সফল WB</span>
                  </div>
                </div>

                {/* Right: Signature Line */}
                <div className="text-right flex flex-col items-end">
                  <div className="font-['Georgia',serif] italic font-bold text-2xl text-[#21434c] mb-1 pr-4">
                    সফল wb
                  </div>
                  <div className="border-t-2 border-[#21434c] w-48 pt-1.5 text-center">
                    <div className="font-bold text-slate-800 text-sm">পোর্টাল কর্তৃপক্ষ ও পরিচালক</div>
                    <div className="text-xs text-slate-500">পশ্চিমবঙ্গ অনলাইন মক টেস্ট পোর্টাল</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
