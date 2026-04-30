import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-purple-700 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-800 blur-3xl opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Stop Wasting Time on the Road</h2>
        <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
          Take control of your field operations. Start planning smarter, fairer, and faster territories today.
        </p>
        <a 
          href="https://s-locator.northernacs.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex bg-[#44E559] text-slate-900 hover:bg-[#3bc24d] px-10 py-4 rounded-md font-bold text-lg items-center justify-center gap-2 mx-auto transition-all shadow-xl shadow-slate-900/10"
        >
          Start Planning Smarter Today
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default CTA;