import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="text-center px-4">
              <div className="text-4xl font-extrabold text-[#44E559] mb-2">30%</div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">Less Travel Time</h4>
              <p className="text-sm text-slate-500">Average reduction in daily driving hours.</p>
            </div>
            
            <div className="text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-extrabold text-purple-600 mb-2">+15%</div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">More Stops</h4>
              <p className="text-sm text-slate-500">Increase in daily client visits and deliveries.</p>
            </div>

            <div className="text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-extrabold text-amber-500 mb-2">$$$</div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">Lower Fuel Costs</h4>
              <p className="text-sm text-slate-500">Direct operational savings per vehicle.</p>
            </div>

            <div className="text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-extrabold text-purple-600 mb-2">100%</div>
              <h4 className="font-bold text-slate-900 text-lg mb-1">Fair Distribution</h4>
              <p className="text-sm text-slate-500">Equitable workload balancing for reps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;