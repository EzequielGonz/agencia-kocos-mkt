import { useEffect, useRef } from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappHref } from '@/constants/site';

/*
 * Portada: el sistema funcionando. Una consulta entra desde la web, llega a WhatsApp a
 * las 21:03, se responde sola y avanza en el CRM. La cinta naranja del logo une las
 * tres partes. Es una demostración ilustrativa: sin datos ni resultados reales.
 * La coreografía es solo CSS (un ciclo de 10 s), así no depende de JavaScript.
 */
// Cinta 3D: se carga con la primera interacción (mover el mouse, tocar, desplazar o usar
// el teclado), así no compite con la carga ni con las mediciones de velocidad.
// Sin WebGL o con «reducir movimiento» queda la cinta dibujada en SVG.
function useCinta3D(lienzo: React.RefObject<HTMLCanvasElement | null>, marco: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const canvas = lienzo.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cancelado = false;
    let destruir: (() => void) | undefined;
    const eventos = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'pointermove', 'keydown'] as const;
    const iniciar = async () => {
      eventos.forEach(e => window.removeEventListener(e, iniciar));
      if (cancelado || destruir) return;
      const prueba = document.createElement('canvas');
      if (!prueba.getContext('webgl2') && !prueba.getContext('webgl')) return;
      const [THREE, { RoomEnvironment }, { crearCinta }] = await Promise.all([
        import('three'),
        import('three/examples/jsm/environments/RoomEnvironment.js'),
        import('@/lib/cinta-3d'),
      ]);
      if (cancelado) return;
      try {
        destruir = crearCinta(THREE, RoomEnvironment, canvas, { segmentos: window.innerWidth < 700 ? 160 : 260 }).destruir;
        requestAnimationFrame(() => marco.current?.classList.add('is-3d'));
      } catch {
        // sin contexto 3D queda la cinta en SVG
      }
    };
    eventos.forEach(e => window.addEventListener(e, iniciar, { passive: true, once: true }));
    return () => {
      cancelado = true;
      eventos.forEach(e => window.removeEventListener(e, iniciar));
      destruir?.();
    };
  }, []);
}

function Sistema() {
  return (
    <div className="sistema-marco" aria-hidden="true">
      <div className="sistema">
        <svg className="sistema-cinta" viewBox="0 0 640 580" focusable="false">
          <defs>
            <linearGradient id="kocos-cinta" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#ff5a1f" />
              <stop offset=".6" stopColor="#ff8a2a" />
              <stop offset="1" stopColor="#ffbd45" />
            </linearGradient>
          </defs>
          <path className="sistema-cinta-trazo" pathLength="1" d="M-60 300 C 90 268, 250 318, 392 296 S 600 238, 700 96" />
          <path className="sistema-cinta-trazo sistema-cinta-baja" pathLength="1" d="M-40 548 C 160 612, 420 590, 690 470" />
        </svg>

        <div className="ventana">
          <div className="ventana-barra"><i /><i /><i /><span>tunegocio.com.ar</span></div>
          <div className="ventana-cuerpo">
            <span className="vc-titulo" />
            <span className="vc-linea" />
            <span className="vc-linea vc-corta" />
            <span className="vc-boton">Escribinos por WhatsApp</span>
            <svg className="vc-cursor" viewBox="0 0 24 24" focusable="false"><path d="M5 3l14 8-6 1.6L10 19z" /></svg>
          </div>
        </div>

        <div className="tablero">
          <div className="tablero-col"><b>Nuevas</b><span className="tarjeta" /><span className="tarjeta" /></div>
          <div className="tablero-col"><b>Respondidas</b><span className="tarjeta" /></div>
          <div className="tablero-col"><b>Agendadas</b><span className="tarjeta" /><span className="tarjeta" /></div>
          <span className="tarjeta-viva"><b>Consulta 21:03</b><small>WhatsApp, desde la web</small></span>
        </div>

        <div className="telefono">
          <div className="tel-cabeza">
            <span className="tel-avatar" />
            <span className="tel-nombre"><b>Tu negocio</b><small>en línea</small></span>
          </div>
          <div className="tel-chat">
            <span className="escribiendo"><i /><i /><i /></span>
            <span className="globo globo-entra">Hola, ¿tienen turno para mañana?<time>21:03</time></span>
            <span className="globo globo-sale">¡Hola! Sí. ¿Te queda mejor a la mañana o a la tarde?<time>21:03</time></span>
            <span className="globo-etiqueta">Respuesta automática</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const lienzo = useRef<HTMLCanvasElement>(null);
  const portada = useRef<HTMLElement>(null);
  useCinta3D(lienzo, portada);
  return (
    <section id="inicio" className="portada" ref={portada}>
      <canvas className="portada-3d" ref={lienzo} aria-hidden="true" />
      <div className="contenedor portada-grid">
        <div className="portada-texto">
          <h1>Web, redes y WhatsApp en un mismo sistema</h1>
          <p className="portada-bajada">Diseñamos tu web, ordenamos las consultas de WhatsApp con un CRM y automatizamos lo repetitivo, para que ninguna consulta quede sin respuesta.</p>
          <div className="portada-acciones">
            <a href={whatsappHref('Hola Kocos Marketing, quiero ordenar mis consultas y mi web.')} target="_blank" rel="noopener noreferrer" className="boton boton-naranja">
              <MessageCircle size={19} aria-hidden="true" /> Hablar por WhatsApp
            </a>
            <a href="#trabajos" className="boton boton-linea">Ver trabajos</a>
          </div>
        </div>
        <Sistema />
      </div>
    </section>
  );
}
