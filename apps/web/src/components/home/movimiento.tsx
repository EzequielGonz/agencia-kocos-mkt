import { useEffect } from 'react';

/*
 * Animaciones ligadas al desplazamiento (GSAP con ScrollTrigger, SplitText y DrawSVG).
 * Se cargan con la primera interacción (desplazar, tocar o usar el teclado) y solo si
 * la persona no pidió reducir el movimiento. Sin JavaScript todo se ve completo, y lo
 * que ya está en pantalla al iniciar no se toca, para que nada parpadee.
 */
export function Movimiento() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cancelado = false;
    let deshacer: (() => void) | undefined;

    let modulos: Promise<[typeof import('gsap'), typeof import('gsap/ScrollTrigger'), typeof import('gsap/SplitText'), typeof import('gsap/DrawSVGPlugin')]> | undefined;
    const cargar = () => modulos ??= Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/SplitText'),
      import('gsap/DrawSVGPlugin'),
    ]);

    const iniciar = async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }, { DrawSVGPlugin }] = await cargar();
      if (cancelado) return;
      gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
      const pendiente = (el: Element | null): el is Element =>
        !!el && el.getBoundingClientRect().top > window.innerHeight * 0.9;
      const mm = gsap.matchMedia();

      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.revela').forEach(titulo => {
          if (!pendiente(titulo)) return;
          SplitText.create(titulo, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: self => gsap.from(self.lines, {
              yPercent: 110,
              duration: 1,
              ease: 'expo.out',
              stagger: 0.08,
              scrollTrigger: { trigger: titulo, start: 'top 86%', once: true },
            }),
          });
        });

        // Portada: la escena del sistema se aleja apenas al bajar.
        gsap.to('.sistema-marco', {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: '.portada', start: 'top top', end: 'bottom top', scrub: true },
        });

        // Trabajos: cada captura recorre su página mientras la sección pasa por la pantalla.
        gsap.utils.toArray<HTMLElement>('.trabajo').forEach(trabajo => {
          trabajo.querySelectorAll<HTMLElement>('.navegador-pantalla, .celular-pantalla').forEach(pantalla => {
            const captura = pantalla.querySelector<HTMLImageElement>('.captura');
            if (!captura) return;
            gsap.to(captura, {
              y: () => -Math.max(0, captura.offsetHeight - pantalla.clientHeight),
              ease: 'none',
              scrollTrigger: { trigger: trabajo, start: 'top 75%', end: 'bottom 25%', scrub: 0.8, invalidateOnRefresh: true },
            });
          });
          if (pendiente(trabajo)) {
            gsap.from(trabajo.querySelectorAll('.navegador, .celular'), {
              y: 70,
              opacity: 0,
              rotation: (i: number) => (i ? 6 : -2),
              duration: 1.1,
              ease: 'expo.out',
              stagger: 0.12,
              scrollTrigger: { trigger: trabajo, start: 'top 78%', once: true },
            });
          }
        });

        mm.add({ ancho: '(min-width: 760px)', angosto: '(max-width: 759px)' }, () => {
          const avance = document.querySelector('.pasos-avance');
          if (!avance) return;
          gsap.fromTo(avance, { scaleX: 0 }, {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.pasos', start: 'top 80%', end: 'bottom 70%', scrub: 0.5 },
          });
        });
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      deshacer = () => { mm.revert(); ctx.revert(); };
    };

    const eventos = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
    // Si la primera interacción es un ancla con desplazamiento suave, armar ScrollTrigger
    // en el medio lo corta: los módulos se descargan ya, pero se arman cuando la página
    // deja de moverse.
    let quieto = 0;
    const alMoverse = () => {
      window.clearTimeout(quieto);
      quieto = window.setTimeout(() => {
        window.removeEventListener('scroll', alMoverse);
        if (!cancelado) void iniciar();
      }, 220);
    };
    const alInteractuar = () => {
      eventos.forEach(evento => window.removeEventListener(evento, alInteractuar));
      void cargar();
      window.addEventListener('scroll', alMoverse, { passive: true });
      alMoverse();
    };
    eventos.forEach(evento => window.addEventListener(evento, alInteractuar, { passive: true }));
    return () => {
      cancelado = true;
      window.clearTimeout(quieto);
      window.removeEventListener('scroll', alMoverse);
      eventos.forEach(evento => window.removeEventListener(evento, alInteractuar));
      deshacer?.();
    };
  }, []);

  return null;
}
