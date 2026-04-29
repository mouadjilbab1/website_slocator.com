import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { name: 'Get Report', href: 'https://s-locator.northernacs.com/landing?' },
    { name: 'Signup', href: 'https://s-locator.northernacs.com/sign-up' },
    { name: 'Home', href: '/', active: true },
    { name: 'About', href: '/about' },
  ];

  // تم إضافة جميع الخدمات الثمانية مع الروابط الصحيحة
  const solutionsLinks = [
    { name: 'Point of Interest (POI) Locator', href: '/solutions/point-of-interest-locator' },
    { name: 'Area Population Density', href: '/solutions/area-population-density-intelligence' },
    { name: 'Real Estate Pricing Intelligence', href: '/solutions/real-estate-area-pricing-intelligence' },
    { name: 'Road Traffic Data Intelligence', href: '/solutions/road-traffic-data-intelligence' },
    { name: 'Environment Intelligence', href: '/solutions/environment-intelligence' },
    { name: 'Area Income Intelligence', href: '/solutions/area-income-intelligence' },
    { name: 'Infrastructure Location Intelligence', href: '/solutions/infrastructure-location-intelligence' },
    { name: 'Area Internet Usage Intelligence', href: '/solutions/area-internet-usage-intelligence' },
  ];

  return (
    <nav className="bg-[#0a0f1c] text-white border-b border-white/5 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="https://www.s-locator.com/wp-content/uploads/2024/10/cropped-S-LOC-FF-02-2-scaled-208x74.png" 
                alt="S-LOC Logo" 
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`text-[15px] font-medium transition-colors hover:text-[#9b51e0] ${link.active ? 'text-[#9b51e0]' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors py-8"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                Solutions <ChevronDown size={16} className="ml-1" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 w-80 bg-[#110222] border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                {solutionsLinks.map((subLink, idx) => (
                  <a 
                    key={idx} 
                    href={subLink.href} 
                    className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#9b51e0]/10 hover:text-[#38e54d] transition-colors"
                  >
                    {subLink.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/contact" className="text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors">Contact</a>
            <a href="/blog" className="text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors">Blog</a>
            
            {/* Language Switcher */}
            <div className="relative group ml-4 pl-4 border-l border-white/20">
              <button 
                className="flex items-center text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors py-8"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <img src="https://www.s-locator.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.svg" alt="EN" className="w-4 h-4 mr-2 rounded-sm" />
                English <ChevronDown size={16} className="ml-1" />
              </button>

              <div 
                className={`absolute top-full right-0 w-32 bg-[#110222] border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${isLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <a href="#" className="flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-[#9b51e0]/10 hover:text-white transition-colors">
                  <img src="https://www.s-locator.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/sa.svg" alt="AR" className="w-4 h-4 mr-2 rounded-sm" />
                  Arabic
                </a>
              </div>
            </div>
          </div>

          {/* 3. Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#38e54d] focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[800px] border-b border-white/10' : 'max-h-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 bg-[#0a0f1c] space-y-1">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              className={`block px-3 py-3 rounded-md text-base font-medium ${link.active ? 'text-[#9b51e0] bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="px-3 py-3 text-base font-medium text-gray-300">
            Solutions
            <div className="mt-2 ml-4 space-y-2 border-l border-white/10 pl-4">
               {solutionsLinks.map((subLink, idx) => (
                 <a key={idx} href={subLink.href} className="block py-2 text-sm text-gray-400 hover:text-[#38e54d]">
                   {subLink.name}
                 </a>
               ))}
            </div>
          </div>
          
          <a href="/contact" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Contact</a>
          <a href="/blog" className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Blog</a>
          
          <div className="pt-4 mt-2 border-t border-white/10">
            <a href="#" className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white">
              <img src="https://www.s-locator.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/sa.svg" alt="AR" className="w-5 h-5 mr-3 rounded-sm" />
              Switch to Arabic
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}