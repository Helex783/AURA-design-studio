import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import ScrollProgress from './components/common/ScrollProgress';

// ❌ REMOVE this line:
// import BackToTop from './components/common/BackToTop';
import Loader from './components/common/Loader';


// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import BlogDetail from './pages/BlogDetail';
import Quote from './pages/Quote';
import QuoteSuccess from './pages/QuoteSuccess';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <div className="font-body antialiased bg-[#0a0a0a] text-[#e0e0e0]">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/quote-success" element={<QuoteSuccess />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
        {/* ❌ REMOVE this line: <BackToTop /> */}
      </div>
    </Router>
  );
}

export default App;