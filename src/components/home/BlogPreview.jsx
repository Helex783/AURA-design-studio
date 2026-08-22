import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../utils/constants';
import { fadeUp, staggerContainer } from '../../utils/animations';

const BlogPreview = ({ limit, showViewAll = true }) => {
  const displayPosts = limit ? blogPosts.slice(0, limit) : blogPosts;

  return (
    <section id="blog" className="py-28 bg-[#F8F5F0] relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D4AF37]/5 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] font-accent text-sm uppercase tracking-[0.3em] mb-3">
            Our Blog
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2530] mt-2">
            Latest <span className="bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">Insights</span>
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {displayPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              whileHover={{ y: -12 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-hover"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {post.category}
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3 text-sm">
                  <span className="text-gray-500">{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="text-gray-500">{post.readTime} read</span>
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#1A2530] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {/* ✅ "Read More" links to detail */}
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-[#D4AF37] font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read More
                  <span className="text-lg">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden group inline-block px-9 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium shadow-xl shadow-[#D4AF37]/25 cursor-hover"
              >
                <span className="relative z-10">View All Posts</span>
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

export default BlogPreview;