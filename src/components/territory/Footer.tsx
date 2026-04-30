import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/images/logo-s-loc-01.png" 
              alt="S-Locator Logo" 
              className="h-8 w-auto grayscale brightness-200 opacity-80" 
            />
          </div>
          
          <div className="text-sm">
            &copy; {currentYear} S-Locator | by <a href="https://northernacs.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors font-medium">Northern Analytics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;