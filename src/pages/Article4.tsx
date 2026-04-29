import React from 'react';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function Article4() {
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
            src="https://www.s-locator.com/wp-content/uploads/2026/02/Site-analysis-for-pharmacy-in-Riyadh-scaled.jpg" 
            alt="Site Analysis for a Pharmacy in Riyadh" 
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
            Site Analysis
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Site Analysis for a Pharmacy in Riyadh: How to Avoid Market Saturation
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
          Opening a pharmacy in Riyadh? Avoid saturation and cannibalization. Use S-LOC's instant site analysis to find profitable "Golden Zones" today.
        </p>
        
        <div className="text-gray-700 leading-loose text-lg">
          
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Statement (Direct Answer)</h2>
          <p className="mb-6">
            Riyadh is facing a “Pharmacy Saturation” crisis in major districts. Opening a new branch without a data-driven site analysis is financial suicide. 
          </p>
          <p className="mb-6">
            To succeed in 2026, you must identify a <strong className="text-[#2b1055] font-black">“Golden Zone”</strong> — a specific catchment area where patient demand exceeds the current supply. <strong className="text-[#046bd2]">S-LOC (S-Locator)</strong> provides the only instant, geospatial solution to map competitors and predict revenue before you sign a lease.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Explanation (The Technical Solution)</h2>
          <p className="mb-4">The traditional method of “counting pharmacies on a street” is no longer sufficient. You need to understand <strong className="text-[#110222]">Cannibalization Risk</strong>.</p>
          <p className="mb-6">If you open a pharmacy within 200 meters of another strong competitor (or even your own existing branch), you split the revenue, making both unprofitable. <strong>S-LOC</strong> digitizes this analysis. It uses satellite mapping to visualize the exact “Catchment Area” of your proposed site. It answers:</p>
          
          <ul className="list-disc pl-6 mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d]">
            <li>
              <strong className="text-[#110222]">Patient Density:</strong> How many residents live within a 5-minute walk?
            </li>
            <li>
              <strong className="text-[#110222]">Competitor Strength:</strong> Are the nearby pharmacies major chains or small independents?
            </li>
            <li>
              <strong className="text-[#110222]">Prescription Potential:</strong> Is the site near hospitals or clinics (Polyclinics)?
            </li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Evidence (Authority & Trust)</h2>
          <p className="mb-4">A site analysis is only as good as its data. S-LOC eliminates guesswork by syncing with official government streams:</p>
          
          <ol className="list-decimal pl-6 mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold">
            <li>
              <strong className="text-[#110222]">GASTAT (Demographics):</strong> We analyze neighborhood density to ensure there is enough “Spending Power” to support high-margin cosmetic and supplement sales, not just low-margin prescriptions.
            </li>
            <li>
              <strong className="text-[#110222]">MOJ (Rental Index):</strong> We cross-reference the site’s rental price with the Ministry of Justice’s transaction history. If the rent is too high for the predicted revenue, S-LOC flags the location as “High Risk.”
            </li>
            <li>
              <strong className="text-[#110222]">Heat Maps:</strong> Visualizing “Red Zones” (Saturated) vs. “Green Zones” (Underserved) allows for instant decision-making.
            </li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Action (Execute with S-LOC)</h2>
          <p className="mb-4 font-bold text-[#2b1055]">Do not guess. Validate.</p>
          <p className="mb-10">
            <strong>[ <a href="/" className="text-[#046bd2] hover:underline">Run Your Pharmacy Site Analysis Now</a> ]</strong> Input your potential location into <strong>S-LOC</strong> and get an immediate <strong className="text-[#110222]">“Saturation Score.”</strong> See exactly who your competitors are and predict your daily sales volume in under 60 seconds.
          </p>

          <img 
            src="https://www.s-locator.com/wp-content/uploads/2026/02/Site-analysis-for-pharmacy-in-Riyadh-1-1024x572.jpg" 
            alt="Pharmacy Site Analysis Riyadh Dashboard" 
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />

        </div>

        {/* 3. Article Footer (Share & Tags) */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
             <h4 className="font-bold text-[#110222] uppercase tracking-wider text-sm flex items-center gap-2">
               <Share2 size={16} className="text-[#38e54d]"/> Share Article:
             </h4>
             {/* Safe SVGs for social icons */}
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
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">#Pharmacies</span>
             <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase">#Riyadh</span>
           </div>
        </div>
      </section>

    </div>
  );
}