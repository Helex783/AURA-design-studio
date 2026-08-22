import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-[#0D0D1A] text-[#F8F5F0] pt-12 pb-6 relative overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOURBRkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

    <div className="container mx-auto px-6 relative z-10">
      {/* Main footer grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">
            <span className="text-white">Studio</span>
            <span className="text-[#D4AF37]">Design</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Creating architectural masterpieces and luxurious interiors that stand the test of time.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {['FB', 'IG', 'X', 'LN'].map((label, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, color: '#D4AF37' }}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-gray-400 hover:bg-[#D4AF37]/20 transition-all duration-300"
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[#D3B77F] mb-4 text-xs uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Services', path: '/services' }, // ✅ added Services
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Contact', path: '/contact' },
              { name: 'Blog', path: '/blog' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#D4AF37] text-xs">▸</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services – now linking to the new services page */}
        <div>
          <h4 className="font-semibold text-[#D3B77F] mb-4 text-xs uppercase tracking-wider">
            Our Services
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              'Architectural Design',
              'Interior Design',
              'Landscape Design',
              'Space Planning',
              'Consultation',
            ].map((service) => (
              <li key={service}>
                <Link
                  to="/services" // ✅ points to the new services page
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-2 text-sm"
                >
                  <span className="text-[#D4AF37] text-xs">▸</span>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-[#D3B77F] mb-4 text-xs uppercase tracking-wider">
            Newsletter
          </h4>
          <p className="text-gray-400 text-sm mb-3 leading-relaxed">
            Subscribe for design insights & updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-l-md focus:outline-none focus:border-[#D4AF37] text-white text-sm placeholder-gray-500"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white rounded-r-md text-xs font-medium"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>
          © 2026 StudioDesign. All rights reserved. Crafted with{' '}
          <span className="text-[#D4AF37]">♥</span>
        </p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">
            Cookies
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;