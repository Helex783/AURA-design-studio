import { motion } from 'framer-motion';

const AboutUs = () => (
  <section id="about" className="py-28 bg-[#F8F5F0] relative overflow-hidden">
    {/* Decorative background elements */}
    <motion.div
      className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"
      animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
      animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
    />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOURBRkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image with premium overlay */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://image.qwenlm.ai/public_source/4268a36f-ba09-4f52-b717-e13bc46e6565/1e438574d-e203-499e-8e5c-c4bf0a804a48.png"
              alt="Our Studio"
              className="w-full h-auto"
            />
            {/* Premium gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A2E]/30" />
          </div>

          {/* Floating badge - premium */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-5 hidden sm:block border border-white/20"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F39C12] flex items-center justify-center text-2xl shadow-lg shadow-[#D4AF37]/20">
                <span className="text-white text-xl font-bold">🏆</span>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-[#1A2530] leading-none">15+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">Design Awards</div>
              </div>
            </div>
          </motion.div>

          {/* Second floating badge - years */}
          <motion.div
            className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 hidden sm:block border border-white/20"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                <span className="text-purple-500 text-lg">✦</span>
              </div>
              <div>
                <div className="font-heading text-xl font-bold text-[#1A2530] leading-none">12+</div>
                <div className="text-gray-500 text-xs uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content - premium */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Premium tag */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[#D4AF37] font-accent text-xs uppercase tracking-[0.3em]">
              About Studio Design
            </span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2530] mt-2 mb-6 leading-[1.1]">
            Designing With <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F39C12] to-[#D4AF37] bg-clip-text text-transparent">
              Purpose & Passion
            </span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            For over a decade, we have been at the forefront of architectural innovation and interior design excellence. Our team of passionate designers and architects work collaboratively to create spaces that not only look stunning but also enhance the way people live and work.
          </p>

          {/* Premium quote/stat separator */}
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
            <span className="text-xs uppercase tracking-widest text-gray-400 font-accent">Excellence in Design</span>
            <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37]/30 to-transparent" />
          </div>

          <p className="text-gray-600 leading-relaxed mb-10">
            We believe that great design is a balance of aesthetics, functionality, and sustainability. Every project we undertake is a testament to our commitment to excellence and our passion for creating meaningful spaces.
          </p>

          {/* Mission & Vision - premium cards */}
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group cursor-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#D4AF37] text-lg">✦</span>
                </div>
                <h4 className="font-heading text-lg font-semibold text-[#1A2530] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Our Mission
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To create timeless designs that inspire and elevate the human experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group cursor-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-purple-500 text-lg">✦</span>
                </div>
                <h4 className="font-heading text-lg font-semibold text-[#1A2530] mb-2 group-hover:text-purple-500 transition-colors">
                  Our Vision
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To be the leading design studio known for innovation and excellence.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex items-center gap-6 pt-6 border-t border-gray-200/50"
          >
            <div className="flex -space-x-2">
              {['SM', 'JA', 'ER', 'AK'].map((initials, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-purple-500/20 border-2 border-white flex items-center justify-center text-[10px] font-semibold text-[#1A2530]"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex text-[#D4AF37] text-sm gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-500 text-xs">Trusted by 45+ happy clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutUs;