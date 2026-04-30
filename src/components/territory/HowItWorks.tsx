import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Plan Your Fleet in 3 Simple Steps</h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div className="bg-white text-center">
              <div className="w-16 h-16 mx-auto bg-purple-50 border-2 border-purple-200 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Define Locations</h3>
              <p className="text-slate-600">
                Import your customer addresses, clinic locations, or delivery stops into the S-Locator system.
              </p>
            </div>

            <div className="bg-white text-center">
              <div className="w-16 h-16 mx-auto bg-purple-50 border-2 border-purple-200 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Generate Territories</h3>
              <p className="text-slate-600">
                Specify your number of reps or vehicles. Our engine draws optimal, non-overlapping borders instantly.
              </p>
            </div>

            <div className="bg-white text-center">
              <div className="w-16 h-16 mx-auto bg-[#44E559]/10 border-2 border-[#44E559]/30 text-[#3bc24d] rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dispatch Routes</h3>
              <p className="text-slate-600">
                Export the perfectly sequenced driving directions straight to your team's smartphones via Google Maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;