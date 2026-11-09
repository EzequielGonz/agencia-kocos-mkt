import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowUpRight } from 'lucide-react';
import { BrandLogo } from '@/components/brand-logo';
import { whatsappHref } from '@/constants/site';

// "Servicios" y "Rubros" llevan a las secciones SEO. Las anclas llevan "/" para
// funcionar desde cualquier página; "Quiero mi proyecto" queda en "#contacto"
// porque todas las páginas tienen su formulario con ese id.
type Enlace = { texto: string; href: string; ruta?: boolean };
const enlaces: Enlace[] = [
  { texto: 'Servicios', href: '/servicios', ruta: true },
  { texto: 'Rubros', href: '/rubros', ruta: true },
  { texto: 'Trabajos', href: '/#trabajos' },
  { texto: 'Planes', href: '/#planes' },
  { texto: 'Preguntas', href: '/#preguntas' },
];

export function SiteHeader() {
  const [oculta, setOculta] = useState(false);
  const [desplazada, setDesplazada] = useState(false);
  const [abierto, setAbierto] = useState(false);
  const boton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anterior = window.scrollY;
    const alDesplazar = () => {
      const actual = window.scrollY;
      setDesplazada(actual > 16);
      if (Math.abs(actual - anterior) > 5) setOculta(actual > anterior && actual > 140);
      anterior = actual;
    };
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const raiz = document.documentElement;
    raiz.classList.add('menu-abierto');
    menu.current?.querySelector<HTMLElement>('a')?.focus();
    const alTeclear = (evento: KeyboardEvent) => { if (evento.key === 'Escape') setAbierto(false); };
    window.addEventListener('keydown', alTeclear);
    return () => {
      raiz.classList.remove('menu-abierto');
      window.removeEventListener('keydown', alTeclear);
      boton.current?.focus();
    };
  }, [abierto]);

  const cerrar = () => setAbierto(false);
  const enlace = (item: Enlace, movil = false) => item.ruta
    ? <Link key={item.href} to={item.href} prefetch="intent" onClick={movil ? cerrar : undefined}>{item.texto}</Link>
    : <a key={item.href} href={item.href} onClick={movil ? cerrar : undefined}>{item.texto}</a>;
  const wa = whatsappHref('Hola Kocos Marketing, vi la web y quiero consultar por mi proyecto.');

  return (
    <>
      <header className={`cabecera${oculta && !abierto ? ' is-oculta' : ''}${desplazada || abierto ? ' is-solida' : ''}`}>
        <div className="cabecera-barra">
          <a className="cabecera-marca" href="/#inicio" aria-label="Kocos Marketing, ir al inicio" onClick={cerrar}>
            <BrandLogo />
          </a>
          <nav className="cabecera-nav" aria-label="Navegación principal">{enlaces.map(item => enlace(item))}</nav>
          <a className="cabecera-wa" href="#contacto">
            Quiero mi proyecto <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button ref={boton} className={`cabecera-menu${abierto ? ' is-abierto' : ''}`} type="button" aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={abierto} aria-controls="menu-movil" onClick={() => setAbierto(!abierto)}>
            <span /><span />
          </button>
        </div>
      </header>
      <div id="menu-movil" ref={menu} className="menu-movil" hidden={!abierto}>
        <nav aria-label="Navegación móvil">{enlaces.map(item => enlace(item, true))}</nav>
        <div className="menu-movil-pie">
          <a className="menu-movil-wa" href={wa} target="_blank" rel="noopener noreferrer" onClick={cerrar}>
            Escribinos por WhatsApp
          </a>
          <a className="menu-movil-tel" href="#contacto" onClick={cerrar}>Quiero mi proyecto</a>
        </div>
      </div>
    </>
  );
}
