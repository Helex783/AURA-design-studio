import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#D4AF37] font-accent text-sm uppercase tracking-[0.3em] mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2530] mt-2">
            Contact <span className="bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">Us</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-[#F39C12] mx-auto mt-4"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;