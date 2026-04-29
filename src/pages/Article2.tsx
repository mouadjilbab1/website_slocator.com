import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

export default function Article2() {
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
    category: isAr ? 'تحليل السوق' : 'Market Analysis',
    title: isAr ? 'العثور على "المناطق الذهبية" في الرياض: كيف تحدد المواقع عالية الربح في 2026' : 'Finding "Golden Zones" in Riyadh: How to Spot High-Profit Locations in 2026',
    date: isAr ? '16 فبراير 2026' : 'Feb 16, 2026',
    author: isAr ? 'بواسطة فريق البحث' : 'By Research Team',
    
    excerpt: isAr 
      ? 'هل تبدأ مطبخاً سحابياً؟ لا تدفع الإيجار مقابل حركة المشاة. استخدم S-LOC للعثور على "المناطق المثالية" في الرياض — مستودعات بإيجار منخفض مع كثافة توصيل عالية.' 
      : 'Starting a Cloud Kitchen? Don\'t pay for footfall. Use S-LOC to find "Sweet Spots" in Riyadh—low rent warehouses with high delivery density.',
    
    section1Title: isAr ? 'البيان (إجابة مباشرة)' : 'The Statement (Direct Answer)',
    sec1P1Start: isAr ? 'في سوق العقارات السعودي لعام 2026، "الشارع المزدحم" لا يضمن الربح. مع تدفق المستثمرين الأجانب ولوائح الإيجار الجديدة، يبحث أذكى أصحاب الأعمال عن ' : 'In the 2026 Saudi real estate market, a “busy street” does not guarantee profit. With the influx of foreign investors and the new rent regulations, the smartest business owners are hunting for ',
    sec1P1Bold: isAr ? '"المناطق الذهبية"' : '“Golden Zones”',
    sec1P1Mid: isAr ? ' — جيوب مخفية في الرياض وجدة حيث القوة الشرائية عالية، لكن عرض الخدمات منخفض بشكل حرج. لا يمكنك العثور على هذه المناطق بالتجول بالسيارة؛ بل تجدها باستخدام ' : ' — hidden pockets in Riyadh and Jeddah where purchasing power is high, but service supply is critically low. You cannot find these zones by driving around; you find them using ',
    sec1P1Bold2: isAr ? 'S-LOC' : 'S-LOC’s',
    sec1P1End: isAr ? ' والخرائط الحرارية الخوارزمية الخاصة بها.' : ' algorithmic heatmaps.',

    section2Title: isAr ? 'الشرح (الحل التقني)' : 'The Explanation (The Technical Solution)',
    sec2P1Start: isAr ? 'ما الذي يحدد "المنطقة الذهبية"؟ إنها نسبة رياضية: ' : 'What defines a “Golden Zone”? It is a mathematical ratio: ',
    sec2P1Bold: isAr ? 'طلب مرتفع ÷ منافسة منخفضة.' : 'High Demand ÷ Low Competition.',
    sec2P2Start: isAr ? '"المواقع الرئيسية" التقليدية (مثل شارع التحلية أو العليا) غالباً ما تكون ' : 'Traditional “Prime Locations” (like Tahlia St. or Olaya) are often ',
    sec2P2Bold: isAr ? '"مناطق حمراء"' : '“Red Zones”',
    sec2P2End: isAr ? ': حركة مرور عالية، لكنها مشبعة بأكثر من 50 منافساً وإيجارات متضخمة.' : ': High traffic, but oversaturated with 50+ competitors and inflated rents.',
    sec2P3: isAr ? 'تحدد S-LOC (S-Locator) البديل الأمثل. تقوم خوارزمياتنا بمسح شبكة المدينة لإجراء "تحليل الفجوات". نحن نسلط الضوء على مناطق محددة حيث:' : 'S-LOC (S-Locator) identifies the alternative. Our algorithms scan the city grid to perform “Gap Analysis.” We highlight specific districts where:',
    
    sec2List: isAr ? [
      { b: 'الكثافة السكانية في ازدياد (هيئة الإحصاء):', t: ' المجمعات السكنية الجديدة تمتلئ.' },
      { b: 'الرخص التجارية منخفضة (وزارة التجارة):', t: ' يوجد عدد قليل جداً من التصاريح الحالية لقطاعك المحدد (مثل "القهوة المختصة" أو "مطاعم العائلات").' },
      { b: 'الإيجار مقوم بأقل من قيمته:', t: ' سعر الإيجار الحالي أقل من الإيرادات المتوقعة.' }
    ] : [
      { b: 'Population Density is Rising (GASTAT):', t: ' New residential compounds are filling up.' },
      { b: 'Commercial Licenses are Low (MOC):', t: ' There are very few existing permits for your specific sector (e.g., “Specialty Coffee” or “Family Dining”).' },
      { b: 'Rent is Undervalued:', t: ' The current rental price is lower than the predicted revenue.' }
    ],

    section3Title: isAr ? 'الدليل (السلطة والثقة)' : 'The Evidence (Authority & Trust)',
    sec3P1: isAr ? 'لتأكيد أن المنطقة "ذهبية" حقاً، تقوم S-LOC بمقاطعة ثلاث مجموعات بيانات رسمية للتحقق من صحة الاستثمار:' : 'To confirm a zone is truly “Golden,” S-LOC cross-references three official datasets to validate the investment:',
    
    sec3List: isAr ? [
      { b: 'التحقق من القوة الشرائية:', t: ' نستخدم بيانات فئات الدخل من هيئة الإحصاء لتأكيد قدرة الحي على شراء منتجك (مثل التمييز بين المناطق "الفاخرة" و"الاقتصادية").' },
      { b: 'تأثير استقرار الإيجارات:', t: ' مع تطبيق تدابير استقرار الإيجارات في الرياض، فإن تأمين عقد إيجار طويل الأجل في "منطقة ذهبية" يثبت الآن تكاليفك التشغيلية بينما تنمو إيراداتك. تتحقق S-LOC من سجلات معاملات وزارة العدل للتأكد من أنك لا تدخل منطقة بأسعار مرتفعة بشكل مصطنع.' },
      { b: 'مسار النمو المستقبلي:', t: ' نقوم بتركيب خرائط مترو وحافلات الرياض للتنبؤ بزيادات حركة المشاة المستقبلية قبل حدوثها.' }
    ] : [
      { b: 'Spending Power Validation:', t: ' We use GASTAT income bracket data to confirm the neighborhood can afford your product (e.g., distinguishing between “Luxury” vs. “Economy” zones).' },
      { b: 'Rent Freeze Impact:', t: ' With the Riyadh rent stabilization measures in effect, securing a long-term lease in a “Golden Zone” now locks in your operational costs while your revenue grows. S-LOC checks MOJ transaction records to ensure you aren\'t entering a district with artificially spiked prices.' },
      { b: 'Future Growth Trajectory:', t: ' We overlay Riyadh Metro and Bus Network maps to predict future footfall spikes before they happen.' }
    ],

    section4Title: isAr ? 'الإجراء (التنفيذ مع S-LOC)' : 'The Action (Execute with S-LOC)',
    sec4P1Start: isAr ? 'لا تتبع القطيع إلى الشوارع باهظة الثمن والمشبعة. ' : 'Don\'t follow the herd to expensive, saturated streets. ',
    sec4Link: isAr ? '[ابحث عن منطقتك الذهبية على S-LOC]' : '[Find Your Golden Zone on S-LOC]',
    sec4P1End: isAr ? ' افتح الخريطة الحرارية، صنف حسب مجالك، وشاهد فوراً أين تقع فجوات السوق في الرياض.' : ' Open the heatmap, filter by your industry, and instantly see where the market gaps are in Riyadh.',
    
    shareArticle: isAr ? 'مشاركة المقالة:' : 'Share Article:',
    tag1: isAr ? '#المناطق_الذهبية' : '#GoldenZones',
    tag2: isAr ? '#مطبخ_سحابي' : '#CloudKitchen'
  };

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 1. Article Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 bg-[#100324]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/Cloud-kitchen-feasibility-Saudi-Arabia-768x429.jpg" 
            alt="Cloud Kitchen Feasibility in Saudi Arabia" 
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
          <p className="mb-6">
            {t.sec1P1Start}<strong className="text-[#2b1055] font-black">{t.sec1P1Bold}</strong>{t.sec1P1Mid}<strong>{t.sec1P1Bold2}</strong>{t.sec1P1End}
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section2Title}</h2>
          <p className="mb-4">{t.sec2P1Start}<strong className="text-[#046bd2]">{t.sec2P1Bold}</strong></p>
          <p className="mb-4">{t.sec2P2Start}<strong>{t.sec2P2Bold}</strong>{t.sec2P2End}</p>
          <p className="mb-4"><strong>{isAr ? 'S-LOC' : 'S-LOC (S-Locator)'}</strong> {t.sec2P3.replace('S-LOC (S-Locator) ', '')}</p>
          
          <ol className={`list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec2List.map((item, index) => (
              <li key={index}><strong>{item.b}</strong>{item.t}</li>
            ))}
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section3Title}</h2>
          <p className="mb-4">{t.sec3P1}</p>
          
          <ul className={`list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec3List.map((item, index) => (
              <li key={index}><strong className="text-[#110222]">{item.b}</strong>{item.t}</li>
            ))}
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section4Title}</h2>
          <p className="mb-10">
            {t.sec4P1Start} <a href="/" className="text-[#046bd2] font-bold hover:underline">{t.sec4Link}</a>{t.sec4P1End}
          </p>

          <img 
            src="/assets/images/Cloud-kitchen-feasibility-Saudi-Arabia-768x429.jpg" 
            alt="Cloud Kitchen Feasibility Saudi Arabia" 
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