import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Drive Lenis from GSAP's RAF ticker so both are perfectly in sync.
// This eliminates the jitter caused by two independent animation loops.
export const lenis = new Lenis({ lerp: 0.1 });

gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

lenis.on('scroll', ScrollTrigger.update);
