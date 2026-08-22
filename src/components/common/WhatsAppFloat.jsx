import { motion } from 'framer-motion';

const WhatsAppFloat = () => (
  <motion.a
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-40 group"
  >
    <div className="relative">
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-2xl shadow-green-500/30 cursor-hover">
        <span className="text-white text-3xl">💬</span>
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  </motion.a>
);

export default WhatsAppFloat;