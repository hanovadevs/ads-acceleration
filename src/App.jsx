import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import FreeVsPaidToolsPage from './pages/FreeVsPaidToolsPage';
import AboutPage from './pages/AboutPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import PricingPage from './pages/PricingPage';
import ReportingPage from './pages/ReportingPage';
import BookCallPage from './pages/BookCallPage';
import ToolDetailPage from './pages/ToolDetailPage';
import PlaceholderPage from './pages/PlaceholderPage';

// Scroll To Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/free-amazon-ppc-tools" element={<FreeVsPaidToolsPage />} />
            <Route path="/tools/:slug" element={<ToolDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/agency-pricing" element={<PricingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/reporting" element={<ReportingPage />} />
            <Route path="/book-call" element={<BookCallPage />} />
            
            {/* Placeholders */}
            <Route path="/blog" element={<PlaceholderPage title="Marketing Blog & Playbooks" />} />
            <Route path="/blog/:slug" element={<PlaceholderPage title="Blog Article" />} />
            <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
            <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
