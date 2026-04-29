import React, { useState, useEffect, useRef } from 'react';
import { Calendar, User, ArrowUpRight, ArrowRight, Search } from 'lucide-react';

// =========================================
// Helper Component: Fade In Animation
// =========================================
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current!);
      }
    }, { threshold: 0.1 });
    
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={domRef} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// =========================================
// Main Blog Page Component
// =========================================
export default function Blog() {
  
  // 1. المقال الأول (الرئيسي - Featured)
  const featuredPost = {
    title: "Best Way to Do a Feasibility Study in Riyadh (2026 Complete Guide)",
    excerpt: "Discover the best way to conduct a feasibility study in Riyadh in 2026 using data-driven location analysis, demographic insights, and competitor mapping to reduce risk and increase success.",
    category: "Feasibility Studies",
    date: "Feb 17, 2026",
    author: "Research Team",
    image: "https://www.s-locator.com/wp-content/uploads/2026/02/Feasibility-Study-in-Riyadh-scaled.jpg",
    link: "/article-1" 
  };

  // 2. باقي المقالات (الشبكة - Regular Posts)
  const regularPosts = [
    {
      id: 2,
      title: "Finding 'Golden Zones' in Riyadh: How to Spot High-Profit Locations",
      excerpt: "Starting a Cloud Kitchen? Don't pay for footfall. Use S-LOC to find 'Sweet Spots' in Riyadh—low rent warehouses with high delivery density.",
      category: "Market Analysis",
      date: "Feb 16, 2026",
      author: "Research Team",
      image: "https://www.s-locator.com/wp-content/uploads/2026/02/Cloud-kitchen-feasibility-Saudi-Arabia-scaled.jpg",
      link: "/article-2" 
    },
    {
      id: 3,
      title: "Feasibility Study in Jeddah: Why S-LOC Is Better Than Traditional Consulting Firms",
      excerpt: "Looking for a feasibility study company in Jeddah? Don't wait weeks. Use S-LOC for instant, data-driven analysis for opening your new branch.",
      category: "Consulting",
      date: "Feb 15, 2026",
      author: "Research Team",
      image: "https://www.s-locator.com/wp-content/uploads/2026/02/Feasibility-study-company-Jeddah-scaled.jpg",
      link: "/article-3"
    },
    {
      id: 4,
      title: "Site Analysis for a Pharmacy in Riyadh: How to Avoid Market Saturation",
      excerpt: "Opening a pharmacy in Riyadh? Avoid saturation and cannibalization. Use S-LOC's instant site analysis to find profitable 'Golden Zones' today.",
      category: "Site Analysis",
      date: "Feb 15, 2026",
      author: "Research Team",
      image: "https://www.s-locator.com/wp-content/uploads/2026/02/Site-analysis-for-pharmacy-in-Riyadh-scaled.jpg",
      link: "/article-4"
    }
  ];

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden">
      
      {/* 1. CREATIVE BLOG HERO */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center bg-[#100324] overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#38e54d]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#9b51e0]/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <FadeInSection>
            <span className="px-5 py-2 rounded-full bg-white/5 border border-[#38e54d]/30 text-[#38e54d] text-[11px] font-extrabold tracking-[0.2em] uppercase mb-8 inline-block backdrop-blur-md">
              Knowledge Hub
            </span>
            <h1 className="text-5xl md:text-[72px] font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38e54d] to-[#8eea9e]">Intelligence</span>
            </h1>
            <p className="text-gray-300 text-[16px] md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Stay ahead of the curve with our latest articles on location intelligence, market trends, and data-driven retail expansion.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 2. MAIN BLOG CONTENT */}
      <section className="py-20 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 z-20">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* LEFT: Articles Area */}
          <div className="lg:w-[65%]">
            
            {/* Featured Post */}
            <FadeInSection>
              <a href={featuredPost.link} className="block mb-16 group cursor-pointer">
                <div className="relative overflow-hidden rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] mb-8 h-[350px] md:h-[450px]">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100324]/80 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-[#38e54d] text-[#110222] text-[11px] font-extrabold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                    {featuredPost.category}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 md:hidden">
                    <h2 className="text-2xl font-black text-white leading-tight drop-shadow-md group-hover:text-[#38e54d] transition-colors">
                      {featuredPost.title}
                    </h2>
                  </div>
                </div>
                
                <div className="hidden md:block pr-6">
                  <div className="flex items-center gap-4 text-[13px] font-bold text-gray-400 mb-4 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-[#9b51e0]"/> {featuredPost.date}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38e54d]"></span>
                    <span className="flex items-center gap-1.5"><User size={16} className="text-[#9b51e0]"/> {featuredPost.author}</span>
                  </div>
                  <h2 className="text-3xl md:text-[38px] font-black text-[#2b1055] leading-tight mb-5 group-hover:text-[#046bd2] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-[16px] leading-relaxed mb-6 border-l-4 border-[#38e54d] pl-5 font-medium">
                    {featuredPost.excerpt}
                  </p>
                  <span className="flex items-center gap-2 text-[#046bd2] font-extrabold group-hover:text-[#110222] transition-colors uppercase tracking-wider text-sm">
                    Read Full Article <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </a>
            </FadeInSection>

            {/* Grid of Regular Posts */}
            <div className="grid sm:grid-cols-2 gap-8">
              {regularPosts.map((post, idx) => (
                <FadeInSection key={post.id} delay={idx * 150}>
                  <a 
                    href={post.link}
                    className="bg-white rounded-[20px] shadow-sm border border-gray-100 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col h-full cursor-pointer"
                  >
                    <div className="h-[220px] overflow-hidden relative">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#2b1055] text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-[12px] font-bold text-gray-400 mb-3 uppercase tracking-wide">
                        <span className="flex items-center gap-1.5"><Calendar size={14}/> {post.date}</span>
                      </div>
                      <h3 className="text-[20px] font-black text-[#2b1055] leading-snug mb-3 group-hover:text-[#046bd2] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow line-clamp-3 font-medium">
                        {post.excerpt}
                      </p>
                      <span className="mt-auto self-start flex items-center gap-2 text-[#9b51e0] font-extrabold text-[13px] group-hover:text-[#2b1055] transition-colors uppercase tracking-wide">
                        Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </a>
                </FadeInSection>
              ))}
            </div>

          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:w-[35%]">
            <div className="sticky top-28 space-y-10">
              
              {/* Search Box */}
              <FadeInSection delay={100}>
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                  <h4 className="text-[18px] font-black text-[#2b1055] mb-6 flex items-center gap-2 uppercase tracking-wide">
                    <Search size={20} className="text-[#38e54d]" /> Search
                  </h4>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Type keywords..." 
                      className="w-full bg-[#fafbfc] border border-gray-200 text-gray-800 text-[15px] font-medium rounded-lg focus:ring-2 focus:ring-[#38e54d] focus:border-transparent outline-none py-4 pl-5 pr-14 transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#100324] text-[#38e54d] p-2 rounded-md hover:bg-[#38e54d] hover:text-[#100324] transition-colors shadow-md">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </FadeInSection>

              {/* Categories */}
              <FadeInSection delay={200}>
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                  <h4 className="text-[18px] font-black text-[#2b1055] mb-6 uppercase tracking-wide">Categories</h4>
                  <ul className="space-y-2">
                    {['Retail Trends', 'Healthcare Intelligence', 'Data Science', 'Market Analysis', 'Feasibility Studies'].map((cat, idx) => (
                      <li key={idx}>
                        <a href="#" className="flex justify-between items-center text-gray-600 font-bold text-[14px] hover:text-[#100324] transition-colors p-3 hover:bg-[#38e54d]/10 rounded-lg group">
                          <span>{cat}</span>
                          <span className="bg-gray-100 text-gray-500 group-hover:bg-[#38e54d] group-hover:text-[#100324] px-2.5 py-1 rounded text-[11px] transition-colors">
                            {Math.floor(Math.random() * 20) + 1}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              {/* Popular Tags */}
              <FadeInSection delay={300}>
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                  <h4 className="text-[18px] font-black text-[#2b1055] mb-6 uppercase tracking-wide">Popular Tags</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {['S-LOC', 'Riyadh', 'Jeddah', 'Pharmacies', 'Demographics', 'Expansion', 'SaaS', 'ROI'].map((tag, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 font-bold text-[12px] uppercase tracking-wider rounded-md hover:bg-[#100324] hover:text-[#38e54d] hover:border-[#100324] transition-all"
                      >
                        #{tag}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInSection>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}