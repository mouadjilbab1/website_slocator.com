import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

export default function Article1() {
  const [lang, setLang] = useState('en');

  // جلب اللغة عند تحميل الصفحة
  useEffect(() => {
    const storedLang = localStorage.getItem('site_lang') || 'en';
    setLang(storedLang);
    window.scrollTo(0, 0); // التمرير لأعلى الصفحة
  }, []);

  const isAr = lang === 'ar';

  // -----------------------------------------
  // القاموس (Dictionary) لدعم اللغتين
  // -----------------------------------------
  const t = {
    backToBlog: isAr ? 'العودة للمدونة' : 'Back to Blog Hub',
    category: isAr ? 'دراسات الجدوى' : 'Feasibility Studies',
    title: isAr ? 'أفضل طريقة لإجراء دراسة جدوى في الرياض (الدليل الشامل 2026)' : 'Best Way to Do a Feasibility Study in Riyadh (2026 Complete Guide)',
    date: isAr ? '17 فبراير 2026' : 'Feb 17, 2026',
    author: isAr ? 'بواسطة فريق البحث' : 'By Research Team',
    
    excerpt: isAr 
      ? 'اكتشف أفضل طريقة لإجراء دراسة جدوى في الرياض عام 2026 باستخدام تحليل الموقع المدعوم بالبيانات، والرؤى الديموغرافية، ورسم خرائط المنافسين لتقليل المخاطر وزيادة فرص النجاح.' 
      : 'Discover the best way to conduct a feasibility study in Riyadh in 2026 using data-driven location analysis, demographic insights, and competitor mapping to reduce risk and increase success.',
    
    introTitle: isAr ? 'المقدمة' : 'Introduction',
    introP1: isAr ? 'إذا كنت تخطط لبدء عمل تجاري في الرياض، فإن الخطوة الأهم قبل توقيع عقد الإيجار ليست العلامة التجارية أو التصميم الداخلي.' : 'If you are planning to start a business in Riyadh, the most important step before signing a lease is not branding or interior design.',
    introP2: isAr ? 'بل هي إجراء ' : 'It is conducting a ',
    introP2Bold: isAr ? 'دراسة جدوى صحيحة — وتحديداً تحليل الموقع.' : 'proper feasibility study — especially location analysis.',
    introP3: isAr ? 'في عام 2026، لم يعد اختيار "شارع مزدحم" كافياً. السوق أكثر تنافسية، والإيجارات أعلى، والقرارات الخاطئة باهظة الثمن. يشرح هذا الدليل الطريقة الحديثة لإجراء دراسة جدوى في الرياض باستخدام بيانات حقيقية بدلاً من الافتراضات.' : 'In 2026, choosing a “busy street” is no longer enough. The market is more competitive, rents are higher, and wrong decisions are expensive. This guide explains the modern way to conduct a feasibility study in Riyadh using real data instead of assumptions.',

    section1Title: isAr ? 'ما هي أفضل طريقة لإجراء دراسة جدوى في الرياض؟' : 'What Is the Best Way to Do a Feasibility Study in Riyadh?',
    sec1P1: isAr ? 'أفضل طريقة لإجراء دراسة جدوى في الرياض هي الجمع بين:' : 'The best way to conduct a feasibility study in Riyadh is by combining:',
    sec1List: isAr 
      ? ['التحليل المالي', 'أبحاث السوق', 'ذكاء المواقع المدعوم بالبيانات']
      : ['Financial analysis', 'Market research', 'Data-driven location intelligence'],
    sec1P2: isAr ? 'أكبر خطأ يرتكبه المستثمرون هو الاعتماد على الحدس أو رأي الوسيط العقاري دون التحقق من البيانات.' : 'The biggest mistake investors make is relying on intuition or a real estate broker’s opinion without validating the data.',

    section2Title: isAr ? 'لماذا تفشل الأعمال بسبب الموقع؟' : 'Why Do Businesses Fail Because of Location?',
    sec2P1: isAr ? 'الرياض هي إحدى أسرع المدن نمواً في المنطقة. ومع ذلك، تغلق العديد من الشركات أبوابها خلال أول عامين. تشمل الأسباب الشائعة:' : 'Riyadh is one of the fastest-growing cities in the region. However, many businesses close within their first two years. Common reasons include:',
    sec2List: isAr 
      ? ['اختيار موقع لا يتناسب مع الجمهور المستهدف', 'إيجار مرتفع في منطقة ذات قوة شرائية ضعيفة', 'تشبع السوق بسبب منافسين أقوياء', 'تجاهل التركيبة السكانية للدخل']
      : ['Choosing a location that does not match the target audience', 'High rent in an area with weak purchasing power', 'Market saturation from strong competitors', 'Ignoring income demographics'],
    sec2P2: isAr ? 'الشارع المزدحم لا يضمن لك الربح.' : 'A crowded street does not guarantee profit.',

    section3Title: isAr ? 'ماذا يجب أن تتضمن دراسة الجدوى الحديثة في الرياض؟' : 'What Should a Modern Feasibility Study in Riyadh Include?',
    
    sub1Title: isAr ? '1. تحليل الكثافة السكانية' : '1. Population Density Analysis',
    sub1List: isAr 
      ? ['كم عدد السكان الذين يعيشون ضمن دائرة نصف قطرها 1-3 كم؟', 'هل هم عائلات، طلاب، أم موظفون؟', 'هل تتطابق التركيبة السكانية مع مفهومك التجاري؟']
      : ['How many residents live within a 1–3 km radius?', 'Are they families, students, or office workers?', 'Does the demographic match your concept?'],
    
    sub2Title: isAr ? '2. تحليل مستوى الدخل' : '2. Income Level Analysis',
    sub2P1: isAr ? 'يتطلب المقهى المتخصص شريحة دخل تختلف عن متجر البقالة المخفض. فهم مستويات الدخل في الحي أمر ضروري قبل الاستثمار.' : 'A specialty coffee shop requires a different income segment than a discount grocery store. Understanding neighborhood income levels is essential before investing.',
    
    sub3Title: isAr ? '3. تحليل المنافسين' : '3. Competitor Analysis',
    sub3List: isAr 
      ? ['كم عدد المنافسين المباشرين القريبين؟', 'هل هم علامات تجارية قوية؟', 'هل السوق مشبع أكثر من اللازم؟']
      : ['How many direct competitors exist nearby?', 'Are they strong brands?', 'Is the market oversaturated?'],

    sub4Title: isAr ? '4. تحليل حركة المرور وسهولة الوصول' : '4. Traffic & Accessibility Analysis',
    sub4List: isAr 
      ? ['هل توجد حركة مشاة أم مركبات فقط؟', 'هل يخدم الموقع السكان أم مجرد حركة مرور عابرة؟', 'هل تتوفر مواقف للسيارات بسهولة؟']
      : ['Is there pedestrian traffic or only vehicles?', 'Does the location serve residents or just passing traffic?', 'Is parking accessible?'],

    tableSectionTitle: isAr ? 'دراسة الجدوى التقليدية مقابل تحليل الموقع المدعوم بالبيانات' : 'Traditional Feasibility Study vs Data-Driven Location Analysis',
    tblH1: isAr ? 'الدراسة التقليدية' : 'Traditional Study',
    tblH2: isAr ? 'الدراسة المدعومة بالبيانات' : 'Data-Driven Study',
    tblR1C1: isAr ? 'تعتمد على التقديرات' : 'Based on estimates',
    tblR1C2: isAr ? 'تعتمد على أرقام حقيقية' : 'Based on real numbers',
    tblR2C1: isAr ? 'افتراضات عامة' : 'General assumptions',
    tblR2C2: isAr ? 'رؤى دقيقة على مستوى الحي' : 'Neighborhood-level insights',
    tblR3C1: isAr ? 'مخاطرة أعلى' : 'Higher risk',
    tblR3C2: isAr ? 'قرار مدروس ومحسوب' : 'Calculated decision',
    tblR4C1: isAr ? 'رسم محدود للمنافسين' : 'Limited competitor mapping',
    tblR4C2: isAr ? 'رؤية شاملة للمنافسين' : 'Full competitor visualization',
    tableFooter: isAr ? 'في سوق تنافسي مثل الرياض، هذا الفرق قد يعني مئات الآلاف من الريالات.' : 'In a competitive market like Riyadh, the difference can mean hundreds of thousands of riyals.',

    section4Title: isAr ? 'لماذا أصبح ذكاء المواقع أمراً أساسياً الآن' : 'Why Location Intelligence Is Now Essential',
    sec4P1: isAr ? 'مع ارتفاع الإيجارات التجارية وزيادة المنافسة في الرياض، لم يعد بإمكان المستثمرين تحمل تكلفة التخمين.' : 'With rising commercial rents and increasing competition in Riyadh, investors can no longer afford guesswork.',
    sec4P2: isAr ? 'تتيح منصات ذكاء المواقع مثل S-Locator لرواد الأعمال ما يلي:' : 'Location intelligence platforms such as S-Locator allow entrepreneurs to:',
    sec4List: isAr 
      ? ['عرض الخرائط الحرارية للسكان', 'تحليل مستويات الدخل في الأحياء', 'رسم خرائط المنافسين القريبين', 'تحديد "المناطق الذهبية" ذات الإمكانات العالية']
      : ['View population heatmaps', 'Analyze neighborhood income levels', 'Map nearby competitors', 'Identify high-potential “golden zones”'],
    sec4P3: isAr ? 'بدلاً من توقيع عقد إيجار لمدة 5 سنوات بناءً على المظهر فقط.' : 'Instead of signing a 5-year lease based on appearance alone.',

    conclusionTitle: isAr ? 'الخلاصة' : 'Conclusion',
    concP1: isAr ? 'أفضل طريقة لإجراء دراسة جدوى في الرياض اليوم هي الجمع بين التخطيط المالي وتحليل المواقع المدعوم بالبيانات.' : 'The best way to conduct a feasibility study in Riyadh today is by combining financial planning with data-driven location analysis.',
    concP2: isAr ? 'الموقع الصحيح — المدعوم بأرقام حقيقية — يمكن أن يحدد ما إذا كان مشروعك سيزدهر أو يغلق أبوابه في غضون عامين.' : 'The right location — backed by real numbers — can determine whether your project thrives or shuts down within two years.',
    concP3: isAr ? 'قبل الاستثمار بكثافة في الإيجار وتكاليف التجهيز، تأكد من أن قرارك مدعوم بالبيانات، وليس الحدس.' : 'Before investing heavily in rent and fit-out costs, make sure your decision is backed by data, not intuition.',
    
    shareArticle: isAr ? 'مشاركة المقالة:' : 'Share Article:'
  };

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 1. Article Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 bg-[#100324]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/Feasibility-Study-in-Riyadh-768x419.jpg" 
            alt="Feasibility Study in Riyadh" 
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
          
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.introTitle}</h2>
          <p className="mb-6">{t.introP1}</p>
          <p className="mb-6">{t.introP2}<strong className="text-[#2b1055] font-black">{t.introP2Bold}</strong></p>
          <p className="mb-6">{t.introP3}</p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section1Title}</h2>
          <p className="mb-4">{t.sec1P1}</p>
          <ul className={`list-disc mb-8 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec1List.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p className="mb-6">{t.sec1P2}</p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section2Title}</h2>
          <p className="mb-4">{t.sec2P1}</p>
          <ul className={`list-disc mb-8 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec2List.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p className="mb-6 font-bold text-[#2b1055]">{t.sec2P2}</p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section3Title}</h2>
          
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">{t.sub1Title}</h3>
          <ul className={`list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sub1List.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">{t.sub2Title}</h3>
          <p className="mb-6">{t.sub2P1}</p>

          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">{t.sub3Title}</h3>
          <ul className={`list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sub3List.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">{t.sub4Title}</h3>
          <ul className={`list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sub4List.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-8">{t.tableSectionTitle}</h2>
          
          <div className="overflow-x-auto mb-10 shadow-lg rounded-xl border border-gray-100">
            <table className={`w-full border-collapse ${isAr ? 'text-right' : 'text-left'}`}>
              <thead>
                <tr className="bg-[#110222] text-white">
                  <th className={`p-5 font-bold uppercase tracking-wider text-sm ${isAr ? 'border-l border-white/10' : 'border-r border-white/10'}`}>{t.tblH1}</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-sm text-[#38e54d]">{t.tblH2}</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-100">
                  <td className={`p-5 text-gray-500 ${isAr ? 'border-l border-gray-100' : 'border-r border-gray-100'}`}>{t.tblR1C1}</td>
                  <td className="p-5 font-bold text-[#110222]">{t.tblR1C2}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className={`p-5 text-gray-500 ${isAr ? 'border-l border-gray-100' : 'border-r border-gray-100'}`}>{t.tblR2C1}</td>
                  <td className="p-5 font-bold text-[#110222]">{t.tblR2C2}</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className={`p-5 text-gray-500 ${isAr ? 'border-l border-gray-100' : 'border-r border-gray-100'}`}>{t.tblR3C1}</td>
                  <td className="p-5 font-bold text-[#110222]">{t.tblR3C2}</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className={`p-5 text-gray-500 ${isAr ? 'border-l border-gray-100' : 'border-r border-gray-100'}`}>{t.tblR4C1}</td>
                  <td className="p-5 font-bold text-[#110222]">{t.tblR4C2}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mb-6 font-bold text-[#2b1055]">{t.tableFooter}</p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section4Title}</h2>
          <p className="mb-4">{t.sec4P1}</p>
          <p className="mb-4">
            {isAr ? 'تتيح منصات ذكاء المواقع مثل ' : 'Location intelligence platforms such as '}
            <a href="/" className="text-[#046bd2] font-bold hover:underline">S-Locator</a>
            {isAr ? ' لرواد الأعمال ما يلي:' : ' allow entrepreneurs to:'}
          </p>
          <ul className={`list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec4List.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p className="mb-6">{t.sec4P3}</p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.conclusionTitle}</h2>
          <p className="mb-4">{t.concP1}</p>
          <p className="mb-4">{t.concP2}</p>
          <p className="mb-10">{t.concP3}</p>

          <img 
            src="/assets/images/Feasibility-Study-in-Riyadh-768x419.jpg" 
            alt="Feasibility Study Dashboard" 
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
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">#Riyadh</span>
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">#Feasibility</span>
           </div>
        </div>
      </section>

    </div>
  );
}