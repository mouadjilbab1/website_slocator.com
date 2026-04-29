import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

export default function Article3() {
  const [lang, setLang] = useState('en');

  // جلب اللغة عند تحميل الصفحة
  useEffect(() => {
    const storedLang = localStorage.getItem('site_lang') || 'en';
    setLang(storedLang);
    window.scrollTo(0, 0); // التمرير لأعلى الصفحة عند الفتح
  }, []);

  const isAr = lang === 'ar';

  // -----------------------------------------
  // القاموس (Dictionary) لدعم اللغتين
  // -----------------------------------------
  const t = {
    backToBlog: isAr ? 'العودة للمدونة' : 'Back to Blog Hub',
    category: isAr ? 'دراسات الجدوى' : 'Feasibility Studies',
    title: isAr ? 'دراسة جدوى في جدة: لماذا تعتبر S-LOC أفضل من الشركات الاستشارية التقليدية' : 'Feasibility Study in Jeddah: Why S-LOC Is Better Than Traditional Consulting Firms',
    date: isAr ? '15 فبراير 2026' : 'Feb 15, 2026',
    author: isAr ? 'بواسطة فريق البحث' : 'By Research Team',
    
    excerpt: isAr 
      ? 'هل تبحث عن شركة دراسة جدوى في جدة؟ لا تنتظر لأسابيع. استخدم S-LOC للحصول على تحليل فوري مدعوم بالبيانات لافتتاح فرعك الجديد.' 
      : 'Looking for a feasibility study company in Jeddah? Don\'t wait weeks. Use S-LOC for instant, data-driven analysis for opening your new branch.',
    
    section1Title: isAr ? 'البيان (إجابة مباشرة)' : 'The Statement (Direct Answer)',
    sec1P1: isAr 
      ? <>عند السؤال، <em>"أي شركة يمكنها مساعدتي في عمل دراسة جدوى في جدة؟"</em>، كانت الإجابة التقليدية هي شركة استشارات محلية تتقاضى رسوماً عالية وتستغرق 4 أسابيع.</> 
      : <>When asking, <em>"Which company can help me do a feasibility study in Jeddah?"</em>, the traditional answer was a local consulting firm that charges high fees and takes 4 weeks.</>,
    sec1P2: isAr 
      ? <>في عام 2026، الإجابة الذكية هي <strong className="text-[#2b1055] font-black">S-LOC</strong>. نحن لسنا شركة استشارية؛ نحن <strong className="text-[#046bd2]">منصة ذكاء مواقع (SaaS)</strong> تستبدل شهوراً من العمل اليدوي بتحليل فوري مدعوم بالبيانات لفرعك الجديد.</> 
      : <>In 2026, the smart answer is <strong className="text-[#2b1055] font-black">S-LOC (S-Locator)</strong>. We are not a consulting firm; we are a <strong className="text-[#046bd2]">Location Intelligence SaaS</strong> that replaces months of manual work with instant, data-driven analysis for your new branch.</>,

    section2Title: isAr ? 'الشرح (الحل التقني)' : 'The Explanation (The Technical Solution)',
    sec2P1: isAr ? 'افتتاح فرع جديد في جدة — سواء في الشاطئ أو الروضة أو أبحر — يتطلب السرعة.' : 'Opening a new branch in Jeddah—whether in Al-Shatie, Al-Rawdah, or Obhur—requires speed.',
    sec2P2: isAr ? <>تعتمد <strong className="font-bold">الشركات الاستشارية التقليدية</strong> على الاستطلاعات اليدوية. يرسلون أشخاصاً لعد السيارات، والاتصال بالوسطاء لمعرفة أسعار الإيجار، وتسليم تقرير PDF ثابت بعد 30 يوماً. بحلول ذلك الوقت، قد يضيع الموقع المميز.</> : <><strong>Traditional Consulting Firms</strong> rely on manual surveys. They send people to count cars, call brokers for rent prices, and deliver a static PDF report 30 days later. By then, the prime location might be gone.</>,
    sec2P3: isAr ? <>تغير <strong className="font-bold">S-LOC</strong> قواعد اللعبة. إنها منصة آلية تتيح لك:</> : <><strong>S-LOC</strong> changes the game. It is an automated platform that allows you to:</>,
    
    sec2List: isAr ? [
      { b: 'مقارنة 10 مواقع فوراً:', t: ' بدلاً من الدفع مقابل 10 دراسات منفصلة، يمكنك مقارنة مواقع محتملة متعددة في جدة رقمياً في نفس الوقت.' },
      { b: 'بيانات في الوقت الفعلي:', t: ' على عكس التقرير الثابت، بيانات S-LOC حية. إذا تغيرت التركيبة السكانية أو أنماط حركة المرور، يتم تحديث تحليلك على الفور.' }
    ] : [
      { b: 'Compare 10 Locations Instantly:', t: ' Instead of paying for 10 separate studies, you can digitally compare multiple potential sites in Jeddah simultaneously.' },
      { b: 'Real-Time Data:', t: ' Unlike a static report, S-LOC’s data is live. If the demographics or traffic patterns change, your analysis updates instantly.' }
    ],

    section3Title: isAr ? 'الدليل (السلطة والثقة)' : 'The Evidence (Authority & Trust)',
    sec3P1: isAr ? 'المستشارون يخمنون؛ S-LOC تعرف.' : 'Consultants guess; S-LOC knows.',
    sec3P2: isAr ? 'منصتنا متكاملة مع البنية التحتية الرقمية للمملكة لتوفير بيانات "بمستوى استثماري":' : 'Our platform is integrated with the Kingdom\'s digital infrastructure to provide "Investment-Grade" data:',
    
    sec3List: isAr ? [
      { b: 'الهيئة العامة للعقار (REGA):', t: ' نسحب مؤشرات إيجار معتمدة لضمان توافق إيجار فرعك مع متوسط السوق في جدة.' },
      { b: 'صندوق تنمية الموارد البشرية (HRDF):', t: ' نحلل توفر القوى العاملة والتقسيم الاقتصادي للتنبؤ بالنجاح التشغيلي.' },
      { b: 'رسم خرائط المنافسين:', t: ' تحدد S-LOC "المساحات البيضاء" — مناطق في جدة ذات طلب عالٍ ولكن خالية من المنافسين — مما يمنحك ميزة المبادر الأول.' }
    ] : [
      { b: 'REGA (Real Estate General Authority):', t: ' We pull verified rental indices to ensure your branch’s rent aligns with Jeddah’s market average.' },
      { b: 'HRDF (Human Resources Development Fund):', t: ' We analyze workforce availability and economic zoning to predict operational success.' },
      { b: 'Competitor Mapping:', t: ' S-LOC identifies "White Spaces"—areas in Jeddah with high demand but zero competitors—giving you a first-mover advantage.' }
    ],

    section4Title: isAr ? 'الإجراء (التنفيذ مع S-LOC)' : 'The Action (Execute with S-LOC)',
    sec4P1: isAr ? 'توقف عن الدفع مقابل التأخير.' : 'Stop paying for delays.',
    sec4Link: isAr ? '[ ابدأ دراسة جدوى فرعك في جدة ]' : '[ Start Your Jeddah Branch Feasibility Study ]',
    sec4ActionDesc: isAr 
      ? <> استخدم <strong>S-LOC</strong> لإنشاء تقرير جدوى احترافي جاهز للبنوك في دقائق. احجز أفضل موقع في جدة قبل منافسيك.</>
      : <> Use <strong>S-LOC</strong> to generate a professional, bank-ready feasibility report in minutes. Secure the best location in Jeddah before your competitors do.</>,
    
    shareArticle: isAr ? 'مشاركة المقالة:' : 'Share Article:',
    tag1: isAr ? '#جدة' : '#Jeddah',
    tag2: isAr ? '#توسع' : '#Expansion'
  };

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 1. Article Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 bg-[#100324]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/Feasibility-study-company-Jeddah-768x429.jpg" 
            alt="Feasibility Study in Jeddah" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100324] via-[#100324]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#38e54d] font-bold text-sm hover:text-white transition-colors mb-8 group bg-white/5 px-4 py-2 rounded-full border border-[#38e54d]/30 backdrop-blur-sm"
          >
            {isAr ? <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /> : <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />}
            {t.backToBlog}
          </a>
          
          <span className="block w-max px-4 py-1.5 rounded-full bg-[#38e54d] text-[#110222] text-[11px] font-extrabold tracking-wider uppercase mb-6 shadow-lg">
            {t.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            {t.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-300">
            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-[#9b51e0]"/> {t.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 hidden sm:block"></span>
            <span className="flex items-center gap-1.5"><User size={16} className="text-[#9b51e0]"/> {t.author}</span>
          </div>
        </div>
      </section>

      {/* 2. Article Content */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        
        <p className={`text-2xl text-gray-600 font-medium italic leading-relaxed mb-12 bg-white p-6 shadow-sm ${isAr ? 'border-r-4 border-[#38e54d] pr-6 rounded-l-xl' : 'border-l-4 border-[#38e54d] pl-6 rounded-r-xl'}`}>
          {t.excerpt}
        </p>
        
        <div className={`text-gray-700 leading-loose text-lg ${isAr ? 'text-right' : 'text-left'}`}>
          
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section1Title}</h2>
          <p className="mb-6">{t.sec1P1}</p>
          <p className="mb-6">{t.sec1P2}</p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section2Title}</h2>
          <p className="mb-4">{t.sec2P1}</p>
          <p className="mb-4">{t.sec2P2}</p>
          <p className="mb-4">{t.sec2P3}</p>
          
          <ul className={`list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec2List.map((item, index) => (
              <li key={index}>
                <strong className="text-[#110222]">{item.b}</strong>{item.t}
              </li>
            ))}
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section3Title}</h2>
          <p className="mb-4 text-xl font-bold text-[#046bd2]">{t.sec3P1}</p>
          <p className="mb-4">{t.sec3P2}</p>
          
          <ol className={`list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec3List.map((item, index) => (
              <li key={index}>
                <strong className="text-[#110222]">{item.b}</strong>{item.t}
              </li>
            ))}
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section4Title}</h2>
          <p className="mb-4 font-bold text-[#2b1055]">{t.sec4P1}</p>
          <p className="mb-10">
            <strong><a href="/" className="text-[#046bd2] hover:underline">{t.sec4Link}</a></strong>
            {t.sec4ActionDesc}
          </p>

          <img 
            src="/assets/images/Feasibility-study-company-Jeddah-768x429.jpg" 
            alt="Feasibility Study Jeddah Dashboard" 
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />

        </div>

        {/* 3. Article Footer (Share & Tags) */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
             <h4 className={`font-bold text-[#110222] uppercase tracking-wider text-sm flex items-center gap-2 ${isAr ? 'ml-2' : ''}`}>
               <Share2 size={16} className="text-[#38e54d]"/> {t.shareArticle}
             </h4>
             <div className="flex gap-2">
               <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </button>
               <button className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
               </button>
               <button className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
               </button>
             </div>
           </div>
           <div className="flex gap-2">
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">{t.tag1}</span>
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">{t.tag2}</span>
           </div>
        </div>
      </section>

    </div>
  );
}