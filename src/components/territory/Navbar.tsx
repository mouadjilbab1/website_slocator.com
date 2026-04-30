import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/">
            <img 
              src="/assets/images/logo-s-loc-01.png" 
              alt="S-Locator Logo" 
              className="h-8 w-auto max-w-[150px]" 
            />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">Features</a>
          <a href="#use-cases" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">Use Cases</a>
          <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors">Benefits</a>
        </div>
        <div className="flex items-center">
          <a 
            href="https://s-locator.northernacs.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm"
          >
            Start Planning
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;