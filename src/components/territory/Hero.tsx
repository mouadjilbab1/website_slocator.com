import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-20 pb-24 border-b border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#44E559]"></span>
              <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                Powered by <a href="https://northernacs.com" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Northern Analytics</a>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Maximize Field Efficiency. <span className="text-purple-600">Minimize Travel.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              Design perfectly balanced sales territories and generate mathematically optimized daily routes for your field teams across Saudi Arabia. Stop guessing, start executing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://s-locator.northernacs.com/" target="_blank" rel="noopener noreferrer" className="bg-[#44E559] hover:bg-[#3bc24d] text-slate-900 px-8 py-3.5 rounded-md font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#44E559]/20 w-fit">
                Start planning your territories
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
              <a href="#how-it-works" className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-md font-semibold flex items-center justify-center transition-all w-fit">
                View how it works
              </a>
            </div>
          </div>
          
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-[#44E559]/20 rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-purple-50 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-600">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Riyadh Territory: Team A</div>
                    <div className="text-xs text-slate-500">Route Optimized • 12 Stops</div>
                  </div>
                </div>
                <div className="bg-[#44E559]/20 text-purple-900 text-sm font-bold px-3 py-1 rounded-full">
                  -30% Travel Time
                </div>
              </div>
              
              <div className="relative bg-slate-50 rounded-lg h-48 border border-slate-200 mb-4 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50"></div>
                <svg width="100%" height="100%" className="absolute inset-0 z-10 p-4" style={{ overflow: 'visible' }}>
                  <path d="M 40 120 C 80 120, 100 60, 150 50 S 200 130, 260 140 S 300 80, 340 70" fill="none" stroke="#9333ea" strokeWidth="3" strokeDasharray="6,6" className="animate-pulse"/>
                  <circle cx="40" cy="120" r="6" fill="#10b981" stroke="#fff" strokeWidth="2"/>
                  <circle cx="150" cy="50" r="6" fill="#9333ea" stroke="#fff" strokeWidth="2"/>
                  <circle cx="260" cy="140" r="6" fill="#9333ea" stroke="#fff" strokeWidth="2"/>
                  <circle cx="340" cy="70" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2"/>
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">Est. Time Saved</div>
                  <div className="text-xl font-bold text-[#44E559]">2h 15m</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="text-xs text-slate-500 mb-1">Fuel Efficiency</div>
                  <div className="text-xl font-bold text-purple-600">+18%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;