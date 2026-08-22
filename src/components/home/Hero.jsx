import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { heroTextReveal } from '../../utils/animations';

// Create a motion-enhanced Link component
const MotionLink = motion(Link);

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [particles] = useState(() =>
    Array.from({ length: 8 }, () => ({
      left: 5 + Math.random() * 90,
      top: 5 + Math.random() * 90,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
    }))
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth - 0.5, y: e.clientY / window.innerHeight - 0.5 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&crop=center"
          alt="Luxury Architecture"
          className="w-full h-full object-cover"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px) scale(1.05)`,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/95 via-[#1A1A2E]/80 to-transparent" />
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.2), transparent 70%)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={heroTextReveal}
            initial="hidden"
            animate="show"
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
          >
            Crafting Spaces <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F39C12] to-[#D4AF37] bg-clip-text text-transparent">
              That Inspire
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed"
          >
            We create architectural masterpieces and luxurious interiors that reflect your vision and stand the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {/* View Our Work – navigates to /portfolio */}
            <MotionLink
              to="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group px-9 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium shadow-xl shadow-[#D4AF37]/25 cursor-hover"
            >
              <span className="relative z-10">View Our Work</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#F39C12] to-[#E67E22]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </MotionLink>

            {/* Contact Us – navigates to /contact */}
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-9 py-4 rounded-full border-2 border-white/30 hover:border-white/70 text-white font-medium backdrop-blur-sm transition-all duration-300 cursor-hover"
            >
              Contact Us
            </MotionLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-6 mt-12"
          >
            <div className="flex -space-x-3">
              {['👩', '👨', '👩‍💼', '👨‍💼'].map((emoji, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center text-sm"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">Trusted by 45+ happy clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#D4AF37]/20"
            style={{ left: `${p.left}%`, top: `${p.top}%` }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-gradient-to-tr from-[#D4AF37]/10 to-transparent blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
};

export default Hero;