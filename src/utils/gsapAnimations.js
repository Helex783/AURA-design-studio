import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (selector, animationProps = {}) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      ...animationProps,
    });
  });
};

export const parallaxImage = (containerSelector, imgSelector) => {
  const containers = document.querySelectorAll(containerSelector);
  containers.forEach((container) => {
    const img = container.querySelector(imgSelector);
    if (img) {
      gsap.from(img, {
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
        scale: 1.2,
        y: 50,
      });
    }
  });
};