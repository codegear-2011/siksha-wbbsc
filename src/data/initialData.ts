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
{
  "id": "quiz-class9-geo-ch2",
  "classId": "class-9",
  "className": "ক্লাস ৯",
  "subjectId": "geography",
  "subjectName": "ভূগোল",
  "chapterNumber": "২",
  "chapterTitle": "২. আবহবিকার, ক্ষয়ীভবন ও মৃত্তিকা সংরক্ষণ",
  "createdAt": "2026-07-27T05:19:45.865Z",
  "timeLimitMinutes": 10,
  "questions": [
    {
      "id": "q-c9-g2-1",
      "text": "যান্ত্রিক আবহবিকারের ফলে শিলায় ঘটে—",
      "options": [
        "ভৌত পরিবর্তন",
        "রাসায়নিক পরিবর্তন",
        "উভয় প্রকার পরিবর্তন",
        "কোনো পরিবর্তন হয় না"
      ],
      "correctOption": 0,
      "explanation": "যান্ত্রিক আবহবিকারে শিলার কেবল ভৌত পরিবর্তন ঘটে, রাসায়নিক গঠন অপরিবর্তিত থাকে।"
    },
    {
      "id": "q-c9-g2-2",
      "text": "শিলার শুধুমাত্র আকৃতিগত পরিবর্তন যে আবহবিকারের ফলে ঘটে, সেটি হল—",
      "options": [
        "জৈবিক আবহবিকার",
        "যান্ত্রিক আবহবিকার",
        "জৈব-যান্ত্রিক আবহবিকার",
        "রাসায়নিক আবহবিকার"
      ],
      "correctOption": 1,
      "explanation": "যান্ত্রিক আবহবিকারে শিলার আকার পরিবর্তিত হয়, রাসায়নিক গঠন নয়।"
    },
    {
      "id": "q-c9-g2-3",
      "text": "বৃষ্টিবহুল ক্রান্তীয় অঞ্চলে দেখা যায়—",
      "options": [
        "যান্ত্রিক আবহবিকার",
        "রাসায়নিক আবহবিকার",
        "জৈবিক আবহবিকার",
        "কোনোটিই নয়"
      ],
      "correctOption": 1,
      "explanation": "উষ্ণ ও আর্দ্র জলবায়ু রাসায়নিক আবহবিকারকে ত্বরান্বিত করে।"
    },
    {
      "id": "q-c9-g2-4",
      "text": "বিষমসত্ত্ব শিলায় যে ধরনের আবহবিকার ঘটে তা হল—",
      "options": [
        "বিচূর্ণন",
        "বোল্ডার ভাঙন",
        "শল্কমোচন",
        "ক্ষুদ্রকণা বিশরণ"
      ],
      "correctOption": 3,
      "explanation": "বিষমসত্ত্ব শিলায় বিভিন্ন খনিজের অসম প্রসারণ-সংকোচনের ফলে ক্ষুদ্রকণা বিশরণ ঘটে।"
    },
    {
      "id": "q-c9-g2-5",
      "text": "মৃত্তিকাক্ষয়ের একটি মনুষ্যসৃষ্ট কারণ হল—",
      "options": [
        "জলপ্রবাহ",
        "কৃষিকার্য",
        "শিকড় বৃদ্ধি",
        "মাটিতে গর্ত সৃষ্টি"
      ],
      "correctOption": 1,
      "explanation": "অবৈজ্ঞানিক কৃষিকার্য মৃত্তিকা ক্ষয়ের অন্যতম মানবসৃষ্ট কারণ।"
    },
    {
      "id": "q-c9-g2-6",
      "text": "উষ্ণ মরুভূমিতে যান্ত্রিক আবহবিকারের প্রধান প্রক্রিয়াটি হল—",
      "options": [
        "লবণ কেলাস গঠন",
        "তুষার খণ্ডীকরণ",
        "ক্ষুদ্রকণা বিশরণ",
        "প্রস্তরচাঁই বিচ্ছিন্নকরণ"
      ],
      "correctOption": 2,
      "explanation": "উষ্ণ মরুভূমিতে দিন-রাতের তাপমাত্রার পার্থক্যের ফলে ক্ষুদ্রকণা বিশরণ বেশি ঘটে।"
    },
    {
      "id": "q-c9-g2-7",
      "text": "পাহাড়ি অঞ্চলে শিলাচূর্ণের চলনকে বলে—",
      "options": [
        "যান্ত্রিক আবহবিকার",
        "রাসায়নিক আবহবিকার",
        "পুঞ্জিত ক্ষয়",
        "নগ্নীভবন"
      ],
      "correctOption": 2,
      "explanation": "মাধ্যাকর্ষণের প্রভাবে পাহাড়ি ঢালে শিলাচূর্ণের চলনকে পুঞ্জিত ক্ষয় বলে।"
    },
    {
      "id": "q-c9-g2-8",
      "text": "শিলামধ্যস্থ খনিজের সঙ্গে অক্সিজেনের রাসায়নিক বিক্রিয়ায় যে আবহবিকার সংঘটিত হয়, তা হল—",
      "options": [
        "অঙ্গারযোজন",
        "আর্দ্রবিশ্লেষণ",
        "জলযোজন",
        "জারণ"
      ],
      "correctOption": 3,
      "explanation": "অক্সিজেনের সঙ্গে বিক্রিয়ার ফলে জারণ প্রক্রিয়া সংঘটিত হয়।"
    },
    {
      "id": "q-c9-g2-9",
      "text": "শিলায় মরিচা পড়ে যে প্রক্রিয়ায় তা হল—",
      "options": [
        "জারণ",
        "জলযোজন",
        "আর্দ্রবিশ্লেষণ",
        "অঙ্গারযোজন"
      ],
      "correctOption": 0,
      "explanation": "লোহাযুক্ত খনিজের জারণের ফলে মরিচা পড়ে।"
    },
    {
      "id": "q-c9-g2-10",
      "text": "ক্ষয়ীভবন একটি—",
      "options": [
        "স্থিতিশীল প্রক্রিয়া",
        "গতিশীল প্রক্রিয়া",
        "নিরপেক্ষ প্রক্রিয়া",
        "কোনটিই নয়"
      ],
      "correctOption": 1,
      "explanation": "ক্ষয়ীভবন একটি গতিশীল ভূ-প্রক্রিয়া।"
    },
    {
      "id": "q-c9-g2-11",
      "text": "কাস্ট ভূমিরূপ যে আবহবিকারের ফলে ঘটে—",
      "options": [
        "জারণ",
        "অঙ্গারযোজন",
        "আর্দ্র-বিশ্লেষণ",
        "জৈবিক আবহবিকার"
      ],
      "correctOption": 1,
      "explanation": "কার্বোনেশন বা অঙ্গারযোজনের ফলে কাস্ট ভূমিরূপ সৃষ্টি হয়।"
    },
    {
      "id": "q-c9-g2-12",
      "text": "চুনাপাথরযুক্ত অঞ্চলে বেশি দেখা যায়—",
      "options": [
        "কার্বোনেশন",
        "হাইড্রেশন",
        "হাইড্রোলিসিস",
        "অক্সিডেশন"
      ],
      "correctOption": 0,
      "explanation": "চুনাপাথর কার্বোনেশন প্রক্রিয়ায় সহজে দ্রবীভূত হয়।"
    },
    {
      "id": "q-c9-g2-13",
      "text": "মরুভূমি অঞ্চলে মৃত্তিকা ক্ষয় হয়—",
      "options": [
        "নদীর দ্বারা",
        "হিমবাহের দ্বারা",
        "বায়ুপ্রবাহের দ্বারা",
        "মানুষের দ্বারা"
      ],
      "correctOption": 2,
      "explanation": "মরুভূমিতে বায়ুই প্রধান ক্ষয়কারী শক্তি।"
    },
    {
      "id": "q-c9-g2-14",
      "text": "গ্রানাইট টর সৃষ্টি হয়—",
      "options": [
        "শল্কমোচন",
        "কার্বোনেশানে",
        "জলযোজনে",
        "কোনটিই নয়"
      ],
      "correctOption": 0,
      "explanation": "শল্কমোচন প্রক্রিয়ার মাধ্যমে গ্রানাইট টর সৃষ্টি হয়।"
    },
    {
      "id": "q-c9-g2-15",
      "text": "উদ্ভিদহীন অতি ঢালু ভূভাগে গালি ক্রমশ গভীর হয়ে যে ভয়াবহ ক্ষয় হয়, তাকে বলে—",
      "options": [
        "পাতক্ষয়",
        "র‍্যাভাইন ক্ষয়",
        "নালি ক্ষয়",
        "খাতক্ষয়"
      ],
      "correctOption": 1,
      "explanation": "গভীর গালির বিস্তারের ফলে র‍্যাভাইন ক্ষয় সৃষ্টি হয়।"
    },
    {
      "id": "q-c9-g2-16",
      "text": "শস্যের শিকড় দ্বারা জমি আচ্ছাদন করে মৃত্তিকা সংরক্ষণ করার পদ্ধতিকে কী বলে?",
      "options": [
        "মালচিং",
        "টেরেসিং",
        "বাঁধ নির্মাণ",
        "বনসৃজন"
      ],
      "correctOption": 0,
      "explanation": "মালচিং পদ্ধতিতে মাটির উপরিভাগ আচ্ছাদিত রেখে ক্ষয় রোধ করা হয়।"
    },
    {
      "id": "q-c9-g2-17",
      "text": "কোন ধরনের আবহবিকারের ফলে মরুভূমিতে বিকেলের দিকে গুলি ছোড়ার মতো শব্দ শোনা যায়?",
      "options": [
        "জারণ",
        "ক্ষুদ্রকণা বিশরণ",
        "কার্বোনেশন",
        "জলযোজন"
      ],
      "correctOption": 1,
      "explanation": "তাপমাত্রার তারতম্যের ফলে ক্ষুদ্রকণা বিশরণে এ ধরনের শব্দ শোনা যায়।"
    },
    {
      "id": "q-c9-g2-18",
      "text": "যে প্রক্রিয়ার মাধ্যমে হিউমাস তৈরি হয় তাকে কী বলে?",
      "options": [
        "হিউমিফিকেশন",
        "জারণ",
        "কার্বোনেশন",
        "হাইড্রোলিসিস"
      ],
      "correctOption": 0,
      "explanation": "জৈব পদার্থ পচে হিউমাসে পরিণত হওয়ার প্রক্রিয়াকে হিউমিফিকেশন বলে।"
    },
    {
      "id": "q-c9-g2-19",
      "text": "পর্বতের ঢালে আবহবিকারের ফলে সৃষ্ট শঙ্কু আকৃতির শিলাচূর্ণকে কী বলে?",
      "options": [
        "ডেল্টা",
        "ট্যালাস",
        "মোরেইন",
        "টর"
      ],
      "correctOption": 1,
      "explanation": "পর্বতের পাদদেশে শঙ্কু আকৃতির শিলাচূর্ণের সঞ্চয়কে ট্যালাস বলে।"
    },
    {
      "id": "q-c9-g2-20",
      "text": "জারণ প্রক্রিয়ায় কোন গ্যাসীয় উপাদান প্রয়োজন হয়?",
      "options": [
        "নাইট্রোজেন",
        "কার্বন ডাই-অক্সাইড",
        "অক্সিজেন",
        "হাইড্রোজেন"
      ],
      "correctOption": 2,
      "explanation": "জারণ প্রক্রিয়ায় অক্সিজেন অপরিহার্য।"
    },
    {
      "id": "q-c9-g2-21",
      "text": "থর মরুভূমিতে আবহবিকারের কোন প্রক্রিয়া অধিক কার্যকরী?",
      "options": [
        "জারণ",
        "ক্ষুদ্রকণা বিশরণ",
        "কার্বোনেশন",
        "জলযোজন"
      ],
      "correctOption": 1,
      "explanation": "থর মরুভূমিতে ক্ষুদ্রকণা বিশরণই প্রধান যান্ত্রিক আবহবিকার।"
    },
    {
      "id": "q-c9-g2-22",
      "text": "আবহবিকারের গুরুত্বপূর্ণ ফল হল ______ সৃষ্টি।",
      "options": [
        "নদী",
        "মৃত্তিকা",
        "হ্রদ",
        "বালিয়াড়ি"
      ],
      "correctOption": 1,
      "explanation": "আবহবিকারের ফলে মৃত্তিকা সৃষ্টি হয়।"
    },
    {
      "id": "q-c9-g2-23",
      "text": "নিরক্ষীয় অঞ্চলে ______ আবহবিকার বেশি দেখা যায়।",
      "options": [
        "যান্ত্রিক",
        "জৈবিক",
        "রাসায়নিক",
        "কোনোটিই নয়"
      ],
      "correctOption": 2,
      "explanation": "উষ্ণ ও আর্দ্র নিরক্ষীয় অঞ্চলে রাসায়নিক আবহবিকার বেশি হয়।"
    },
    {
      "id": "q-c9-g2-24",
      "text": "জল তুষার কেলাসে পরিণত হলে আয়তনে ______ যায়।",
      "options": [
        "হ্রাস পায়",
        "বৃদ্ধি পায়",
        "অপরিবর্তিত থাকে",
        "বাষ্পীভূত হয়"
      ],
      "correctOption": 1,
      "explanation": "জল বরফে পরিণত হলে তার আয়তন বৃদ্ধি পায়, ফলে তুষার খণ্ডীকরণ ঘটে।"
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
