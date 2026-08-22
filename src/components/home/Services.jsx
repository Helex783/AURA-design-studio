import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../../utils/constants';
import { fadeUp, staggerContainer } from '../../utils/animations';

const Services = ({ limit, showViewAll = true }) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-28 bg-[#F8F5F0] relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#2C3E50]/5 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-[#D4AF37] font-accent text-sm uppercase tracking-[0.3em] mb-3"
          >
            What We Do
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2530] mt-2">
            Our <span className="bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">Services</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F39C12] mx-auto mt-4"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayServices.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100/50 cursor-hover overflow-hidden"
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
              />
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#D4AF37]/5 to-transparent"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
              />
              <div className="relative z-10">
                <motion.div
                  className="w-20 h-20 mb-5 rounded-full overflow-hidden shadow-md"
                  whileHover={{ scale: 1.15, rotate: [-5, 5, -5, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="font-heading text-xl font-semibold text-[#1A2530] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <motion.div
                  className="mt-5 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F39C12]"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group inline-block px-9 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium shadow-xl shadow-[#D4AF37]/25 cursor-hover"
              >
                <span className="relative z-10">View All Services</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#F39C12] to-[#E67E22]"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;