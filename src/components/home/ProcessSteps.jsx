import { motion } from 'framer-motion';
import { processSteps } from '../../utils/constants';
import { fadeUp, staggerContainer } from '../../utils/animations';

const ProcessSteps = () => {
  return (
    <section className="py-20 bg-[#F8F5F0] relative overflow-hidden">
      {/* Subtle decorative blobs */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#D4AF37] font-accent text-sm uppercase tracking-[0.3em] mb-2">
            Our Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A2530] mt-1">
            How We <span className="bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">Work</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F39C12] mx-auto mt-3"
          />
        </motion.div>

        {/* All 4 steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100/80 hover:border-[#D4AF37]/30 h-full">
                {/* Step number */}
                <div className="text-4xl font-heading font-bold text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors duration-300">
                  {step.number}
                </div>
                {/* Title */}
                <h3 className="font-heading text-lg font-semibold text-[#1A2530] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h3>
                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
                {/* Underline */}
                <motion.div
                  className="mt-3 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F39C12]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              {/* Arrow between steps */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-0.5 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;