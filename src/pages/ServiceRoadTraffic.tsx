import React, { useState, useEffect, useRef } from 'react'
import { ArrowRight, ArrowLeft, CheckCircle2, Truck, MapPin, Store, Quote } from 'lucide-react'

// =========================================
// Scroll Reveal Animation Wrapper (محدث ليدعم اتجاه اللغتين)
// =========================================
const FadeInSection = ({
  children,
  delay = 0,
  direction = 'up',
  isAr = false,
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  isAr?: boolean
}) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.unobserve(domRef.current!)
        }
      },
      { threshold: 0.1 },
    )

    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0'
    if (direction === 'up') return 'translate-y-16'
    // عكس اتجاه الحركة المادي عند استخدام اللغة العربية
    if (direction === 'left') return isAr ? 'translate-x-16' : '-translate-x-16'
    if (direction === 'right') return isAr ? '-translate-x-16' : 'translate-x-16'
    return 'translate-y-16'
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function ServiceRoadTraffic() {
  const [lang] = useState(() => localStorage.getItem('site_lang') || 'en')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const isAr = lang === 'ar'

  // -----------------------------------------
  // القاموس (Dictionary) لدعم اللغتين
  // -----------------------------------------
  const t = {
    ourSolutions: isAr ? 'حلولنا' : 'Our Solutions',
    titlePart1: isAr ? 'ذكاء بيانات ' : 'Road Traffic Data ',
    titlePart2: isAr ? 'الحركة المرورية' : 'Intelligence',
    heroDesc: isAr
      ? 'تقدم "ذكاء بيانات الحركة المرورية" رؤى شاملة حول أنماط حركة المرور، والازدحام على الطرق، وأوقات السفر. تعتبر هذه الخدمة ضرورية للشركات العاملة في مجال الخدمات اللوجستية والنقل والتخطيط الحضري. فهي تساعد في تحسين مسارات التوصيل، وتخطيط المشاريع الجديدة، واختيار مواقع البيع بالتجزئة ذات حركة المشاة العالية وسهولة الوصول.'
      : 'Road Traffic Data Intelligence offers comprehensive insights into traffic patterns, road congestion, and travel times. This service is crucial for businesses involved in logistics, transportation, and urban planning. It helps in optimizing delivery routes, planning new developments, and choosing retail locations with high foot traffic and accessibility.',
    contactUs: isAr ? 'تواصل معنا الآن' : 'Contact Us Now',
    learnMore: isAr ? 'اعرف المزيد' : 'Learn More',

    keyFeatures: isAr ? 'الميزات الرئيسية' : 'Key Features',
    featuresList: isAr
      ? [
          'بيانات حركة المرور التاريخية وفي الوقت الفعلي.',
          'تحليل ساعات الذروة، ونقاط الازدحام، وتدفق حركة المرور.',
          'نماذج تنبؤية لاتجاهات حركة المرور والازدحام المستقبلي.',
          'التكامل مع بيانات الموقع لتقييم سهولة الوصول وحركة المشاة المحتملة.',
        ]
      : [
          'Real-time and historical traffic data.',
          'Analysis of peak hours, congestion points, and traffic flow.',
          'Predictive models for traffic trends and future congestion.',
          'Integration with location data to assess accessibility and potential footfall.',
        ],

    applications: isAr ? 'التطبيقات' : 'Applications',
    useCases: isAr ? 'حالات الاستخدام' : 'Use Cases',
    useCasesList: [
      {
        icon: <Truck size={32} />,
        title: isAr ? 'الخدمات اللوجستية' : 'Logistics',
        desc: isAr
          ? 'تحسين مسارات التوصيل وتقليل تكاليف النقل والوقود.'
          : 'Optimize delivery routes and reduce transportation costs.',
      },
      {
        icon: <MapPin size={32} />,
        title: isAr ? 'التخطيط الحضري' : 'Urban Planning',
        desc: isAr
          ? 'تخطيط مشاريع البنية التحتية مثل الطرق الجديدة أو مسارات النقل العام.'
          : 'Plan infrastructure projects like new roads or public transport routes.',
      },
      {
        icon: <Store size={32} />,
        title: isAr ? 'التجزئة' : 'Retail',
        desc: isAr
          ? 'اختيار مواقع المتاجر ذات الرؤية الواضحة وسهولة الوصول للعملاء.'
          : 'Select store locations with high visibility and accessibility.',
      },
    ],

    detTitle1: isAr ? 'تحسين سلسلة الإمداد' : 'Supply Chain Optimization',
    detDesc1: isAr
      ? 'تقوم شركات الخدمات اللوجستية بتحليل أنماط حركة المرور لتخطيط مسارات التوصيل الأكثر كفاءة، مما يقلل من تكاليف الوقود وأوقات التسليم.'
      : 'Logistics companies analyze traffic patterns to plan the most efficient delivery routes, reducing fuel costs and delivery times.',

    detTitle2: isAr ? 'التخطيط الحضري' : 'Urban Planning',
    detDesc2: isAr
      ? 'يستخدم مخططو المدن بيانات حركة المرور لتحديد النقاط الساخنة للازدحام وتصميم تحسينات البنية التحتية، مثل الطرق الجديدة أو تحسين إشارات المرور.'
      : 'City planners use traffic data to identify congestion hotspots and design infrastructure improvements, such as new roads or traffic signal optimizations.',

    detTitle3: isAr ? 'اختيار مواقع التجزئة' : 'Retail Site Selection',
    detDesc3: isAr
      ? 'تستخدم شركة تتطلع لفتح متجر جديد بيانات حركة المرور لاختيار موقع يتميز بحركة مرور عالية للمركبات أو المشاة لزيادة الرؤية والإقبال.'
      : 'A business looking to open a new store uses traffic data to choose a location with high vehicle or pedestrian traffic to maximize visibility and footfall.',

    testTitle: isAr
      ? 'شاهد ماذا تقول الشركات الأخرى عنا'
      : 'See what other companies are saying about us',
    testQuote: isAr
      ? '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."'
      : '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
    testName: isAr ? 'إليانور جيبسون' : 'Eleanor Gibson',
    testRole: isAr
      ? 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق'
      : 'MarketMasters Ltd. \nHead of Market Research',
  }

  return (
    <div
      className="w-full font-sans text-gray-800 bg-white overflow-hidden"
      dir={isAr ? 'rtl' : 'ltr'}
    >
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
                  {t.titlePart1}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38e54d] to-[#8eea9e]">
                    {t.titlePart2}
                  </span>
                </h1>
                <p
                  className={`text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto ${isAr ? 'lg:mx-0' : 'lg:mx-0'}`}
                >
                  {t.heroDesc}
                </p>
                <div
                  className={`flex flex-col sm:flex-row items-center justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'} gap-4`}
                >
                  <a
                    href="/contact"
                    className={`bg-[#38e54d] hover:bg-[#2db83e] text-[#110222] font-bold py-3.5 px-8 rounded-full transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(56,229,77,0.3)] flex items-center gap-2 w-full sm:w-auto justify-center ${isAr ? 'flex-row-reverse' : ''}`}
                  >
                    {t.contactUs} {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                  </a>
                  <a
                    href="#features"
                    className="bg-transparent border border-white/30 hover:border-white/80 text-white font-bold py-3.5 px-8 rounded-full transition-all w-full sm:w-auto justify-center flex"
                  >
                    {t.learnMore}
                  </a>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:w-1/2 relative w-full max-w-lg mx-auto">
              <FadeInSection direction="right" delay={200} isAr={isAr}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#38e54d] to-[#9b51e0] rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                  {/* استبدال رابط الصورة بمسار محلي */}
                  <img
                    src="/assets/images/png-16.png"
                    alt="Road Traffic Data Intelligence Icon"
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
              <h2 className="text-[#2b1055] text-4xl md:text-[42px] font-black mb-4">
                {t.keyFeatures}
              </h2>
              <div className="w-24 h-1.5 bg-[#38e54d] mx-auto rounded-full"></div>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
            {t.featuresList.map((feature, idx) => (
              <FadeInSection key={idx} delay={idx * 150} direction="up" isAr={isAr}>
                <div className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex items-start gap-4 hover:-translate-y-2 transition-transform duration-300 h-full">
                  <div
                    className={`bg-[#e0fbc9] p-3 rounded-full text-[#2db83e] shrink-0 mt-1 ${isAr ? 'ml-2' : 'mr-2'}`}
                  >
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
              <h6 className="text-[#38e54d] font-bold tracking-widest text-sm mb-3 uppercase">
                {t.applications}
              </h6>
              <h2 className="text-[#2b1055] text-4xl md:text-[42px] font-black mb-4">
                {t.useCases}
              </h2>
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
          {/* Row 1: Supply Chain Optimization */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <FadeInSection direction="left" isAr={isAr}>
                <img
                  src="/assets/images/png-14.png"
                  alt="Supply Chain Optimization"
                  className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </FadeInSection>
            </div>
            <div
              className={`lg:w-1/2 w-full text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}
            >
              <FadeInSection direction="right" isAr={isAr}>
                <h2 className="text-[#2b1055] text-3xl md:text-4xl font-black mb-6">
                  {t.detTitle1}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.detDesc1}</p>
              </FadeInSection>
            </div>
          </div>

          {/* Row 2: Urban Planning */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <FadeInSection direction="right" isAr={isAr}>
                <img
                  src="/assets/images/png-15.png"
                  alt="Urban Planning"
                  className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </FadeInSection>
            </div>
            <div
              className={`lg:w-1/2 w-full text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}
            >
              <FadeInSection direction="left" isAr={isAr}>
                <h2 className="text-[#2b1055] text-3xl md:text-4xl font-black mb-6">
                  {t.detTitle2}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.detDesc2}</p>
              </FadeInSection>
            </div>
          </div>

          {/* Row 3: Retail Site Selection */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <FadeInSection direction="left" isAr={isAr}>
                <img
                  src="/assets/images/png-16.png"
                  alt="Retail Site Selection"
                  className="w-full max-w-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                />
              </FadeInSection>
            </div>
            <div
              className={`lg:w-1/2 w-full text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}
            >
              <FadeInSection direction="right" isAr={isAr}>
                <h2 className="text-[#2b1055] text-3xl md:text-4xl font-black mb-6">
                  {t.detTitle3}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">{t.detDesc3}</p>
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
              <Quote
                className={`absolute top-8 ${isAr ? 'right-8' : 'left-8'} text-[#38e54d]/20 w-16 h-16`}
              />
              <p className="text-xl md:text-2xl text-gray-300 font-medium italic leading-relaxed mb-10 relative z-10">
                {t.testQuote}
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-1 bg-[#38e54d] mb-6 rounded-full"></div>
                <h4 className="text-white font-bold text-xl mb-1">{t.testName}</h4>
                <p className="text-[#38e54d] font-semibold text-sm whitespace-pre-line">
                  {t.testRole}
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
