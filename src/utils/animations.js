export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } }
};

export const heroTextReveal = {
  hidden: { opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' },
  show: { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', transition: { duration: 1.4, ease: [0.77, 0, 0.18, 1] } }
};