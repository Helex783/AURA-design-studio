import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const QuoteSuccess = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#F8F5F0] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md mx-auto"
        >
          {/* Premium Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/50">
            {/* Subtle gold top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#D4AF37] via-[#F39C12] to-[#D4AF37]" />

            <div className="p-8 md:p-10 text-center">
              {/* Checkmark circle – refined */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#F39C12]/10 flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/20">
                <svg
                  className="w-10 h-10 text-[#D4AF37]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <h1 className="font-heading text-3xl font-bold text-[#1A2530] mb-2">
                Request Submitted
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                We've received your request. Our team will review it and get back to you within 24 hours.
              </p>

              {/* Divider */}
              <div className="w-12 h-px bg-gradient-to-r from-[#D4AF37] to-[#F39C12] mx-auto my-6" />

              {/* Next steps – clean, elegant list */}
              <div className="text-left space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[#D4AF37] text-xs font-medium w-5">01</span>
                  <span className="text-sm text-gray-600">Confirmation email sent</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#D4AF37] text-xs font-medium w-5">02</span>
                  <span className="text-sm text-gray-600">Team review within 24h</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#D4AF37] text-xs font-medium w-5">03</span>
                  <span className="text-sm text-gray-600">Detailed quote delivered</span>
                </div>
              </div>

              {/* Button – premium */}
              <Link
                to="/"
                className="inline-block mt-8 w-full py-3 rounded-full bg-[#1A2530] text-white font-medium text-sm hover:bg-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/20"
              >
                Return to Home
              </Link>

              {/* Small trust note */}
              <p className="text-xs text-gray-400 mt-4">
                🔒 Your information is safe with us
              </p>
            </div>
          </div>

          {/* Optional subtle decoration */}
          <div className="mt-6 text-center text-xs text-gray-400">
            <span>StudioDesign · 2026</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuoteSuccess;