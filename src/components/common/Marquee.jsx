import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Marquee = ({ items }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = marqueeRef.current.querySelectorAll('.marquee-item');
      gsap.to(items, {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: 'linear',
        modifiers: {
          x: (x) => `${parseFloat(x) % 100}%`,
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={marqueeRef} className="overflow-hidden whitespace-nowrap py-8 bg-[#111]">
      <div className="flex gap-12">
        {items.map((item, i) => (
          <span key={i} className="marquee-item text-6xl md:text-8xl serif text-white/10 uppercase">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;