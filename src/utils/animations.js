import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Fade + slide elements into view when they scroll into the viewport.
 */
export function revealOnScroll(targets, opts = {}) {
  const els = typeof targets === 'string'
    ? [...document.querySelectorAll(targets)]
    : (targets instanceof NodeList ? [...targets] : [targets]);

  if (!els.length) return;

  gsap.fromTo(
    els,
    { opacity: 0, y: opts.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration ?? 0.85,
      stagger: opts.stagger ?? 0.12,
      ease: opts.ease ?? 'power2.out',
      scrollTrigger: {
        trigger: els[0],
        start: opts.start ?? 'top 82%',
        once: true,
      },
    }
  );
}

/**
 * Stagger-reveal hero text elements immediately on page load.
 * @param {string[]} selectors - ordered CSS selectors, animated with increasing delay
 */
export function heroEntrance(selectors) {
  selectors.forEach((sel, i) => {
    const el = document.querySelector(sel);
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', delay: 0.28 + i * 0.18 }
    );
  });
}

/**
 * Quick fade-in for a page wrapper (used after route transition).
 */
export function pageEntrance(el) {
  const target = typeof el === 'string' ? document.querySelector(el) : el;
  if (!target) return;
  gsap.fromTo(target, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' });
}
