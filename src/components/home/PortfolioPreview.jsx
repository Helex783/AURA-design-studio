import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolio } from '../../utils/constants';

const PortfolioPreview = ({ limit, showViewAll = true }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Interior', 'Commercial', 'Hospitality'];

  const filtered = filter === 'All'
    ? portfolio
    : portfolio.filter(p => p.category === filter);

  const displayItems = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="portfolio" className="py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#D4AF37] font-accent text-sm uppercase tracking-[0.3em] mb-3">
            Our Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2530] mt-2">
            Featured <span className="bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">Projects</span>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setFilter(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-hover ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white shadow-lg shadow-[#D4AF37]/25'
                  : 'bg-[#F8F5F0] text-[#2C3E50] hover:bg-[#D4AF37]/10'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayItems.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                {/* Image with hover overlay */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay on hover – shows category, title, location */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/90 via-[#1A1A2E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-[#D3B77F] text-xs uppercase tracking-widest font-accent">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mt-1">
                      {project.location}
                    </p>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* Static content below the image – visible always */}
                <div className="p-6 bg-white">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-heading text-xl font-semibold text-[#1A2530] group-hover:text-[#D4AF37] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-gray-400 bg-[#F8F5F0] px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">{project.location}</p>
                  {/* ✅ Description always visible below */}
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group inline-block px-9 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium shadow-xl shadow-[#D4AF37]/25 cursor-hover"
              >
                <span className="relative z-10">View All Projects</span>
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

export default PortfolioPreview;