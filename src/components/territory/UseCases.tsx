import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Empowering Every Field Operation</h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Designed for complex multi-city operations, S-Locator scales from a dozen sales reps to a fleet of hundreds of delivery vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600 mb-4">
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
            </svg>
            <h3 className="font-bold text-lg mb-2 text-slate-900">B2B Sales Teams</h3>
            <p className="text-sm text-slate-600">Ensure account managers spend their time talking to clients instead of navigating traffic.</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#44E559] mb-4">
              <rect width="16" height="16" x="4" y="4" rx="2" ry="2"/><rect width="6" height="6" x="9" y="9" rx="1" ry="1"/><path d="M9 15v2"/><path d="M9 7v2"/><path d="M15 9h2"/><path d="M7 9h2"/>
            </svg>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Logistics & Delivery</h3>
            <p className="text-sm text-slate-600">Generate dense, efficient daily drop-off routes for fleet drivers to lower fuel costs.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-purple-600 mb-4">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Maintenance Crews</h3>
            <p className="text-sm text-slate-600">Dispatch field engineers and service technicians logically based on geographic zones.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-amber-600 mb-4">
              <path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h10.96"/>
            </svg>
            <h3 className="font-bold text-lg mb-2 text-slate-900">Pharma & FMCG</h3>
            <p className="text-sm text-slate-600">Structure medical representative boundaries to maximize daily pharmacy and clinic visits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;