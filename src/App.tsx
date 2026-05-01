import React from 'react'
// تم إضافة Outlet إلى الاستدعاءات
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

// استدعاء مكونات القالب
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// استدعاء الصفحات
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

// استدعاء صفحات المقالات المستقلة
import Article1 from './pages/Article1'
import Article2 from './pages/Article2'
import Article3 from './pages/Article3'
import Article4 from './pages/Article4'

// استدعاء صفحات الخدمات
import ServicePOI from './pages/ServicePOI'
import ServicePopulation from './pages/ServicePopulation'
import ServiceRealEstate from './pages/ServiceRealEstate'
import ServiceRoadTraffic from './pages/ServiceRoadTraffic'
import ServiceEnvironment from './pages/ServiceEnvironment'
import ServiceAreaIncome from './pages/ServiceAreaIncome'
import ServiceInfrastructureLocation from './pages/ServiceInfrastructureLocation'
import ServiceAreaInternetUsage from './pages/ServiceAreaInternetUsage'

// استدعاء صفحة الهبوط المستقلة
import SLocatorPage from './pages/SLocatorPage'

// ==========================================
// 1. إنشاء غلاف الموقع الأساسي (يحتوي على الهيدر والفوتر)
// ==========================================
const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#100324]">
      {/* شريط التنقل العلوي */}
      <Navbar />

      {/* محتوى الصفحات الأساسية */}
      <main className="flex-grow pt-[80px]">
        {/* سيتم عرض محتوى الصفحات التي بداخل MainLayout هنا */}
        <Outlet />
      </main>

      {/* الفوتر في الأسفل */}
      <Footer />
    </div>
  )
}

// ==========================================
// 2. المكون الرئيسي والتوجيهات (Routes)
// ==========================================
function App() {
  return (
    <Router>
      <Routes>
        {/* === المجموعة الأولى: مسارات الموقع الأساسي (مع الهيدر والفوتر) === */}
        <Route element={<MainLayout />}>
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
          <Route
            path="/solutions/area-population-density-intelligence"
            element={<ServicePopulation />}
          />
          <Route
            path="/solutions/real-estate-area-pricing-intelligence"
            element={<ServiceRealEstate />}
          />
          <Route
            path="/solutions/road-traffic-data-intelligence"
            element={<ServiceRoadTraffic />}
          />
          <Route path="/solutions/environment-intelligence" element={<ServiceEnvironment />} />
          <Route path="/solutions/area-income-intelligence" element={<ServiceAreaIncome />} />
          <Route
            path="/solutions/infrastructure-location-intelligence"
            element={<ServiceInfrastructureLocation />}
          />
          <Route
            path="/solutions/area-internet-usage-intelligence"
            element={<ServiceAreaInternetUsage />}
          />
        </Route>

        {/* === المجموعة الثانية: مسار صفحة الهبوط المستقلة === */}
        {/* لأنها خارج MainLayout، ستعمل بدون الـ Navbar والـ Footer الخاصين بالموقع الأساسي */}
        <Route path="/territory-planning" element={<SLocatorPage />} />
      </Routes>
    </Router>
  )
}

export default App
