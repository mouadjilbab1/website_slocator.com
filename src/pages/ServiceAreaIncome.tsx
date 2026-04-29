import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, ShoppingBag, Landmark, Building2, Quote } from 'lucide-react';

// =========================================
// Scroll Reveal Animation Wrapper (محدث ليدعم اتجاه اللغتين)
// =========================================
const FadeInSection = ({ children, delay = 0, direction = 'up', isAr = false }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right', isAr?: boolean }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current!);
      }
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0';
    if (direction === 'up') return 'translate-y-16';
    // عكس اتجاه الحركة المادي عند استخدام اللغة العربية
    if (direction === 'left') return isAr ? 'translate-x-16' : '-translate-x-16';
    if (direction === 'right') return isAr ? '-translate-x-16' : 'translate-x-16';
    return 'translate-y-16';
  };

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function ServiceAreaIncome() {
  const [lang, setLang] = useState('en');

  // جلب اللغة عند تحميل الصفحة والتمرير للأعلى
  useEffect(() => {
    const storedLang = localStorage.getItem('site_lang') || 'en';
    setLang(storedLang);
    window.scrollTo(0, 0);
  }, []);

  const isAr = lang === 'ar';

  // -----------------------------------------
  // القاموس (Dictionary) لدعم اللغتين
  // -----------------------------------------
  const t = {
    ourSolutions: isAr ? 'حلولنا' : 'Our Solutions',
    titlePart1: isAr ? 'ذكاء ' : 'Area Income ',
    titlePart2: isAr ? 'مستوى الدخل' : 'Intelligence',
    heroDesc: isAr 
      ? 'يوفر "ذكاء مستوى الدخل" معلومات مفصلة حول توزيع الدخل عبر مناطق محددة. تساعد هذه الخدمة الشركات على تكييف منتجاتها وخدماتها واستراتيجياتها التسويقية مع الخصائص المالية لجمهورها المستهدف. وهي مفيدة بشكل خاص لقطاعات التجزئة، الخدمات المالية، والعقارات التي تتطلع إلى تحسين عروضها بناءً على التركيبة السكانية الاقتصادية.' 
      : 'Area Income Intelligence provides detailed information on income distribution across specific regions. This service helps businesses tailor their products, services, and marketing strategies to the financial characteristics of their target audience. It is especially beneficial for retail, financial services, and real estate sectors looking to optimize their offerings based on economic demographics.',
    contactUs: isAr ? 'تواصل معنا الآن' : 'Contact Us Now',
    learnMore: isAr ? 'اعرف المزيد' : 'Learn More',

    keyFeatures: isAr ? 'الميزات الرئيسية' : 'Key Features',
    featuresList: isAr ? [
      "بيانات توزيع الدخل مقسمة على مستوى الأسرة والأفراد.",
      "تحليل القوة الشرائية والوضع الاقتصادي.",
      "الربط مع البيانات الديموغرافية والاجتماعية للحصول على رؤى مستهدفة.",
      "تحليلات تنبؤية لاتجاهات الدخل والتحولات الاقتصادية."
    ] : [
      "Income distribution data segmented by household and individual levels.",
      "Analysis of spending power and economic status.",
      "Correlation with demographic and social data for targeted insights.",
      "Predictive analytics for income trends and economic shifts."
    ],

    applications: isAr ? 'التطبيقات' : 'Applications',
    useCases: isAr ? 'حالات الاستخدام' : 'Use Cases',
    useCasesList: [
      {
        icon: <ShoppingBag size={32} />,
        title: isAr ? "قطاع التجزئة" : "Retail",
        desc: isAr ? "تطوير استراتيجيات التسعير وعروض المنتجات بناءً على مستويات الدخل المحلية." : "Develop pricing strategies and product offerings based on local income levels."
      },
      {
        icon: <Landmark size={32} />,
        title: isAr ? "الخدمات المالية" : "Financial Services",
        desc: isAr ? "تصميم منتجات القروض والرهن العقاري والاستثمار لتناسب فئات الدخل المحددة." : "Tailor loan, mortgage, and investment products to specific income brackets."
      },
      {
        icon: <Building2 size={32} />,
        title: isAr ? "العقارات" : "Real Estate",
        desc: isAr ? "تحديد المناطق ذات القوة الشرائية العالية لتطوير المشاريع العقارية الفاخرة." : "Identify areas with high purchasing power for premium property development."
      }
    ],

    detTitle1: isAr ? 'استهداف قطاع التجزئة' : 'Retail Targeting',
    detDesc1: isAr ? 'تستخدم علامة تجارية فاخرة بيانات الدخل لتحديد المناطق الثرية لافتتاح مواقع متاجر جديدة وتوجيه حملاتها التسويقية.' : 'A luxury brand uses income data to identify affluent areas for new store locations and marketing campaigns.',
    
    detTitle2: isAr ? 'الخدمات المصرفية والمالية' : 'Banking and Financial Services',
    detDesc2: isAr ? 'يقوم أحد البنوك بتقييم توزيع الدخل لتحديد مكان افتتاح فروع جديدة، مع التركيز على المناطق ذات الدخل المرتفع لتقديم خدمات إدارة الثروات.' : 'A bank assesses income distribution to decide where to open new branches, focusing on high-income areas for wealth management services.',
    
    detTitle3: isAr ? 'استراتيجية تسعير المنتجات' : 'Product Pricing Strategy',
    detDesc3: isAr ? 'تستخدم شركة تطلق خط إنتاج جديد ذكاء الدخل لتحديد مستويات التسعير وتوافر المنتجات بناءً على الملف الاقتصادي للمناطق المختلفة.' : 'A company launching a new product line uses income intelligence to set pricing tiers and product availability based on the economic profile of different regions.',

    testTitle: isAr ? 'شاهد ماذا تقول الشركات الأخرى عنا' : 'See what other companies are saying about us',
    testQuote: isAr 
      ? '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."' 
      : '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
    testName: isAr ? 'إليانور جيبسون' : 'Eleanor Gibson',
    testRole: isAr ? 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق' : 'MarketMasters Ltd. \nHead of Market Research'
  };

  return (
    <div className="w-full font-sans text-gray-800 bg-white overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#100324] via-[#1a0535] to-[#100324] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38e54d]/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#9b51e0]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className={`lg:w-1/2 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
              <FadeInSection direction="left" isAr={isAr}>
                <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-[#38e54d]/30 text-[#38e54d] text-sm font-bold tracking-widest uppercase mb-6">
                  {t.ourSolutions}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-tight mb-6">
                  {t.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38e54d] to-[#8eea9e]">{t.titlePart2}</span>
                </h1>
                <p className={`text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto ${isAr ? 'lg:mx-0' : 'lg:mx-0'}`}>
                  {t.heroDesc}
                </p>
                <div className={`flex flex-col sm:flex-row items-center justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'} gap-4`}>
                  <a href="/contact" className={`bg-[#38e54d] hover:bg-[#2db83e] text-[#110222] font-bold py-3.5 px-8 rounded-full transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(56,229,77,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center ${isAr ? 'flex-row-reverse' : ''}`}>
                    {t.contactUs} {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                  </a>
                  <a href="#features" className="bg-transparent border border-white/30 hover:border-white/80 text-white font-bold py-3.5 px-8 rounded-full transition-all w-full sm:w-auto justify-center flex">
                    {t.learnMore}
                  </a>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:w-1/2 relative w-full max-w-lg mx-auto">
              <FadeInSection direction="right" delay={200} isAr={isAr}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#38e54d] to-[#9b51e0] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                  {/* استخدام المسار المحلي */}
                  <img 
                    src="/assets/images/png-24.png" 
                    alt="Area Income Intelligence Icon" 
                    className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
                  />
                </div>
              </FadeInSection>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          2. KEY FEATURES
      ========================================= */}
      <section id="features" className="py-24 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[#2b1055] text-4xl md:text-[42px] font-black mb-4">{t.keyFeatures}</h2>
              <div className="w-24 h-1.5 bg-[#38e54d] mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
            {t.featuresList.map((feature, idx) => (
              <FadeInSection key={idx} delay={idx * 150} direction="up" isAr={isAr}>
                <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300 h-full">
                  <div className={`bg-[#e0fbc9] p-3 rounded-full text-[#2db83e] shrink-0 mt-1 ${isAr ? 'ml-2' : 'mr-2'}`}>
                    <CheckCircle2 size={24} strokeWidth={2.5} />
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">{feature}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. USE CASES (3 Main Cards)
      ========================================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h6 className="text-[#38e54d] font-bold tracking-widest text-sm mb-3 uppercase">{t.applications}</h6>
              <h2 className="text-[#2b1055] text-4xl md:text-[42px] font-black mb-4">{t.useCases}</h2>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {t.useCasesList.map((useCase, idx) => (
              <FadeInSection key={idx} delay={idx * 200}>
                <div className="group bg-gradient-to-br from-gray-50 to-white p-10 rounded-[30px] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 h-full text-center">
                  <div className="w-20 h-20 mx-auto bg-[#100324] text-[#38e54d] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg">
                    {useCase.icon}
                  </div>
                  <h3 className="text-[#2b1055] text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{useCase.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          4. DETAILED STRATEGIES (Alternating rows)
      ========================================= */}
      <section className="py-20 bg-[#fafbfc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          
          {/* Row 1: Retail Targeting */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <FadeInSection direction="left" isAr={isAr}>
                <img 
                  src="/assets/images/png-22.png" 
                  alt="Retail Targeting" 
                  className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
                />
              </FadeInSection>
            </div>
            <div className={`lg:w-1/2 w-full text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
              <FadeInSection direction="right" isAr={isAr}>
                <h2 className="text-[#2b1055] text-3xl md:text-4xl font-black mb-6">{t.detTitle1}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t.detDesc1}
                </p>
              </FadeInSection>
            </div>
          </div>

          {/* Row 2: Banking and Financial Services */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <FadeInSection direction="right" isAr={isAr}>
                <img 
                  src="/assets/images/png-23.png" 
                  alt="Banking and Financial Services" 
                  className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
                />
              </FadeInSection>
            </div>
            <div className={`lg:w-1/2 w-full text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
              <FadeInSection direction="left" isAr={isAr}>
                <h2 className="text-[#2b1055] text-3xl md:text-4xl font-black mb-6">{t.detTitle2}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t.detDesc2}
                </p>
              </FadeInSection>
            </div>
          </div>

          {/* Row 3: Product Pricing Strategy */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <FadeInSection direction="left" isAr={isAr}>
                <img 
                  src="/assets/images/png-24.png" 
                  alt="Product Pricing Strategy" 
                  className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
                />
              </FadeInSection>
            </div>
            <div className={`lg:w-1/2 w-full text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
              <FadeInSection direction="right" isAr={isAr}>
                <h2 className="text-[#2b1055] text-3xl md:text-4xl font-black mb-6">{t.detTitle3}</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {t.detDesc3}
                </p>
              </FadeInSection>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          5. TESTIMONIAL SECTION
      ========================================= */}
      <section className="py-24 bg-[#100324] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#38e54d]/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <FadeInSection>
            <h2 className="text-white text-3xl md:text-4xl font-black mb-16">{t.testTitle}</h2>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-md p-10 md:p-16 rounded-[40px] relative">
              <Quote className={`absolute top-8 ${isAr ? 'right-8' : 'left-8'} text-[#38e54d]/20 w-16 h-16`} />
              <p className="text-xl md:text-2xl text-gray-300 font-medium italic leading-relaxed mb-10 relative z-10">
                {t.testQuote}
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-1 bg-[#38e54d] mb-6 rounded-full"></div>
                <h4 className="text-white font-bold text-xl mb-1">{t.testName}</h4>
                <p className="text-[#38e54d] font-semibold text-sm whitespace-pre-line">{t.testRole}</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

    </div>
  );
}