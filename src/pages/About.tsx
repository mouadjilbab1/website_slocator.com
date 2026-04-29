import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// =========================================
// 1. Helper: Scroll Animation Wrapper
// =========================================
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
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

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// =========================================
// 2. Helper: Animated Number Counter
// =========================================
const AnimatedCounter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) window.requestAnimationFrame(step);
        };
        window.requestAnimationFrame(step);
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
};

// =========================================
// 3. Helper: Accordion for FAQs (Redesigned)
// =========================================
const AccordionItem = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1f0f38] border border-[#38e54d]/20 mb-4 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:border-[#38e54d]/60 group">
      <button 
        className="w-full px-6 py-6 flex justify-between items-center text-left transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-5">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isOpen ? 'bg-[#38e54d] text-[#110222]' : 'bg-white/5 text-[#38e54d] group-hover:bg-[#38e54d]/20'}`}>
            <span className="text-2xl font-black leading-none pb-1">{isOpen ? '-' : '+'}</span>
          </div>
          <span className={`text-[16px] font-bold transition-colors duration-300 ${isOpen ? 'text-[#38e54d]' : 'text-white group-hover:text-[#38e54d]'}`}>
            {title}
          </span>
        </div>
        <span className={`text-gray-400 font-bold text-xl transition-transform duration-300 ${isOpen ? 'rotate-90 text-[#38e54d]' : ''}`}>
          ›
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-8 pt-0 text-gray-300 text-[15px] leading-relaxed space-y-3 sm:pl-[84px]">
          {children}
        </div>
      </div>
    </div>
  );
};

// =========================================
// MAIN PAGE COMPONENT
// =========================================
export default function About() {
  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#100324] to-[#0a2e16] py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          <div className="lg:w-1/2 text-left">
            <FadeInSection>
              <h6 className="text-[#38e54d] font-bold tracking-[0.2em] mb-4 text-sm uppercase">ABOUT US</h6>
              <h2 className="text-white text-4xl md:text-[50px] font-extrabold mb-6 leading-[1.1]">
                Turning Data into Actionable Insights
              </h2>
              <p className="text-[#8492a6] text-lg mb-8 leading-relaxed max-w-lg">
                Discover who we are, what drives us, and how we empower businesses to make smarter decisions with precision data intelligence.
              </p>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <ul className="space-y-4 mb-10 max-w-lg">
                {[
                  "We constantly evolve, bringing the latest technologies and ideas to our services.",
                  "Precision matters. Our data is reliable, detailed, and actionable.",
                  "We work hand-in-hand with our clients to create solutions tailored to their needs.",
                  "We aim to provide solutions that benefit businesses and communities alike."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#38e54d] mt-1 shrink-0" size={20} />
                    <span className="text-white font-medium leading-relaxed text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-[#38e54d] hover:bg-[#2ebf40] text-white font-bold py-3.5 px-8 rounded-full shadow-[0_4px_15px_rgba(56,229,77,0.3)] hover:-translate-y-1 transition-transform flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
            </FadeInSection>
          </div>

          <div className="lg:w-1/2 relative w-full flex justify-center mt-12 lg:mt-0">
            <FadeInSection delay={400}>
              <div className="relative w-full max-w-[500px]">
                {/* 30+ Years Experience Animated Badge */}
                <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-[#38e54d] text-white w-[120px] h-[120px] rounded-full flex flex-col justify-center items-center shadow-2xl border-[6px] border-[#0a2e16] z-20 hover:scale-105 transition-transform">
                  <span className="text-3xl font-extrabold"><AnimatedCounter end={30} />+</span>
                  <span className="text-[10px] text-center leading-tight font-bold mt-1 uppercase">Years of<br/>Experience</span>
                </div>
                <img 
                  src="https://www.s-locator.com/wp-content/uploads/2025/02/saudi-people-office-composition_1284-21889-1.jpg" 
                  alt="Team Office" 
                  className="w-full h-auto rounded-[30px] rounded-br-none shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover" 
                />
              </div>
            </FadeInSection>
          </div>

        </div>
      </section>

      {/* 2. TEAM MEMBERS */}
      <section className="py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          
          {/* Left Text Block */}
          <div className="lg:w-1/3 text-left">
            <FadeInSection>
              <h2 className="text-[#110222] text-3xl md:text-[38px] font-black mb-6 uppercase leading-tight tracking-tight">
                OUR PROFESSIONAL<br/>TEAM MEMBERS
              </h2>
              <p className="text-gray-500 mb-8 text-[14px] leading-relaxed font-medium">
                Meet our team of dedicated professionals, combining expertise, creativity, and passion to deliver exceptional results and drive your success.
              </p>
              <button className="bg-[#4ade80] hover:bg-[#38c966] text-white font-bold py-3 px-6 rounded-full shadow-[0_4px_15px_rgba(74,222,128,0.3)] hover:-translate-y-1 transition-transform flex items-center gap-2 text-sm">
                Get Started <ArrowRight size={16} />
              </button>
            </FadeInSection>
          </div>

          {/* Right Cards Block */}
          <div className="lg:w-2/3 w-full">
            {/* Top Row: 2 Cards */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
              <FadeInSection delay={100}>
                <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-full sm:w-[260px] flex flex-col h-[340px]">
                  <div className="h-[240px] w-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://www.s-locator.com/wp-content/uploads/2025/03/Untitled-design7.png" 
                      alt="Abdullah Abbas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="bg-[#4ade80] p-4 text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-[18px] font-extrabold text-white mb-1">Abdullah Abbas</h4>
                    <p className="text-white/90 font-medium text-[13px]">Co Founder</p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-full sm:w-[260px] flex flex-col h-[340px]">
                  <div className="h-[240px] w-full overflow-hidden bg-gray-100">
                    <img 
                      src="https://www.s-locator.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-01-14-at-4.59.48-AM.jpeg" 
                      alt="Al Hussain Abbas" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="bg-[#4ade80] p-4 text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-[18px] font-extrabold text-white mb-1">Al Hussain Abbas</h4>
                    <p className="text-white/90 font-medium text-[13px]">Co Founder</p>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Bottom Row: 1 Centered Card */}
            <div className="flex justify-center">
              <FadeInSection delay={300}>
                <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-full sm:w-[260px] flex flex-col h-[340px]">
                  <div className="h-[240px] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img 
                      src="https://www.s-locator.com/wp-content/uploads/2025/04/Design-sans-titre-2025-04-16T182133.711.png" 
                      alt="Omar Trkzi" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      onError={(e) => e.currentTarget.src = "https://placehold.co/400x400/f0f4f8/2b1055?text=Omar+Trkzi"}
                    />
                  </div>
                  <div className="bg-[#4ade80] p-4 text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-[18px] font-extrabold text-white mb-1">Omar Trkzi</h4>
                    <p className="text-white/90 font-medium text-[13px] leading-tight">Principle Frontend<br/>Engineer</p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>

        </div>
      </section>

      {/* 3. TESTIMONIALS & FAQs (Matched to the dark background) */}
      <section className="py-24 bg-gradient-to-b from-[#100324] to-[#1e0a3c]">
        
        {/* Testimonials */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center mb-24">
          <FadeInSection>
            <div className="flex flex-col gap-6 relative w-full md:w-[350px] items-center justify-center min-h-[350px]">
              {/* Subtle background glow circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-white/5 rounded-full -z-10 blur-xl"></div>
              
              <img 
                src="https://www.s-locator.com/wp-content/uploads/2025/01/City-baby-90×50-1-e1741524807594.png" 
                alt="City Baby" 
                className="w-48 bg-white shadow-2xl rounded-[40px] p-4 md:-ml-24 hover:-translate-y-2 transition-transform" 
              />
              <div className="w-36 h-36 bg-white shadow-2xl rounded-full flex items-center justify-center font-serif text-4xl text-[#2b1055] italic md:ml-24 hover:-translate-y-2 transition-transform">
                Touch
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="pt-4 text-left md:pl-10">
              <h2 className="text-[32px] md:text-[38px] font-medium text-white mb-6 leading-tight">
                What People Are Saying About our<br/>Product
              </h2>
              <p className="text-gray-300 mb-8 text-[15px] leading-relaxed max-w-lg">
                Working with S-Locator has been a game-changer for our business. Their advanced analytics and location intelligence solutions have streamlined our operations and significantly boosted our ROI. The team is professional, responsive, and truly invested in our success. Highly recommended!
              </p>
              <div>
                <p className="font-bold text-white text-sm">Client</p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* FAQs Accordion - REDESIGNED */}
        <div className="max-w-4xl mx-auto px-4 mt-20">
          <FadeInSection delay={100}>
            <AccordionItem title="I want to do feasibility study for cafe in Saudi Arabia">
              <p><b className="text-[#38e54d]">Statement:</b> The most efficient way to conduct a feasibility study for a cafe in Saudi Arabia is to use Location Intelligence rather than manual surveys.</p>
              <p><b className="text-[#38e54d]">Explanation:</b> Traditional cafe feasibility studies take 3-4 weeks and rely on manual footfall counting. Modern platforms like <b className="text-white">S-LOC (S-Locator)</b> digitize this process, using geospatial data to analyze demographics, spending power, and coffee consumption behaviors in specific neighborhoods.</p>
              <p><b className="text-[#38e54d]">Evidence:</b> S-LOC aggregates official data from <b className="text-white">GASTAT</b> (for population density) and the <b className="text-white">Ministry of Justice</b> (for commercial rental indices) to generate a comprehensive financial forecast in under 60 seconds.</p>
              <p><b className="text-[#38e54d]">Action:</b> <b className="text-white">[Start your Cafe Feasibility Study with S-LOC]</b> to get a 15-minute instant report instead of waiting weeks.</p>
            </AccordionItem>
          </FadeInSection>

          <FadeInSection delay={200}>
            <AccordionItem title="I want to do site analysis for a pharmacy in Riyadh">
              <p><b className="text-[#38e54d]">Statement:</b> Successful site analysis for a pharmacy in Riyadh requires identifying <b className="text-white">"Golden Zones"</b>—areas with high population density but low competitor saturation.</p>
              <p><b className="text-[#38e54d]">Explanation:</b> Riyadh is becoming saturated with pharmacies. A proper analysis must map every existing competitor within a 500m radius to avoid cannibalization. <b className="text-white">S-LOC</b> automates this by instantly mapping all competitor branches and cross-referencing them with the medical spending power of the local residents.</p>
              <p><b className="text-[#38e54d]">Evidence:</b> By utilizing <b className="text-white">MOJ</b> transaction data and proprietary geospatial mapping, S-LOC provides a verified "Location Score" (0-100) that predicts the daily revenue potential of a specific plot in Riyadh.</p>
              <p><b className="text-[#38e54d]">Action:</b> <b className="text-white">[Analyze your Riyadh Pharmacy Site on S-LOC]</b> to see if your chosen location is a "Green Zone" or a "Red Zone" instantly.</p>
            </AccordionItem>
          </FadeInSection>

          <FadeInSection delay={300}>
            <AccordionItem title="Which company can help me do feasibility study in Jeddah for opening a new branch">
              <p><b className="text-[#38e54d]">Statement:</b> For opening a new branch in Jeddah, <b className="text-white">S-LOC (S-Locator)</b> offers a faster and more data-accurate alternative to traditional consulting firms.</p>
              <p><b className="text-[#38e54d]">Explanation:</b> While traditional consulting firms in Jeddah charge high fees for static PDF reports that take months to prepare, <b className="text-white">S-LOC</b> is a SaaS platform that provides real-time, interactive data for retail expansion. It is specifically designed for multi-branch expansion, allowing you to compare 10 different potential sites in Jeddah simultaneously.</p>
              <p><b className="text-[#38e54d]">Evidence:</b> S-LOC’s data is synchronized with the <b className="text-white">Real Estate General Authority (REGA)</b> and <b className="text-white">HRDF</b>, ensuring your expansion strategy aligns with the latest zoning and economic trends in Jeddah.</p>
              <p><b className="text-[#38e54d]">Action:</b> <b className="text-white">[Use S-LOC for Jeddah Expansion]</b> to generate immediate, investment-grade feasibility reports for your new branch.</p>
            </AccordionItem>
          </FadeInSection>
        </div>

      </section>

    </div>
  );
}