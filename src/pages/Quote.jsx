import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // 👈 Import

const Quote = () => {
  const navigate = useNavigate(); // 👈 Use navigate
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const totalSteps = 3;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    // For now, navigate to the success page
    navigate('/quote-success'); // 👈 Replace alert with navigation
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-[#1A2530]">Project Details</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A2530]"
              >
                <option value="" className="text-gray-400">Select a project type</option>
                <option value="Architectural Design">Architectural Design</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Landscape Design">Landscape Design</option>
                <option value="Renovation">Renovation</option>
                <option value="New Build">New Build</option>
                <option value="Commercial">Commercial</option>
                <option value="Residential">Residential</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A2530]"
              >
                <option value="" className="text-gray-400">Select budget range</option>
                <option value="Under $50k">Under $50k</option>
                <option value="$50k - $100k">$50k - $100k</option>
                <option value="$100k - $250k">$100k - $250k</option>
                <option value="$250k - $500k">$250k - $500k</option>
                <option value="$500k+">$500k+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A2530]"
              >
                <option value="" className="text-gray-400">Select timeline</option>
                <option value="Immediate (within 1 month)">Immediate (within 1 month)</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
              </select>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-[#1A2530]">Contact Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A2530] placeholder:text-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A2530] placeholder:text-gray-400"
                placeholder="hello@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all text-[#1A2530] placeholder:text-gray-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-[#1A2530]">Project Description</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your vision *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition-all resize-none text-[#1A2530] placeholder:text-gray-400"
                placeholder="Describe your project, style preferences, and any specific requirements..."
              />
            </div>
            <p className="text-sm text-gray-500 italic">We'll get back to you within 24 hours with a custom quote.</p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-[#D4AF37] font-accent text-sm uppercase tracking-[0.3em]">Get a Quote</span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#1A2530] mt-2">
            Let's Bring Your <span className="bg-gradient-to-r from-[#D4AF37] to-[#F39C12] bg-clip-text text-transparent">Vision to Life</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-lg mx-auto">
            Complete the form below and we'll send you a detailed quote within 24 hours.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-medium text-gray-400 mb-1">
            <span>Project Details</span>
            <span>Contact Info</span>
            <span>Description</span>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] rounded-full"
              initial={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-[#F8F5F0] rounded-2xl shadow-xl p-8 md:p-10">
          <form onSubmit={handleSubmit}>
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200/50">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  step === 1
                    ? 'text-gray-400 cursor-not-allowed opacity-50'
                    : 'text-[#1A2530] hover:bg-white hover:shadow-md'
                }`}
                disabled={step === 1}
              >
                Back
              </button>
              {step === totalSteps ? (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden group px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium shadow-lg shadow-[#D4AF37]/25 transition-all duration-300"
                >
                  <span className="relative z-10">Submit Quote Request</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-[#F39C12] to-[#E67E22]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  onClick={nextStep}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F39C12] text-white font-medium shadow-lg shadow-[#D4AF37]/25 transition-all duration-300"
                >
                  Next Step →
                </motion.button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 text-sm text-gray-400"
        >
          <span>Your information is secure and will only be used for this quote request.</span>
          <div className="flex justify-center gap-4 mt-2">
            <span>🔒 256-bit encryption</span>
            <span>⏱️ Response within 24h</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;