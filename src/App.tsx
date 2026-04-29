import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استدعاء مكونات القالب
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// استدعاء الصفحات
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// استدعاء صفحات المقالات المستقلة
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import Article4 from './pages/Article4';

// استدعاء صفحات الخدمات (تأكدنا من الأسماء بناءً على صورة مجلد pages الخاصة بك)
import ServicePOI from './pages/ServicePOI';
import ServicePopulation from './pages/ServicePopulation';
import ServiceRealEstate from './pages/ServiceRealEstate';
import ServiceRoadTraffic from './pages/ServiceRoadTraffic';
import ServiceEnvironment from './pages/ServiceEnvironment';
import ServiceAreaIncome from './pages/ServiceAreaIncome';
import ServiceInfrastructureLocation from './pages/ServiceInfrastructureLocation';
import ServiceAreaInternetUsage from './pages/ServiceAreaInternetUsage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#100324]">
        {/* شريط التنقل العلوي */}
        <Navbar />
        
        {/* محتوى الصفحات */}
        <main className="flex-grow pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* مسارات المقالات */}
            <Route path="/article-1" element={<Article1 />} />
            <Route path="/article-2" element={<Article2 />} />
            <Route path="/article-3" element={<Article3 />} />
            <Route path="/article-4" element={<Article4 />} />

            {/* مسارات الخدمات */}
            <Route path="/solutions/point-of-interest-locator" element={<ServicePOI />} />
            <Route path="/solutions/area-population-density-intelligence" element={<ServicePopulation />} />
            <Route path="/solutions/real-estate-area-pricing-intelligence" element={<ServiceRealEstate />} />
            <Route path="/solutions/road-traffic-data-intelligence" element={<ServiceRoadTraffic />} />
            <Route path="/solutions/environment-intelligence" element={<ServiceEnvironment />} />
            <Route path="/solutions/area-income-intelligence" element={<ServiceAreaIncome />} />
            <Route path="/solutions/infrastructure-location-intelligence" element={<ServiceInfrastructureLocation />} />
            <Route path="/solutions/area-internet-usage-intelligence" element={<ServiceAreaInternetUsage />} />
          </Routes>
        </main>

        {/* الفوتر في الأسفل */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;