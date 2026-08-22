import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.pathname === '/';
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl py-3 border-b border-white/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-heading text-2xl font-bold flex items-center gap-1"
        >
          <motion.span
            className={scrolled ? 'text-[#2C3E50]' : 'text-[#D4AF37]'}
            whileHover={{ rotate: [-2, 2, -2, 0] }}
            transition={{ duration: 0.3 }}
          >
            Studio
          </motion.span>
          <span className="text-[#D4AF37] relative">
            Design
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D4AF37]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
            />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => {
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-300 cursor-hover text-[#D4AF37] hover:text-purple-500`}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#D4AF37]"
                  initial={{ width: 0 }}
                  animate={{ width: active ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-purple-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            );
          })}

          {/* Get Quote button – now links to /quote */}
          <div className="flex items-center gap-3">
            <Link to="/quote">
              <motion.button
                className="relative overflow-hidden bg-[#D4AF37] text-[#1A1A2E] px-6 py-2 rounded-full text-sm font-medium shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 cursor-hover hover:bg-purple-500 hover:text-white hover:shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Get Quote</span>
                <motion.span
                  className="absolute inset-0 bg-purple-500/20"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </Link>
          </div>
        </div>

        {/* Mobile – Quote button links to /quote + hamburger */}
        <div className="lg:hidden flex items-center gap-3">
          <Link to="/quote">
            <motion.button
              className="relative overflow-hidden bg-[#D4AF37] text-[#1A1A2E] px-4 py-1.5 rounded-full text-xs font-medium shadow-lg shadow-[#D4AF37]/30 transition-all duration-300 cursor-hover hover:bg-purple-500 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Quote</span>
              <motion.span
                className="absolute inset-0 bg-purple-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </Link>

          {/* Hamburger */}
          <button
            className="relative z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5 cursor-pointer">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-[#D4AF37]' : 'bg-white'
                }`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-[#D4AF37]' : 'bg-white'
                }`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? 'bg-[#D4AF37]' : 'bg-white'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-medium text-[#D4AF37] hover:text-purple-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;