
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import VatMtd from './pages/VatMtd';
import Accountants from './pages/Accountants';
import Security from './pages/Security';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import About from './pages/About';
import Faq from './pages/Faq';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Cookies from './pages/legal/Cookies';
import SignIn from './pages/SignIn';
import BookDemo from './pages/BookDemo';
import ToolsPage from './app/tools/page';
import VatCalculator from './app/tools/vat-calculator/page';
import ProfitMarginCalculator from './app/tools/profit-margin-calculator/page';
import ResourcesHub from './app/resources/page';
import Dashboard from './app/app/dashboard/page';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/vat-mtd" element={<VatMtd />} />
            <Route path="/accountants" element={<Accountants />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/cookies" element={<Cookies />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/resources" element={<ResourcesHub />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/vat-calculator" element={<VatCalculator />} />
            <Route path="/tools/profit-margin-calculator" element={<ProfitMarginCalculator />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
