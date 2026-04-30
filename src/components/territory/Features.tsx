import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-purple-600 font-semibold tracking-wide uppercase text-sm mb-3">Enterprise Optimization Tool</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Built for Saudi Operations</h3>
          <p className="text-lg text-slate-600">
            S-Locator transforms raw customer addresses into strategically balanced regions and automated, turn-by-turn daily routes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Data-Driven Territory Balancing</h4>
              <p className="text-slate-600 leading-relaxed">
                Automatically divide your client base into fair, equitable territories based on geographic density, expected revenue, or required visit frequency.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#44E559]/10 border border-[#44E559]/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#3bc24d]">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Smart Route Optimization</h4>
              <p className="text-slate-600 leading-relaxed">
                Our algorithm sequences multi-stop routes to minimize driving time. We account for Saudi traffic patterns and physical distance to generate the perfect path.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-purple-600">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Google Maps Integration</h4>
              <p className="text-slate-600 leading-relaxed">
                Once routes are optimized, dispatch them directly. Your field reps receive a seamless Google Maps navigation link containing their perfectly sequenced daily stops.
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-amber-600">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Performance Tracking</h4>
              <p className="text-slate-600 leading-relaxed">
                Monitor operational KPIs. Measure planned versus actual driving times to continuously refine your territory mapping and boost total fleet productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;