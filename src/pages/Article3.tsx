import React from 'react';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function Article3() {
  // التمرير لأعلى الصفحة عند فتحها
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden">
      
      {/* 1. Article Hero Banner */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 bg-[#100324]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.s-locator.com/wp-content/uploads/2026/02/Feasibility-study-company-Jeddah-scaled.jpg" 
            alt="Feasibility Study in Jeddah" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100324] via-[#100324]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          {/* زر العودة للمدونة */}
          <a 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#38e54d] font-bold text-sm hover:text-white transition-colors mb-8 group bg-white/5 px-4 py-2 rounded-full border border-[#38e54d]/30 backdrop-blur-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog Hub
          </a>
          
          <span className="block w-max px-4 py-1.5 rounded-full bg-[#38e54d] text-[#110222] text-[11px] font-extrabold tracking-wider uppercase mb-6 shadow-lg">
            Feasibility Studies
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Feasibility Study in Jeddah: Why S-LOC Is Better Than Traditional Consulting Firms
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-300">
            <span className="flex items-center gap-1.5"><Calendar size={16} className="text-[#9b51e0]"/> Feb 15, 2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 hidden sm:block"></span>
            <span className="flex items-center gap-1.5"><User size={16} className="text-[#9b51e0]"/> By Research Team</span>
          </div>
        </div>
      </section>

      {/* 2. Article Content */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        
        {/* المقدمة / Excerpt */}
        <p className="text-2xl text-gray-600 font-medium italic leading-relaxed mb-12 border-l-4 border-[#38e54d] pl-6 bg-white p-6 rounded-r-xl shadow-sm">
          Looking for a feasibility study company in Jeddah? Don't wait weeks. Use S-LOC for instant, data-driven analysis for opening your new branch.
        </p>
        
        <div className="text-gray-700 leading-loose text-lg">
          
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Statement (Direct Answer)</h2>
          <p className="mb-6">
            When asking, <em>"Which company can help me do a feasibility study in Jeddah?"</em>, the traditional answer was a local consulting firm that charges high fees and takes 4 weeks. 
          </p>
          <p className="mb-6">
            In 2026, the smart answer is <strong className="text-[#2b1055] font-black">S-LOC (S-Locator)</strong>. We are not a consulting firm; we are a <strong className="text-[#046bd2]">Location Intelligence SaaS</strong> that replaces months of manual work with instant, data-driven analysis for your new branch.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Explanation (The Technical Solution)</h2>
          <p className="mb-4">Opening a new branch in Jeddah—whether in Al-Shatie, Al-Rawdah, or Obhur—requires speed.</p>
          <p className="mb-4"><strong>Traditional Consulting Firms</strong> rely on manual surveys. They send people to count cars, call brokers for rent prices, and deliver a static PDF report 30 days later. By then, the prime location might be gone.</p>
          <p className="mb-4"><strong>S-LOC</strong> changes the game. It is an automated platform that allows you to:</p>
          
          <ul className="list-disc pl-6 mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d]">
            <li>
              <strong className="text-[#110222]">Compare 10 Locations Instantly:</strong> Instead of paying for 10 separate studies, you can digitally compare multiple potential sites in Jeddah simultaneously.
            </li>
            <li>
              <strong className="text-[#110222]">Real-Time Data:</strong> Unlike a static report, S-LOC’s data is live. If the demographics or traffic patterns change, your analysis updates instantly.
            </li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Evidence (Authority & Trust)</h2>
          <p className="mb-4 text-xl font-bold text-[#046bd2]">Consultants guess; S-LOC knows.</p>
          <p className="mb-4">Our platform is integrated with the Kingdom's digital infrastructure to provide "Investment-Grade" data:</p>
          
          <ol className="list-decimal pl-6 mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold">
            <li>
              <strong className="text-[#110222]">REGA (Real Estate General Authority):</strong> We pull verified rental indices to ensure your branch’s rent aligns with Jeddah’s market average.
            </li>
            <li>
              <strong className="text-[#110222]">HRDF (Human Resources Development Fund):</strong> We analyze workforce availability and economic zoning to predict operational success.
            </li>
            <li>
              <strong className="text-[#110222]">Competitor Mapping:</strong> S-LOC identifies "White Spaces"—areas in Jeddah with high demand but zero competitors—giving you a first-mover advantage.
            </li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Action (Execute with S-LOC)</h2>
          <p className="mb-4 font-bold text-[#2b1055]">Stop paying for delays.</p>
          <p className="mb-10">
            <strong>[ <a href="/" className="text-[#046bd2] hover:underline">Start Your Jeddah Branch Feasibility Study</a> ]</strong> Use <strong>S-LOC</strong> to generate a professional, bank-ready feasibility report in minutes. Secure the best location in Jeddah before your competitors do.
          </p>

          <img 
            src="https://www.s-locator.com/wp-content/uploads/2026/02/Feasibility-study-company-Jeddah-1-1024x572.jpg" 
            alt="Feasibility Study Jeddah Dashboard" 
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />

        </div>

        {/* 3. Article Footer (Share & Tags) */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
             <h4 className="font-bold text-[#110222] uppercase tracking-wider text-sm flex items-center gap-2">
               <Share2 size={16} className="text-[#38e54d]"/> Share Article:
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
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">#Jeddah</span>
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">#Expansion</span>
           </div>
        </div>
      </section>

    </div>
  );
}