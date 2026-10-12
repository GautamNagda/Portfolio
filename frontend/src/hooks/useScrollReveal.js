import { useEffect } from 'react';

/**
 * useScrollReveal
 * A lightweight, high-performance IntersectionObserver hook that adds 'is-revealed'
 * to any DOM elements with the '.reveal-on-scroll' or '.reveal-scale' or '.reveal-fade' classes.
 */
export function useScrollReveal() {
  useEffect(() => {
    // If user prefers reduced motion, reveal everything immediately
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll, .reveal-scale, .reveal-fade').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve once revealed for zero continuous performance overhead
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll, .reveal-scale, .reveal-fade');
    elements.forEach((el) => observer.observe(el));

    // Also reveal immediately any element already visible in initial viewport
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-revealed');
      }
    });

    return () => observer.disconnect();
  }, []);
}
