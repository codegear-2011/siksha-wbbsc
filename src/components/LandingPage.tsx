import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, BookOpen, Award, Clock, CheckCircle2, ShieldCheck, Sparkles, 
  GraduationCap, BrainCircuit, Lightbulb, Users, ChevronDown, ChevronUp, 
  HelpCircle, Zap, Compass, Star, Lock
} from 'lucide-react';

interface LandingPageProps {
  onStartQuiz: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const steps = [
    {
      num: '১',
      title: 'কুইজ শুরু করুন',
      desc: '"কুইজ শুরু করি" বাটনে চাপ দিয়ে সরাসরি ক্লাস নির্বাচন পেজে যান।',
      icon: Play,
      color: 'bg-amber-100 text-amber-800 border-amber-300'
    },
    {
      num: '২',
      title: 'শ্রেণি বেছে নিন',
      desc: 'ক্লাস ৫ থেকে ক্লাস ১২ (মাধ্যমিক ও উচ্চ মাধ্যমিক) থেকে আপনার পছন্দ বেছে নিন।',
      icon: GraduationCap,
      color: 'bg-teal-100 text-teal-800 border-teal-300'
    },
    {
      num: '৩',
      title: 'বিষয় ও অধ্যায় বাছাই',
      desc: 'বাংলা, ইতিহাস, ভূগোল, বিজ্ঞান বা গণিতের নির্দিষ্ট অধ্যায় সিলেক্ট করুন।',
      icon: BookOpen,
      color: 'bg-purple-100 text-purple-800 border-purple-300'
    },
    {
      num: '৪',
      title: 'ফলাফল ও ব্যাখ্যা',
      desc: 'টাইমার চলাকালীন প্রশ্নের উত্তর দিন এবং শেষে সাথে সাথে বিস্তারিত ফলাফল দেখুন।',
      icon: Award,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-300'
    }
  ];

  const faqs = [
    {
      q: 'siksha wb প্ল্যাটফর্মে কি সব মক টেস্ট বিনামূল্যে?',
      a: 'হ্যাঁ! এটি সম্পূর্ণ বিনামূল্যে শিক্ষার্থীদের অনলাইন অনুশীলনের জন্য তৈরি করা হয়েছে। কোনো প্রকার ফি বা নিবন্ধনের প্রয়োজন নেই।'
    },
    {
      q: 'এখানে কোন কোন ক্লাসের কুইজ দেওয়া যাবে?',
      a: 'ওয়েবসাইটটিতে ক্লাস ৫, ৬, ৭, ৮, ৯, ১০ (মাধ্যমিক), ১১ এবং ১২ (উচ্চ মাধ্যমিক) এর সিলেবাস অনুযায়ী কুইজ উপলব্ধ।'
    },
    {
      q: 'পরীক্ষার শেষে উত্তর ও ব্যাখ্যা কীভাবে দেখতে পাব?',
      a: 'মক টেস্ট জমা দেওয়া মাত্রই আপনার স্কোরকার্ডের সাথে প্রতিটি ভুল বা সঠিক উত্তরের পাশে সঠিক ব্যাখ্যা প্রদর্শিত হবে।'
    },
    {
      q: 'শিক্ষক বা অ্যাডমিন কীভাবে নতুন কুইজ যুক্ত করবেন?',
      a: 'ওয়েবসাইটের অ্যাডমিন প্যানেলে ইউজারনেম এবং গোপন সিকিউরিটি পিন দিয়ে নিরাপদে প্রবেশ করে যেকোনো নতুন প্রশ্ন বা বিষয় যুক্ত করা যায়।'
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 py-4 sm:py-6 space-y-6 font-['Hind_Siliguri',sans-serif]">
      {/* 1. HERO BANNER HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#21434c] rounded-[32px] p-6 sm:p-12 text-white shadow-2xl relative overflow-hidden border border-teal-800/40 text-center"
      >
        {/* Glow Effects */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-400/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-teal-400/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 space-y-4 max-w-xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/70 border border-teal-500/50 text-amber-300 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>পশ্চিমবঙ্গ শিক্ষা পোর্টালে আপনাকে স্বাগতম</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            siksha wb মক টেস্ট
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-base sm:text-xl leading-relaxed font-medium">
            পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ (WBBSE) ও উচ্চমাধ্যমিক শিক্ষা সংসদ (WBCHSE) এর সিলেবাসভিত্তিক সেরা অনলাইন কুইজ পোর্টাল।
          </p>

          {/* Call to Action Button */}
          <div className="pt-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartQuiz}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xl sm:text-2xl px-8 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-amber-400/25 transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer border-2 border-amber-300 group"
            >
              <span>কুইজ শুরু করি</span>
              <Play className="w-7 h-7 fill-current text-slate-950 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <p className="text-xs sm:text-sm text-teal-200/80 font-medium pt-1">
            ✨ কোন রেজিস্ট্রেশন ছাড়াই সরাসরি মক টেস্ট দিন
          </p>
        </div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500"></div>
      </motion.div>

      {/* 2. STATS OVERVIEW BAR */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center"
      >
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-teal-700">৮ টি</div>
          <div className="text-xs sm:text-sm font-bold text-slate-600">শ্রেণি (Class 5-12)</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-amber-600">সকল</div>
          <div className="text-xs sm:text-sm font-bold text-slate-600">পাঠ্য বিষয়সমূহ</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-purple-700">১০০%</div>
          <div className="text-xs sm:text-sm font-bold text-slate-600">বিনামূল্যে ব্যবহার</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-1">
          <div className="text-2xl sm:text-3xl font-black text-emerald-700">তাৎক্ষণিক</div>
          <div className="text-xs sm:text-sm font-bold text-slate-600">ফলাফল ও স্কোর</div>
        </div>
      </motion.div>

      {/* 3. ABOUT SECTION - WHAT THIS APP DOES */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6"
      >
        <div className="space-y-2 border-b border-slate-100 pb-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <GraduationCap className="w-8 h-8 text-teal-700 shrink-0" />
            <span>এই ওয়েবসাইটে কি কাজ হয়?</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            <strong>siksha wb</strong> হলো পশ্চিমবঙ্গের ছাত্র-ছাত্রীদের পড়াশোনাকে আরও প্রাঞ্জল ও আকর্ষণীয় করে তোলার একটি সম্পূর্ণ ডিজিটাল অনলাইন মক টেস্ট মাধ্যম। এখানে আপনারা আপনাদের ক্লাসের পাঠ্যবইয়ের অধ্যায় অনুযায়ী প্রশ্নের উত্তর অনুশীলন করে নিজেদের পরীক্ষার জন্য তৈরি করতে পারবেন।
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-teal-50/70 border border-teal-200/90 rounded-2xl p-4 sm:p-5 space-y-2 hover:shadow-md transition">
            <div className="flex items-center gap-2.5 text-teal-900 font-bold text-lg">
              <div className="p-2 bg-teal-100 rounded-xl text-teal-800">
                <BookOpen className="w-5 h-5" />
              </div>
              <span>অধ্যায়ভিত্তিক MCQ</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              বাংলা, ইতিহাস, ভূগোল, জীবন বিজ্ঞান, ভৌত বিজ্ঞান ও গণিতের অধ্যায়ভিত্তিক গুরুত্বপূর্ণ বহুনির্বাচনী প্রশ্নাবলী।
            </p>
          </div>

          <div className="bg-amber-50/70 border border-amber-200/90 rounded-2xl p-4 sm:p-5 space-y-2 hover:shadow-md transition">
            <div className="flex items-center gap-2.5 text-amber-900 font-bold text-lg">
              <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
                <Clock className="w-5 h-5" />
              </div>
              <span>সময়ভিত্তিক টাইমার</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              পরীক্ষার পরিবেশ তৈরি করার জন্য নির্দিষ্ট কাউন্টডাউন টাইমার সুবিধা, যাতে সময়ের সদ্ব্যবহার শিখতে পারেন।
            </p>
          </div>

          <div className="bg-purple-50/70 border border-purple-200/90 rounded-2xl p-4 sm:p-5 space-y-2 hover:shadow-md transition">
            <div className="flex items-center gap-2.5 text-purple-900 font-bold text-lg">
              <div className="p-2 bg-purple-100 rounded-xl text-purple-800">
                <Award className="w-5 h-5" />
              </div>
              <span>তাৎক্ষণিক ফলাফল</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              কুইজ শেষ হওয়া মাত্রই কতটি সঠিক ও ভুল হয়েছে তার গ্রাফিক্যাল রিপোর্ট কার্ড এবং শতকরা স্কোর দেখতে পাবেন।
            </p>
          </div>

          <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-2xl p-4 sm:p-5 space-y-2 hover:shadow-md transition">
            <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-lg">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-800">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span>সঠিক উত্তরের বিশ্লেষণ</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ভুল হলে মন খারাপের কিছু নেই! টেস্ট শেষে সঠিক উত্তর এবং তার স্পষ্ট কারণ সাথে সাথে বুঝিয়ে দেওয়া থাকে।
            </p>
          </div>
        </div>

        {/* Available Classes Overview */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-teal-700" />
              উপলব্ধ শ্রেণি সমূহ (Classes Supported)
            </span>
            <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-200">
              ক্লাস ৫ - ১২
            </span>
          </div>

          <div className="flex flex-wrap gap-2 text-xs sm:text-sm font-bold">
            {['ক্লাস ৫', 'ক্লাস ৬', 'ক্লাস ৭', 'ক্লাস ৮', 'ক্লাস ৯', 'ক্লাস ১০ (মাধ্যমিক)', 'ক্লাস ১১', 'ক্লাস ১২'].map((clsName, i) => (
              <span key={i} className="bg-white border border-slate-200 text-slate-800 px-3 py-1.5 rounded-xl shadow-2xs hover:border-teal-500 transition">
                {clsName}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* 4. HOW IT WORKS - 4 STEP GUIDE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="bg-white rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6"
      >
        <div className="border-b border-slate-100 pb-4">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2.5">
            <Zap className="w-7 h-7 text-amber-500" />
            <span>কিভাবে মক টেস্ট দেবেন? (৪টি সহজ ধাপ)</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-1">
            মক টেস্ট দেওয়ার জন্য নিচের ধাপগুলো অনুসরণ করুন:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={idx} className="flex gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 items-start">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border font-extrabold text-lg ${st.color}`}>
                  {st.num}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-base flex items-center gap-1.5">
                    <span>{st.title}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Primary CTA Button */}
        <div className="text-center pt-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStartQuiz}
            className="w-full bg-[#21434c] hover:bg-teal-900 text-white font-extrabold text-lg sm:text-xl py-4 rounded-2xl shadow-lg transition cursor-pointer flex items-center justify-center gap-3 border border-teal-700"
          >
            <span>আপনার শ্রেণি নির্বাচন করতে এখানে চাপ দিন</span>
            <Play className="w-5 h-5 fill-amber-400 text-amber-400" />
          </motion.button>
        </div>
      </motion.div>

      {/* 5. ADMIN / TEACHER NOTICE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-slate-900 text-white rounded-[28px] p-6 sm:p-8 shadow-xl border border-slate-800 space-y-3 relative overflow-hidden"
      >
        <div className="flex items-start gap-3">
          <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl border border-amber-500/30 shrink-0">
            <Lock className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-amber-300">শিক্ষক ও অ্যাডমিন প্যানেল সিকিউরিটি</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              নতুন প্রশ্ন বা বিষয়বস্তু যোগ করার জন্য নিরাপদ অ্যাডমিন ড্যাশবোর্ড সুবিধা বিদ্যমান। অ্যাডমিন প্যানেলে লগইন করার জন্য আপনার নির্দিষ্ট <strong>ইউজারনেম</strong> এবং <strong>সিকিউরিটি পিন</strong> ব্যবহার করুন।
            </p>
          </div>
        </div>
      </motion.div>

      {/* 6. FAQ ACCORDION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-white rounded-[28px] p-6 sm:p-8 shadow-sm border border-slate-200 space-y-4"
      >
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <HelpCircle className="w-6 h-6 text-teal-700" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100/80 font-bold text-slate-800 text-sm sm:text-base flex justify-between items-center gap-2 cursor-pointer transition"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-teal-700 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* FOOTER */}
      <div className="text-center text-slate-400 text-xs sm:text-sm font-medium pt-2 pb-6 space-y-1">
        <div>© siksha wb মক টেস্ট পোর্টাল • সর্বস্বত্ব সংরক্ষিত</div>
        <div className="text-slate-400 text-2xs">পশ্চিমবঙ্গ শিক্ষার্থী সহায়িকা ডিজিটাল প্ল্যাটফর্ম</div>
      </div>
    </div>
  );
};
