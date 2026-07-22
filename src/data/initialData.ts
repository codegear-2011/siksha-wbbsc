import { ClassItem, Subject, Quiz } from '../types';

export const INITIAL_CLASSES: ClassItem[] = [
  {
    id: 'class-5',
    number: 5,
    name: 'ক্লাস ৫',
    titlePrefix: '১. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-blue-50/80 hover:bg-blue-100/80',
    borderColor: 'border-blue-300',
    textColor: 'text-blue-700',
    badgeColor: 'bg-blue-600'
  },
  {
    id: 'class-6',
    number: 6,
    name: 'ক্লাস ৬',
    titlePrefix: '২. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-emerald-50/80 hover:bg-emerald-100/80',
    borderColor: 'border-emerald-300',
    textColor: 'text-emerald-700',
    badgeColor: 'bg-emerald-600'
  },
  {
    id: 'class-7',
    number: 7,
    name: 'ক্লাস ৭',
    titlePrefix: '৩. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-purple-50/80 hover:bg-purple-100/80',
    borderColor: 'border-purple-300',
    textColor: 'text-purple-700',
    badgeColor: 'bg-purple-600'
  },
  {
    id: 'class-8',
    number: 8,
    name: 'ক্লাস ৮',
    titlePrefix: '৪. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-amber-50/80 hover:bg-amber-100/80',
    borderColor: 'border-amber-300',
    textColor: 'text-amber-700',
    badgeColor: 'bg-amber-600'
  },
  {
    id: 'class-9',
    number: 9,
    name: 'ক্লাস ৯',
    titlePrefix: '৫. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-teal-50/80 hover:bg-teal-100/80',
    borderColor: 'border-teal-300',
    textColor: 'text-teal-700',
    badgeColor: 'bg-teal-600'
  },
  {
    id: 'class-10',
    number: 10,
    name: 'ক্লাস ১০ (মাধ্যমিক)',
    titlePrefix: '৬. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-rose-50/80 hover:bg-rose-100/80',
    borderColor: 'border-rose-300',
    textColor: 'text-rose-700',
    badgeColor: 'bg-rose-600'
  },
  {
    id: 'class-11',
    number: 11,
    name: 'ক্লাস ১১',
    titlePrefix: '৭. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-indigo-50/80 hover:bg-indigo-100/80',
    borderColor: 'border-indigo-300',
    textColor: 'text-indigo-700',
    badgeColor: 'bg-indigo-600'
  },
  {
    id: 'class-12',
    number: 12,
    name: 'ক্লাস ১২ (উচ্চ মাধ্যমিক)',
    titlePrefix: '৮. ',
    subtitle: 'অধ্যায়ভিত্তিক মক টেস্ট',
    bgColor: 'bg-violet-50/80 hover:bg-violet-100/80',
    borderColor: 'border-violet-300',
    textColor: 'text-violet-700',
    badgeColor: 'bg-violet-600'
  }
];

export const INITIAL_SUBJECTS: Subject[] = [
  { id: 'bangla', name: 'বাংলা', icon: 'BookOpen' },
  { id: 'history', name: 'ইতিহাস', icon: 'Landmark' },
  { id: 'geography', name: 'ভূগোল', icon: 'Globe' },
  { id: 'science', name: 'বিজ্ঞান / ভৌতবিজ্ঞান', icon: 'Atom' },
  { id: 'life-science', name: 'জীবনবিজ্ঞান', icon: 'Dna' },
  { id: 'math', name: 'গণিত', icon: 'Calculator' },
  { id: 'english', name: 'English', icon: 'Languages' }
];

export const INITIAL_QUIZZES: Quiz[] = [
  // Class 9 - History - Chapter 2 (Exact from Image 2!)
  {
    id: 'quiz-class9-hist-ch2',
    classId: 'class-9',
    className: 'ক্লাস ৯',
    subjectId: 'history',
    subjectName: 'ইতিহাস',
    chapterNumber: '২',
    chapterTitle: '২. ১৭৮৯ খ্রিস্টাব্দের পরবর্তী ইউরোপ (ভিয়েনা সম্মেলন)',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q-c9-h2-1',
        text: 'ভিয়েনা সম্মেলনে মুখ্য চারটি শক্তি ছিল—',
        options: [
          'অস্ট্রিয়া, রাশিয়া, ফ্রান্স ও প্রাশিয়া',
          'অস্ট্রিয়া, ইংল্যান্ড, রাশিয়া ও ফ্রান্স',
          'অস্ট্রিয়া, রাশিয়া, প্রাশিয়া, ইংল্যান্ড',
          'ইতালি, জার্মানি, অস্ট্রিয়া, প্রাশিয়া'
        ],
        correctOption: 2,
        explanation: '১৮১৫ সালের ভিয়েনা সম্মেলনে প্রধান চারটি শক্তিবর্গ (Big Four) ছিল অস্ট্রিয়া, রাশিয়া, প্রাশিয়া এবং ইংল্যান্ড।'
      },
      {
        id: 'q-c9-h2-2',
        text: 'ভিয়েনা সম্মেলনের সভাপতি কে ছিলেন?',
        options: [
          'মেটারনিক',
          'নেপোলিয়ন বোনাপার্ট',
          'দ্বিতীয় উইলিয়াম',
          'ক্যাসলরি'
        ],
        correctOption: 0,
        explanation: '১৮১৫ সালের ভিয়েনা মহাসম্মেলনে অস্ট্রিয়ার চ্যান্সেলর প্রিন্স মেটারনিক সভাপতিত্ব করেন।'
      },
      {
        id: 'q-c9-h2-3',
        text: 'ওয়াটারলুর যুদ্ধ কত খ্রিস্টাব্দে সংঘটিত হয়েছিল?',
        options: [
          '১৮১২ খ্রিস্টাব্দে',
          '১৮১৫ খ্রিস্টাব্দে',
          '১৮২০ খ্রিস্টাব্দে',
          '১৮৪৮ খ্রিস্টাব্দে'
        ],
        correctOption: 1,
        explanation: '১৮১৫ খ্রিস্টাব্দের ১৮ই জুন ওয়াটারলুর যুদ্ধে নেপোলিয়ন বোনাপার্ট চূড়ান্তভাবে পরাজিত হন।'
      },
      {
        id: 'q-c9-h2-4',
        text: '‘ন্যায্য অধিকার নীতি’ অনুযায়ী ফ্রান্সে কোন রাজবংশ পুনরায় প্রতিষ্ঠিত হয়?',
        options: [
          'বুরবোঁ রাজবংশ',
          'রোমানভ রাজবংশ',
          'স্টুয়ার্ট রাজবংশ',
          'হ্যাপিবার্গ রাজবংশ'
        ],
        correctOption: 0,
        explanation: 'ন্যায্য অধিকার নীতি প্রয়োগ করে ফরাসি বিপ্লব পূর্ববর্তী বুরবোঁ রাজবংশকে ফ্রান্সে পুনঃপ্রতিষ্ঠিত করা হয়।'
      },
      {
        id: 'q-c9-h2-5',
        text: 'ইউরোপীয় কনসার্ট বা ‘ইউরোপীয় শক্তি সমবায়’ কবে গঠিত হয়?',
        options: [
          '১৮১৫ খ্রিস্টাব্দে',
          '১৮১৮ খ্রিস্টাব্দে',
          '১৮৩০ খ্রিস্টাব্দে',
          '১৮৪৮ খ্রিস্টাব্দে'
        ],
        correctOption: 0,
        explanation: '১৮১৫ সালে ভিয়েনা সম্মেলনের পর ইউরোপে শান্তি বজায় রাখতে শক্তি সমবায় গঠিত হয়।'
      }
    ]
  },

  // Class 9 - Bangla - Chapter 2 (Exact Chapter Title from Image 2: "২. ধীবর-বৃত্তান্ত")
  {
    id: 'quiz-class9-bangla-ch2',
    classId: 'class-9',
    className: 'ক্লাস ৯',
    subjectId: 'bangla',
    subjectName: 'বাংলা',
    chapterNumber: '২',
    chapterTitle: '২. ধীবর-বৃত্তান্ত',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q-c9-b2-1',
        text: '‘ধীবর-বৃত্তান্ত’ নাট্যাংশের রচয়িতা কে?',
        options: [
          'রবীন্দ্রনাথ ঠাকুর',
          'মহাকবি কালিদাস',
          'মাইকেল মধুসূদন দত্ত',
          'ঈশ্বরচন্দ্র বিদ্যাসাগর'
        ],
        correctOption: 1,
        explanation: '‘ধীবর-বৃত্তান্ত’ নাট্যাংশটি মহাকবি কালিদাসের বিখ্যাত সংস্কৃত নাটক ‘অভিজ্ঞানশকুন্তলম্’-এর অংশ।'
      },
      {
        id: 'q-c9-b2-2',
        text: 'ধীবরের বাড়ি কোথায় ছিল?',
        options: [
          'শক্রাবতারে',
          'হস্তিনাপুরে',
          'কনৌজে',
          'উজ্জয়িনীতে'
        ],
        correctOption: 0,
        explanation: 'ধীবর নিজেই জানিয়েছিল যে সে শক্রাবতারে বাস করে।'
      },
      {
        id: 'q-c9-b2-3',
        text: 'ধীবর যে আংটিটি পেয়েছিল সেটিতে কার নাম খোদিত ছিল?',
        options: [
          'রাজা দুষ্যন্তের',
          'শকুন্তলার',
          'ঋষি দুর্বাসার',
          'রাজরক্ষীর'
        ],
        correctOption: 0,
        explanation: 'আংটিটিতে রাজা দুষ্যন্তের নাম খোদাই করা ছিল, যা তিনি শকুন্তলাকে দিয়েছিলেন।'
      },
      {
        id: 'q-c9-b2-4',
        text: 'আংটিটি পাওয়ার পর ধীবরকে কারা আটক করেছিল?',
        options: [
          'রাজরক্ষীরা',
          'নগররক্ষী ও রাজপ্রহরীরা',
          'রাজামশাই নিজে',
          'গ্রামের অধিবাসীরা'
        ],
        correctOption: 1,
        explanation: 'আংটিটি বিক্রি করতে গেলে ধীবরকে নগররক্ষী শ্যালক ও রক্ষীরা চোর সন্দেহে ধরেছিল।'
      },
      {
        id: 'q-c9-b2-5',
        text: 'রাজা দুষ্যন্ত আংটিটি দেখে কী অনুভূতি প্রকাশ করেছিলেন?',
        options: [
          'তিনি অত্যন্ত ক্রুদ্ধ হয়েছিলেন',
          'তার কোনো প্রিয়জনের কথা মনে পড়ে গিয়েছিল',
          'তিনি ধীবরকে মৃত্যুদণ্ড দেন',
          'তিনি আংটিটি ফেলে দেন'
        ],
        correctOption: 1,
        explanation: 'আংটিটি দেখামাত্রই রাজার শকুন্তলার কথা মনে পড়ে যায় এবং তিনি মুহূর্তের জন্য গম্ভীর হয়ে যান।'
      }
    ]
  },

  // Class 9 - Bangla - Chapter 1
  {
    id: 'quiz-class9-bangla-ch1',
    classId: 'class-9',
    className: 'ক্লাস ৯',
    subjectId: 'bangla',
    subjectName: 'বাংলা',
    chapterNumber: '১',
    chapterTitle: '১. কলিঙ্গদেশে ঝড়-বৃষ্টি',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 8,
    questions: [
      {
        id: 'q-c9-b1-1',
        text: '‘কলিঙ্গদেশে ঝড়-বৃষ্টি’ কাব্যংশটি কার লেখা?',
        options: [
          'কঙ্কনচণ্ডী মুকুন্দ চক্রবর্তী',
          'কৃত্তিভাস ওঝা',
          'ভারতচন্দ্র রায়গুণাকর',
          'কাশীরাম দাস'
        ],
        correctOption: 0,
        explanation: 'এটি কবি মুকুন্দ চক্রবর্তীর ‘চণ্ডীমঙ্গল’ কাব্যের অন্তর্ভুক্ত।'
      },
      {
        id: 'q-c9-b1-2',
        text: 'কলিঙ্গদেশে কত দিন ধরে মেঘের ডাক ও বৃষ্টি চলেছিল?',
        options: [
          'তিন দিন',
          'সাত দিন',
          'পাঁচ দিন',
          'দশ দিন'
        ],
        correctOption: 1,
        explanation: 'কলিঙ্গদেশে নিরন্তর সাত দিন ধরে প্রবল ঝড়-বৃষ্টি হয়েছিল।'
      }
    ]
  },

  // Class 10 (Madhyamik) - History - Chapter 1
  {
    id: 'quiz-class10-hist-ch1',
    classId: 'class-10',
    className: 'ক্লাস ১০ (মাধ্যমিক)',
    subjectId: 'history',
    subjectName: 'ইতিহাস',
    chapterNumber: '১',
    chapterTitle: '১. ইতিহাসের ধারণা (Madhyamik Mock)',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q-c10-h1-1',
        text: '‘ভারতের আধুনিক ইতিহাসের জনক’ কাকে বলা হয়?',
        options: [
          'রাজা রামমোহন রায়',
          'ঈশ্বরচন্দ্র বিদ্যাসাগর',
          'রবীন্দ্রনাথ ঠাকুর',
          'বঙ্কিমচন্দ্র চট্টোপাধ্যায়'
        ],
        correctOption: 0,
        explanation: 'রাজা রামমোহন রায়কে ভারতীয় নবজাগরণ ও আধুনিক ইতিহাসের জনক বলা হয়।'
      },
      {
        id: 'q-c10-h1-2',
        text: '‘বঙ্গদর্শন’ পত্রিকা প্রথম কবে প্রকাশিত হয়?',
        options: [
          '১৮৭২ সালে',
          '১৮৫৮ সালে',
          '১৮৯০ সালে',
          '১৯০৫ সালে'
        ],
        correctOption: 0,
        explanation: '১৮৭২ সালে বঙ্কিমচন্দ্র চট্টোপাধ্যায়ের সম্পাদনায় বঙ্গদর্শন প্রকাশিত হয়।'
      },
      {
        id: 'q-c10-h1-3',
        text: 'ভারতে মোহনবাগান ক্লাব কবে আইএফএ শিল্ড জিতেছিল?',
        options: [
          '১৯১১ সালে',
          '১৯০৫ সালে',
          '১৯২০ সালে',
          '১৯৪৭ সালে'
        ],
        correctOption: 0,
        explanation: '১৯১১ সালে মোহনবাগান ইস্ট ইয়র্কশায়ার রেজিমেন্টকে হারিয়ে প্রথম ভারতীয় দল হিসেবে আইএফএ শিল্ড জেতে।'
      }
    ]
  },

  // Class 10 - Bangla - Chapter 1 (Gyan Chakshu)
  {
    id: 'quiz-class10-bangla-ch1',
    classId: 'class-10',
    className: 'ক্লাস ১০ (মাধ্যমিক)',
    subjectId: 'bangla',
    subjectName: 'বাংলা',
    chapterNumber: '১',
    chapterTitle: '১. জ্ঞানচক্ষু (আশাপূর্ণা দেবী)',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q-c10-b1-1',
        text: '‘জ্ঞানচক্ষু’ গল্পটির লেখিকা কে?',
        options: [
          'আশাপূর্ণা দেবী',
          'মহাশ্বেতা দেবী',
          'লীলা মজুমদার',
          'নবনীতা দেবসেন'
        ],
        correctOption: 0,
        explanation: '‘জ্ঞানচক্ষু’ গল্পটি বিশিষ্ট কথাসাহিত্যিক আশাপূর্ণা দেবীর রচনা।'
      },
      {
        id: 'q-c10-b1-2',
        text: 'তপনের নতুন মেসোমশাই পেশায় কী ছিলেন?',
        options: [
          'অধ্যাপক ও লেখক',
          'ডাক্তার',
          'উকিল',
          'ব্যবসায়ী'
        ],
        correctOption: 0,
        explanation: 'তপনের নতুন মেসোমশাই একজন কলেজের প্রফেসর ও লেখক ছিলেন।'
      },
      {
        id: 'q-c10-b1-3',
        text: 'তপনের লেখা গল্পটি কোন পত্রিকায় প্রকাশিত হয়েছিল?',
        options: [
          'সন্ধ্যাতারা',
          'বঙ্গদর্শন',
          'আনন্দমেলা',
          'শিশুভারতী'
        ],
        correctOption: 0,
        explanation: 'ছোটমেসোর উদ্যোগে তপনের গল্প ‘সন্ধ্যাতারা’ পত্রিকার সূচিপত্রে প্রকাশিত হয়েছিল।'
      }
    ]
  },

  // Class 5 - Science
  {
    id: 'quiz-class5-science-ch1',
    classId: 'class-5',
    className: 'ক্লাস ৫',
    subjectId: 'science',
    subjectName: 'বিজ্ঞান / ভৌতবিজ্ঞান',
    chapterNumber: '১',
    chapterTitle: '১. আমাদের পরিবেশ ও মানবদেহ',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 5,
    questions: [
      {
        id: 'q-c5-s1-1',
        text: 'মানুষের শরীরের সবচেয়ে বড় হাড় কোনটি?',
        options: [
          'ফিমার (উরুর হাড়)',
          'স্টেপিস',
          'রেডিয়াস',
          'প্যাটেলা'
        ],
        correctOption: 0,
        explanation: 'আমাদের উরুর হাড় বা ফিমার হলো মানবদেহের দীর্ঘতম ও শক্তিশালী হাড়।'
      },
      {
        id: 'q-c5-s1-2',
        text: 'চামড়াকে সূর্যের অতিবেগুনি রশ্মি থেকে কে রক্ষা করে?',
        options: [
          'মেলানিন',
          'কেরাটিন',
          'হিমোগ্লোবিন',
          'ক্যালসিয়াম'
        ],
        correctOption: 0,
        explanation: 'মেলানিন ত্বকের রং নির্ধারণ করে এবং অতিবেগুনি রশ্মি থেকে রক্ষা করে।'
      }
    ]
  },

  // Class 6 - History
  {
    id: 'quiz-class6-hist-ch1',
    classId: 'class-6',
    className: 'ক্লাস ৬',
    subjectId: 'history',
    subjectName: 'ইতিহাস',
    chapterNumber: '১',
    chapterTitle: '১. ভারতীয় উপমহাদেশের আদিম মানুষ',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 5,
    questions: [
      {
        id: 'q-c6-h1-1',
        text: 'আদিম মানুষ প্রথম কোন পশুকে পোষ মানিয়েছিল?',
        options: [
          'কুকুর',
          'গরু',
          'ঘোড়া',
          'ছাগল'
        ],
        correctOption: 0,
        explanation: 'আদিম মানুষ শিকার ও সুরক্ষার কাজে ব্যবহারের জন্য প্রথম কুকুরকে পোষ মানায়।'
      }
    ]
  },

  // Class 7 - History
  {
    id: 'quiz-class7-hist-ch1',
    classId: 'class-7',
    className: 'ক্লাস ৭',
    subjectId: 'history',
    subjectName: 'ইতিহাস',
    chapterNumber: '১',
    chapterTitle: '১. ইতিহাসের ধারণা ও ভারত নাম',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 5,
    questions: [
      {
        id: 'q-c7-h1-1',
        text: '‘ইন্ডিয়া’ নামটি প্রথম কারা ব্যবহার করেছিলেন?',
        options: [
          'গ্রিক ও পারসিকরা',
          'মুঘলরা',
          'চীনারা',
          'তুর্কিরা'
        ],
        correctOption: 0,
        explanation: 'সিন্ধু নদকে পারসিকরা ‘হিন্দু’ এবং গ্রিকরা ‘ইন্ডোস’ বলত, যেখান থেকে ইন্ডিয়া শব্দের উৎপত্তি।'
      }
    ]
  },

  // Class 8 - History
  {
    id: 'quiz-class8-hist-ch1',
    classId: 'class-8',
    className: 'ক্লাস ৮',
    subjectId: 'history',
    subjectName: 'ইতিহাস',
    chapterNumber: '১',
    chapterTitle: '১. আঞ্চলিক শক্তির উত্থান (সিরুদ্দৌলা ও ব্রিটিশ)',
    createdAt: new Date().toISOString(),
    timeLimitMinutes: 5,
    questions: [
      {
        id: 'q-c8-h1-1',
        text: 'পলাশীর যুদ্ধ কত খ্রিস্টাব্দে হয়েছিল?',
        options: [
          '১৭৫৭ খ্রিস্টাব্দে',
          '১৭৬৪ খ্রিস্টাব্দে',
          '১৭৫৭ সালের ২৩শে জুন',
          '১৭৬১ খ্রিস্টাব্দে'
        ],
        correctOption: 2,
        explanation: '১৭৫৭ সালের ২৩শে জুন পলাশীর যুদ্ধে সিরাজউদ্দৌলা রবার্ট ক্লাইভের বাহিনীর কাছে পরাজিত হন।'
      }
    ]
  }
];
