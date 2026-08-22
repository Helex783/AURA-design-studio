import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleFocus = (field) => setIsFocused({ ...isFocused, [field]: true });
  const handleBlur = (field) => setIsFocused({ ...isFocused, [field]: false });

  const inputFields = [
    { id: 'name', label: 'Name', type: 'text', value: formData.name, required: true },
    { id: 'email', label: 'Email', type: 'email', value: formData.email, required: true },
    { id: 'phone', label: 'Phone', type: 'tel', value: formData.phone, required: false },
    { id: 'message', label: 'Message', type: 'textarea', value: formData.message, required: true },
  ];

  return (
    <motion.form
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={handleSubmit}
      className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8 md:p-10 space-y-6"
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 p-5 rounded-xl border border-green-200 flex items-center gap-3"
        >
          <span className="text-2xl">✅</span>
          <div>
            <div className="font-semibold">Thank you!</div>
            <div className="text-sm">We'll be in touch soon.</div>
          </div>
        </motion.div>
      )}

      {inputFields.map((field) => (
        <div key={field.id} className="relative">
          <label className={`block text-sm font-medium transition-all duration-300 ${
            isFocused[field.id] ? 'text-[#D4AF37]' : 'text-[#1A2530]'
          } mb-1.5`}>
            {field.label} {field.required && <span className="text-[#D4AF37]">*</span>}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              value={field.value}
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
              onFocus={() => handleFocus(field.id)}
              onBlur={() => handleBlur(field.id)}
              rows="4"
              className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-xl focus:border-[#D4AF37] focus:outline-none transition-all duration-300 resize-none shadow-sm focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]"
              required={field.required}
            />
          ) : (
            <input
              type={field.type}
              value={field.value}
              onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
              onFocus={() => handleFocus(field.id)}
              onBlur={() => handleBlur(field.id)}
              className="w-full px-4 py-3 bg-white border-2 border-transparent rounded-xl focus:border-[#D4AF37] focus:outline-none transition-all duration-300 shadow-sm focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]"
              required={field.required}
            />
          )}
        </div>
      ))}

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative overflow-hidden group w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium text-lg shadow-xl shadow-[#D4AF37]/25 cursor-hover"
      >
        <span className="relative z-10">Send Message</span>
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-[#F39C12] to-[#E67E22]"
          initial={{ x: '100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;