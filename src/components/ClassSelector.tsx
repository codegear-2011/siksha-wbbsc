import React from 'react';
import { ClassItem } from '../types';
import { ArrowRight, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

interface ClassSelectorProps {
  classes: ClassItem[];
  onSelectClass: (cls: ClassItem) => void;
  onBackToLanding?: () => void;
}

export const ClassSelector: React.FC<ClassSelectorProps> = ({ classes, onSelectClass, onBackToLanding }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 py-6 space-y-5">
      {/* Top Banner Header Card - Exact Replica of Image 1 */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#21434c] rounded-[28px] overflow-hidden shadow-xl border border-teal-800/40 relative"
      >
        {onBackToLanding && (
          <button
            onClick={onBackToLanding}
            className="absolute top-4 left-4 z-20 text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-900/90 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 border border-teal-600/50 transition cursor-pointer"
          >
            ← প্রথম পাতা
          </button>
        )}

        <div className="p-8 sm:p-10 text-center relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            ক্লাস নির্বাচন করো
          </h1>
          <p className="text-amber-400 font-semibold text-lg sm:text-xl mt-3 tracking-wide flex items-center justify-center gap-2">
            siksha wb মক টেস্ট
          </p>
        </div>
        {/* Yellow Bottom Stripe matching screenshot 1 */}
        <div className="h-2 w-full bg-amber-400"></div>
      </motion.div>

      {/* Class List Cards - Exact Replica of Image 1 */}
      <div className="space-y-3.5 pt-2">
        {classes.map((cls, idx) => (
          <motion.button
            key={cls.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            onClick={() => onSelectClass(cls)}
            className={`w-full text-left p-5 sm:p-6 rounded-[22px] border-2 transition-all shadow-sm flex items-center justify-between group cursor-pointer ${cls.bgColor} ${cls.borderColor}`}
          >
            <div className="space-y-1">
              <h2 className={`text-xl sm:text-2xl font-bold ${cls.textColor} flex items-center gap-2`}>
                <span>{cls.titlePrefix}{cls.name}</span>
              </h2>
              <p className="text-slate-600 font-medium text-sm sm:text-base">
                {cls.subtitle}
              </p>
            </div>

            <div className={`p-2.5 rounded-full ${cls.textColor} group-hover:translate-x-1.5 transition-transform duration-200`}>
              <ArrowRight className="w-6 h-6 stroke-[2.5]" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Footer Info */}
      <div className="text-center pt-6 pb-2 text-slate-400 text-xs sm:text-sm font-medium">
        পশ্চিমবঙ্গ মধ্যশিক্ষা পর্ষদ (WBBSE) ও উচ্চমাধ্যমিক শিক্ষা সংসদ (WBCHSE) পাঠ্যক্রম অনুসারে
      </div>
    </div>
  );
};
