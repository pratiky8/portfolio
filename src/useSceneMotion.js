import { useEffect } from 'react';

// Progressive enhancement: content is visible before setup and if any effect fails.
export function useSceneMotion(rootRef, paused, filter) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const desktop = window.matchMedia('(min-width: 900px)');
    let observer, frame = 0, disposed = false;
    const animations = new Set();
    const reset = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
      root.style.removeProperty('--scene-progress');
      root.style.removeProperty('--about-progress');
      root.querySelectorAll('.about-word').forEach(word => word.style.removeProperty('opacity'));
    };
    const paint = () => {
      frame = 0;
      if (preference.matches || paused) return;
      const hero = root.querySelector('.hero');
      const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / Math.max(hero.offsetHeight, 1)));
      root.style.setProperty('--scene-progress', desktop.matches ? progress.toFixed(3) : '0');
      const words = [...root.querySelectorAll('.about-word')];
      const about = root.querySelector('.about-copy');
      const bounds = about.getBoundingClientRect();
      const readingProgress = Math.min(1, Math.max(0, (window.innerHeight * .92 - bounds.top) / (bounds.height + window.innerHeight * .25)));
      root.style.setProperty('--about-progress', desktop.matches ? readingProgress.toFixed(3) : '1');
      words.forEach((word, i) => {
        const amount = Math.min(1, Math.max(0, (readingProgress - i / words.length * .65) / .22));
        word.style.opacity = String(.5 + amount * .5);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(paint); };
    const setup = () => {
      reset();
      if (preference.matches || paused) return;
      try {
        if ('IntersectionObserver' in window) {
          observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (disposed || paused || preference.matches) return;
            if (!entry.isIntersecting) return;
            const el = entry.target;
            observer.unobserve(el);
            if (!el.animate) return;
            const animation = el.animate([
              { opacity: .25, transform: 'translateY(28px)' },
              { opacity: 1, transform: 'translateY(0)' }
            ], { duration: 800, easing: 'cubic-bezier(.2,.7,.2,1)', delay: el.matches('.project-card') ? Number(el.dataset.order || 0) % 3 * 70 : 0 });
            animations.add(animation);
            animation.onfinish = () => { animations.delete(animation); animation.cancel(); };
          }), { threshold: .08 });
          root.querySelectorAll('.section-heading, .project-card, .github-section, .resume-section, .contact-section').forEach(el => observer.observe(el));
        }
        schedule();
      } catch { reset(); }
    };
    setup();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    preference.addEventListener('change', setup);
    desktop.addEventListener('change', setup);
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      reset();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', setup);
      desktop.removeEventListener('change', setup);
    };
  }, [rootRef, paused, filter]);
}
