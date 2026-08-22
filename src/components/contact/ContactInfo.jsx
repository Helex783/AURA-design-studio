import { motion } from 'framer-motion';

const ContactInfo = () => (
  <div className="space-y-8">
    <div>
      <h3 className="font-heading text-3xl font-bold text-[#1A2530] mb-4">
        Let's Discuss Your Project
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        Whether you're planning a new build, renovation, or interior redesign, we're here to help bring your vision to life.
      </p>
    </div>

    <div className="space-y-5">
      {[
        { title: 'Visit Us', detail: '123 Design Street, Creative District, CA 90210' },
        { title: 'Email Us', detail: 'hello@studiodesign.com' },
        { title: 'Call Us', detail: '+1 (555) 123-4567' },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i }}
          whileHover={{ x: 5 }}
          className="flex items-center gap-5 group"
        >
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-[#F39C12]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {/* Removed icon – left empty or you can place a decorative dot */}
            <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
          </div>
          <div>
            <h4 className="font-semibold text-[#1A2530] group-hover:text-[#D4AF37] transition-colors">
              {item.title}
            </h4>
            <p className="text-gray-600 text-sm">{item.detail}</p>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-3 pt-4 border-t border-gray-100"
    >
      <span className="text-sm text-gray-500">Follow us:</span>
      {['FB', 'IG', 'X', 'LN'].map((label, i) => (
        <motion.a
          key={i}
          href="#"
          whileHover={{ scale: 1.2, y: -2 }}
          className="w-9 h-9 rounded-full bg-[#F8F5F0] flex items-center justify-center text-xs font-medium text-gray-500 hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
        >
          {label}
        </motion.a>
      ))}
    </motion.div>
  </div>
);

export default ContactInfo;