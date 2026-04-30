import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">The High Cost of Inefficient Routing</h2>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
          Without data-driven territory design, companies leak margin every single day. Decisions based on guesswork lead to burnt-out teams and wasted operational budgets.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 border border-red-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-400">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Wasted Drive Time</h3>
            <p className="text-slate-400 text-sm">Field teams spend up to 40% of their day stuck in traffic crossing paths with other reps due to overlapping territories.</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-400">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Unbalanced Workloads</h3>
            <p className="text-slate-400 text-sm">Some reps are overwhelmed with stops, while others finish early. Unfair territories kill morale and cause high turnover.</p>
          </div>
          <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
            <div className="w-12 h-12 bg-[#44E559]/10 rounded-lg flex items-center justify-center mb-4 border border-[#44E559]/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#44E559]">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Lost Revenue & ROI</h3>
            <p className="text-slate-400 text-sm">Every extra mile driven translates directly into wasted fuel, vehicle wear-and-tear, and fewer customer visits per day.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;