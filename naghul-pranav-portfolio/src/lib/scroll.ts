import Lenis from 'lenis';

let lenis: Lenis | null = null;
let rafId = 0;

export function initScroll(): Lenis | null {
  if (lenis) return lenis;
  if (typeof window === 'undefined') return null;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  lenis = new Lenis({
    lerp: 0.085,
    wheelMultiplier: 1,
    touchMultiplier: 1.6,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
  return lenis;
}

export function disposeScroll() {
  cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.5 });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.3 });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function setScrollLocked(locked: boolean) {
  if (typeof document === 'undefined') return;
  if (locked) {
    lenis?.stop();
    document.documentElement.classList.add('is-locked');
  } else {
    lenis?.start();
    document.documentElement.classList.remove('is-locked');
  }
}
