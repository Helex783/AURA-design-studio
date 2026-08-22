import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../utils/constants';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] font-accent text-sm uppercase tracking-[0.3em] mb-3">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2530] mt-2">
            What Our <span className="bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F39C12] mx-auto mt-4"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl bg-[#F8F5F0] p-8 md:p-12">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center"
              >
                <div className="text-[#D3B77F] text-7xl font-accent leading-none mb-4">
                  "
                </div>
                <p className="text-[#1A2530] text-xl md:text-2xl italic mb-8 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#F39C12]/20 flex items-center justify-center text-3xl">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="ml-4 text-left">
                    <h4 className="font-heading text-lg font-semibold text-[#1A2530]">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                    <div className="flex text-[#D4AF37] text-sm mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-[#F8F5F0] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center text-xl shadow-md cursor-hover"
            >
              ←
            </motion.button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-8 bg-gradient-to-r from-[#D4AF37] to-[#F39C12]'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-[#F8F5F0] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 flex items-center justify-center text-xl shadow-md cursor-hover"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;