import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { stats } from '../../utils/constants';
import { fadeUp, staggerContainer } from '../../utils/animations';

const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const steps = 60;
          const increment = parseInt(target) / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= parseInt(target)) {
              setCount(parseInt(target));
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-heading font-bold bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">
      {count}{suffix}
    </span>
  );
};

const Stats = () => (
  <section className="py-20 bg-[#1A1A2E] relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOURBRkYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            className="group relative"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ transform: 'scale(1.1)' }}
            />
            {/* Removed the emoji line: <div className="text-4xl mb-3">{stat.icon}</div> */}
            <Counter target={stat.value.replace('+', '')} suffix="+" />
            <div className="text-gray-400 mt-2 text-sm uppercase tracking-wider font-accent">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Stats;