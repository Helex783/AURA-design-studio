import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete && onComplete(),
    });

    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
      .to(barRef.current, { width: '100%', duration: 1.5, ease: 'power2.inOut' })
      .to(loaderRef.current, { y: '-100%', duration: 1.2, ease: 'expo.inOut' });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center"
    >
      <h1 ref={textRef} className="text-5xl md:text-7xl text-white tracking-widest font-serif font-light">
        AURA
      </h1>
      <div className="w-64 h-[1px] bg-gray-800 mt-4 relative overflow-hidden">
        <div ref={barRef} className="absolute top-0 left-0 h-full bg-[#c9a66b] w-0" />
      </div>
    </div>
  );
};

export default Loader;