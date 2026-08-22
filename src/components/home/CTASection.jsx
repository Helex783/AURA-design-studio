import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Motion-enhanced Link
const MotionLink = motion(Link);

const CTASection = () => (
  <section className="py-16 mb-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2C3E50] to-[#1A1A2E]">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.12), transparent 70%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(212, 175, 55, 0.08), transparent 70%)',
        }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </div>

    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block text-[#D4AF37] font-accent text-xs uppercase tracking-[0.3em] mb-2">
          Let's Create Together
        </span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
          Ready to Start Your <br />
          <span className="bg-gradient-to-r from-[#D4AF37] via-[#F39C12] to-[#D4AF37] bg-clip-text text-transparent">
            Dream Project
          </span>
          ?
        </h2>
        <p className="text-white/80 text-base max-w-2xl mx-auto mb-6 leading-relaxed">
          Let's create something extraordinary together. Get in touch for a free consultation and let's bring your vision to life.
        </p>
        {/* Button now navigates to the dedicated Quote page */}
        <MotionLink
          to="/quote"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden group inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium text-base shadow-xl shadow-[#D4AF37]/30 cursor-hover"
        >
          <span className="relative z-10">Get a Free Consultation</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-[#F39C12] to-[#E67E22]"
            initial={{ x: '100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </MotionLink>
      </motion.div>
    </div>
  </section>
);

export default CTASection;