import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
