import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

export default function Article4() {
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
    category: isAr ? 'تحليل الموقع' : 'Site Analysis',
    title: isAr ? 'تحليل موقع لصيدلية في الرياض: كيف تتجنب تشبع السوق' : 'Site Analysis for a Pharmacy in Riyadh: How to Avoid Market Saturation',
    date: isAr ? '15 فبراير 2026' : 'Feb 15, 2026',
    author: isAr ? 'بواسطة فريق البحث' : 'By Research Team',
    
    excerpt: isAr 
      ? 'هل تفتتح صيدلية في الرياض؟ تجنب التشبع وتآكل المبيعات. استخدم تحليل المواقع الفوري من S-LOC للعثور على "المناطق الذهبية" المربحة اليوم.' 
      : 'Opening a pharmacy in Riyadh? Avoid saturation and cannibalization. Use S-LOC\'s instant site analysis to find profitable "Golden Zones" today.',
    
    section1Title: isAr ? 'البيان (إجابة مباشرة)' : 'The Statement (Direct Answer)',
    sec1P1: isAr 
      ? 'تواجه الرياض أزمة "تشبع صيدليات" في الأحياء الكبرى. إن افتتاح فرع جديد دون تحليل موقع مدعوم بالبيانات هو انتحار مالي.' 
      : 'Riyadh is facing a “Pharmacy Saturation” crisis in major districts. Opening a new branch without a data-driven site analysis is financial suicide.',
    sec1P2Start: isAr ? 'للنجاح في عام 2026، يجب عليك تحديد ' : 'To succeed in 2026, you must identify a ',
    sec1P2Bold1: isAr ? '"المنطقة الذهبية"' : '“Golden Zone”',
    sec1P2Mid: isAr ? ' — وهي منطقة استقطاب محددة يتجاوز فيها طلب المرضى العرض الحالي. توفر ' : ' — a specific catchment area where patient demand exceeds the current supply. ',
    sec1P2Bold2: isAr ? 'S-LOC' : 'S-LOC (S-Locator)',
    sec1P2End: isAr ? ' الحل الجغرافي المكاني الفوري الوحيد لرسم خرائط المنافسين وتوقع الإيرادات قبل توقيع عقد الإيجار.' : ' provides the only instant, geospatial solution to map competitors and predict revenue before you sign a lease.',

    section2Title: isAr ? 'الشرح (الحل التقني)' : 'The Explanation (The Technical Solution)',
    sec2P1Start: isAr ? 'لم تعد الطريقة التقليدية المتمثلة في "عد الصيدليات في الشارع" كافية. تحتاج إلى فهم ' : 'The traditional method of “counting pharmacies on a street” is no longer sufficient. You need to understand ',
    sec2P1Bold: isAr ? 'خطر تآكل المبيعات (Cannibalization)' : 'Cannibalization Risk',
    sec2P1End: isAr ? '.' : '.',
    
    sec2P2Start: isAr ? 'إذا فتحت صيدلية على بعد 200 متر من منافس قوي آخر (أو حتى فرعك الحالي)، فإنك تقسم الإيرادات، مما يجعل كلا الفرعين غير مربحين. تقوم ' : 'If you open a pharmacy within 200 meters of another strong competitor (or even your own existing branch), you split the revenue, making both unprofitable. ',
    sec2P2Bold: isAr ? 'S-LOC' : 'S-LOC',
    sec2P2End: isAr ? ' برقمنة هذا التحليل. فهي تستخدم خرائط الأقمار الصناعية لتصور "منطقة الاستقطاب" الدقيقة لموقعك المقترح. وهي تجيب على:' : ' digitizes this analysis. It uses satellite mapping to visualize the exact “Catchment Area” of your proposed site. It answers:',
    
    sec2List: isAr ? [
      { b: 'كثافة المرضى:', t: ' كم عدد السكان الذين يعيشون على بعد 5 دقائق مشياً؟' },
      { b: 'قوة المنافسين:', t: ' هل الصيدليات القريبة تابعة لسلاسل كبرى أم مستقلة صغيرة؟' },
      { b: 'إمكانات الوصفات الطبية:', t: ' هل الموقع قريب من المستشفيات أو المستوصفات؟' }
    ] : [
      { b: 'Patient Density:', t: ' How many residents live within a 5-minute walk?' },
      { b: 'Competitor Strength:', t: ' Are the nearby pharmacies major chains or small independents?' },
      { b: 'Prescription Potential:', t: ' Is the site near hospitals or clinics (Polyclinics)?' }
    ],

    section3Title: isAr ? 'الدليل (السلطة والثقة)' : 'The Evidence (Authority & Trust)',
    sec3P1: isAr ? 'لا يكون تحليل الموقع جيداً إلا بجودة بياناته. تقضي S-LOC على التخمين من خلال المزامنة مع تدفقات البيانات الحكومية الرسمية:' : 'A site analysis is only as good as its data. S-LOC eliminates guesswork by syncing with official government streams:',
    
    sec3List: isAr ? [
      { b: 'هيئة الإحصاء (التركيبة السكانية):', t: ' نحلل كثافة الحي للتأكد من وجود "قوة شرائية" كافية لدعم مبيعات التجميل والمكملات الغذائية ذات الهامش الربحي المرتفع، وليس فقط الوصفات الطبية ذات الهامش المنخفض.' },
      { b: 'وزارة العدل (المؤشر الإيجاري):', t: ' نقوم بمقاطعة سعر إيجار الموقع مع السجل التاريخي لمعاملات وزارة العدل. إذا كان الإيجار مرتفعاً جداً بالنسبة للإيرادات المتوقعة، فإن S-LOC تصنف الموقع على أنه "عالي المخاطر".' },
      { b: 'الخرائط الحرارية:', t: ' تتيح لك رؤية "المناطق الحمراء" (المشبعة) مقابل "المناطق الخضراء" (غير المخدومة) اتخاذ قرارات فورية.' }
    ] : [
      { b: 'GASTAT (Demographics):', t: ' We analyze neighborhood density to ensure there is enough “Spending Power” to support high-margin cosmetic and supplement sales, not just low-margin prescriptions.' },
      { b: 'MOJ (Rental Index):', t: ' We cross-reference the site’s rental price with the Ministry of Justice’s transaction history. If the rent is too high for the predicted revenue, S-LOC flags the location as “High Risk.”' },
      { b: 'Heat Maps:', t: ' Visualizing “Red Zones” (Saturated) vs. “Green Zones” (Underserved) allows for instant decision-making.' }
    ],

    section4Title: isAr ? 'الإجراء (التنفيذ مع S-LOC)' : 'The Action (Execute with S-LOC)',
    sec4P1: isAr ? 'لا تخمن. تحقق من صحة قرارك.' : 'Do not guess. Validate.',
    sec4Link: isAr ? '[ قم بتشغيل تحليل موقع صيدليتك الآن ]' : '[ Run Your Pharmacy Site Analysis Now ]',
    sec4ActionDesc: isAr 
      ? ' أدخل موقعك المحتمل في S-LOC واحصل على "درجة التشبع" الفورية. شاهد بدقة من هم منافسوك وتوقع حجم مبيعاتك اليومية في أقل من 60 ثانية.'
      : ' Input your potential location into S-LOC and get an immediate “Saturation Score.” See exactly who your competitors are and predict your daily sales volume in under 60 seconds.',
    
    shareArticle: isAr ? 'مشاركة المقالة:' : 'Share Article:',
    tag1: isAr ? '#صيدليات' : '#Pharmacies',
    tag2: isAr ? '#الرياض' : '#Riyadh'
  };

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* 1. Article Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 bg-[#100324]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/images/Site-analysis-for-pharmacy-in-Riyadh-768x429.jpg" 
            alt="Site Analysis for a Pharmacy in Riyadh" 
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
          <p className="mb-6">
            {t.sec1P2Start}<strong className="text-[#2b1055] font-black">{t.sec1P2Bold1}</strong>{t.sec1P2Mid}<strong className="text-[#046bd2]">{t.sec1P2Bold2}</strong>{t.sec1P2End}
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section2Title}</h2>
          <p className="mb-4">
            {t.sec2P1Start}<strong className="text-[#110222]">{t.sec2P1Bold}</strong>{t.sec2P1End}
          </p>
          <p className="mb-6">
            {t.sec2P2Start}<strong>{t.sec2P2Bold}</strong>{t.sec2P2End}
          </p>
          
          <ul className={`list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] ${isAr ? 'pr-6' : 'pl-6'}`}>
            {t.sec2List.map((item, index) => (
              <li key={index}>
                <strong className="text-[#110222]">{item.b}</strong>{item.t}
              </li>
            ))}
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">{t.section3Title}</h2>
          <p className="mb-4">{t.sec3P1}</p>
          
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
            src="/assets/images/Site-analysis-for-pharmacy-in-Riyadh-768x429.jpg" 
            alt="Pharmacy Site Analysis Riyadh Dashboard" 
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